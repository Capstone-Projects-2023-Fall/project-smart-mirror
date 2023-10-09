"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[1838],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=r.createContext({}),u=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(a),h=i,f=m["".concat(o,".").concat(h)]||m[h]||c[h]||n;return a?r.createElement(f,l(l({ref:t},p),{},{components:a})):r.createElement(f,l({ref:t},p))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,l=new Array(n);l[0]=h;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:i,l[1]=s;for(var u=2;u<n;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},4093:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>n,metadata:()=>s,toc:()=>u});var r=a(7462),i=(a(7294),a(3905));const n={sidebar_position:3},l="Database Schema Diagram",s={unversionedId:"api-specification/Database-Schema",id:"api-specification/Database-Schema",title:"Database Schema Diagram",description:"Schema Diagram",source:"@site/docs/api-specification/Database-Schema.md",sourceDirName:"api-specification",slug:"/api-specification/Database-Schema",permalink:"/project-smart-mirror/docs/api-specification/Database-Schema",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-smart-mirror/edit/main/documentation/docs/api-specification/Database-Schema.md",tags:[],version:"current",lastUpdatedBy:"MWilcox35",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"System Overview",permalink:"/project-smart-mirror/docs/api-specification/system-overview"},next:{title:"CalculatorModel.java",permalink:"/project-smart-mirror/docs/api-specification/calculator-model-generated"}},o={},u=[{value:"Summary",id:"summary",level:2},{value:"Tables",id:"tables",level:2}],p={toc:u};function m(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"database-schema-diagram"},"Database Schema Diagram"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/Capstone-Projects-2023-Fall/project-smart-mirror/assets/74268497/c423f79b-a622-4fee-830b-6e822cae8ce7",alt:"Schema Diagram"})),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This schema represents a system where the user uses the CompanionApp to store various data types. Data includes calendar events, fitness information, weather information, and many more."),(0,i.kt)("li",{parentName:"ul"},"Each of the tables is associated with the ",(0,i.kt)("strong",{parentName:"li"},"CompanionApp* table. Each table will be using the "),"UserID* foreign key to establish relationships between the user and data.")),(0,i.kt)("h2",{id:"tables"},"Tables"),(0,i.kt)("h1",{id:"companionapp"},"CompanionApp"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Attributes:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"UserID: Primary key."),(0,i.kt)("li",{parentName:"ul"},"Username, PasswordHash, Email: Authentication-related data for the user."),(0,i.kt)("li",{parentName:"ul"},"FirstName, LastName: User's first and last names.")))),(0,i.kt)("h1",{id:"userdata"},"UserData"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Attributes:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"UserDataID: Primary Key."),(0,i.kt)("li",{parentName:"ul"},"DataTitle, DataDescription, DataType, DataContent: Information is for the user's Data")))),(0,i.kt)("h1",{id:"database"},"Database"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Attributes:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"DatabaseID: Primary key for each database entry."),(0,i.kt)("li",{parentName:"ul"},"DatabaseTitle, DatabaseDescription, DatabaseType, DatabaseData: These are information about Database")))),(0,i.kt)("h1",{id:"smartmirror"},"SmartMirror"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Attributes:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"MirrorID: Primary key."),(0,i.kt)("li",{parentName:"ul"},"MirrorName, MirrorLocation, ConfigurationDetails: This is all the information about the smart mirror setup.")))),(0,i.kt)("h1",{id:"accessrights"},"AccessRights"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Attributes: ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"AccessID: Primary Key."),(0,i.kt)("li",{parentName:"ul"},"AccessLevel: Level of access granted to the user for the smart mirror.")))),(0,i.kt)("h1",{id:"weatherinfo"},"WeatherInfo"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Attributes:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"WeatherInfoID: Primary Key."),(0,i.kt)("li",{parentName:"ul"},"City: City for which weather information is stored."),(0,i.kt)("li",{parentName:"ul"},"Temperature: Temperature data."),(0,i.kt)("li",{parentName:"ul"},"WeatherDescription: Description of the weather.")))),(0,i.kt)("h1",{id:"userpreferences"},"UserPreferences:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Attributes: ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"UserPreferencesID: Primary Key."),(0,i.kt)("li",{parentName:"ul"},"Theme: User's chosen theme."),(0,i.kt)("li",{parentName:"ul"},"Language: User's preferred language.")))),(0,i.kt)("h1",{id:"calendarinfo"},"CalendarInfo:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Attributes: ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"CalendarInfoID: Primary Key."),(0,i.kt)("li",{parentName:"ul"},"EventTitle: Title for the calendar events."),(0,i.kt)("li",{parentName:"ul"},"EventDescription: Will show event descriptions."),(0,i.kt)("li",{parentName:"ul"},"EventDate: Will have the date and time for the Event.")))),(0,i.kt)("h1",{id:"fitnessinfo"},"FitnessInfo:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Attributes:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"FitnessInfoID: Primary Key."),(0,i.kt)("li",{parentName:"ul"},"WorkoutType: Types of workout."),(0,i.kt)("li",{parentName:"ul"},"DurationInMinutes: Will have the duration of the workout."),(0,i.kt)("li",{parentName:"ul"},"CaloriesBurned: Calories that are burned."),(0,i.kt)("li",{parentName:"ul"},"CurrentWeight: Current weight for the User/"),(0,i.kt)("li",{parentName:"ul"},"Height: Height of the user."),(0,i.kt)("li",{parentName:"ul"},"WeightGoal: Set a goal for the user."),(0,i.kt)("li",{parentName:"ul"},"Steps: Number the steps the user has taken."),(0,i.kt)("li",{parentName:"ul"},"BMI: Body Mass Index."),(0,i.kt)("li",{parentName:"ul"},"WeightHistory: JSON array storing users' weight and date.")))),(0,i.kt)("h1",{id:"userid"},"UserID:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"All the UserIDs for the tables are foreign keys referring to CompanionApp.UserID associated with the specific table.")))}m.isMDXComponent=!0}}]);