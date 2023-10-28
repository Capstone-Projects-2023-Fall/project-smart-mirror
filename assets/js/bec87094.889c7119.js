"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[8758],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},i="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),i=d(a),m=l,k=i["".concat(o,".").concat(m)]||i[m]||c[m]||r;return a?n.createElement(k,s(s({ref:t},u),{},{components:a})):n.createElement(k,s({ref:t},u))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,s=new Array(r);s[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[i]="string"==typeof e?e:l,s[1]=p;for(var d=2;d<r;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3006:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>i,frontMatter:()=>r,metadata:()=>p,toc:()=>d});var n=a(7462),l=(a(7294),a(3905));const r={sidebar_position:1,description:"API Documentation"},s="API Documentation",p={unversionedId:"api-specification/API Docs",id:"api-specification/API Docs",title:"API Documentation",description:"API Documentation",source:"@site/docs/api-specification/API Docs.md",sourceDirName:"api-specification",slug:"/api-specification/API Docs",permalink:"/project-smart-mirror/docs/api-specification/API Docs",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-smart-mirror/edit/main/documentation/docs/api-specification/API Docs.md",tags:[],version:"current",lastUpdatedBy:"Devin Rankin",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"API Documentation"},sidebar:"docsSidebar",previous:{title:"API Specification",permalink:"/project-smart-mirror/docs/category/api-specification"},next:{title:"Document Overview",permalink:"/project-smart-mirror/docs/api-specification/document-overview"}},o={},d=[{value:"Calander API",id:"calander-api",level:2},{value:"POST /calendar/create",id:"post-calendarcreate",level:3},{value:"PUT /calendar/update/{id}",id:"put-calendarupdateid",level:3},{value:"DELETE /calendar/delete/{id}",id:"delete-calendardeleteid",level:3},{value:"POST /calendar/event/add/{calendarId}",id:"post-calendareventaddcalendarid",level:3},{value:"PUT/calendar/event/update/{calendarId}/{eventId}",id:"putcalendareventupdatecalendarideventid",level:3},{value:"DELETE /calendar/event/delete/{calendarId}/{eventId}",id:"delete-calendareventdeletecalendarideventid",level:3},{value:"GET /calendar/events/{calendarId}",id:"get-calendareventscalendarid",level:3},{value:"Module Class API Documentation",id:"module-class-api-documentation",level:2},{value:"Attributes",id:"attributes",level:2},{value:"POST/module/create",id:"postmodulecreate",level:3},{value:"GET/module/status",id:"getmodulestatus",level:3},{value:"PUT/module/pause",id:"putmodulepause",level:3},{value:"PUT/module/resume",id:"putmoduleresume",level:3},{value:"DELETE/module/disable",id:"deletemoduledisable",level:3},{value:"PUT/module/refresh",id:"putmodulerefresh",level:3}],u={toc:d};function i(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"api-documentation"},"API Documentation"),(0,l.kt)("h2",{id:"calander-api"},"Calander API"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:"),(0,l.kt)("br",{parentName:"p"}),"\n","The Calendar API allows you to manage user calendars and events."),(0,l.kt)("h3",{id:"post-calendarcreate"},"POST /calendar/create"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:"),(0,l.kt)("br",{parentName:"p"}),"\n","Create a new calendar and store it in the database."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Valid Request Body:"),"     "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "title": String,\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Successful call:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 201,\n    "body": "A new calendar has been successfully created."\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Failed call:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 400,\n    "body": "Invalid request body."\n}\n')),(0,l.kt)("h3",{id:"put-calendarupdateid"},"PUT /calendar/update/{id}"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:"),(0,l.kt)("br",{parentName:"p"}),"\n","Update a calendar's data in the database."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Path Parameters:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"{id}: String")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Valid Request Body:"),"     "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "title": String,\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Successful call:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "body": "Calendar with ID: {id} has been updated."\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Failed call:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 404,\n    "body": "Calendar with ID: {id} does not exist."\n}\n')),(0,l.kt)("h3",{id:"delete-calendardeleteid"},"DELETE /calendar/delete/{id}"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:"),(0,l.kt)("br",{parentName:"p"}),"\n","Delete an existing calendar from the database."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Path Parameters:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"{id}: String")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Valid Request Body:"),"     "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "title": No request body required.\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Successful call:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "body": "Calendar with ID: {id} has been deleted."\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Failed call:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 404,\n    "body": "Calendar with ID: {id} does not exist."\n}\n')),(0,l.kt)("h3",{id:"post-calendareventaddcalendarid"},"POST /calendar/event/add/{calendarId}"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:"),(0,l.kt)("br",{parentName:"p"}),"\n","Add a new event to a specific calendar."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Path Parameters:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"{calendarId}: String")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Valid Request Body:"),"     "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "title": "String",\n    "description": "String",\n    "startTime": "String (DateTime format)",\n    "endTime": "String (DateTime format)",\n    "repeatRate": Integer,\n    "alertTime": "String (DateTime format)"\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Successful call:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 201,\n    "body": "A new event has been successfully added to the calendar."\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Failed call:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 404,\n    "body": "Calendar with ID: {calendarId} does not exist."\n}\n')),(0,l.kt)("h3",{id:"putcalendareventupdatecalendarideventid"},"PUT/calendar/event/update/{calendarId}/{eventId}"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:"),(0,l.kt)("br",{parentName:"p"}),"\n","Update an event in a specific calendar."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Path Parameters:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"{calendarId}: String"),(0,l.kt)("li",{parentName:"ul"},"{eventId}: String")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Valid Request Body:"),"     "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "title": "String",\n    "description": "String",\n    "startTime": "String (DateTime format)",\n    "endTime": "String (DateTime format)",\n    "repeatRate": Integer,\n    "alertTime": "String (DateTime format)"\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Successful call:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 201,\n    "body": "Event with ID: {eventId} has been updated."\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Failed call:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 404,\n    "body": "Calendar with ID: {calendarId} or event with ID: {eventId} does not exist."\n}\n')),(0,l.kt)("h3",{id:"delete-calendareventdeletecalendarideventid"},"DELETE /calendar/event/delete/{calendarId}/{eventId}"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:"),(0,l.kt)("br",{parentName:"p"}),"\n","Delete an event from a specific calendar."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Path Parameters:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"{calendarId}: String"),(0,l.kt)("li",{parentName:"ul"},"{eventId}: String")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Valid Request Body:"),"     "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "title": No request body required.\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Successful call:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "body": "Event with ID: {eventId} has been deleted."\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Failed call:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 404,\n    "body": "Calendar with ID: {calendarId} or event with ID: {eventId} does not exist."\n}\n')),(0,l.kt)("h3",{id:"get-calendareventscalendarid"},"GET /calendar/events/{calendarId}"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:"),(0,l.kt)("br",{parentName:"p"}),"\n","Retrieve a list of events from a specific calendar."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Path Parameters:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"{calendarId}: String")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Valid Request Body:"),"     "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "title": No request body required.\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Successful call:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n        "title": An array of event objects.\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Failed call:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 404,\n    "body": "Calendar with ID: {calendarId} does not exist."\n}\n')),(0,l.kt)("h2",{id:"module-class-api-documentation"},"Module Class API Documentation"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:"),(0,l.kt)("br",{parentName:"p"}),"\n","The Module class API allows the system to interface with subsequent submodules and widgets. "),(0,l.kt)("h2",{id:"attributes"},"Attributes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"status (str)"),": The current status of the module."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"lastUpdate (int)"),": The timestamp of the last update."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"type (str)"),": The type of the module."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"permissionLevel (int const)"),": The permission level of the module (constant).")),(0,l.kt)("h3",{id:"postmodulecreate"},"POST/module/create"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:"),(0,l.kt)("br",{parentName:"p"}),"\n","Create a new module and initialize it."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Valid Request Body:"),"     "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "title": String,\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Successful call:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 201,\n    "body": "A new module has been successfully created and initialized."\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Failed call:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 400,\n    "body": "Invalid request body."\n}\n')),(0,l.kt)("h3",{id:"getmodulestatus"},"GET/module/status"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:"),(0,l.kt)("br",{parentName:"p"}),"\n","Retrieve the current status of the module."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Valid Request Body:"),"     "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "title": No request body is required.\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Successful call:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "body": "The current status of the module is: {status}"\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Failed call:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 400,\n    "body": "Invalid request body."\n}\n')),(0,l.kt)("h3",{id:"putmodulepause"},"PUT/module/pause"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:"),(0,l.kt)("br",{parentName:"p"}),"\n","Pause the module's operations."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Valid Request Body:"),"     "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "title": No request body is required.\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Successful call:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "body": "Module operations have been paused."\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Failed call:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 400,\n    "body": "Module operations are already paused."\n}\n')),(0,l.kt)("h3",{id:"putmoduleresume"},"PUT/module/resume"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:"),(0,l.kt)("br",{parentName:"p"}),"\n","Resume the module's operations."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Valid Request Body:"),"     "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "title": No request body is required.\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Successful call:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "body": "Module operations have been resumed."\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Failed call:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 400,\n    "body": "Module operations are already active."\n}\n')),(0,l.kt)("h3",{id:"deletemoduledisable"},"DELETE/module/disable"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:"),(0,l.kt)("br",{parentName:"p"}),"\n","Disable the module."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Valid Request Body:"),"     "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "title": No request body is required.\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Successful call:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "body": "The module has been disabled."\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Failed call:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 400,\n    "body": "The module is already disabled."\n}\n')),(0,l.kt)("h3",{id:"putmodulerefresh"},"PUT/module/refresh"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:"),(0,l.kt)("br",{parentName:"p"}),"\n","Refresh the module's data."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Valid Request Body:"),"     "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "title": No request body is required.\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Successful call:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "body": "Module data has been refreshed."\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Failed call:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 400,\n    "body": "Module is not active or initialized."\n}\n')))}i.isMDXComponent=!0}}]);