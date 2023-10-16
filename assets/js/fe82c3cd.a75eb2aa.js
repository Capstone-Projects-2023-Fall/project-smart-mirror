"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[5888],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=l.createContext({}),p=function(e){var t=l.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return l.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,k=c["".concat(o,".").concat(m)]||c[m]||d[m]||r;return n?l.createElement(k,i(i({ref:t},s),{},{components:n})):l.createElement(k,i({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[c]="string"==typeof e?e:a,i[1]=u;for(var p=2;p<r;p++)i[p]=n[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5238:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>u,toc:()=>p});var l=n(7462),a=(n(7294),n(3905));const r={},i="Calendar Module API Documentation",u={unversionedId:"api-specification/calendar-api",id:"api-specification/calendar-api",title:"Calendar Module API Documentation",description:"The CalendarModule is what controls the calendar functionality of the mirror.",source:"@site/docs/api-specification/calendar-api.md",sourceDirName:"api-specification",slug:"/api-specification/calendar-api",permalink:"/project-smart-mirror/docs/api-specification/calendar-api",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-smart-mirror/edit/main/documentation/docs/api-specification/calendar-api.md",tags:[],version:"current",lastUpdatedBy:"mars123123",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Health",permalink:"/project-smart-mirror/docs/api-specification/health-api"},next:{title:"Module Class API Documentation",permalink:"/project-smart-mirror/docs/api-specification/modules-api"}},o={},p=[{value:"<code>CalendarModule</code> Class",id:"calendarmodule-class",level:3},{value:"<code>Calendar</code> Class",id:"calendar-class",level:3},{value:"<code>Event</code> Class",id:"event-class",level:3}],s={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,l.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"calendar-module-api-documentation"},"Calendar Module API Documentation"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"CalendarModule")," is what controls the calendar functionality of the mirror."),(0,a.kt)("h3",{id:"calendarmodule-class"},(0,a.kt)("inlineCode",{parentName:"h3"},"CalendarModule")," Class"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Properties")),(0,a.kt)("p",null,"calendars: Calendar[]"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A list of Calendars owned by the user.")),(0,a.kt)("p",null,"getCalendar(int): Calendar"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Takes an integer representing the ID of a calendar. Outputs the calendar object associated with that ID.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Methods:")),(0,a.kt)("p",null,"addCalendar():"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Adds a calendar to the list of Calendar objects in the calendars property.")),(0,a.kt)("p",null,"deleteCalendar(int):"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Deletes a calendar in the list of Calendar objects associated with a given integer that represents the calendar's ID.")),(0,a.kt)("p",null,"editEvent(int):"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Edits an event in a calendar with a given int that represents the calendar's ID.")),(0,a.kt)("p",null,"displayAlert():"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Displays an alert for a calendar event.")),(0,a.kt)("h3",{id:"calendar-class"},(0,a.kt)("inlineCode",{parentName:"h3"},"Calendar")," Class"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Properties")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Calendar")," holds information pertaining to a single calendar."),(0,a.kt)("p",null,"calendarID: int"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"An integer representation of the calendar's ID.")),(0,a.kt)("p",null,"calendarTitle: String"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A String which holds the title of the calendar.")),(0,a.kt)("p",null,"events: Event[]"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"An array of Event objects that holds each event associated with the calendar.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Methods")),(0,a.kt)("p",null,"GetID(): int"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Returns the ID of the calendar.")),(0,a.kt)("p",null,"GetTitle(): String"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Returns the title of the calendar.")),(0,a.kt)("p",null,"GetEvent(): Event"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Returns an Event object from the list of events in the calendar.")),(0,a.kt)("p",null,"AddEvent():"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Adds an Event object to the calendar.")),(0,a.kt)("p",null,"DeleteEvent(int):"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Deletes an event from the calendar using an event's event ID.")),(0,a.kt)("p",null,"EditEvent(int, int, String):"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Edits an event from the list of events in the calendar using the target event's event ID, an integer which determines the field to overwrite, and a String representation of what to overwrite the field with.")),(0,a.kt)("h3",{id:"event-class"},(0,a.kt)("inlineCode",{parentName:"h3"},"Event")," Class"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Event")," holds information pertaining to a single event from a Calendar object."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Properties")),(0,a.kt)("p",null,"eventID: int"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The event's ID.")),(0,a.kt)("p",null,"eventTitle: String"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The event's title.")),(0,a.kt)("p",null,"eventDesc: String"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A description of the event.")),(0,a.kt)("p",null,"startTIme: DateTime"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The time and date at which the event starts.")),(0,a.kt)("p",null,"endTime: DateTime"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The time and date at which the event ends.")),(0,a.kt)("p",null,"repeatRate: int"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The number of days that must pass for the event to be repeated.")),(0,a.kt)("p",null,"alertTime: DateTime"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The time and date at which the user will receive an alert about the event.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Methods")),(0,a.kt)("p",null,"GetID(): int"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Returns the event's ID.")),(0,a.kt)("p",null,"GetTitle(): String"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Returns the event's title.")),(0,a.kt)("p",null,"GetDesc(): String"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Returns the event's description.")),(0,a.kt)("p",null,"GetStartTime(): DateTime"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Returns the event's starting time.")),(0,a.kt)("p",null,"GetEndTime(): DateTime"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Returns the event's ending time.")),(0,a.kt)("p",null,"GetRepeatRate(): int"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Returns the repeat rate of the event.")),(0,a.kt)("p",null,"GetAlertTime(): DateTime"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Returns the alert time.")),(0,a.kt)("p",null,"SetTitle(String):"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Sets the title attribute to the given string.")),(0,a.kt)("p",null,"SetDesc(String):"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Sets the description attribute to the given string.")),(0,a.kt)("p",null,"SetStartTime(DateTime):"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Sets the starting time attribute to the given DateTime object.")),(0,a.kt)("p",null,"SetEndTime(DateTime):"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Sets the ending time attribute to the given DateTime object.")),(0,a.kt)("p",null,"SetRepeatTime(int):"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Sets the repeat time attribute to the given integer.")),(0,a.kt)("p",null,"SetAlertTime(DateTIme):"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Sets the alert time attribute to the given DateTime object.")))}c.isMDXComponent=!0}}]);