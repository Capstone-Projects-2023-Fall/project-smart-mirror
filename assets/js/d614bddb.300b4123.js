"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[6463],{3905:(e,t,i)=>{i.d(t,{Zo:()=>s,kt:()=>b});var l=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,l)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,l,a=function(e,t){if(null==e)return{};var i,l,a={},n=Object.keys(e);for(l=0;l<n.length;l++)i=n[l],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)i=n[l],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var p=l.createContext({}),d=function(e){var t=l.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},s=function(e){var t=d(e.components);return l.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},h=l.forwardRef((function(e,t){var i=e.components,a=e.mdxType,n=e.originalType,p=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),c=d(i),h=a,b=c["".concat(p,".").concat(h)]||c[h]||u[h]||n;return i?l.createElement(b,o(o({ref:t},s),{},{components:i})):l.createElement(b,o({ref:t},s))}));function b(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=i.length,o=new Array(n);o[0]=h;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r[c]="string"==typeof e?e:a,o[1]=r;for(var d=2;d<n;d++)o[d]=i[d];return l.createElement.apply(null,o)}return l.createElement.apply(null,i)}h.displayName="MDXCreateElement"},7353:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>n,metadata:()=>r,toc:()=>d});var l=i(7462),a=(i(7294),i(3905));const n={sidebar_position:3},o="Health",r={unversionedId:"api-specification/health-api",id:"api-specification/health-api",title:"Health",description:"public class Health",source:"@site/docs/api-specification/health-api.md",sourceDirName:"api-specification",slug:"/api-specification/health-api",permalink:"/project-smart-mirror/docs/api-specification/health-api",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-smart-mirror/edit/main/documentation/docs/api-specification/health-api.md",tags:[],version:"current",lastUpdatedBy:"Marcel Millan",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"CalculatorModel.java",permalink:"/project-smart-mirror/docs/api-specification/calculator-model-generated"},next:{title:"Calendar Module API Documentation",permalink:"/project-smart-mirror/docs/api-specification/calendar-api"}},p={},d=[{value:"<code>public class Health</code>",id:"public-class-health",level:2},{value:"<code>public int currentWeight</code>",id:"public-int-currentweight",level:2},{value:"<code>public int height</code>",id:"public-int-height",level:2},{value:"<code>public int weightGoal</code>",id:"public-int-weightgoal",level:2},{value:"<code>public int steps</code>",id:"public-int-steps",level:2},{value:"<code>public &lt;DATE,int&gt; weightHistory[][]</code>",id:"public-dateint-weighthistory",level:2},{value:"<code>public int bmi</code>",id:"public-int-bmi",level:2},{value:"<code>public void getWeight()</code>",id:"public-void-getweight",level:2},{value:"<code>public void getWeightGoal()</code>",id:"public-void-getweightgoal",level:2},{value:"<code>public void getUserStepData()</code>",id:"public-void-getuserstepdata",level:2},{value:"<code>public void getHeight()</code>",id:"public-void-getheight",level:2},{value:"<code>public void setWeightAtDate(int weight, DATE date)</code>",id:"public-void-setweightatdateint-weight-date-date",level:2},{value:"<code>public void setWeightGoal(int weightGoal)</code>",id:"public-void-setweightgoalint-weightgoal",level:2},{value:"<code>public void setSteps(int steps)</code>",id:"public-void-setstepsint-steps",level:2},{value:"<code>public void displayWeight()</code>",id:"public-void-displayweight",level:2},{value:"<code>public void displaySteps()</code>",id:"public-void-displaysteps",level:2},{value:"<code>public void displayBmi()</code>",id:"public-void-displaybmi",level:2},{value:"<code>public void disableWeightDisplay()</code>",id:"public-void-disableweightdisplay",level:2},{value:"<code>public void disableStepDisplay()</code>",id:"public-void-disablestepdisplay",level:2},{value:"<code>public void disableBmiDisplay()</code>",id:"public-void-disablebmidisplay",level:2},{value:"<code>public void calculateBmi()</code>",id:"public-void-calculatebmi",level:2}],s={toc:d};function c(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,l.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"health"},"Health"),(0,a.kt)("h2",{id:"public-class-health"},(0,a.kt)("inlineCode",{parentName:"h2"},"public class Health")),(0,a.kt)("p",null,"This class is responsible for getting inputs related to health and keeping track of this data."),(0,a.kt)("h2",{id:"public-int-currentweight"},(0,a.kt)("inlineCode",{parentName:"h2"},"public int currentWeight")),(0,a.kt)("p",null,"This is the current weight of the user."),(0,a.kt)("h2",{id:"public-int-height"},(0,a.kt)("inlineCode",{parentName:"h2"},"public int height")),(0,a.kt)("p",null,"This is the height of the user."),(0,a.kt)("h2",{id:"public-int-weightgoal"},(0,a.kt)("inlineCode",{parentName:"h2"},"public int weightGoal")),(0,a.kt)("p",null,"This is the goal weight the user wishes to get to."),(0,a.kt)("h2",{id:"public-int-steps"},(0,a.kt)("inlineCode",{parentName:"h2"},"public int steps")),(0,a.kt)("p",null,"This keeps track of the number of steps the user has taken."),(0,a.kt)("h2",{id:"public-dateint-weighthistory"},(0,a.kt)("inlineCode",{parentName:"h2"},"public <DATE,int> weightHistory[][]")),(0,a.kt)("p",null,"This keeps track of the user's weight history. The first entry of the array is the date followed by the second entry being the weight."),(0,a.kt)("h2",{id:"public-int-bmi"},(0,a.kt)("inlineCode",{parentName:"h2"},"public int bmi")),(0,a.kt)("p",null,"This is the BMI (body mass index) of the user."),(0,a.kt)("h2",{id:"public-void-getweight"},(0,a.kt)("inlineCode",{parentName:"h2"},"public void getWeight()")),(0,a.kt)("p",null,"Prompts the user to enter their weight and updates currentWeight."),(0,a.kt)("h2",{id:"public-void-getweightgoal"},(0,a.kt)("inlineCode",{parentName:"h2"},"public void getWeightGoal()")),(0,a.kt)("p",null,"Prompts the user to enter their weight goal and updates weightGoal."),(0,a.kt)("h2",{id:"public-void-getuserstepdata"},(0,a.kt)("inlineCode",{parentName:"h2"},"public void getUserStepData()")),(0,a.kt)("p",null,"Gets data from the user's apple watch api or fitbit api and updates steps"),(0,a.kt)("h2",{id:"public-void-getheight"},(0,a.kt)("inlineCode",{parentName:"h2"},"public void getHeight()")),(0,a.kt)("p",null,"Prompts the user to enter their height and updates height."),(0,a.kt)("h2",{id:"public-void-setweightatdateint-weight-date-date"},(0,a.kt)("inlineCode",{parentName:"h2"},"public void setWeightAtDate(int weight, DATE date)")),(0,a.kt)("p",null,"Stores currentWeight and the date it was entered into the database and updates weightHistory","[][]","."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Parameters:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"weight")," \u2014 is the current weight of the user"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"date")," \u2014 is the date the current weight was entered")))),(0,a.kt)("h2",{id:"public-void-setweightgoalint-weightgoal"},(0,a.kt)("inlineCode",{parentName:"h2"},"public void setWeightGoal(int weightGoal)")),(0,a.kt)("p",null,"Stores weightGoal into the database."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Parameters:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"weightGoal")," \u2014 is the goal weight of the user")))),(0,a.kt)("h2",{id:"public-void-setstepsint-steps"},(0,a.kt)("inlineCode",{parentName:"h2"},"public void setSteps(int steps)")),(0,a.kt)("p",null,"Stores steps into the database."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Parameters:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"steps")," \u2014 is the number of steps the user has taken")))),(0,a.kt)("h2",{id:"public-void-displayweight"},(0,a.kt)("inlineCode",{parentName:"h2"},"public void displayWeight()")),(0,a.kt)("p",null,"Displays currentWeight on the Smart Mirror."),(0,a.kt)("h2",{id:"public-void-displaysteps"},(0,a.kt)("inlineCode",{parentName:"h2"},"public void displaySteps()")),(0,a.kt)("p",null,"Displays steps on the Smart Mirror."),(0,a.kt)("h2",{id:"public-void-displaybmi"},(0,a.kt)("inlineCode",{parentName:"h2"},"public void displayBmi()")),(0,a.kt)("p",null,"Displays bmi on the Smart Mirror."),(0,a.kt)("h2",{id:"public-void-disableweightdisplay"},(0,a.kt)("inlineCode",{parentName:"h2"},"public void disableWeightDisplay()")),(0,a.kt)("p",null,"Stops displaying currentWeight on the Smart Mirror."),(0,a.kt)("h2",{id:"public-void-disablestepdisplay"},(0,a.kt)("inlineCode",{parentName:"h2"},"public void disableStepDisplay()")),(0,a.kt)("p",null,"Stops displaying steps on the Smart Mirror."),(0,a.kt)("h2",{id:"public-void-disablebmidisplay"},(0,a.kt)("inlineCode",{parentName:"h2"},"public void disableBmiDisplay()")),(0,a.kt)("p",null,"Stops displaying bmi on the Smart Mirror."),(0,a.kt)("h2",{id:"public-void-calculatebmi"},(0,a.kt)("inlineCode",{parentName:"h2"},"public void calculateBmi()")),(0,a.kt)("p",null,"Calculates the user's BMI and updates bmi."))}c.isMDXComponent=!0}}]);