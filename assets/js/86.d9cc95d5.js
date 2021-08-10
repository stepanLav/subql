(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{460:function(t,e,a){"use strict";a.r(e);var r=a(44),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"tutorials"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tutorials"}},[t._v("#")]),t._v(" Tutorials")]),t._v(" "),a("h2",{attrs:{id:"how-to-start-at-a-different-block-height"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-start-at-a-different-block-height"}},[t._v("#")]),t._v(" How to start at a different block height?")]),t._v(" "),a("h3",{attrs:{id:"video-guide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#video-guide"}},[t._v("#")]),t._v(" Video guide")]),t._v(" "),a("figure",{staticClass:"video_container"},[a("iframe",{attrs:{src:"https://www.youtube.com/embed/ZiNSXDMHmBk",frameborder:"0",allowfullscreen:"true"}})]),t._v(" "),a("h3",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),a("p",[t._v("By default, all starter projects start synchronising the blockchain from the genesis block. In otherwords, from block 1. For large blockchains, this can typically take days or even weeks to fully synchronise.")]),t._v(" "),a("p",[t._v("To start a SubQuery node synchronising from a non-zero height, all you have to do is to modify your project.yaml file and change the startBlock key.")]),t._v(" "),a("p",[t._v("Below is a project.yaml file where the start block has been set to 1,000,000")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("specVersion: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".1\ndescription: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\nrepository: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\nschema: ./schema.graphql\nnetwork:\n  endpoint: wss://polkadot.api.onfinality.io/public-ws\n  dictionary: https://api.subquery.network/sq/subquery/dictionary-polkadot\ndataSources:\n  - name: main\n    kind: substrate/Runtime\n    startBlock: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000000")]),t._v("\n    mapping:\n      handlers:\n        - handler: handleBlock\n          kind: substrate/BlockHandler\n")])])]),a("h3",{attrs:{id:"why-not-start-from-zero"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-not-start-from-zero"}},[t._v("#")]),t._v(" Why not start from zero?")]),t._v(" "),a("p",[t._v("The main reason is that it can reduce the time to synchronise the blockchain. This means that if you are only interested in transactions in the last 3 months, you can only synchronise the last 3 months worth meaning less waiting time and you can start your development faster.")]),t._v(" "),a("h3",{attrs:{id:"what-are-the-drawbacks-of-not-starting-from-zero"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-are-the-drawbacks-of-not-starting-from-zero"}},[t._v("#")]),t._v(" What are the drawbacks of not starting from zero?")]),t._v(" "),a("p",[t._v("The most obvious drawback will be that you won’t be able to query for data on the blockchain for blocks that you don’t have.")]),t._v(" "),a("h3",{attrs:{id:"how-to-figure-out-the-current-blockchain-height"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-figure-out-the-current-blockchain-height"}},[t._v("#")]),t._v(" How to figure out the current blockchain height?")]),t._v(" "),a("p",[t._v("If you are using the Polkadot network, you can visit "),a("a",{attrs:{href:"https://polkascan.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://polkascan.io/"),a("OutboundLink")],1),t._v(', select the network, and then view the  "Finalised Block" figure.')]),t._v(" "),a("h3",{attrs:{id:"do-i-have-to-do-a-rebuild-or-a-codegen"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#do-i-have-to-do-a-rebuild-or-a-codegen"}},[t._v("#")]),t._v(" Do I have to do a rebuild or a codegen?")]),t._v(" "),a("p",[t._v("No. Because you are modifying the project.yaml file, which is essentially a configuration file, you will not have to rebuild or regenerate the typescript code.")]),t._v(" "),a("h2",{attrs:{id:"how-to-change-the-blockchain-fetching-batch-size"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-change-the-blockchain-fetching-batch-size"}},[t._v("#")]),t._v(" How to change the blockchain fetching batch size?")]),t._v(" "),a("h3",{attrs:{id:"video-guide-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#video-guide-2"}},[t._v("#")]),t._v(" Video guide")]),t._v(" "),a("figure",{staticClass:"video_container"},[a("iframe",{attrs:{src:"https://www.youtube.com/embed/LO_Gea_IN_s",frameborder:"0",allowfullscreen:"true"}})]),t._v(" "),a("h3",{attrs:{id:"introduction-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction-2"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),a("p",[t._v("The default batch size is 100, but this can be changed by using the extra command "),a("code",[t._v("--batch-size=xx")]),t._v(".")]),t._v(" "),a("p",[t._v("You need to this to the command line as an extra flag or if you are using Docker, modify the docker-compose.yml with:")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("subquery-node:\n    image: onfinality/subql-node:latest\n    depends_on:\n      - "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"postgres"')]),t._v("\n    restart: always\n    environment:\n      DB_USER: postgres\n      DB_PASS: postgres\n      DB_DATABASE: postgres\n      DB_HOST: postgres\n      DB_PORT: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5432")]),t._v("\n    volumes:\n      - ./:/app\n    command:\n      - -f"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/app\n      - --local\n      - --batch-size"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),t._v("\n\n")])])]),a("p",[t._v("This example sets the batch size to 50.")]),t._v(" "),a("h3",{attrs:{id:"why-change-the-batch-size"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-change-the-batch-size"}},[t._v("#")]),t._v(" Why change the batch size?")]),t._v(" "),a("p",[t._v("Using a smaller batch size can reduce memory usage and not leave users hanging for large queries. In otherwords, your application can be more responsive. However, more API calls are being made so if you are being charged on an I/O basis or if you have API limits somewhere in your chain, this could work to your disadvantage.")])])}),[],!1,null,null,null);e.default=s.exports}}]);