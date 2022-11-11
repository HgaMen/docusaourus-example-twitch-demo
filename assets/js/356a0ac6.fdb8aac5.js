"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1117],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),c=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(a),d=n,k=u["".concat(i,".").concat(d)]||u[d]||m[d]||p;return a?r.createElement(k,l(l({ref:t},s),{},{components:a})):r.createElement(k,l({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,l=new Array(p);l[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var c=2;c<p;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7384:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>l,default:()=>s,frontMatter:()=>p,metadata:()=>o,toc:()=>i});var r=a(7462),n=(a(7294),a(3905));const p={title:"Markdown page example",description:"Descripci\xf3n de esta p\xe1gina"},l="Markdown page example",o={type:"mdx",permalink:"/docusaourus-example-twitch-demo/about",source:"@site/src/pages/about.md",title:"Markdown page example",description:"Descripci\xf3n de esta p\xe1gina",frontMatter:{title:"Markdown page example",description:"Descripci\xf3n de esta p\xe1gina"}},i=[{value:"Markdown page example 1",id:"markdown-page-example-1",level:2},{value:"Markdown page example 2",id:"markdown-page-example-2",level:2}],c={toc:i};function s(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"markdown-page-example"},"Markdown page example"),(0,n.kt)("p",null,"You don't need React to write simple standalone pages."),(0,n.kt)("h2",{id:"markdown-page-example-1"},"Markdown page example 1"),(0,n.kt)("p",null,"lorem ipsum"),(0,n.kt)("h2",{id:"markdown-page-example-2"},"Markdown page example 2"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Item 1"),(0,n.kt)("li",{parentName:"ul"},"Item 2"),(0,n.kt)("li",{parentName:"ul"},"Item 3")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Orden 1"),(0,n.kt)("li",{parentName:"ol"},"Orden 2"),(0,n.kt)("li",{parentName:"ol"},"Orden 3")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://docusaurus.io/img/docusaurus_keytar.svg",alt:"logo de docusaurus"})),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"docusaurus.io")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx"},"const App = () => {\n    return <div>Markdown page example</div>;\n};\nexport default App;\n")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://enterprise.github.com/downloads/en/markdown-cheatsheet.pdf"},"pdf con markdown \ud83c\udf4c")),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","@mentions, #refs, ",(0,n.kt)("a",{parentName:"li",href:"https://google.com"},"links"),", ",(0,n.kt)("strong",{parentName:"li"},"formatting"),", and ",(0,n.kt)("del",null,"tags")," supported"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","list syntax required (any unordered or ordered list supported)"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","this is a complete item"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","this is an incomplete item")))}s.isMDXComponent=!0}}]);