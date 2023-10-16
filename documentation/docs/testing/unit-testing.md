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
