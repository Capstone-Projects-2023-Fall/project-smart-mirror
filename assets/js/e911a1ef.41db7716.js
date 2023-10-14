"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[1058],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var i=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=i.createContext({}),l=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(r),u=a,h=p["".concat(c,".").concat(u)]||p[u]||m[u]||n;return r?i.createElement(h,o(o({ref:t},d),{},{components:r})):i.createElement(h,o({ref:t},d))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<n;l++)o[l]=r[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8962:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var i=r(7462),a=(r(7294),r(3905));const n={sidebar_position:1},o="System Overview",s={unversionedId:"api-specification/system-overview",id:"api-specification/system-overview",title:"System Overview",description:"Project Abstract",source:"@site/docs/api-specification/system-overview.md",sourceDirName:"api-specification",slug:"/api-specification/system-overview",permalink:"/project-smart-mirror/docs/api-specification/system-overview",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-smart-mirror/edit/main/documentation/docs/api-specification/system-overview.md",tags:[],version:"current",lastUpdatedBy:"mars123123",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Document Overview",permalink:"/project-smart-mirror/docs/api-specification/document-overview"},next:{title:"Database Schema Diagram",permalink:"/project-smart-mirror/docs/api-specification/Database-Schema"}},c={},l=[{value:"Project Abstract",id:"project-abstract",level:2},{value:"Background",id:"background",level:2},{value:"Conceptual Design",id:"conceptual-design",level:2},{value:"General Overview of Architecture",id:"general-overview-of-architecture",level:2}],d={toc:l};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"system-overview"},"System Overview"),(0,a.kt)("h2",{id:"project-abstract"},"Project Abstract"),(0,a.kt)("p",null,"The Smart Mirror project aims to develop an innovative and interactive mirror with embedded technology to enhance the daily lives of users. This mirror will serve as more than just a reflective surface; it will provide real-time information, personalized content, and an interactive user experience.\nThe Smart Mirror will incorporate features such as displaying the time, date, and weather forecast, as well as enabling users to access their calendar, news headlines, and fitness data. Users will have the option to customize the mirror's interface and choose from various widgets to display information relevant to their daily routine.\nThis project seeks to create a seamless integration of technology into the everyday routines of users, making their morning routines more efficient and keeping them informed throughout the day. It will utilize cutting-edge hardware and software to achieve its objectives, providing an elegant and functional addition to any modern home."),(0,a.kt)("h2",{id:"background"},"Background"),(0,a.kt)("p",null,"Traditional mirrors serve a singular purpose: reflection. In contrast, the Smart Mirror project aims to transform this everyday object into a multifunctional, intelligent device. The concept of smart mirrors is not entirely new, with some commercial products available on the market, but these often come at a high cost and lack customization options.\nThe Smart Mirror project seeks to address these limitations by offering an affordable, open-source solution that can be tailored to individual preferences. By utilizing readily available components such as a two-way mirror, a high-resolution display, a Raspberry Pi, and various sensors, this project aims to create a cost-effective and accessible smart mirror.\nThe motivation behind this project is to provide users with a valuable addition to their homes that can streamline their daily routines and keep them informed. Whether it's checking the weather while getting dressed, reviewing their schedule before leaving the house, or receiving the latest news updates, the Smart Mirror aims to make these tasks effortless and integrated into the mirror itself.\nBy providing an open-source platform, this project also encourages further innovation in the field of smart mirrors, allowing developers and hobbyists to contribute to its growth and customization. In summary, the Smart Mirror project represents a fusion of technology and everyday life, enhancing user experiences and setting the stage for future advancements in smart home devices."),(0,a.kt)("h2",{id:"conceptual-design"},"Conceptual Design"),(0,a.kt)("p",null,"The Smart Mirror and Companion App system is a unique combination of hardware and software that is designed to upgrade the concept of a mirror into an adaptable and interactive smart home device. Our Smart Mirror app integrates hardware, including a Raspberry Pi, two-way mirror, display panel, camera, and microphone, with a software stack featuring Python and Java. The mirror's functions are controlled by a custom application on the Raspberry Pi, which also enables user interactions. Voice recognition technology like Azure is integrated with voice commands. We incorporate the Open Weather API to display real-time weather information on the mirror, providing a seamless and user-friendly experience. In addition to this, we utilize Next.js for front-end development, creating a dynamic and responsive UI with real-time updates and interactive features. "),(0,a.kt)("h2",{id:"general-overview-of-architecture"},"General Overview of Architecture"),(0,a.kt)("p",null,"The architecture of our Smart Mirror system contains three core components: the backend, the frontend, and the database. The backend handles data processing, user management, and external service communication through APIs. It serves as the center hub that corresponds to data and provides a smooth user experience. The front end is represented by a web application that provides the user interface and interaction. Users can customize their mirror, give voice commands, and access current information. Finally, the database enhances personalization by storing user profiles, preferences, and widget configurations."))}p.isMDXComponent=!0}}]);