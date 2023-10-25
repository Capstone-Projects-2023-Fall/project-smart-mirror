"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[8758],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},i=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,k=c["".concat(o,".").concat(m)]||c[m]||u[m]||l;return n?a.createElement(k,p(p({ref:t},i),{},{components:n})):a.createElement(k,p({ref:t},i))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=m;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d[c]="string"==typeof e?e:r,p[1]=d;for(var s=2;s<l;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3006:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>c,frontMatter:()=>l,metadata:()=>d,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:1,description:"API Documentation"},p="API Documentation",d={unversionedId:"api-specification/API Docs",id:"api-specification/API Docs",title:"API Documentation",description:"API Documentation",source:"@site/docs/api-specification/API Docs.md",sourceDirName:"api-specification",slug:"/api-specification/API Docs",permalink:"/project-smart-mirror/docs/api-specification/API Docs",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-smart-mirror/edit/main/documentation/docs/api-specification/API Docs.md",tags:[],version:"current",lastUpdatedBy:"Devin Rankin",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"API Documentation"},sidebar:"docsSidebar",previous:{title:"API Specification",permalink:"/project-smart-mirror/docs/category/api-specification"},next:{title:"Document Overview",permalink:"/project-smart-mirror/docs/api-specification/document-overview"}},o={},s=[{value:"Calander API",id:"calander-api",level:2},{value:"POST /calendar/create",id:"post-calendarcreate",level:3},{value:"PUT /calendar/update/{id}",id:"put-calendarupdateid",level:3},{value:"DELETE /calendar/delete/{id}",id:"delete-calendardeleteid",level:3},{value:"POST /calendar/event/add/{calendarId}",id:"post-calendareventaddcalendarid",level:3},{value:"PUT/calendar/event/update/{calendarId}/{eventId}",id:"putcalendareventupdatecalendarideventid",level:3},{value:"DELETE /calendar/event/delete/{calendarId}/{eventId}",id:"delete-calendareventdeletecalendarideventid",level:3},{value:"GET /calendar/events/{calendarId}",id:"get-calendareventscalendarid",level:3},{value:"Module Class API Documentation",id:"module-class-api-documentation",level:2}],i={toc:s};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"api-documentation"},"API Documentation"),(0,r.kt)("h2",{id:"calander-api"},"Calander API"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:"),(0,r.kt)("br",{parentName:"p"}),"\n","The Calendar API allows you to manage user calendars and events."),(0,r.kt)("h3",{id:"post-calendarcreate"},"POST /calendar/create"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:"),(0,r.kt)("br",{parentName:"p"}),"\n","Create a new calendar and store it in the database."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Valid Request Body:"),"     "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "title": String,\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Successful call:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 201,\n    "body": "A new calendar has been successfully created."\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Failed call:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 400,\n    "body": "Invalid request body."\n}\n')),(0,r.kt)("h3",{id:"put-calendarupdateid"},"PUT /calendar/update/{id}"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:"),(0,r.kt)("br",{parentName:"p"}),"\n","Update a calendar's data in the database."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Path Parameters:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"{id}: String")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Valid Request Body:"),"     "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "title": String,\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Successful call:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "body": "Calendar with ID: {id} has been updated."\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Failed call:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 404,\n    "body": "Calendar with ID: {id} does not exist."\n}\n')),(0,r.kt)("h3",{id:"delete-calendardeleteid"},"DELETE /calendar/delete/{id}"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:"),(0,r.kt)("br",{parentName:"p"}),"\n","Delete an existing calendar from the database."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Path Parameters:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"{id}: String")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Valid Request Body:"),"     "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "title": No request body required.\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Successful call:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "body": "Calendar with ID: {id} has been deleted."\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Failed call:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 404,\n    "body": "Calendar with ID: {id} does not exist."\n}\n')),(0,r.kt)("h3",{id:"post-calendareventaddcalendarid"},"POST /calendar/event/add/{calendarId}"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:"),(0,r.kt)("br",{parentName:"p"}),"\n","Add a new event to a specific calendar."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Path Parameters:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"{calendarId}: String")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Valid Request Body:"),"     "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "title": "String",\n    "description": "String",\n    "startTime": "String (DateTime format)",\n    "endTime": "String (DateTime format)",\n    "repeatRate": Integer,\n    "alertTime": "String (DateTime format)"\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Successful call:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 201,\n    "body": "A new event has been successfully added to the calendar."\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Failed call:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 404,\n    "body": "Calendar with ID: {calendarId} does not exist."\n}\n')),(0,r.kt)("h3",{id:"putcalendareventupdatecalendarideventid"},"PUT/calendar/event/update/{calendarId}/{eventId}"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:"),(0,r.kt)("br",{parentName:"p"}),"\n","Update an event in a specific calendar."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Path Parameters:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"{calendarId}: String"),(0,r.kt)("li",{parentName:"ul"},"{eventId}: String")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Valid Request Body:"),"     "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "title": "String",\n    "description": "String",\n    "startTime": "String (DateTime format)",\n    "endTime": "String (DateTime format)",\n    "repeatRate": Integer,\n    "alertTime": "String (DateTime format)"\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Successful call:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 201,\n    "body": "Event with ID: {eventId} has been updated."\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Failed call:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 404,\n    "body": "Calendar with ID: {calendarId} or event with ID: {eventId} does not exist."\n}\n')),(0,r.kt)("h3",{id:"delete-calendareventdeletecalendarideventid"},"DELETE /calendar/event/delete/{calendarId}/{eventId}"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:"),(0,r.kt)("br",{parentName:"p"}),"\n","Delete an event from a specific calendar."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Path Parameters:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"{calendarId}: String"),(0,r.kt)("li",{parentName:"ul"},"{eventId}: String")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Valid Request Body:"),"     "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "title": No request body required.\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Successful call:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "body": "Event with ID: {eventId} has been deleted."\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Failed call:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 404,\n    "body": "Calendar with ID: {calendarId} or event with ID: {eventId} does not exist."\n}\n')),(0,r.kt)("h3",{id:"get-calendareventscalendarid"},"GET /calendar/events/{calendarId}"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:"),(0,r.kt)("br",{parentName:"p"}),"\n","Retrieve a list of events from a specific calendar."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Path Parameters:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"{calendarId}: String")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Valid Request Body:"),"     "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "title": No request body required.\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Successful call:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n        "title": An array of event objects.\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Failed call:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 404,\n    "body": "Calendar with ID: {calendarId} does not exist."\n}\n')),(0,r.kt)("h2",{id:"module-class-api-documentation"},"Module Class API Documentation"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:"),(0,r.kt)("br",{parentName:"p"}),"\n","The Module class API allows the system to interface with subsequent submodules and widgets."))}c.isMDXComponent=!0}}]);