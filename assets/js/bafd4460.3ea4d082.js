"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[9617],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=u(r),d=a,f=c["".concat(s,".").concat(d)]||c[d]||p[d]||i;return r?n.createElement(f,o(o({ref:t},m),{},{components:r})):n.createElement(f,o({ref:t},m))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},200:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:4},o="Features and Requirements",l={unversionedId:"requirements/features-and-requirements",id:"requirements/features-and-requirements",title:"Features and Requirements",description:"Functional Requirements",source:"@site/docs/requirements/features-and-requirements.md",sourceDirName:"requirements",slug:"/requirements/features-and-requirements",permalink:"/project-smart-mirror/docs/requirements/features-and-requirements",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-smart-mirror/edit/main/documentation/docs/requirements/features-and-requirements.md",tags:[],version:"current",lastUpdatedBy:"tonytran40",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"General Requirements",permalink:"/project-smart-mirror/docs/requirements/general-requirements"},next:{title:"Use-case descriptions",permalink:"/project-smart-mirror/docs/requirements/use-case-descriptions"}},s={},u=[{value:"Functional Requirements",id:"functional-requirements",level:2},{value:"Smart Mirror",id:"smart-mirror",level:3},{value:"Progressive Web App",id:"progressive-web-app",level:3},{value:"Non-Functional Requirements",id:"non-functional-requirements",level:2}],m={toc:u};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"features-and-requirements"},"Features and Requirements"),(0,a.kt)("h2",{id:"functional-requirements"},"Functional Requirements"),(0,a.kt)("h3",{id:"smart-mirror"},"Smart Mirror"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Time Display:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The mirror will showcase the time based on the user's chosen time zone within the PWA, ensuring accuracy and relevance."))),(0,a.kt)("li",{parentName:"ul"},"Weather Information:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Weather updates, determined by the user's specified zip code in the PWA, will be prominently displayed. Additionally, the mirror will suggest suitable outfits based on the weather forecast."))),(0,a.kt)("li",{parentName:"ul"},"Face Detection:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Incorporating advanced face detection technology, the mirror will recognize individuals, enabling personalized interactions and features."))),(0,a.kt)("li",{parentName:"ul"},"Infotainment Display:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Timers:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Users can set timers for their to-do lists and reminders via the PWA, and the mirror will display these countdowns."))),(0,a.kt)("li",{parentName:"ul"},"Notifications:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"display notifications set in the PWA, granting users access to important updates and reminders."))),(0,a.kt)("li",{parentName:"ul"},"Calendar Integration:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The mirror will seamlessly pull data from the calendar, showcasing upcoming events and commitments."))))),(0,a.kt)("li",{parentName:"ul"},"Sub-Profile Switching",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"A unique function will allow the automatic switch of sub-profiles once a user-defined timer from the PWA goes off, ensuring a personalized experience for each user.")))),(0,a.kt)("h3",{id:"progressive-web-app"},"Progressive Web App"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Personalized Settings and Preferences:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"In the settings, you have the power to define your mirror's interactions and display."))),(0,a.kt)("li",{parentName:"ul"},"User Profile Customization:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Set your gender, age, birthdate, and zip code effortlessly. The zip code helps in calculating the correct timezone for accurate weather updates on your mirror."))),(0,a.kt)("li",{parentName:"ul"},"Wake-on Approach Functionality:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Activate the Wake-on Approach feature, ensuring your mirror awakens from idle or sleep mode the moment you approach it."))),(0,a.kt)("li",{parentName:"ul"},"Dietary Goals and Health Management:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Define dietary objectives by setting your height, weight, and weight goals, empowering you to track and manage your health goals with ease."))),(0,a.kt)("li",{parentName:"ul"},"Multi-User Functionality:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Share the magic of your mirror with loved ones. Our app enables multiple users to enjoy a tailored experience."))),(0,a.kt)("li",{parentName:"ul"},"Switchable Sub-Profiles:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Switch between sub-profiles effortlessly, each with its unique settings and preferences. Whether it's a family member or a roommate, everyone can have their personalized mirror experience.")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"non-functional-requirements"},"Non-Functional Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Voice Command Integration:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Navigate and control apps/widgets effortlessly with the power of your voice. Simply speak your commands to switch between apps or customize widgets, adding a touch of futuristic convenience to your daily routine."))),(0,a.kt)("li",{parentName:"ul"},"Intuitive Hand Gesture Recognition:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Immerse yourself in an interactive experience with our hand gesture recognition feature. Effortless and intuitive hand movements let you interact with the mirror and access its functionalities with a wave or a gesture, making your interactions with the mirror more engaging and fluid."))),(0,a.kt)("li",{parentName:"ul"},"Advanced Facial Detection:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"With an impressive 80% accuracy and a swift response time of under 2 seconds, our system seamlessly recognizes faces. This ensures that the mirror is ready to cater to your personalized needs and preferences in no time, making your interactions smooth and efficient.")))))}c.isMDXComponent=!0}}]);