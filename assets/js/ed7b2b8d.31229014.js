"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[3961],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),h=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=h(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=h(a),p=n,u=d["".concat(l,".").concat(p)]||d[p]||m[p]||i;return a?r.createElement(u,s(s({ref:t},c),{},{components:a})):r.createElement(u,s({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:n,s[1]=o;for(var h=2;h<i;h++)s[h]=a[h];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5531:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>h});var r=a(7462),n=(a(7294),a(3905));const i={sidebar_position:1},s="Design",o={unversionedId:"system-architecture/design",id:"system-architecture/design",title:"Design",description:"Purpose",source:"@site/docs/system-architecture/design.md",sourceDirName:"system-architecture",slug:"/system-architecture/design",permalink:"/project-smart-mirror/docs/system-architecture/design",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-smart-mirror/edit/main/documentation/docs/system-architecture/design.md",tags:[],version:"current",lastUpdatedBy:"tonytran40",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"System Architecture",permalink:"/project-smart-mirror/docs/category/system-architecture"},next:{title:"API Specification",permalink:"/project-smart-mirror/docs/category/api-specification"}},l={},h=[{value:"Compenents",id:"compenents",level:2},{value:"Mirror Backend",id:"mirror-backend",level:3},{value:"Mirror Frontend",id:"mirror-frontend",level:2},{value:"Sequence Diagrams",id:"sequence-diagrams",level:2},{value:"Algorithm",id:"algorithm",level:2},{value:"State Diagrams",id:"state-diagrams",level:2},{value:"Server State Diagram",id:"server-state-diagram",level:5},{value:"Client State Diagram",id:"client-state-diagram",level:5},{value:"Database",id:"database",level:2}],c={toc:h};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"design"},"Design"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Purpose")),(0,n.kt)("p",null,"The Design Document - Part I Architecture describes the software architecture and how the requirements are mapped into the design. This document will be a combination of diagrams and text that describes what the diagrams are showing."),(0,n.kt)("h2",{id:"compenents"},"Compenents"),(0,n.kt)("h3",{id:"mirror-backend"},"Mirror Backend"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Alt text",src:a(8839).Z,width:"5325",height:"3240"}),"\n",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Figure 1 - Raspberry Pi Backend"))),(0,n.kt)("p",null,"Figure 1 shows a class diagram of the backend system that is on the mirror. "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The backend system is hosted on a Raspberry Pi."),(0,n.kt)("li",{parentName:"ul"},"The User interfaces directly with the Mirror"),(0,n.kt)("li",{parentName:"ul"},"The mirror system will consistently poll for updates, and update the respective onboard systems based on the information")),(0,n.kt)("h2",{id:"mirror-frontend"},"Mirror Frontend"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"frontend diagram",src:a(1513).Z,width:"1621",height:"1729"}),"\n",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Figure 2 - Frontend"))),(0,n.kt)("p",null,"Figure 2 shows a class diagram of the front end of the companion app."),(0,n.kt)("h2",{id:"sequence-diagrams"},"Sequence Diagrams"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Use Case #1 Custom Widgets"),": The user wants to view a custom widget on their current mirror layout so that they can view current stock quotes when they look at the mirror in the morning."),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Custom Widgets Description"),"The user: 1. Opens the companion app. 2. Navigates to the Widget section of the app. 3. Presses the Add New Widget button. 4. Selects a stock-related widget from the list of widgets available. 5. Chooses which sub-profile and where on the mirror the widget shall be added. 6. Saves their progress. 7. Walks up to the mirror to turn the mirror on. 8. Observes the mirror reflecting the user's changes.",(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/Capstone-Projects-2023-Fall/project-smart-mirror/assets/123747098/77f4e202-5f4a-4507-b4a8-98698a2a7d83",alt:"Use Case 1 - Custom Widgets"}))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Use Case #2 Custom Alerts"),": The user wants to view a custom widget on their current mirror layout so that they can view current stock quotes when they look at the mirror in the morning."),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Custom Alerts Description"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Opens the companion app."),(0,n.kt)("li",{parentName:"ol"},"Navigates to the Reminder section of the app."),(0,n.kt)("li",{parentName:"ol"},"Presses the New Reminder button."),(0,n.kt)("li",{parentName:"ol"},"Clicks on the title field and gives the reminder a title. (Optional) (There will be a default value.)"),(0,n.kt)("li",{parentName:"ol"},"Clicks on the time field to input the date and time that the timer should go off."),(0,n.kt)("li",{parentName:"ol"},"Saves their progress."),(0,n.kt)("li",{parentName:"ol"},"When the date and time of the reminder matches the current date and time, is alerted by the mirror turning on its screen, displaying the title, time and date of the alarm for 10 seconds, and playing a soft sound.\n",(0,n.kt)("img",{parentName:"li",src:"https://github.com/Capstone-Projects-2023-Fall/project-smart-mirror/assets/112418620/70902a24-e404-4c36-bd77-646c16b8507f",alt:"CustomAlerts"})))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Use Case #3 Sub-profiles"),": A user wants to create a sub-profile for someone else who also uses the mirror at 5pm on Sundays."),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Sub-profiles Description"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Opens the companion app."),(0,n.kt)("li",{parentName:"ol"},"Navigates to the Sub-Profile section of the app."),(0,n.kt)("li",{parentName:"ol"},"Clicks on the Create Sub-Profile button."),(0,n.kt)("li",{parentName:"ol"},"Clicks on the title field and gives the Sub-Profile a name."),(0,n.kt)("li",{parentName:"ol"},"Adds and customizes the elements on the mirror layout of the new Sub-Profile."),(0,n.kt)("li",{parentName:"ol"},"Inputs Sunday and 5pm into the Scheduled Switching field."),(0,n.kt)("li",{parentName:"ol"},"Saves their progress."),(0,n.kt)("li",{parentName:"ol"},"Is able to view their sub-profile on the mirror at 5pm on Sundays.\n",(0,n.kt)("img",{parentName:"li",src:"https://github.com/Capstone-Projects-2023-Fall/project-smart-mirror/assets/73204434/64ed78b2-2b71-4e37-a506-89d6d6119470",alt:"usecase3"})))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Use Case #4 Height/Weight Tracking"),": A user wants to set a weight goal from scratch and track their height and weight so they will have an easy way to access the knowledge needed to work towards their ideal weight."),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Height/Weight Tracking Description"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Opens the companion app."),(0,n.kt)("li",{parentName:"ol"},"Navigates to the Health section of the app."),(0,n.kt)("li",{parentName:"ol"},"Presses the Add Weight Goal button."),(0,n.kt)("li",{parentName:"ol"},"Inputs their desired weight."),(0,n.kt)("li",{parentName:"ol"},"Inputs their height and weight."),(0,n.kt)("li",{parentName:"ol"},"Saves their progress."),(0,n.kt)("li",{parentName:"ol"},"May update their height and weight when they wish."),(0,n.kt)("li",{parentName:"ol"},"Adds the built-in health widget to their sub-profile."),(0,n.kt)("li",{parentName:"ol"},"Is able to view their weight goal and weight history.\n",(0,n.kt)("img",{parentName:"li",src:"https://github.com/Capstone-Projects-2023-Fall/project-smart-mirror/assets/112418620/db79c4be-2220-4459-b44f-fa02a9755224",alt:"Height_Weight Tracking"}),(0,n.kt)("br",{parentName:"li"}),""))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Use Case #5 Rainy Day"),": A user that wants to be informed on what to wear throughout the day as they are rushing to get ready to leave the house for work."),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Rainy Day Description"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"They step in front of the mirror as they do their daily morning routine in the bathroom."),(0,n.kt)("li",{parentName:"ol"},"The camera detects the user\u2019s face with the camera and turns on the screen display behind the 2 way mirror."),(0,n.kt)("li",{parentName:"ol"},"The mirror's Rasberry Pi retrieves data from the Open Weather API."),(0,n.kt)("li",{parentName:"ol"},"The mirrors widget display shows a heavy rain forecast icon in the afternoon despite being currently clear as day."),(0,n.kt)("li",{parentName:"ol"},"The user remembers to grab their raincoat and umbrella and goes about their day avoiding the uncomfortableness of cold rain.\n",(0,n.kt)("img",{parentName:"li",src:"https://github.com/Capstone-Projects-2023-Fall/project-smart-mirror/assets/70285068/14a00b33-b869-43c2-982b-b520063bfc68",alt:"sequence diagram"})))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Use Case #6 ToDo List"),": A user that has a busy day full of important tasks to do wants to reference his Todo list on the cloud when they\u2019re at home"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"ToDo List Description"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The user opens up the smart mirror companion app and fills out his important task of checking in with his family member weekly after work."),(0,n.kt)("li",{parentName:"ol"},"The user goes about his normal routine, gets back home later on and views their mirror which reminds them of their task."),(0,n.kt)("li",{parentName:"ol"},"After being reminded, they call their family members and see how they are doing."),(0,n.kt)("li",{parentName:"ol"},"When the call is finished they open the companion app and check off their task for this week.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/Capstone-Projects-2023-Fall/project-smart-mirror/assets/74268497/3af74675-8621-435a-96a1-2f9e3bbda73b",alt:"Use case 6"}))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Use Case #7  Scheduling Assistant"),": A user that has a strict schedule of appointments with their clients wants to view their schedule at their workshop."),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Scheduling Assistant Description"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The user steps in front of their mirror at their workshop."),(0,n.kt)("li",{parentName:"ol"},"The camera detects the user\u2019s face with the camera and turns on the screen display behind the 2 way mirror."),(0,n.kt)("li",{parentName:"ol"},"User glances at the calendar display widget on the screen and sees that their next appointment is in 20 minutes."),(0,n.kt)("li",{parentName:"ol"},"They get ready for their appointment with their client."),(0,n.kt)("li",{parentName:"ol"},"The client asks to have a followup appointment next month, the user decides to mark this in their companion app."),(0,n.kt)("li",{parentName:"ol"},"They open their google calendar app and denote the information for this event."),(0,n.kt)("li",{parentName:"ol"},"They will click submit and the event will appear on their smart mirror the day of the event."),(0,n.kt)("li",{parentName:"ol"},"On the day of the next event, the event shows on the display.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Alt text",src:a(4179).Z,width:"1804",height:"1073"}))),(0,n.kt)("h2",{id:"algorithm"},"Algorithm"),(0,n.kt)("p",null,"A smart mirror employing face recognition to enable user access follows a straightforward process. Equipped with an embedded camera, the mirror captures live video of individuals in its vicinity. This video feed is then processed to detect faces, utilizing algorithms like Haar cascades or deep learning-based face detection models. Once a face is detected, a pre-trained face recognition model compares the facial features extracted from the detected face with those of authorized users stored in a database. If a match is found within an acceptable confidence level, the system authenticates the user and unlocks the smart mirror, granting access to personalized information such as calendar events, weather updates, or other tailored data. The mirror automatically locks when it no longer detects a recognized face, enhancing security and privacy. In cases where face recognition might not work optimally, a fallback mechanism such as a PIN code or traditional key could be provided for authentication, ensuring a reliable and secure user experience."),(0,n.kt)("h2",{id:"state-diagrams"},"State Diagrams"),(0,n.kt)("mermaid",{value:"---\ntitle: Server State Diagram\n---\nstateDiagram-v2\n[Waiting] --\x3e Displaying\nDisplaying --\x3e Processing\nProcessing --\x3e Requesting\nProcessing --\x3e Displaying\nRequesting --\x3e Recording\nRecording --\x3e Processing\nRequesting --\x3e Processing\nDisplaying --\x3e [Waiting]"}),(0,n.kt)("h5",{id:"server-state-diagram"},"Server State Diagram"),(0,n.kt)("p",null,"The diagram above shows the different states that Smart Mirror will operate in. First the mirror acts in the waiting state, while it idles and waits for a face to be recognized. Once a face is seen the program will start displaying and the user's default widgets will appear. When new data is to be requested, the state then moves to the processing stage where it will determine if the data is already captured in the database, if it is then it will move back to the displaying state. If the data is not in the database then the state will change to requesting, and then the required data will start to be requested. Once the new data is requested, it will be recorded in the database and then processed. Once the data is processed it will then be displayed. The mirror will move from the display state to the waiting state if a face is not recognized in a short period of time."),(0,n.kt)("mermaid",{value:"---\ntitle: Client State Diagram\n---\nstateDiagram-v2\nWaiting --\x3e Processing\nProcessing --\x3e Requesting\nProcessing --\x3e Sending\nRequesting --\x3e Sending\nSending --\x3e Waiting"}),(0,n.kt)("h5",{id:"client-state-diagram"},"Client State Diagram"),(0,n.kt)("p",null,"The diagram above shows the states for the client side companion application. Initially we begin in the waiting phase where we wait for user input. Once the user does an action in the application we move to the processing stage where we decide how to follow the user's commands. If we have the data already in our database we move to the sending to server state. Otherwise if we need to request data then we move to the requesting state. After requesting data, we then move to the recording state where we record the information in our database. Once the data is recorded we move to the sending state where we send the data the Rasberry Pi server. Then we move to the waiting state again for further instructions."),(0,n.kt)("h2",{id:"database"},"Database"),(0,n.kt)("mermaid",{value:"---\ntitle: Entity-Relation Diagram\n---\nerDiagram\n\n    ACCOUNT ||--|{ PROFILE : has\n    PROFILE ||--O{ CALENDAR : has\n    CALENDAR ||--O{ EVENT : contains\n    \n    ACCOUNT {\n        int accountID PK\n        string username\n        string email\n        string password\n    }\n    PROFILE{\n        int profileID PK\n        String name\n        String gender\n        int age\n        Date birthdate\n        int zipcode\n        int height\n        int weight\n        int weightGoal\n        String voiceCommand\n        boolean enableGesture\n        int accountID FK\n    }\n    CALENDAR{\n        int calendarID PK\n        String calendarTitle\n        int profileID FK\n    }\n    EVENT{\n        int eventID PK\n        String eventTitle\n        Date startTime\n        Date endTime\n        int repeatRate\n        Date alertTime\n        int calendarID FK\n    }\n    "}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Table Design")),(0,n.kt)("p",null,"The diagram above depicts the relationship between the entities to be stored in the database. All sensitive information will be encrypted.\nACCOUNT: Stores the account information of the user, which consists of their username, email and password.\nPROFILE: Stores the information of the one or several sub-profiles associated with the account of the user. This information includes their name, gender, age, birth date, zip code, height, weight, a chosen weight goal, a list of voice commands, and a toggle to enable motion gesture functionality.\nCALENDAR: Stores the information of the calendars of each sub-profile, if they have one. This includes the title of the calendar.\nEVENT: Stores the information of each event of a calendar. This includes the event's title, the starting time, the ending time, the times at which the event should repeat itself, and the time to alert the user."),(0,n.kt)("p",null,"PK: Primary Key, FK: Foreign Key"),(0,n.kt)("p",null,"A check list for architecture design is attached here ",(0,n.kt)("a",{parentName:"p",href:"https://templeu.instructure.com/courses/106563/files/16928870/download?wrap=1",title:"architecture_design_checklist.pdf"},"architecture","_","design","_","checklist.pdf"),"  and should be used as a guidance."))}d.isMDXComponent=!0},1513:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/frontend-82929c10bd87af9f3cfdb64709666eff.png"},8839:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/image-2-0d407fedc17f4eb63d62299d98bbec07.png"},4179:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/image-8f339559ea87ad136cf7367069509d1c.png"}}]);