// Copyright 2020-2023 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: GPL-3.0

import type {ApolloServerPlugin} from 'apollo-server-plugin-base';
import {
  GraphQLSchema,
  Kind,
  GraphQLError,
  DocumentNode,
  ValidationContext,
  TypeInfo,
  SelectionNode,
  FragmentDefinitionNode,
  ASTNode,
} from 'graphql';
import {getFragments, getQueriesAndMutations} from '../../utils/utils';

export function validateQueryDepth(maxDepth: number, context: ValidationContext): void {
  const {definitions} = context.getDocument();
  const fragments = getFragments(definitions);
  const operations = getQueriesAndMutations(definitions);

  for (const operation of operations) {
    if (operation.name && operation.name.value === 'IntrospectionQuery') {
      continue;
    }
    checkDepth(operation, fragments, 0, maxDepth);
  }
}

export function checkDepth(
  node: ASTNode,
  fragments: Record<string, FragmentDefinitionNode>,
  depthSoFar: number,
  maxDepth: number
): void {
  if (depthSoFar > maxDepth) {
    throw new GraphQLError(`Query is too deep. Maximum depth allowed is ${maxDepth}.`, [node]);
  }

  switch (node.kind) {
    case Kind.FIELD: {
      if (!node.selectionSet) {
        return;
      }

      node.selectionSet.selections.forEach((selection: SelectionNode) => {
        checkDepth(selection, fragments, depthSoFar + 1, maxDepth);
      });

      return;
    }
    case Kind.FRAGMENT_SPREAD: {
      const fragmentName = node.name.value;
      const fragment = fragments[fragmentName];

      if (!fragment) {
        throw new GraphQLError(`Fragment "${fragmentName}" not found.`, [node]);
      }
      return checkDepth(fragment, fragments, depthSoFar, maxDepth);
    }
    case Kind.INLINE_FRAGMENT:
    case Kind.FRAGMENT_DEFINITION:
    case Kind.OPERATION_DEFINITION: {
      node.selectionSet.selections.forEach((selection: SelectionNode) => {
        checkDepth(selection, fragments, depthSoFar, maxDepth);
      });
      return;
    }
    default:
      return;
  }
}

export function queryDepthLimitPlugin(options: {schema: GraphQLSchema; maxDepth?: number}): ApolloServerPlugin {
  return {
    requestDidStart: () => {
      return {
        didResolveOperation(context: {document: DocumentNode}) {
          if (options?.maxDepth === undefined) {
            return;
          }
          const validationContext = new ValidationContext(
            options.schema,
            context.document,
            new TypeInfo(options.schema),
            (err) => {
              throw err;
            }
          );
          validateQueryDepth(options.maxDepth, validationContext);
        },
      };
    },
  } as unknown as ApolloServerPlugin;
}
