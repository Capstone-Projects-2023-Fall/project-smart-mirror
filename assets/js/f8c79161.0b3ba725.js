"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[9378],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),c=l,k=d["".concat(s,".").concat(c)]||d[c]||m[c]||a;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:l,o[1]=i;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7428:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(7462),l=(n(7294),n(3905));const a={},o="Module Class API Documentation",i={unversionedId:"api-specification/modules-api",id:"api-specification/modules-api",title:"Module Class API Documentation",description:"Purpose:",source:"@site/docs/api-specification/modules-api.md",sourceDirName:"api-specification",slug:"/api-specification/modules-api",permalink:"/project-smart-mirror/docs/api-specification/modules-api",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-smart-mirror/edit/main/documentation/docs/api-specification/modules-api.md",tags:[],version:"current",lastUpdatedBy:"mars123123",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Calendar Module API Documentation",permalink:"/project-smart-mirror/docs/api-specification/calendar-api"},next:{title:"System-Core",permalink:"/project-smart-mirror/docs/api-specification/systemcore-api"}},s={},u=[{value:"<code>Module</code> Class",id:"module-class",level:2},{value:"<code>PullUserProfile()</code>",id:"pulluserprofile",level:2},{value:"<code>GetStatus() -&gt; str</code>",id:"getstatus---str",level:2},{value:"<code>Initialize()</code>",id:"initialize",level:2},{value:"<code>GetType() -&gt; str</code>",id:"gettype---str",level:2},{value:"<code>PauseModule()</code>",id:"pausemodule",level:2},{value:"<code>ResumeModule()</code>",id:"resumemodule",level:2},{value:"<code>DisableModule()</code>",id:"disablemodule",level:2},{value:"<code>Refresh()</code>",id:"refresh",level:2}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"module-class-api-documentation"},"Module Class API Documentation"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Purpose:"),"\nThe ",(0,l.kt)("inlineCode",{parentName:"p"},"Module")," class allows the system to interface with subsequent submodules and widgets. All widgets will inherit the module class, giving it access to system properties based on permission level, and a variety of others features for system integrity."),(0,l.kt)("h2",{id:"module-class"},(0,l.kt)("inlineCode",{parentName:"h2"},"Module")," Class"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Attributes:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"status")," (str): The current status of the module."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"lastUpdate")," (int): The timestamp of the last update."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"type")," (str): The type of the module."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"permissionLevel")," (int const): The permission level of the module (constant).")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Methods:")),(0,l.kt)("h2",{id:"pulluserprofile"},(0,l.kt)("inlineCode",{parentName:"h2"},"PullUserProfile()")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Purpose:"),"\nPull user profile data for the module."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Pre-conditions:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The module must have appropriate access permissions.")),(0,l.kt)("h2",{id:"getstatus---str"},(0,l.kt)("inlineCode",{parentName:"h2"},"GetStatus() -> str")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Purpose:"),"\nRetrieve the current status of the module."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Return Value:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"str"),": The current status of the module.")),(0,l.kt)("h2",{id:"initialize"},(0,l.kt)("inlineCode",{parentName:"h2"},"Initialize()")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Purpose:"),"\nInitialize the module."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Pre-conditions:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The module must not be already initialized.")),(0,l.kt)("h2",{id:"gettype---str"},(0,l.kt)("inlineCode",{parentName:"h2"},"GetType() -> str")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Purpose:"),"\nRetrieve the type of the module."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Return Value:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"str"),": The type of the module.")),(0,l.kt)("h2",{id:"pausemodule"},(0,l.kt)("inlineCode",{parentName:"h2"},"PauseModule()")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Purpose:"),"\nPause the module's operations."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Pre-conditions:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The module must be currently active.")),(0,l.kt)("h2",{id:"resumemodule"},(0,l.kt)("inlineCode",{parentName:"h2"},"ResumeModule()")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Purpose:"),"\nResume the module's operations."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Pre-conditions:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The module must be paused.")),(0,l.kt)("h2",{id:"disablemodule"},(0,l.kt)("inlineCode",{parentName:"h2"},"DisableModule()")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Purpose:"),"\nDisable the module."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Pre-conditions:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The module must be initialized.")),(0,l.kt)("h2",{id:"refresh"},(0,l.kt)("inlineCode",{parentName:"h2"},"Refresh()")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Purpose:"),"\nRefresh the module's data."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Pre-conditions:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The module must be active and initialized.")))}d.isMDXComponent=!0}}]);