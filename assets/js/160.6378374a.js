(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{532:function(t,a,s){"use strict";s.r(a);var e=s(44),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"manifest-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#manifest-file"}},[t._v("#")]),t._v(" Manifest File")]),t._v(" "),s("p",[t._v("The Manifest "),s("code",[t._v("project.yaml")]),t._v(" file can be seen as an entry point of your project and it defines most of the details on how SubQuery will index and transform the chain data.")]),t._v(" "),s("p",[t._v("The Manifest can be in either YAML or JSON format. In this document, we will use YAML in all the examples. Below is a standard example of a basic "),s("code",[t._v("project.yaml")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("specVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.0.1"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("description")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("repository")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://github.com/subquery/subql-starter"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("schema")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./schema.graphql"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("network")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("endpoint")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"wss://polkadot.api.onfinality.io/public-ws"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Optionally provide the HTTP endpoint of a full chain dictionary to speed up processing")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dictionary")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://api.subquery.network/sq/subquery/dictionary-polkadot"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dataSources")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" main\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" substrate/Runtime\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("startBlock")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("handlers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("handler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" handleBlock\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" substrate/BlockHandler\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("handler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" handleEvent\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" substrate/EventHandler\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("filter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Filter is optional but suggested to speed up event processing")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("module")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" balances\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("method")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deposit\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("handler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" handleCall\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" substrate/CallHandler\n")])])]),s("ul",[s("li",[s("code",[t._v("network.endpoint")]),t._v(" defines the wss or ws endpoint of the blockchain to be indexed - "),s("strong",[t._v("This must be a full archive node")]),t._v(".")]),t._v(" "),s("li",[s("code",[t._v("network.dictionary")]),t._v(" optionally provides the HTTP endpoint of a full chain dictionary to speed up processing - see "),s("RouterLink",{attrs:{to:"/vi/run/run.html#using-a-dictionary"}},[t._v("Running an Indexer")])],1),t._v(" "),s("li",[s("code",[t._v("dataSources")]),t._v(" defines the data that will be filtered and extracted and the location of the mapping function handler for the data transformation to be applied.\n"),s("ul",[s("li",[s("code",[t._v("kind")]),t._v(" only supports "),s("code",[t._v("substrate/Runtime")]),t._v(" for now.")]),t._v(" "),s("li",[s("code",[t._v("startBlock")]),t._v(" specifies the block height to start indexing from.")]),t._v(" "),s("li",[s("code",[t._v("filter")]),t._v(" will filter the data source to execute by the network endpoint spec name, see "),s("a",{attrs:{href:"#network-filters"}},[t._v("network filters")])]),t._v(" "),s("li",[s("code",[t._v("mapping.handlers")]),t._v(" will list all the "),s("RouterLink",{attrs:{to:"/vi/create/mapping.html"}},[t._v("mapping functions")]),t._v(" and their corresponding handler types, with additional "),s("a",{attrs:{href:"#mapping-filters"}},[t._v("mapping filters")]),t._v(".")],1)])])]),t._v(" "),s("h2",{attrs:{id:"network-filters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#network-filters"}},[t._v("#")]),t._v(" Network Filters")]),t._v(" "),s("p",[t._v("Usually the user will create a SubQuery and expect to reuse it for both their testnet and mainnet environments (e.g Polkadot and Kusama). Between networks, various options are likely to be different (e.g. index start block). Therefore, we allow users to define different details for each data source which means that one SubQuery project can still be used across multiple networks.")]),t._v(" "),s("p",[t._v("Users can add a "),s("code",[t._v("filter")]),t._v(" on "),s("code",[t._v("dataSources")]),t._v(" to decide which data source to run on each network.")]),t._v(" "),s("p",[t._v("Below is an example that shows different data sources for both the Polkadot and Kusama networks.")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("network")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("endpoint")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"wss://polkadot.api.onfinality.io/public-ws"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Create a template to avoid redundancy")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("definitions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token important"}},[t._v("&mymapping")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("handlers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("handler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" handleBlock\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" substrate/BlockHandler\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dataSources")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" polkadotRuntime\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" substrate/Runtime\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("filter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Optional")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("specName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" polkadot\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("startBlock")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token important"}},[t._v("*mymapping")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#use template here")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" kusamaRuntime\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" substrate/Runtime\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("filter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("specName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" kusama\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("startBlock")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12000")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token important"}},[t._v("*mymapping")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# can reuse or change")]),t._v("\n")])])]),s("h2",{attrs:{id:"mapping-filters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mapping-filters"}},[t._v("#")]),t._v(" Mapping Filters")]),t._v(" "),s("p",[t._v("Mapping filters are an extremely useful feature to decide what block, event, or extrinsic will trigger a mapping handler.")]),t._v(" "),s("p",[t._v("Only incoming data that satisfy the filter conditions will be processed by the mapping functions. Mapping filters are optional but are recommended as they significantly reduce the amount of data processed by your SubQuery project and will improve indexing performance.")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Example filter from callHandler")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("filter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n   "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("module")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" balances\n   "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("method")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deposit\n   "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("success")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n")])])]),s("p",[t._v("The following table explains filters supported by different handlers.")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Handler")]),t._v(" "),s("th",[t._v("Supported filter")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("RouterLink",{attrs:{to:"/vi/create/mapping.html#block-handler"}},[t._v("BlockHandler")])],1),t._v(" "),s("td",[s("code",[t._v("specVersion")])])]),t._v(" "),s("tr",[s("td",[s("RouterLink",{attrs:{to:"/vi/create/mapping.html#event-handler"}},[t._v("EventHandler")])],1),t._v(" "),s("td",[s("code",[t._v("module")]),t._v(","),s("code",[t._v("method")])])]),t._v(" "),s("tr",[s("td",[s("RouterLink",{attrs:{to:"/vi/create/mapping.html#call-handler"}},[t._v("CallHandler")])],1),t._v(" "),s("td",[s("code",[t._v("module")]),t._v(","),s("code",[t._v("method")]),t._v(" ,"),s("code",[t._v("success")])])])])]),t._v(" "),s("ul",[s("li",[t._v("Module and method filters are supported on any substrate-based chain.")]),t._v(" "),s("li",[t._v("The "),s("code",[t._v("success")]),t._v(" filter takes a boolean value and can be used to filter the extrinsic by its success status.")]),t._v(" "),s("li",[t._v("The "),s("code",[t._v("specVersion")]),t._v(" filter specifies the spec version range for a substrate block. The following examples describe how to set version ranges.")])]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("filter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("specVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("23")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("24")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Index block with specVersion in between 23 and 24 (inclusive).")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("specVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Index block with specVersion greater than or equal 100.")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("specVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token null important"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("23")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Index block with specVersion less than or equal 23.")]),t._v("\n")])])]),s("h2",{attrs:{id:"custom-chains"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#custom-chains"}},[t._v("#")]),t._v(" Custom Chains")]),t._v(" "),s("p",[t._v("You can index data from custom chains by also including chain types in the "),s("code",[t._v("project.yaml")]),t._v(". Declare the specific types supported by this blockchain in "),s("code",[t._v("network.types")]),t._v(". We support the additional types used by substrate runtime modules.")]),t._v(" "),s("p",[s("code",[t._v("typesAlias")]),t._v(", "),s("code",[t._v("typesBundle")]),t._v(", "),s("code",[t._v("typesChain")]),t._v(", and "),s("code",[t._v("typesSpec")]),t._v(" are also supported.")]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("specVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.0.1"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("description")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"This subquery indexes kitty\'s birth info"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("repository")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://github.com/onfinality-io/subql-examples"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("schema")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./schema.graphql"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("network")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("endpoint")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ws://host.kittychain.io/public-ws"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("types")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"KittyIndex"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"u32"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"Kitty"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[u8; 16]"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# typesChain: { chain: { Type5: 'example' } }")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# typesSpec: { spec: { Type6: 'example' } }")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dataSources")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" runtime\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" substrate/Runtime\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("startBlock")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("filter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Optional")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("specName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" kitty"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("chain \n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("handlers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("handler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" handleKittyBred\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" substrate/CallHandler\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("filter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("module")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" kitties\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("method")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" breed\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("success")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);