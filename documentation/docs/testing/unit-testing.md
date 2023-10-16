---
sidebar_position: 1
---
# Unit tests
For each method, one or more test cases.

A test case consists of input parameter values and expected results.

All external classes should be stubbed using mock objects.



# CalendarModule

##  `getCalendar(int)`

Input / User Action:
* Instantiate a CalendarModule Object
* Instantiate an Calendar Object
* Add the Calendar object to the calendars property
* Call the function with the integer '0'

Expected Result: 
* Returns the given Calendar Object

##  `addCalendar(Calendar)`

Input / User Action:
* Instantiate a CalendarModule Object
* Instantiate an Calendar Object
* Call the function with the Calendar Object as the parameter

Expected Result: 
* Sets the calendars property to hold the given Calendar object

##  `deleteCalendar(int)`

Input / User Action:
* Instantiate a CalendarModule Object
* Instantiate an Calendar Object
* Add the Calendar object to the calendars property
* Call the function with the integer '0'

Expected Result: 
* Sets the calendars property to an empty array

##  `editEvent(int, int, String)`

Input / User Action:
* Instantiate a CalendarModule Object
* Instantiate an Calendar Object
* Instantiate an Event Object
* Add the Event Object to the events property of the Calendar Object
* Add the Calendar object to the calendars property of the CalendarModule Object
* Call the function with the following parameters: 0, 1, Test

Expected Result: 
* Sets the calendars property to contain a calendar that contains an event with the title "Test"

##  `displayAlert(String)`

Input / User Action:
* Call the function with a String containing a message to display

Expected Result: 
* Displays an alert to the PWA


# Calendar 

##  `getID()`

Input / User Action:
* Instantiate a Calendar Object
* Call the function

Expected Result: 
* Returns integer value stored in calenderID property

##  `getTitle()`

Input / User Action:
* Instantiate a Calendar Object with a not null calendarTitle
* Call the function

Expected Result: 
* Returns String value stored in calendarTitle property

##  `getEvent(int)`

Input / User Action:
* Instantiate a Calendar Object
* Instantiate an Event Object
* Add an Event object to the events property
* Call the function with the integer '0'

Expected Result: 
* Returns integer value stored in eventID property

##  `addEvent(Event)`

Input / User Action:
* Instantiate a Calendar Object
* Instantiate an Event Object
* Call the function on the Calendar Object with the Event Object

Expected Result: 
* Sets the events property to hold the new Event Object

##  `deleteEvent(int)`

Input / User Action:
* Instantiate a Calendar Object
* Instantiate an Event Object
* Add an Event object to the events property
* Call the function with the integer '0'

Expected Result: 
* Sets the events property to an empty array

##  `editEvent(int, int, String)`

Input / User Action:
* Instantiate a Calendar Object
* Instantiate an Event Object
* Add an Event object to the events property
* Call the function with the following parameters: 0, 1, Test

Expected Result: 
* Sets the events property to contain an event with the title "Test"


# Event

##  `getID()`

Input / User Action:
* Instantiate an Event Object
* Call the function

Expected Result: 
* Returns integer value stored in eventID property

##  `getTitle()`

Input / User Action:
* Instantiate an Event Object with a not null eventTitle
* Call the function
  
Expected Result: 
* Returns String value stored in eventTitle property

##  `getDesc()`

Input / User Action:
* Instantiate an Event Object with a not null eventDesc
* Call the function

Expected Result: 
* Returns String value stored in eventDesc property

##  `getStartTime()`

Input / User Action:
* Instantiate an Event Object with a not null startTime
* Call the function

Expected Result: 
* Returns DateTime value stored in startTime property

##  `getEndTime()`

Input / User Action:
* Instantiate an Event Object with a not null endTime
* Call the function

Expected Result: 
* Returns DateTime value stored in endTime property

##  `getRepeatRate()`

Input / User Action:
* Instantiate an Event Object with a not null repeatRate
* Call the function

Expected Result: 
* Returns integer value stored in repeatRate property

##  `getAlertTime()`

Input / User Action:
* Instantiate an Event Object with a not null alertTime
* Call the function

Expected Result: 
* Returns DateTime value stored in alertTime property

##  `setTitle(String)`

Input / User Action:
* Instantiate an Event Object
* Call the function with a not null String object as its parameter

Expected Result: 
* Sets the object's eventTitle property to the given String

##  `setDesc(String)`

Input / User Action:
* Instantiate an Event Object
* Call the function with a not null String object as its parameter

Expected Result: 
* Sets the object's eventDesc property to the given String

##  `setStartTime(DateTime)`

Input / User Action:
* Instantiate an Event Object
* Call the function with a not null DateTime object as its parameter

Expected Result: 
* Sets the object's startTime property to the given DateTime

##  `setEndTime(DateTime)`

Input / User Action:
* Instantiate an Event Object
* Call the function with a not null DateTime object as its parameter

Expected Result: 
* Sets the object's endTime property to the given DateTime

##  `setRepeatTime(int)`

Input / User Action:
* Instantiate an Event Object
* Call the function with a not null integer as its parameter

Expected Result: 
* Sets the object's repeatTime property to the given integer

##  `setAlertTime(DateTime)`

Input / User Action:
* Instantiate an Event Object
* Call the function with a not null DateTime as its parameter

Expected Result: 
* Sets the object's alertTime property to the given DateTime




# Health Model

## `getWeight()`

Input / User Action:
* User enters their weight

Expected Result: 
* Weight is stored in `currentWeight`

## `getWeightGoal()`

Input / User Action:
* User enters their weight goal

Expected Result: 
* Weight goal is stored in `weightGoal`

## `getUserStepData()`

Input / User Action:
* User's apple watch api or fitbit api data

Expected Result: 
* Number of steps is stored in `steps`

## `getHeight()`

Input / User Action:
* User enters their height

Expected Result: 
* Height is stored in `height`


## `setWeightAtDate(int weight, DATE date)`
 
Input / User Action:
* `weight` — the current weight of the user
* `date` — the date the current weight was entered

Expected Result: 
* `weight` and `date` are stored in `weightHistory[][]`


## `setWeightGoal(int weightGoal)`
 
Input / User Action:
* `weightGoal` — the goal weight of the user

Expected Result: 
* `weightGoal` is stored into the database
 
## `setSteps(int steps)`
 
Input / User Action:
* `steps` — the number of steps the user has taken

Expected Result: 
* `steps` is stored into the database

## `displayWeight()`

Input / User Action:
* User clicks on option to display their weight

Expected Result: 
* `currentWeight` is displayed on the Smart Mirror

## `displaySteps()`

Input / User Action:
* User clicks on option to display their steps

Expected Result: 
* `steps` is displayed on the Smart Mirror

## `displayBmi()`

Input / User Action:
* User clicks on option to display their BMI

Expected Result: 
* `bmi` is displayed on the Smart Mirror

## `disableWeightDisplay()`

Input / User Action:
* User clicks on option to stop displaying their weight

Expected Result: 
* `currentWeight` is not displayed on the Smart Mirror

## `disableStepDisplay()`

Input / User Action:
* User clicks on option to stop displaying their steps

Expected Result: 
* `steps` is not displayed on the Smart Mirror

## `disableBmiDisplay()`

Input / User Action:
* User clicks on option to stop displaying their BMI

Expected Result: 
* `bmi` is not displayed on the Smart Mirror

## `calculateBmi()`

Input / User Action:
* User clicks on option to calculate their BMI

Expected Result: 
* BMI is calculated and stored in `bmi`

# Weather Module

## `SetLocation(zipCode: str)`

**User Action:**
1. User enters the desired ZIP code on the mirror companion app.

**Expected Result:**
- The mirror's location is updated to the new ZIP code.

## `GetCurrentForecast() -> dict`

**User Action:**
1. User activates the mirror.
2. User has weather forecast in active module preference

**Expected Result:**
- The mirror displays the current weather conditions.

## `GetDailyForecast() -> dict`

**User Action:**
1. User activates the mirror.
2. User has weather forecast in active module preferences. 
3. User specifies daily forecast in their weather widget preferences

**Expected Result:**
- The mirror displays the expected weather forecast for that day.

## `GetWeeklyForecast() -> dict`

**User Action:**
1. User activates the mirror.
2. User has weather forecast in active module preferences. 
3. User specifies weekly forecast in their weather widget preferences

**Expected Result:**
- The mirror displays the weekly weather forecast.

## `GetAirQuality() -> str`

**User Action:**
1. User activates the mirror.
2. User has weather forecast in active module preferences. 

**Expected Result:**
- The mirror displays the current air quality index (AQI).

## `GetWindSpeed() -> float`

**User Action:**
1. User activates the mirror.
2. User has weather forecast in active module preferences. 

**Expected Result:**
- The mirror displays the current wind speed.

## `GetWeatherIcon() -> str`

**User Action:**
1. User activates the mirror.
2. User has weather forecast in active module preferences. 
3. Mirror displays weather and uses an appropiate icon to display with information.

**Expected Result:**
- The mirror returns the URL/filepath of the weather icon.

## `GetDateTime() -> str`

**User Action:**
1. User activates the mirror.
2. User has weather forecast in active module preferences. 
3. The mirror tries to get data for a particular time period and requires the date and time.

**Expected Result:**
- The mirror displays the current date and time.

## `GetHumidity() -> int`

**User Action:**
1. User activates the mirror.
2. User has weather forecast in active module preferences. 

**Expected Result:**
- The mirror displays the current humidity level.

## `RecommendOutfit() -> str`

**User Action:**
1. User activates the mirror.
2. User has weather forecast in active module preferences. 
2. User has outfit reccomendations enabled. 

**Expected Result:**
- The mirror generates a clothing outfit recommendation and suggests it to the user.

# Weather Alert Class

## `GetWeatherAlerts() -> list`

**User Action:**
1. User activates the mirror.
2. User has weather forecast in active module preferences. 

**Expected Result:**
- The mirror displays a list of weather alerts.

# WeatherAlert Class 

**Purpose:**

## `Create(AlertData: object) -> WeatherAlert`

**User Action:**
1. User activates the mirror.
2. User accesses weather alerts in the active module preferences.
3. An active weather alert is in the User's region

**Expected Result:**
- The system creates an alert based off active alerts.

### `GetAlertType() -> str`

**User Action:**
1. User activates the mirror.
2. User accesses weather alerts in the active module preferences.
3. User selects a specific weather alert.

**Expected Result:**
- The mirror displays the type of the selected weather alert.

## `GetDescription() -> str`

**User Action:**
1. User activates the mirror.
2. User accesses weather alerts in the active module preferences.
3. User selects a specific weather alert.

**Expected Result:**
- The mirror displays the description of the selected weather alert.

## `GetTimestamp() -> Date`

**User Action:**
1. User activates the mirror.
2. User accesses weather alerts in the active module preferences.
3. User selects a specific weather alert.

**Expected Result:**
- The mirror displays the timestamp of when the selected weather alert was issued. 

# Module Class

## `PullUserProfile()`

**User Action/Input:**
1. System Initiates the process to pull the user profile data with appropriate access permissions.

**Expected Result:**
- Successfully pull the user profile data and unpacks inside respective module.

## `GetStatus() -> str`

**User Action/Input:**
1. System request the current status of the module.

**Expected Result:**
- Return the current status as a string.

## `Initialize()`

**User Action/Input:**
1. System attemps to initialize the module if it's not already initialized.

**Expected Result:**
- Successfully initialize the module and returns an 'OK' status code.

## `GetType() -> str`

**User Action/Input:**
1. Request the type of the module.

**Expected Result:**
- Return the type as a string.

## `PauseModule()`

**User Action/Input:**
1. Request to pause the module if it's currently active.

**Expected Result:**
- Pause the module's operations and returns 'PAUSED' status code.

## `ResumeModule()`

**User Action/Input:**
1. Request to resume the module if it's currently paused.

**Expected Result:**
- Resume the module's operations and returns 'RUNNING' status code.

## `DisableModule()`

**User Action/Input:**
1. Request to disable the module if it's initialized.

**Expected Result:**
- Successfully disable the module and return 'INACTIVE' status code.

## `Refresh()`

**User Action/Input:**
1. Request to refresh the module's data if it's active and initialized.

**Expected Result:**
- Refresh and update the module's data and write current refresh time to the system's unix tick.
