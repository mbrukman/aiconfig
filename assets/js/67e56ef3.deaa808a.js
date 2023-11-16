"use strict";(self.webpackChunkaiconfig_docs=self.webpackChunkaiconfig_docs||[]).push([[8731],{9975:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var t=n(5893),i=n(1151),r=n(4866),s=n(5162),o=n(4883);const l={sidebar_position:5},c="Passing data into prompts",d={id:"overview/parameters-and-chaining",title:"Passing data into prompts",description:"Passing data into prompts is fundamental to aiconfig. It allows you to store prompt templates as the config, and resolve the template into a prompt by passing in data.",source:"@site/docs/overview/parameters-and-chaining.md",sourceDirName:"overview",slug:"/overview/parameters-and-chaining",permalink:"/docs/overview/parameters-and-chaining",draft:!1,unlisted:!1,editUrl:"https://github.com/lastmile-ai/aiconfig/aiconfig-docs/docs/overview/parameters-and-chaining.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docSidebar",previous:{title:"Define a Prompt Chain",permalink:"/docs/overview/define-prompt-chain"},next:{title:"Run an AIConfig",permalink:"/docs/overview/run-aiconfig"}},p={},u=[{value:"Parameter syntax",id:"parameter-syntax",level:2},{value:"Specifying parameters in <code>aiconfig</code>",id:"specifying-parameters-in-aiconfig",level:3},{value:"Specifying parameters in code",id:"specifying-parameters-in-code",level:3},{value:"Resolving the prompt",id:"resolving-the-prompt",level:3},{value:"Passing dynamic data",id:"passing-dynamic-data",level:3},{value:"What gets parameterized",id:"what-gets-parameterized",level:2},{value:"Passing data into a prompt chain",id:"passing-data-into-a-prompt-chain",level:2}];function m(e){const a={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"passing-data-into-prompts",children:"Passing data into prompts"}),"\n",(0,t.jsxs)(a.p,{children:["Passing data into prompts is fundamental to ",(0,t.jsx)(a.code,{children:"aiconfig"}),". It allows you to store prompt ",(0,t.jsx)(a.em,{children:"templates"})," as the config, and resolve the template into a prompt by passing in data."]}),"\n",(0,t.jsxs)(a.p,{children:["In ",(0,t.jsx)(a.code,{children:"aiconfig"}),", data flow is accomplished using parameters. Parameters can be defined statically in the ",(0,t.jsxs)(a.a,{href:"/docs/overview/ai-config-format#metadata",children:[(0,t.jsx)(a.code,{children:"aiconfig"})," metadata"]}),", and also passed in dynamically when using the AIConfig SDK."]}),"\n",(0,t.jsx)(a.admonition,{type:"info",children:(0,t.jsxs)(a.p,{children:["Parameters allow you to pass data ",(0,t.jsx)(a.em,{children:"into"})," prompts, as well as ",(0,t.jsx)(a.em,{children:"between"})," prompts. For more information on the latter, see ",(0,t.jsx)(a.a,{href:"/docs/overview/define-prompt-chain#parameter-chains",children:"Parameter Chains"}),"."]})}),"\n",(0,t.jsx)(a.h2,{id:"parameter-syntax",children:"Parameter syntax"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"aiconfig"})," uses ",(0,t.jsx)(a.a,{href:"https://handlebarsjs.com/",children:(0,t.jsx)(a.code,{children:"{{handlebars}}"})})," templating syntax for specifying parameters. While advanced handlebars syntax is supported, the most common way of specifying a parameter is by using ",(0,t.jsx)(a.code,{children:"{{parameter_name}}"})," in the string."]}),"\n",(0,t.jsx)(a.admonition,{type:"note",children:(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"Advanced"}),": It is possible to use a different templating syntax than handlebars. You will need to implement a new kind of ",(0,t.jsx)(a.a,{href:"https://github.com/lastmile-ai/aiconfig/blob/main/python/src/aiconfig/default_parsers/parameterized_model_parser.py",children:(0,t.jsx)(a.code,{children:"ParameterizedModelParser"})}),"."]})}),"\n",(0,t.jsxs)(a.h3,{id:"specifying-parameters-in-aiconfig",children:["Specifying parameters in ",(0,t.jsx)(a.code,{children:"aiconfig"})]}),"\n",(0,t.jsxs)(a.p,{children:["Here is an example ",(0,t.jsx)(a.code,{children:"aiconfig"})," that specifies parameters in the config metadata.\nParameters can be specified globally in the global metadata, or in prompt-specific metadata."]}),"\n",(0,t.jsxs)(a.p,{children:["In this case, ",(0,t.jsx)(a.code,{children:"sql_language"})," is set to ",(0,t.jsx)(a.code,{children:"postgres"})," by default, but overridden to be ",(0,t.jsx)(a.code,{children:"mysql"})," by the ",(0,t.jsx)(a.code,{children:"write_sql"})," prompt. The other parameters aren't specified in the `aiconfig, so they will have to be passed in when running the prompt."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-json",metastring:'title="sql.aiconfig.json"',children:'{\n  "name": "gpt4 as your data engineer",\n  "description": "A SQL coding assistant that generates SQL queries for the desired output.",\n  "schema_version": "latest",\n  "metadata": {\n    "parameters": {\n      "sql_language": "postgres"\n    }\n  },\n  "prompts": [\n    {\n      "name": "write_sql",\n      "input": "Write me a {{sql_language}} query to get this final output: {{output_data}}. Use the tables relationships defined here: {{table_relationships}}.",\n      "metadata": {\n        "model": "gpt-4",\n        "parameters": {\n          "sql_language": "sqlserver"\n        }\n      }\n    },\n    {\n      "name": "translate",\n      "input": "Translate the following {{sql_language}} into {{target_language}} code:\\n {{write_sql.output}}",\n      "metadata": {\n        "model": {\n          "name": "gpt-4"\n        }\n      }\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(a.admonition,{type:"info",children:(0,t.jsxs)(a.p,{children:["Read more about the ",(0,t.jsx)(a.code,{children:"aiconfig"})," metadata schema ",(0,t.jsx)(a.a,{href:"docs/overview/ai-config-format#metadata",children:"here"}),"."]})}),"\n",(0,t.jsxs)(r.Z,{groupId:"aiconfig-language",queryString:!0,defaultValue:o.Z.defaultAIConfigLanguage,values:o.Z.aiConfigLanguages,children:[(0,t.jsx)(s.Z,{value:"node",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-typescript",metastring:'title="app.ts"',children:'import * as path from "path";\nimport { AIConfigRuntime } from "aiconfig";\n\nasync function parameterizedPrompt() {\n  // Load the AIConfig. You can also use AIConfigRuntime.loadJSON({})\n  const config = AIConfigRuntime.load(\n    path.join(__dirname, "sql.aiconfig.json")\n  );\n\n  // Set a global parameter\n  config.setParameter("sql_language", "mysql");\n\n  // Set a prompt-specific parameter\n  config.setParameter(\n    "output_data",\n    "user_name, user_email, trial. output granularity is the trial_id.",\n    /*promptName*/ "write_sql"\n  );\n}\n\nconfig.save();\n'})})}),(0,t.jsx)(s.Z,{value:"python",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",metastring:'title="app.py"',children:'from aiconfig import AIConfigRuntime\n\n# Load the aiconfig.\nconfig = AIConfigRuntime.load(\'sql.aiconfig.json\')\n\n# Set a global parameter\nconfig.set_parameter("sql_language", "mysql")\n\n# Set a prompt-specific parameter\nconfig.set_parameter(\n    "output_data",\n    "user_name, user_email, trial. output granularity is the trial_id.",\n    "write_sql" #prompt_name\n)\n\nconfig.save()\n'})})})]}),"\n",(0,t.jsx)(a.h3,{id:"specifying-parameters-in-code",children:"Specifying parameters in code"}),"\n",(0,t.jsxs)(r.Z,{groupId:"aiconfig-language",queryString:!0,defaultValue:o.Z.defaultAIConfigLanguage,values:o.Z.aiConfigLanguages,children:[(0,t.jsx)(s.Z,{value:"node",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-typescript",metastring:'title="app.ts"',children:'import * as path from "path";\nimport { AIConfigRuntime } from "aiconfig";\n\nasync function parameterizedPrompt() {\n  // Load the AIConfig. You can also use AIConfigRuntime.loadJSON({})\n  const config = AIConfigRuntime.load(\n    path.join(__dirname, "sql.aiconfig.json")\n  );\n\n  const params = {\n    sql_language: "mysql", // This will override the default value in the aiconfig\n    output_data:\n      "user_name, user_email, trial. output granularity is the trial_id.",\n    table_relationships:\n      "user table, trial table, trial_step table. a user can create many trials. each trial has many trial_steps.",\n  };\n\n  // Run the prompt with parameters\n  await config.run("write_sql", params);\n}\n'})})}),(0,t.jsx)(s.Z,{value:"python",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",metastring:'title="app.py"',children:'from aiconfig import AIConfigRuntime\n\n# Load the aiconfig.\nconfig = AIConfigRuntime.load(\'sql.aiconfig.json\')\n\nparams = {\n    "sql_language": "mysql", # This will override the default value in the aiconfig\n    "output_data": "user_name, user_email, trial. output granularity is the trial_id.",\n    "table_relationships": "user table, trial table, trial_step table. a user can create many trials. each trial has many trial_steps."\n}\n\n# Run the prompt with parameters\nawait config.run("write_sql", params)\n'})})})]}),"\n",(0,t.jsx)(a.h3,{id:"resolving-the-prompt",children:"Resolving the prompt"}),"\n",(0,t.jsxs)(a.p,{children:["Use the ",(0,t.jsx)(a.code,{children:"resolve"})," function to see how parameters are applied to a prompt template before running the prompt."]}),"\n",(0,t.jsxs)(a.p,{children:["In the example above, replace ",(0,t.jsx)(a.code,{children:"config.run"})," with ",(0,t.jsx)(a.code,{children:"config.resolve"}),":"]}),"\n",(0,t.jsxs)(r.Z,{groupId:"aiconfig-language",queryString:!0,defaultValue:o.Z.defaultAIConfigLanguage,values:o.Z.aiConfigLanguages,children:[(0,t.jsx)(s.Z,{value:"node",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-typescript",children:'await config.resolve("write_sql", params);\n'})})}),(0,t.jsx)(s.Z,{value:"python",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:'await config.resolve("write_sql", params)\n'})})})]}),"\n",(0,t.jsx)(a.p,{children:"This will return the fully-resolved completion params that will be passed to the model inference API (in this case OpenAI chat completion):"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-json",children:'{\n  "messages": [{\n    "role": "user",\n    "content":\n      "Write me a mysql query to get this final output:\n      user_name, user_email, trial, num_trial_steps,\n      num_trial_steps_params. output granularity is the\n      trial_id. Use the tables relationships defined\n      here: user table, trial table, trial_step table. a\n      user can create many trials. each trial has many\n      trial_steps. a trial_step has parameters if\n      metadata[0] (json) has a non-null parameters value."\n  }],\n  "model": "gpt-4",\n}\n'})}),"\n",(0,t.jsx)(a.h3,{id:"passing-dynamic-data",children:"Passing dynamic data"}),"\n",(0,t.jsxs)(a.p,{children:["Because parameters can be passed in to prompts programmatically, exactly what gets passed in can be dynamic. For example, for the example above you could have a dropdown of possible SQL languages, and you can set the ",(0,t.jsx)(a.code,{children:"sql_langauge"})," parameter to the value selected by a user."]}),"\n",(0,t.jsx)(a.h2,{id:"what-gets-parameterized",children:"What gets parameterized"}),"\n",(0,t.jsxs)(a.p,{children:["In addition to the prompt itself, there are other properties in an ",(0,t.jsx)(a.code,{children:"aiconfig"})," that may also get parameterized."]}),"\n",(0,t.jsx)(a.admonition,{type:"note",children:(0,t.jsxs)(a.p,{children:["Exactly which properties get parameterized is dependent on the ",(0,t.jsx)(a.code,{children:"ModelParser"})," for that model on what it parameterizes."]})}),"\n",(0,t.jsx)(a.p,{children:"For the default model parsers (e.g. GPT-*, PaLM, Hugging Face Text Generation), the following get parameterized:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"prompt"}),"\n",(0,t.jsxs)(a.li,{children:["system prompt (specified as ",(0,t.jsx)(a.code,{children:"system_prompt"})," in metadata)"]}),"\n",(0,t.jsx)(a.li,{children:"prompt chain (e.g. previous messages in conversation history)"}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"passing-data-into-a-prompt-chain",children:"Passing data into a prompt chain"}),"\n",(0,t.jsxs)(a.p,{children:["Passing data into a ",(0,t.jsx)(a.a,{href:"/docs/overview/define-prompt-chain#what-are-prompt-chains",children:"prompt chain"})," is no different than passing data into a single prompt."]}),"\n",(0,t.jsxs)(a.p,{children:["In the example above, the ",(0,t.jsx)(a.code,{children:"translate"})," prompt is a prompt chain because it depends on the output of the ",(0,t.jsx)(a.code,{children:"write_sql"})," prompt:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-json",children:'{\n  "name": "translate",\n  "input": "Translate the following {{sql_language}} into {{target_language}} code:\\n {{write_sql.output}}",\n  "metadata": {\n    "model": {\n      "name": "gpt-4"\n    }\n  }\n}\n'})}),"\n",(0,t.jsx)(a.p,{children:"To run this prompt chain properly, you'd need to pass in parameters for both prompts."}),"\n",(0,t.jsxs)(r.Z,{groupId:"aiconfig-language",queryString:!0,defaultValue:o.Z.defaultAIConfigLanguage,values:o.Z.aiConfigLanguages,children:[(0,t.jsx)(s.Z,{value:"node",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-typescript",metastring:'title="app.ts"',children:'import * as path from "path";\nimport { AIConfigRuntime } from "aiconfig";\n\nasync function parameterizedPrompt() {\n  // Load the AIConfig. You can also use AIConfigRuntime.loadJSON({})\n  const config = AIConfigRuntime.load(\n    path.join(__dirname, "sql.aiconfig.json")\n  );\n\n  const params = {\n    // Parameters for `translate` prompt\n    target_language: "postgresql",\n    // Parameters for `write_sql` prompt\n    sql_language: "mysql",\n    output_data:\n      "user_name, user_email, trial. output granularity is the trial_id.",\n    table_relationships:\n      "user table, trial table, trial_step table. a user can create many trials. each trial has many trial_steps.",\n  };\n\n  // Run the prompt chain\n  await config.runWithDependencies("translate", params);\n}\n'})})}),(0,t.jsx)(s.Z,{value:"python",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",metastring:'title="app.py"',children:'from aiconfig import AIConfigRuntime\n\n# Load the aiconfig.\nconfig = AIConfigRuntime.load(\'sql.aiconfig.json\')\n\nparams = {\n    # Parameters for `translate` prompt\n    "target_language": "postgresql",\n    # Parameters for `write_sql` prompt\n    "sql_language": "mysql",\n    "output_data": "user_name, user_email, trial. output granularity is the trial_id.",\n    "table_relationships": "user table, trial table, trial_step table. a user can create many trials. each trial has many trial_steps."\n}\n\n# Run the prompt chain\nawait config.run("translate", params, options=None, run_with_dependencies=True)\n'})})})]})]})}function h(e={}){const{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},4883:(e,a,n)=>{n.d(a,{Z:()=>s});var t=n(412);const i=!!t.Z.canUseDOM&&navigator.platform.startsWith("Mac"),r=!!t.Z.canUseDOM&&navigator.platform.startsWith("Win"),s={defaultOs:i?"macos":r?"windows":"linux",defaultNodePackageManager:"npm",defaultPythonPackageManager:"pip",defaultPlatform:i?"ios":"android",defaultSyntax:"functional",defaultAIConfigLanguage:"python",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],nodePackageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],pythonPackageManagers:[{label:"pip",value:"pip"},{label:"poetry",value:"poetry"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],aiConfigLanguages:[{label:"TypeScript",value:"node"},{label:"Python",value:"python"}]}},5162:(e,a,n)=>{n.d(a,{Z:()=>s});n(7294);var t=n(6010);const i={tabItem:"tabItem_Ymn6"};var r=n(5893);function s(e){let{children:a,hidden:n,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.Z)(i.tabItem,s),hidden:n,children:a})}},4866:(e,a,n)=>{n.d(a,{Z:()=>_});var t=n(7294),i=n(6010),r=n(2466),s=n(6550),o=n(469),l=n(1980),c=n(7392),d=n(12);function p(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:a,children:n}=e;return(0,t.useMemo)((()=>{const e=a??function(e){return p(e).map((e=>{let{props:{value:a,label:n,attributes:t,default:i}}=e;return{value:a,label:n,attributes:t,default:i}}))}(n);return function(e){const a=(0,c.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,n])}function m(e){let{value:a,tabValues:n}=e;return n.some((e=>e.value===a))}function h(e){let{queryString:a=!1,groupId:n}=e;const i=(0,s.k6)(),r=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:a,groupId:n});return[(0,l._X)(r),(0,t.useCallback)((e=>{if(!r)return;const a=new URLSearchParams(i.location.search);a.set(r,e),i.replace({...i.location,search:a.toString()})}),[r,i])]}function g(e){const{defaultValue:a,queryString:n=!1,groupId:i}=e,r=u(e),[s,l]=(0,t.useState)((()=>function(e){let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:a,tabValues:r}))),[c,p]=h({queryString:n,groupId:i}),[g,f]=function(e){let{groupId:a}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(a),[i,r]=(0,d.Nk)(n);return[i,(0,t.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:i}),v=(()=>{const e=c??g;return m({value:e,tabValues:r})?e:null})();(0,o.Z)((()=>{v&&l(v)}),[v]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),f(e)}),[p,f,r]),tabValues:r}}var f=n(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(5893);function x(e){let{className:a,block:n,selectedValue:t,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),d=e=>{const a=e.currentTarget,n=l.indexOf(a),i=o[n].value;i!==t&&(c(a),s(i))},p=e=>{let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;a=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;a=l[n]??l[l.length-1];break}}a?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},a),children:o.map((e=>{let{value:a,label:n,attributes:r}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===a?0:-1,"aria-selected":t===a,ref:e=>l.push(e),onKeyDown:p,onClick:d,...r,className:(0,i.Z)("tabs__item",v.tabItem,r?.className,{"tabs__item--active":t===a}),children:n??a},a)}))})}function y(e){let{lazy:a,children:n,selectedValue:i}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){const e=r.find((e=>e.props.value===i));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,a)=>(0,t.cloneElement)(e,{key:a,hidden:e.props.value!==i})))})}function j(e){const a=g(e);return(0,b.jsxs)("div",{className:(0,i.Z)("tabs-container",v.tabList),children:[(0,b.jsx)(x,{...e,...a}),(0,b.jsx)(y,{...e,...a})]})}function _(e){const a=(0,f.Z)();return(0,b.jsx)(j,{...e,children:p(e.children)},String(a))}},1151:(e,a,n)=>{n.d(a,{Z:()=>o,a:()=>s});var t=n(7294);const i={},r=t.createContext(i);function s(e){const a=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(r.Provider,{value:a},e.children)}}}]);