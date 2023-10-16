"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[740],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var d=r.createContext({}),p=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(a),h=l,m=c["".concat(d,".").concat(h)]||c[h]||s[h]||i;return a?r.createElement(m,n(n({ref:t},u),{},{components:a})):r.createElement(m,n({ref:t},u))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,n=new Array(i);n[0]=h;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[c]="string"==typeof e?e:l,n[1]=o;for(var p=2;p<i;p++)n[p]=a[p];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},1357:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>n,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=a(7462),l=(a(7294),a(3905));const i={sidebar_position:3},n="CalculatorModel.java",o={unversionedId:"api-specification/calculator-model-generated",id:"api-specification/calculator-model-generated",title:"CalculatorModel.java",description:"(generated using Javadoc to Markdown)",source:"@site/docs/api-specification/calculator-model-generated.md",sourceDirName:"api-specification",slug:"/api-specification/calculator-model-generated",permalink:"/project-smart-mirror/docs/api-specification/calculator-model-generated",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-smart-mirror/edit/main/documentation/docs/api-specification/calculator-model-generated.md",tags:[],version:"current",lastUpdatedBy:"Tesla",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Database Schema Diagram",permalink:"/project-smart-mirror/docs/api-specification/Database-Schema"},next:{title:"Health",permalink:"/project-smart-mirror/docs/api-specification/health-api"}},d={},p=[{value:"<code>public class CalculatorModel</code>",id:"public-class-calculatormodel",level:2},{value:"<code>private double displayValue</code>",id:"private-double-displayvalue",level:2},{value:"<code>private double internalValue</code>",id:"private-double-internalvalue",level:2},{value:"<code>private String displayString</code>",id:"private-string-displaystring",level:2},{value:"<code>private String operation</code>",id:"private-string-operation",level:2},{value:"<code>private boolean start</code>",id:"private-boolean-start",level:2},{value:"<code>private boolean dot</code>",id:"private-boolean-dot",level:2},{value:"<code>public CalculatorModel()</code>",id:"public-calculatormodel",level:2},{value:"<code>public String getValue()</code>",id:"public-string-getvalue",level:2},{value:"<code>public void update(String text)</code>",id:"public-void-updatestring-text",level:2},{value:"<code>public double operationAdd(double rhs, double lhs)</code>",id:"public-double-operationadddouble-rhs-double-lhs",level:2}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"calculatormodeljava"},"CalculatorModel.java"),(0,l.kt)("p",null,"(generated using ",(0,l.kt)("a",{parentName:"p",href:"https://delight-im.github.io/Javadoc-to-Markdown/"},"Javadoc to Markdown"),")"),(0,l.kt)("h2",{id:"public-class-calculatormodel"},(0,l.kt)("inlineCode",{parentName:"h2"},"public class CalculatorModel")),(0,l.kt)("p",null,"This is the model of this MVC implementation of a calculator. It performs the functions of the calculator and keeps track of what the user has entered."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Author:")," Tom Bylander")),(0,l.kt)("h2",{id:"private-double-displayvalue"},(0,l.kt)("inlineCode",{parentName:"h2"},"private double displayValue")),(0,l.kt)("p",null,"This is the numeric value of the number the user is entering, or the number that was just calculated."),(0,l.kt)("h2",{id:"private-double-internalvalue"},(0,l.kt)("inlineCode",{parentName:"h2"},"private double internalValue")),(0,l.kt)("p",null,"This is the previous value entered or calculated."),(0,l.kt)("h2",{id:"private-string-displaystring"},(0,l.kt)("inlineCode",{parentName:"h2"},"private String displayString")),(0,l.kt)("p",null,"This is the String corresponding to what the user. is entering"),(0,l.kt)("h2",{id:"private-string-operation"},(0,l.kt)("inlineCode",{parentName:"h2"},"private String operation")),(0,l.kt)("p",null,"This is the last operation entered by the user."),(0,l.kt)("h2",{id:"private-boolean-start"},(0,l.kt)("inlineCode",{parentName:"h2"},"private boolean start")),(0,l.kt)("p",null,"This is true if the next digit entered starts a new value."),(0,l.kt)("h2",{id:"private-boolean-dot"},(0,l.kt)("inlineCode",{parentName:"h2"},"private boolean dot")),(0,l.kt)("p",null,"This is true if a decimal dot has been entered for the current value."),(0,l.kt)("h2",{id:"public-calculatormodel"},(0,l.kt)("inlineCode",{parentName:"h2"},"public CalculatorModel()")),(0,l.kt)("p",null,"Initializes the instance variables."),(0,l.kt)("h2",{id:"public-string-getvalue"},(0,l.kt)("inlineCode",{parentName:"h2"},"public String getValue()")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Returns:")," the String value of what was just calculated"),(0,l.kt)("p",{parentName:"li"},"or what the user is entering"))),(0,l.kt)("h2",{id:"public-void-updatestring-text"},(0,l.kt)("inlineCode",{parentName:"h2"},"public void update(String text)")),(0,l.kt)("p",null,"Updates the values maintained by the calculator based on the button that the user has just clicked."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Parameters:")," ",(0,l.kt)("inlineCode",{parentName:"li"},"text")," \u2014 is the name of the button that the user has just clicked")),(0,l.kt)("h2",{id:"public-double-operationadddouble-rhs-double-lhs"},(0,l.kt)("inlineCode",{parentName:"h2"},"public double operationAdd(double rhs, double lhs)")),(0,l.kt)("p",null,"Operation to add two numbers. ",(0,l.kt)("pre",null," operationAdd(3,2); // should equal 5.0 ")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Parameters:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"rhs")," \u2014 ",(0,l.kt)("inlineCode",{parentName:"li"},"double")," representing the right hand side of the operator"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"lhs")," \u2014 ",(0,l.kt)("inlineCode",{parentName:"li"},"double")," representing the left hand side of the operator"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Returns:")," ",(0,l.kt)("inlineCode",{parentName:"li"},"double"))))}c.isMDXComponent=!0}}]);