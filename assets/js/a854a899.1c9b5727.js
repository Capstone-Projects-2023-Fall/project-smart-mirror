"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[3196],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=i,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1317:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),i=(r(7294),r(3905));const o={sidebar_position:1},a="System Overview",s={unversionedId:"requirements/system-overview",id:"requirements/system-overview",title:"System Overview",description:"Project Abstract",source:"@site/docs/requirements/system-overview.md",sourceDirName:"requirements",slug:"/requirements/system-overview",permalink:"/project-smart-mirror/docs/requirements/system-overview",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-smart-mirror/edit/main/documentation/docs/requirements/system-overview.md",tags:[],version:"current",lastUpdatedBy:"Rifat",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Requirements Specification",permalink:"/project-smart-mirror/docs/category/requirements-specification"},next:{title:"System Block Diagram",permalink:"/project-smart-mirror/docs/requirements/system-block-diagram"}},c={},l=[{value:"Project Abstract",id:"project-abstract",level:2},{value:"Background",id:"background",level:2},{value:"Conceptual Design",id:"conceptual-design",level:2}],u={toc:l};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"system-overview"},"System Overview"),(0,i.kt)("h2",{id:"project-abstract"},"Project Abstract"),(0,i.kt)("p",null,"Traditional mirrors serve a singular purpose: reflecting our physical appearances. However, they remain underutilized in providing value beyond this basic function. In an increasingly connected world, individuals seek efficient and personalized ways to access information and streamline their daily routines. The absence of smart, interactive mirrors in our homes represents an untapped potential for enhancing daily life. As a solution, such mirrors already exist."),(0,i.kt)("p",null,"However, many of these mirrors lack usability for non-tech-savvy individuals. The Smart Mirror project aims to develop an innovative and interactive mirror that focuses on ease of use and simplicity with embedded technology, integrating seamlessly into the lives of users. Smart Mirror will provide real-time information, personalized content, and an interactive user experience. It will display not only the time, date, and weather forecast but also enable users to access their calendars, check news headlines, monitor their fitness data, and many other modules."),(0,i.kt)("p",null,"Furthermore, the Smart Mirror will offer customization options, allowing users to tailor its interface and choose from various widgets to display information relevant to their unique routines. By leveraging cutting-edge hardware and software, this project will create a functional and elegant addition to modern homes. Smart Mirror project seeks to bridge the gap between traditional mirrors and the digital age, addressing the need for efficient and personalized information access in our daily lives."),(0,i.kt)("h2",{id:"background"},"Background"),(0,i.kt)("p",null,"The Smart Mirror project is similar to other tools such as ",(0,i.kt)("a",{parentName:"p",href:"https://docs.magicmirror.builders/"},"MagicMirror"),'. These tools are tedious and difficult to set up for users who are not tech-savvy. Because of this, Smart Mirror aims to build on top of other projects, by including an in-built functional "app store" in the companion PWA (progressive web app) to install open-source modules with the tap of a button. Smart Mirror aims to differentiate itself through its ease of use.'),(0,i.kt)("h2",{id:"conceptual-design"},"Conceptual Design"),(0,i.kt)("p",null,"The Smart Mirror display will be handled using a ",(0,i.kt)("inlineCode",{parentName:"p"},"Raspberry Pi")," due to its simple and lightweight design. Smart Mirror will use computer vision via ",(0,i.kt)("inlineCode",{parentName:"p"},"OpenCV")," to detect when a user steps in front of the mirror, and then data will be sent to our frontend where we can display the user's modules/widgets and miscellaneous information. Our PWA will be present for users to change features on the mirror in real time."))}d.isMDXComponent=!0}}]);