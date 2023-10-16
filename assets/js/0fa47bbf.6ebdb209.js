"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[6726],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return r?a.createElement(k,l(l({ref:t},c),{},{components:r})):a.createElement(k,l({ref:t},c))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},931:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const i={},l="Weather Class API Documentation",o={unversionedId:"api-specification/weather-api",id:"api-specification/weather-api",title:"Weather Class API Documentation",description:"Purpose:",source:"@site/docs/api-specification/weather-api.md",sourceDirName:"api-specification",slug:"/api-specification/weather-api",permalink:"/project-smart-mirror/docs/api-specification/weather-api",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-smart-mirror/edit/main/documentation/docs/api-specification/weather-api.md",tags:[],version:"current",lastUpdatedBy:"Tesla",frontMatter:{},sidebar:"docsSidebar",previous:{title:"System-Core",permalink:"/project-smart-mirror/docs/api-specification/systemcore-api"},next:{title:"Test Procedures",permalink:"/project-smart-mirror/docs/category/test-procedures"}},p={},s=[{value:"<code>Weather</code> Class",id:"weather-class",level:3},{value:"<code>SetLocation(zipCode: str)</code>",id:"setlocationzipcode-str",level:2},{value:"<code>GetCurrentForecast() -&gt; dict</code>",id:"getcurrentforecast---dict",level:2},{value:"<code>GetDailyForecast() -&gt; dict</code>",id:"getdailyforecast---dict",level:2},{value:"<code>GetWeeklyForecast() -&gt; dict</code>",id:"getweeklyforecast---dict",level:2},{value:"<code>GetWeatherAlerts() -&gt; list</code>",id:"getweatheralerts---list",level:2},{value:"<code>GetAirQuality() -&gt; str</code>",id:"getairquality---str",level:2},{value:"<code>GetWindSpeed() -&gt; float</code>",id:"getwindspeed---float",level:2},{value:"<code>GetWeatherIcon() -&gt; str</code>",id:"getweathericon---str",level:2},{value:"<code>GetDateTime() -&gt; str</code>",id:"getdatetime---str",level:2},{value:"<code>GetHumidity() -&gt; int</code>",id:"gethumidity---int",level:2},{value:"<code>RecommendOutfit() -&gt; str</code>",id:"recommendoutfit---str",level:2},{value:"<code>CheckAlerts(zipCode: string) -&gt; WeatherAlert[]</code>",id:"checkalertszipcode-string---weatheralert",level:2},{value:"<code>WeatherAlert</code> Class",id:"weatheralert-class",level:2},{value:"<code>Create(AlertData: object) -&gt; WeatherAlert</code>",id:"createalertdata-object---weatheralert",level:2},{value:"<code>GetAlertType() -&gt; str</code>",id:"getalerttype---str",level:3},{value:"<code>GetDescription() -&gt; str</code>",id:"getdescription---str",level:2},{value:"<code>GetTimestamp() -&gt; Date</code>",id:"gettimestamp---date",level:2}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"weather-class-api-documentation"},"Weather Class API Documentation"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Purpose:"),"\nThe ",(0,n.kt)("inlineCode",{parentName:"p"},"Weather")," class provides functionality to retrieve weather-related information for a specific location."),(0,n.kt)("h3",{id:"weather-class"},(0,n.kt)("inlineCode",{parentName:"h3"},"Weather")," Class"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Data Fields:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"zipCode")," (str): The ZIP code for the location."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"currentTemperature")," (float): The current temperature at the specified location."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"currentPrecipitation"),' (str): The current precipitation status (e.g., "Rain," "Snow," "Clear," etc.).'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"currentAirQuality")," (str): The current air quality index (AQI) at the specified location.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Methods:")),(0,n.kt)("h2",{id:"setlocationzipcode-str"},(0,n.kt)("inlineCode",{parentName:"h2"},"SetLocation(zipCode: str)")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Purpose:"),"\nSet the location for which weather information will be fetched."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"zipCode")," (str): The ZIP code for the new location.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Pre-conditions:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"zipCode")," must be a valid ZIP code.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Post-conditions:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The location is updated to the new ZIP code.")),(0,n.kt)("h2",{id:"getcurrentforecast---dict"},(0,n.kt)("inlineCode",{parentName:"h2"},"GetCurrentForecast() -> dict")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Purpose:"),"\nFetch and return the current weather conditions for the specified location."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Return Value:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"dict"),": A dictionary containing the current weather data.")),(0,n.kt)("h2",{id:"getdailyforecast---dict"},(0,n.kt)("inlineCode",{parentName:"h2"},"GetDailyForecast() -> dict")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Purpose:"),"\nFetch and return the daily weather forecast for the specified location."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Return Value:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"dict"),": A dictionary containing the daily weather forecast data.")),(0,n.kt)("h2",{id:"getweeklyforecast---dict"},(0,n.kt)("inlineCode",{parentName:"h2"},"GetWeeklyForecast() -> dict")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Purpose:"),"\nFetch and return the weekly weather forecast for the specified location."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Return Value:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"dict"),": A dictionary containing the weekly weather forecast data.")),(0,n.kt)("h2",{id:"getweatheralerts---list"},(0,n.kt)("inlineCode",{parentName:"h2"},"GetWeatherAlerts() -> list")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Purpose:"),"\nRetrieve a list of weather alerts for the specified location."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Return Value:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"list"),": A list of weather alerts.")),(0,n.kt)("h2",{id:"getairquality---str"},(0,n.kt)("inlineCode",{parentName:"h2"},"GetAirQuality() -> str")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Purpose:"),"\nRetrieve the current air quality index (AQI) at the specified location."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Return Value:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"str"),": The current air quality index.")),(0,n.kt)("h2",{id:"getwindspeed---float"},(0,n.kt)("inlineCode",{parentName:"h2"},"GetWindSpeed() -> float")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Purpose:"),"\nRetrieve the current wind speed at the specified location."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Return Value:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"float"),": The current wind speed in meters per second (m/s).")),(0,n.kt)("h2",{id:"getweathericon---str"},(0,n.kt)("inlineCode",{parentName:"h2"},"GetWeatherIcon() -> str")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Purpose:"),"\nRetrieve the URL of the weather icon representing the current weather conditions."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Return Value:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"str"),": The URL of the weather icon.")),(0,n.kt)("h2",{id:"getdatetime---str"},(0,n.kt)("inlineCode",{parentName:"h2"},"GetDateTime() -> str")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Purpose:"),"\nRetrieve the current date and time at the specified location."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Return Value:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"str"),": The current date and time.")),(0,n.kt)("h2",{id:"gethumidity---int"},(0,n.kt)("inlineCode",{parentName:"h2"},"GetHumidity() -> int")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Purpose:"),"\nRetrieve the current humidity level at the specified location."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Return Value:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"int"),": The current humidity level as a percentage.")),(0,n.kt)("h2",{id:"recommendoutfit---str"},(0,n.kt)("inlineCode",{parentName:"h2"},"RecommendOutfit() -> str")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Purpose:"),"\nGenerate a clothing outfit recommendation based on the current weather conditions."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Return Value:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"str"),": A string containing the outfit recommendation.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Exceptions Thrown:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"WeatherDataUnavailableError"),": Raised if weather data cannot be fetched."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"OutfitRecommendationError"),": Raised if an outfit recommendation cannot be generated.")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Note: The exceptions mentioned above should be handled with meaningful error messages for the user.")),(0,n.kt)("h1",{id:"weatheralerts-class-api-documentation"},"WeatherAlerts Class API Documentation"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Purpose:"),"\nThe ",(0,n.kt)("inlineCode",{parentName:"p"},"WeatherAlerts")," class represents a collection of weather alerts for a specific location."),(0,n.kt)("h1",{id:"weatheralerts-class"},(0,n.kt)("inlineCode",{parentName:"h1"},"WeatherAlerts")," Class"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Attributes:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"alerts")," (list): A list of ",(0,n.kt)("inlineCode",{parentName:"li"},"WeatherAlert")," objects representing weather alerts.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Methods:")),(0,n.kt)("h2",{id:"checkalertszipcode-string---weatheralert"},(0,n.kt)("inlineCode",{parentName:"h2"},"CheckAlerts(zipCode: string) -> WeatherAlert[]")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Purpose:"),"\nRetrieve and return weather alerts for the specified ZIP code."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"zipCode")," (str): The ZIP code for which weather alerts are requested.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Pre-conditions:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"zipCode")," must be a valid ZIP code.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Return Value:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"list"),": A list of ",(0,n.kt)("inlineCode",{parentName:"li"},"WeatherAlert")," objects representing weather alerts for the specified ZIP code.")),(0,n.kt)("h1",{id:"weatheralert-class-api-documentation"},"WeatherAlert Class API Documentation"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Purpose:"),"\nThe ",(0,n.kt)("inlineCode",{parentName:"p"},"WeatherAlert")," class represents a single weather alert with specific details."),(0,n.kt)("h2",{id:"weatheralert-class"},(0,n.kt)("inlineCode",{parentName:"h2"},"WeatherAlert")," Class"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Attributes:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"alertType")," (str): The type of weather alert."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"description")," (str): A description of the weather alert."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"timeStamp")," (Date): The timestamp when the alert was issued.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Methods:")),(0,n.kt)("h2",{id:"createalertdata-object---weatheralert"},(0,n.kt)("inlineCode",{parentName:"h2"},"Create(AlertData: object) -> WeatherAlert")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Purpose:"),"\nCreate a new ",(0,n.kt)("inlineCode",{parentName:"p"},"WeatherAlert")," object with the provided data."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"AlertData")," (object): An object containing data for creating the alert.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Return Value:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"WeatherAlert"),": A new ",(0,n.kt)("inlineCode",{parentName:"li"},"WeatherAlert")," object created with the provided data.")),(0,n.kt)("h3",{id:"getalerttype---str"},(0,n.kt)("inlineCode",{parentName:"h3"},"GetAlertType() -> str")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Purpose:"),"\nRetrieve the type of weather alert."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Return Value:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"str"),": The type of weather alert.")),(0,n.kt)("h2",{id:"getdescription---str"},(0,n.kt)("inlineCode",{parentName:"h2"},"GetDescription() -> str")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Purpose:"),"\nRetrieve the description of the weather alert."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Return Value:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"str"),": The description of the weather alert.")),(0,n.kt)("h2",{id:"gettimestamp---date"},(0,n.kt)("inlineCode",{parentName:"h2"},"GetTimestamp() -> Date")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Purpose:"),"\nRetrieve the timestamp when the weather alert was issued."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Return Value:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Date"),": The timestamp of the weather alert issuance.")))}u.isMDXComponent=!0}}]);