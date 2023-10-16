"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[9538],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,k=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(k,s(s({ref:t},c),{},{components:n})):a.createElement(k,s({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[m]="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8834:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={},s="System-Core",o={unversionedId:"api-specification/systemcore-api",id:"api-specification/systemcore-api",title:"System-Core",description:"The system core is comprised of the System Class and the SystemUpdateHandler Class. These two work in cohesion to innitialize, maintain, and update the system.",source:"@site/docs/api-specification/systemcore-api.md",sourceDirName:"api-specification",slug:"/api-specification/systemcore-api",permalink:"/project-smart-mirror/docs/api-specification/systemcore-api",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-smart-mirror/edit/main/documentation/docs/api-specification/systemcore-api.md",tags:[],version:"current",lastUpdatedBy:"Tesla",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Module Class API Documentation",permalink:"/project-smart-mirror/docs/api-specification/modules-api"},next:{title:"Weather Class API Documentation",permalink:"/project-smart-mirror/docs/api-specification/weather-api"}},l={},p=[{value:"<code>System</code> Class",id:"system-class",level:3},{value:"<code>SystemActionLoop()</code>",id:"systemactionloop",level:4},{value:"<code>WaitOnActivation()</code>",id:"waitonactivation",level:4},{value:"<code>ProcessUpdateInformation()</code>",id:"processupdateinformation",level:4},{value:"<code>SwitchUser()</code>",id:"switchuser",level:4},{value:"<code>SwitchUserProfile()</code>",id:"switchuserprofile",level:4},{value:"<code>SystemUpdateHandler</code> Class",id:"systemupdatehandler-class",level:3},{value:"<code>InitializeUpdater()</code>",id:"initializeupdater",level:4},{value:"<code>PullData()</code>",id:"pulldata",level:4},{value:"<code>ForceUpdate()</code>",id:"forceupdate",level:4}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"system-core"},"System-Core"),(0,r.kt)("p",null,"The system core is comprised of the System Class and the SystemUpdateHandler Class. These two work in cohesion to innitialize, maintain, and update the system."),(0,r.kt)("h1",{id:"system-class-api-documentation"},"System Class API Documentation"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Purpose:"),"\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"System")," class represents the core of a smart mirror system, responsible for managing system-wide operations."),(0,r.kt)("h3",{id:"system-class"},(0,r.kt)("inlineCode",{parentName:"h3"},"System")," Class"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Attributes:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Status")," (str): The current status of the system.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Methods:")),(0,r.kt)("h4",{id:"systemactionloop"},(0,r.kt)("inlineCode",{parentName:"h4"},"SystemActionLoop()")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Purpose:"),"\nInitiate the system action loop, which continuously performs system-level actions and maintains system integrity."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Pre-conditions:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The system must be initialized and in an active state.")),(0,r.kt)("h4",{id:"waitonactivation"},(0,r.kt)("inlineCode",{parentName:"h4"},"WaitOnActivation()")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Purpose:"),"\nWait for the system to activate."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Pre-conditions:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The system must be in a standby or inactive state.")),(0,r.kt)("h4",{id:"processupdateinformation"},(0,r.kt)("inlineCode",{parentName:"h4"},"ProcessUpdateInformation()")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Purpose:"),"\nProcess incoming update information for the smart mirror system."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Pre-conditions:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"There must be new update information available.")),(0,r.kt)("h4",{id:"switchuser"},(0,r.kt)("inlineCode",{parentName:"h4"},"SwitchUser()")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Purpose:"),"\nSwitch to a different user profile within the system."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Pre-conditions:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Multiple user profiles must exist in the system.")),(0,r.kt)("h4",{id:"switchuserprofile"},(0,r.kt)("inlineCode",{parentName:"h4"},"SwitchUserProfile()")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Purpose:"),"\nSwitch to a specific user profile within the system."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Pre-conditions:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The specified user profile must exist in the system.")),(0,r.kt)("h1",{id:"systemupdatehandler-class-api-documentation"},"SystemUpdateHandler Class API Documentation"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Purpose:"),"\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"SystemUpdateHandler")," class is responsible for managing and handling updates related to calendar information, weather data, and user preferences within a smart mirror system. It is associated with the core ",(0,r.kt)("inlineCode",{parentName:"p"},"System")," class."),(0,r.kt)("h3",{id:"systemupdatehandler-class"},(0,r.kt)("inlineCode",{parentName:"h3"},"SystemUpdateHandler")," Class"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Attributes:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"updateFrequency")," (int): The frequency at which updates are checked and fetched."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"lastUpdate")," (long int): Timestamp of the last update."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"calendarInfo")," (val): Information related to the calendar."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"weatherInfo")," (val): Information related to weather data."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"userPreferences")," (val): User-specific preferences.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Methods:")),(0,r.kt)("h4",{id:"initializeupdater"},(0,r.kt)("inlineCode",{parentName:"h4"},"InitializeUpdater()")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Purpose:"),"\nInitialize the updater for handling updates."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Pre-conditions:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The smart mirror system must be running and initialized.")),(0,r.kt)("h4",{id:"pulldata"},(0,r.kt)("inlineCode",{parentName:"h4"},"PullData()")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Purpose:"),"\nRetrieve and update calendar information, weather data, and user preferences."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Pre-conditions:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The updater must be initialized.")),(0,r.kt)("h4",{id:"forceupdate"},(0,r.kt)("inlineCode",{parentName:"h4"},"ForceUpdate()")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Purpose:"),"\nForce an immediate update of calendar information, weather data, and user preferences."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Pre-conditions:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The updater must be initialized.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Association with Core ",(0,r.kt)("inlineCode",{parentName:"strong"},"System")," Class:")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"SystemUpdateHandler")," class is associated with the core ",(0,r.kt)("inlineCode",{parentName:"p"},"System")," class in the following way:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"System")," class initializes and manages the overall smart mirror system, including user profiles and system status.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"SystemUpdateHandler")," class, on the other hand, focuses on handling updates for specific data types like calendar information, weather data, and user preferences.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"SystemUpdateHandler")," class is part of the smart mirror system and works in conjunction with the ",(0,r.kt)("inlineCode",{parentName:"p"},"System")," class to ensure that relevant data is kept up to date for display on the smart mirror.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"System")," class can interact with the ",(0,r.kt)("inlineCode",{parentName:"p"},"SystemUpdateHandler")," to trigger updates or respond to update events, ensuring that the smart mirror provides timely and accurate information to users."))))}m.isMDXComponent=!0}}]);