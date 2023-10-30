"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[1996],{3905:(e,t,r)=>{r.d(t,{Zo:()=>h,kt:()=>c});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},h=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),d=u(r),p=n,c=d["".concat(l,".").concat(p)]||d[p]||m[p]||i;return r?a.createElement(c,s(s({ref:t},h),{},{components:r})):a.createElement(c,s({ref:t},h))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:n,s[1]=o;for(var u=2;u<i;u++)s[u]=r[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2680:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const i={sidebar_position:2},s="Integration tests",o={unversionedId:"testing/integration-testing",id:"testing/integration-testing",title:"Integration tests",description:"Tests to demonstrate each use-case based on the use-case descriptions and the sequence diagrams. External input should be provided via mock objects and results verified via mock objects. Integration tests should not require manual entry of data nor require manual interpretation of results.",source:"@site/docs/testing/integration-testing.md",sourceDirName:"testing",slug:"/testing/integration-testing",permalink:"/project-smart-mirror/docs/testing/integration-testing",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-smart-mirror/edit/main/documentation/docs/testing/integration-testing.md",tags:[],version:"current",lastUpdatedBy:"gregory-shakarjian",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Unit tests",permalink:"/project-smart-mirror/docs/testing/unit-testing"},next:{title:"Acceptance test",permalink:"/project-smart-mirror/docs/testing/acceptence-testing"}},l={},u=[{value:"Use Case 1 - Custom Widgets",id:"use-case-1---custom-widgets",level:2},{value:"Assertions",id:"assertions",level:3},{value:"Use Case 2 - Custom Alerts",id:"use-case-2---custom-alerts",level:2},{value:"Assertions",id:"assertions-1",level:3},{value:"Use Case 3 - Sub-Profiles",id:"use-case-3---sub-profiles",level:2},{value:"Assertions",id:"assertions-2",level:3},{value:"Use Case 5 - Rainy Day Fit\u200b",id:"use-case-5---rainy-day-fit",level:2},{value:"Assertions",id:"assertions-3",level:3},{value:"Use Case 6 - Todo List",id:"use-case-6---todo-list",level:2},{value:"Assertions",id:"assertions-4",level:3},{value:"Use Case 7 - Scheduling Assistant",id:"use-case-7---scheduling-assistant",level:2}],h={toc:u};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"integration-tests"},"Integration tests"),(0,n.kt)("p",null,"Tests to demonstrate each use-case based on the use-case descriptions and the sequence diagrams. External input should be provided via mock objects and results verified via mock objects. Integration tests should not require manual entry of data nor require manual interpretation of results."),(0,n.kt)("h2",{id:"use-case-1---custom-widgets"},"Use Case 1 - Custom Widgets"),(0,n.kt)("p",null,"The user wants to view a custom widget on their current mirror layout.\nThe user:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Opens the companion app."),(0,n.kt)("li",{parentName:"ol"},"Navigates to the Widget section of the app."),(0,n.kt)("li",{parentName:"ol"},"Presses the Add New Widget button."),(0,n.kt)("li",{parentName:"ol"},"Selects a stock-related widget from the list of widgets available."),(0,n.kt)("li",{parentName:"ol"},"Chooses which sub-profile and where on the mirror the widget shall be added."),(0,n.kt)("li",{parentName:"ol"},"Saves their progress."),(0,n.kt)("li",{parentName:"ol"},"Walks up to the mirror to turn the mirror on."),(0,n.kt)("li",{parentName:"ol"},"Observes the mirror reflecting the user's changes.")),(0,n.kt)("h3",{id:"assertions"},"Assertions"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The stock-related Widget shall appears in the selected sub-profile's widget list."),(0,n.kt)("li",{parentName:"ul"},"The Widget shall be placed in the correct position on the mirror.")),(0,n.kt)("h2",{id:"use-case-2---custom-alerts"},"Use Case 2 - Custom Alerts"),(0,n.kt)("p",null,"The user wants to view a custom widget on their current mirror layout so that they can view current stock quotes when they look at the mirror in the morning.\nThe user:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Opens the companion app."),(0,n.kt)("li",{parentName:"ol"},"Navigates to the Reminder section of the app."),(0,n.kt)("li",{parentName:"ol"},"Presses the New Reminder button."),(0,n.kt)("li",{parentName:"ol"},"Clicks on the title field and gives the reminder a title. (Optional) (There will be a default value.)"),(0,n.kt)("li",{parentName:"ol"},"Clicks on the time field to input the date and time that the timer should go off."),(0,n.kt)("li",{parentName:"ol"},"Saves their progress."),(0,n.kt)("li",{parentName:"ol"},"When the date and time of the reminder matches the current date and time, is alerted by the mirror turning on its screen, displaying the title, time and date of the alarm for 10 seconds, and playing a soft sound.")),(0,n.kt)("h3",{id:"assertions-1"},"Assertions"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The smart mirror will turn on at the time of the alert"),(0,n.kt)("li",{parentName:"ul"},"The smart mirror will display the title, time, and date of the alert"),(0,n.kt)("li",{parentName:"ul"},"The smart mirror will play a soft sound at the time of the alert")),(0,n.kt)("h2",{id:"use-case-3---sub-profiles"},"Use Case 3 - Sub-Profiles"),(0,n.kt)("p",null,"A user wants to create a sub-profile for someone else who also uses the mirror at 5 p.m. on Sundays."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Opens the companion app."),(0,n.kt)("li",{parentName:"ol"},"Navigates to the Sub-Profile section of the app."),(0,n.kt)("li",{parentName:"ol"},"Clicks on the Create Sub-Profile button."),(0,n.kt)("li",{parentName:"ol"},"Clicks on the title field and gives the Sub-Profile a name."),(0,n.kt)("li",{parentName:"ol"},"Adds and customizes the elements on the mirror layout of the new Sub-Profile."),(0,n.kt)("li",{parentName:"ol"},"Inputs Sunday and 5pm into the Scheduled Switching field."),(0,n.kt)("li",{parentName:"ol"},"Saves their progress."),(0,n.kt)("li",{parentName:"ol"},"Is able to view their sub-profile on the mirror at 5pm on Sundays.")),(0,n.kt)("h3",{id:"assertions-2"},"Assertions"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'After clicking the "Create Sub-Profile" button, a new sub-profile should generated and user can assign a name to the sub-profile. '),(0,n.kt)("li",{parentName:"ul"},"The new sub-profile should be successfully customized and saved. "),(0,n.kt)("li",{parentName:"ul"},'When the user inputs "Sunday" and "5 p.m." into the Scheduled Switching field, it should accept and save this schedule for the sub-profile without errors.'),(0,n.kt)("li",{parentName:"ul"},"After making changes, the user can save their progress and at 5 p.m. on a Sunday, the mirror should automatically switch to the newly created sub-profile.")),(0,n.kt)("h2",{id:"use-case-5---rainy-day-fit"},"Use Case 5 - Rainy Day Fit\u200b"),(0,n.kt)("p",null,"A user that wants to be informed on what to wear throughout the day as they are rushing to get ready to leave the house for work."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Steps in front of the mirror as they do their daily morning routine in the bathroom."),(0,n.kt)("li",{parentName:"ol"},"Is detected by the camera, which turns on the screen display behind the 2 way mirror."),(0,n.kt)("li",{parentName:"ol"},"Sees a heavy rain forecast in the afternoon displayed by the weather widget, despite being currently clear as day."),(0,n.kt)("li",{parentName:"ol"},"Remembers to grab their raincoat and umbrella and goes about their day avoiding the uncomfortableness of cold rain.")),(0,n.kt)("h3",{id:"assertions-3"},"Assertions"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"When a user stands in front of the mirror, the camera detects their face and triggers the display to turn on. "),(0,n.kt)("li",{parentName:"ul"},"The Raspberry Pi, which controls the mirror, successfully retrieves weather data from the Open Weather API and displays a heavy rain forecast for the afternoon, even if the current   weather is clear. "),(0,n.kt)("li",{parentName:"ul"},"The user remembers to grab their raincoat and umbrella before heading out. ")),(0,n.kt)("h2",{id:"use-case-6---todo-list"},"Use Case 6 - Todo List"),(0,n.kt)("p",null,"A user that has a busy day full of important tasks to do wants to reference his Todo list on the cloud when they\u2019re at home."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Opens up the smart mirror companion app and fills out his important task of checking in with his family member weekly after work."),(0,n.kt)("li",{parentName:"ol"},"Goes about his normal routine, gets back home later on and views their mirror which reminds them of their task."),(0,n.kt)("li",{parentName:"ol"},"Is reminded to call their family member, so they call to see how they are doing."),(0,n.kt)("li",{parentName:"ol"},"Checks off their task for this week in the PWA.")),(0,n.kt)("h3",{id:"assertions-4"},"Assertions"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"After the user adds all his task through the CompanionApp, it will display on the Smart Mirror"),(0,n.kt)("li",{parentName:"ul"},"Task will be deleted when completed"),(0,n.kt)("li",{parentName:"ul"},"The list will be deleted when the user completes all the tasks.")),(0,n.kt)("h2",{id:"use-case-7---scheduling-assistant"},"Use Case 7 - Scheduling Assistant"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Description"),": A user with a busy schedule of appointments at their workshop wants to efficiently view and manage their appointments using the smart mirror."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"The User:"),":"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Steps in front of their smart mirror located in their workshop."),(0,n.kt)("li",{parentName:"ol"},"The built-in camera detects the user and activates the screen display behind the two-way mirror."),(0,n.kt)("li",{parentName:"ol"},"Glances at the calendar display widget on the screen and notices that their next appointment is scheduled for 20 minutes from now."),(0,n.kt)("li",{parentName:"ol"},"Gets ready for their upcoming appointment with their client."),(0,n.kt)("li",{parentName:"ol"},"The client requests a follow-up meeting next month."),(0,n.kt)("li",{parentName:"ol"},"The user decides to add this follow-up appointment to their schedule."),(0,n.kt)("li",{parentName:"ol"},"Opens their Google Calendar app using the mirror's interface and enters the event details, including the date, time, and client information."),(0,n.kt)("li",{parentName:"ol"},'After entering the information, the user clicks the "Submit" button, and the event is automatically synchronized with their Google Calendar.'),(0,n.kt)("li",{parentName:"ol"},"On the day of the follow-up appointment, sees the event displayed on the smart mirror's screen.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Assertions"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The smart mirror accurately displays the user's upcoming appointments and updates in real-time."),(0,n.kt)("li",{parentName:"ul"},"Adding, editing, or removing appointments through the mirror's interface seamlessly synchronizes with the user's Google Calendar."),(0,n.kt)("li",{parentName:"ul"},"The mirror effectively assists the user in managing their schedule, enhancing productivity and time management.")))}d.isMDXComponent=!0}}]);