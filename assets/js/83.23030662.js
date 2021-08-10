(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{456:function(e,t,a){"use strict";a.r(t);var s=a(44),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"hello-world-explained"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hello-world-explained"}},[e._v("#")]),e._v(" Hello World Explained")]),e._v(" "),a("p",[e._v("In the "),a("RouterLink",{attrs:{to:"/it/quickstart/helloworld-localhost.html"}},[e._v("Hello World quick start guide")]),e._v(", we ran through some simple commands and very quickly got an example up and running. This allowed you to ensure that you had all the pre-requisites in place and could use a local playground to make a simple query to get your first data from SubQuery. Here, we take a closer look at what all those commands mean.")],1),e._v(" "),a("h2",{attrs:{id:"subql-init"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#subql-init"}},[e._v("#")]),e._v(" subql init")]),e._v(" "),a("p",[e._v("The first command we ran was "),a("code",[e._v("subql init --starter subqlHelloWorld")]),e._v(".")]),e._v(" "),a("p",[e._v("This does the heavy lifting and creates a whole bunch of files for you. As noted in the "),a("RouterLink",{attrs:{to:"/it/quickstart/quickstart.html#configure-and-build-the-starter-project"}},[e._v("official documentation")]),e._v(", you will mainly be working on the following files:")],1),e._v(" "),a("ul",[a("li",[e._v("The Manifest in "),a("code",[e._v("project.yaml")])]),e._v(" "),a("li",[e._v("The GraphQL Schema in "),a("code",[e._v("schema.graphql")])]),e._v(" "),a("li",[e._v("The Mapping functions in "),a("code",[e._v("src/mappings/")]),e._v(" directory")])]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/main_subql_files.png",alt:"key subql files"}})]),e._v(" "),a("p",[e._v('These files are the core of everything we do. As such, we\'ll dedicate more time to these files in another article. For now though, just know that the schema contains a description of the data users can request from the SubQuery API, the project yaml file which contains "configuration" type parameters and of course the mappingHandlers containing typescript which contains functions that transform the data.')]),e._v(" "),a("h2",{attrs:{id:"yarn-install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#yarn-install"}},[e._v("#")]),e._v(" yarn install")]),e._v(" "),a("p",[e._v("The next thing we did was "),a("code",[e._v("yarn install")]),e._v(". "),a("code",[e._v("npm install")]),e._v(" can be used as well.")]),e._v(" "),a("blockquote",[a("p",[e._v("A short history lesson. Node Package Manager or npm was initially released in 2010 and is a tremendously popular package manager among JavaScript developers. It is the default package that is automatically installed whenever you install Node.js on your system. Yarn was initially released by Facebook in 2016 with the intention to address some of the performance and security shortcomings of working with npm (at that time).")])]),e._v(" "),a("p",[e._v("What yarn does is look at the "),a("code",[e._v("package.json")]),e._v(" file and download various other dependencies. Looking at the "),a("code",[e._v("package.json")]),e._v(" file, it doesn't look like there are many dependencies, but when you run the command, you'll notice that 18,983 files are added. This is because each dependency will also have its own dependencies.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/dependencies.png",alt:"key subql files"}})]),e._v(" "),a("h2",{attrs:{id:"yarn-codegen"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#yarn-codegen"}},[e._v("#")]),e._v(" yarn codegen")]),e._v(" "),a("p",[e._v("Then we ran "),a("code",[e._v("yarn codegen")]),e._v(" or "),a("code",[e._v("npm run-script codegen")]),e._v(". What this does is fetch the GraphQL schema (in the "),a("code",[e._v("schema.graphql")]),e._v(") and generates the associated typescript model files (Hence the output files will have a .ts extension). You should never change any of these generated files, only change the source "),a("code",[e._v("schema.graphql")]),e._v(" file.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/typescript.png",alt:"key subql files"}})]),e._v(" "),a("h2",{attrs:{id:"yarn-build"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#yarn-build"}},[e._v("#")]),e._v(" yarn build")]),e._v(" "),a("p",[a("code",[e._v("yarn build")]),e._v(" or "),a("code",[e._v("npm run-script build")]),e._v(" was then executed. This should be familiar for seasoned programmers. It creates a distribution folder performing things such as code optimisation preparing for a deployment.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/distribution_folder.png",alt:"key subql files"}})]),e._v(" "),a("h2",{attrs:{id:"docker-compose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose"}},[e._v("#")]),e._v(" docker-compose")]),e._v(" "),a("p",[e._v("The final step was the combined docker command "),a("code",[e._v("docker-compose pull && docker-compose up")]),e._v(" (can be run separately as well). The "),a("code",[e._v("pull")]),e._v(" command grabs all the required images from Docker Hub and the "),a("code",[e._v("up")]),e._v(" command starts the container.")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" docker-compose pull\nPulling postgres        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(". "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("done")]),e._v("\nPulling subquery-node   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(". "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("done")]),e._v("\nPulling graphql-engine  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(". "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("done")]),e._v("\n")])])]),a("p",[e._v("When the container is started, you'll see the terminal spit out lots of text showing the status of the node and the GraphQL engine. It's when you see:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("subquery-node_1   | 2021-06-06T02:04:25.490Z <fetch> INFO fetch block [1, 100]\n")])])]),a("p",[e._v("that you know that the SubQuery node has started to synchronise.")]),e._v(" "),a("h2",{attrs:{id:"summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[e._v("#")]),e._v(" Summary")]),e._v(" "),a("p",[e._v("Now that you've had an insight into what is happening under the covers, the question is where to from here? If you are feeling confident, you can jump into learning about how to "),a("RouterLink",{attrs:{to:"/it/create/introduction.html"}},[e._v("create a project")]),e._v(" and learn more about the three key files. The manifest file, the GraphQL schema, and the mappings file.")],1),e._v(" "),a("p",[e._v("Otherwise, continue to our tutorials section where we look at how we can run this Hello World example on SubQuery's hosted infrastructure, we'll look at modifying the start block, and we'll take a deeper dive at running SubQuery projects by running readily available and open source projects.")])])}),[],!1,null,null,null);t.default=n.exports}}]);