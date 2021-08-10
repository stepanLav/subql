(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{406:function(e,t,a){"use strict";a.r(t);var s=a(44),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"running-subquery-locally"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#running-subquery-locally"}},[e._v("#")]),e._v(" Running SubQuery Locally")]),e._v(" "),a("p",[e._v("This guide works through how to run a local SubQuery node on your infrastructure, which includes both the indexer and query service. Don't want to worry about running your own SubQuery infrastructure? SubQuery provides a "),a("a",{attrs:{href:"https://explorer.subquery.network",target:"_blank",rel:"noopener noreferrer"}},[e._v("managed hosted service"),a("OutboundLink")],1),e._v(" to the community for free. "),a("RouterLink",{attrs:{to:"/de/publish/publish.html"}},[e._v("Follow our publishing guide")]),e._v(" to see how you can upload your project to "),a("a",{attrs:{href:"https://project.subquery.network",target:"_blank",rel:"noopener noreferrer"}},[e._v("SubQuery Projects"),a("OutboundLink")],1),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"using-docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-docker"}},[e._v("#")]),e._v(" Using Docker")]),e._v(" "),a("p",[e._v("An alternative solution is to run a "),a("strong",[e._v("Docker Container")]),e._v(", defined by the "),a("code",[e._v("docker-compose.yml")]),e._v(" file. For a new project that has been just initialised you won't need to change anything here.")]),e._v(" "),a("p",[e._v("Under the project directory run the following command:")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("docker-compose pull "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" docker-compose up\n")])])]),a("p",[e._v("It may take some time to download the required packages ("),a("a",{attrs:{href:"https://www.npmjs.com/package/@subql/node",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("@subql/node")]),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://www.npmjs.com/package/@subql/query",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("@subql/query")]),a("OutboundLink")],1),e._v(", and Postgres) for the first time but soon you'll see a running SubQuery node.")]),e._v(" "),a("h2",{attrs:{id:"running-an-indexer-subql-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#running-an-indexer-subql-node"}},[e._v("#")]),e._v(" Running an Indexer (subql/node)")]),e._v(" "),a("p",[e._v("Requirements:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.postgresql.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Postgres"),a("OutboundLink")],1),e._v(" database (version 12 or higher). While the "),a("a",{attrs:{href:"#start-a-local-subquery-node"}},[e._v("SubQuery node")]),e._v(" is indexing the blockchain, the extracted data is stored in an external database instance.")])]),e._v(" "),a("p",[e._v("A SubQuery node is an implementation that extracts substrate-based blockchain data per the SubQuery project and saves it into a Postgres database.")]),e._v(" "),a("h3",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# NPM")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -g @subql/node\n")])])]),a("p",[e._v("Please note that we "),a("strong",[e._v("DO NOT")]),e._v(" encourage the use of "),a("code",[e._v("yarn global")]),e._v(" due to its poor dependency management which may lead to an errors down the line.")]),e._v(" "),a("p",[e._v("Once installed, you can start a node with the following command:")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("subql-node "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("command"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),a("h3",{attrs:{id:"key-commands"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#key-commands"}},[e._v("#")]),e._v(" Key Commands")]),e._v(" "),a("p",[e._v("The following commands will assist you to complete the configuration of a SubQuery node and begin indexing. To find out more, you can always run "),a("code",[e._v("--help")]),e._v(".")]),e._v(" "),a("h4",{attrs:{id:"point-to-local-project-path"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#point-to-local-project-path"}},[e._v("#")]),e._v(" Point to local project path")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("subql-node -f your-project-path\n")])])]),a("h4",{attrs:{id:"using-a-dictionary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-a-dictionary"}},[e._v("#")]),e._v(" Using a Dictionary")]),e._v(" "),a("p",[e._v("Using a full chain dictionary can dramatically speed up the processing of a SubQuery project during testing or during your first index. In some cases, we've seen indexing performance increases of up to 10x.")]),e._v(" "),a("p",[e._v("A full chain dictionary pre-indexes the location of all events and extrinsics within the specific chain and allows your node service to skip to relevant locations when indexing rather than inspecting each block.")]),e._v(" "),a("p",[e._v("You can add the dictionary endpoint in your "),a("code",[e._v("project.yaml")]),e._v(" file (see "),a("RouterLink",{attrs:{to:"/de/create/manifest.html"}},[e._v("Manifest File")]),e._v("), or specify it at run time using the following command:")],1),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("subql-node --network-dictionary=https://api.subquery.network/sq/subquery/dictionary-polkadot\n")])])]),a("h4",{attrs:{id:"connect-to-database"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connect-to-database"}},[e._v("#")]),e._v(" Connect to database")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("export DB_USER=postgres\nexport DB_PASS=postgres\nexport DB_DATABASE=postgres\nexport DB_HOST=localhost\nexport DB_POST=5432\nsubql-node -f your-project-path \n")])])]),a("p",[e._v("Depending on the configuration of your Postgres database (e.g. a different database password), please ensure also that both the indexer ("),a("code",[e._v("subql/node")]),e._v(") and the query service ("),a("code",[e._v("subql/query")]),e._v(") can establish a connection to it.")]),e._v(" "),a("h4",{attrs:{id:"specify-a-configuration-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specify-a-configuration-file"}},[e._v("#")]),e._v(" Specify a configuration file")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("subql-node -c your-project-config.yml\n")])])]),a("p",[e._v("This will point the query node to a configuration file which can be in YAML or JSON format. Check out the example below.")]),e._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("subquery")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" ../../../../subql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("example/extrinsics\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("subqueryName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" extrinsics\nbatchSize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("100")]),e._v("\nlocalMode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token boolean important"}},[e._v("true")]),e._v("\n")])])]),a("h4",{attrs:{id:"change-the-block-fetching-batch-size"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#change-the-block-fetching-batch-size"}},[e._v("#")]),e._v(" Change the block fetching batch size")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("subql-node -f your-project-path --batch-size 200\n\nResult:\n[IndexerManager] fetch block [203, 402]\n[IndexerManager] fetch block [403, 602]\n")])])]),a("p",[e._v("When the indexer first indexes the chain, fetching single blocks will significantly decrease the performance. Increasing the batch size to adjust the number of blocks fetched will decrease the overall processing time. The current default batch size is 100.")]),e._v(" "),a("h4",{attrs:{id:"local-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#local-mode"}},[e._v("#")]),e._v(" Local mode")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("subql-node -f your-project-path --local\n")])])]),a("p",[e._v("For debugging purposes, users can run the node in local mode. Switching to local model will create Postgres tables in the default schema "),a("code",[e._v("public")]),e._v(".")]),e._v(" "),a("p",[e._v("If local mode is not used, a new Postgres schema with the initial "),a("code",[e._v("subquery_")]),e._v(" and corresponding project tables will be created.")]),e._v(" "),a("h2",{attrs:{id:"running-a-query-service-subql-query"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#running-a-query-service-subql-query"}},[e._v("#")]),e._v(" Running a Query Service (subql/query)")]),e._v(" "),a("h3",{attrs:{id:"installation-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation-2"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# NPM")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -g @subql/query\n")])])]),a("p",[e._v("Please note that we "),a("strong",[e._v("DO NOT")]),e._v(" encourage the use of "),a("code",[e._v("yarn global")]),e._v(" due to its poor dependency management which may lead to an errors down the line.")]),e._v(" "),a("h3",{attrs:{id:"running-the-query-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#running-the-query-service"}},[e._v("#")]),e._v(" Running the Query service")]),e._v(" "),a("p",[e._v("``` export DB_HOST=localhost subql-query --name <project_name> --playground ````")]),e._v(" "),a("p",[e._v("Make sure the project name is the same as the project name when you "),a("RouterLink",{attrs:{to:"/de/quickstart/quickstart.html#initialise-the-starter-subquery-project"}},[e._v("initialize the project")]),e._v(". Also, check the environment variables are correct.")],1),e._v(" "),a("p",[e._v("After running the subql-query service successfully, open your browser and head to "),a("code",[e._v("http://localhost:3000")]),e._v(". You should see a GraphQL playground showing in the Explorer and the schema that is ready to query.")])])}),[],!1,null,null,null);t.default=n.exports}}]);