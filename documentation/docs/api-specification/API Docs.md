---
sidebar_position: 1
description: API Documentation
---
API Documentation
=============================

## Calendar API 
**Description:**    
The Calendar API allows you to manage user calendars and events.

### POST /calendar/
**Description:**    
Create a new calendar and store it in the database.

**Valid Request Body:**     
```json
{
    "title": String,
}
```

**Successful call:**
```json
{
    "status": 201,
    "body": "A new calendar has been successfully created."
}
```

**Failed call:**
```json
{
    "status": 400,
    "body": "Invalid request body."
}
```

### PUT /calendar/{id}
**Description:**    
Update a calendar's data in the database.

**Path Parameters:**
- {id}: String

**Valid Request Body:**     
```json
{
    "title": String,
}
```

**Successful call:**
```json
{
    "status": 200,
    "body": "Calendar with ID: {id} has been updated."
}
```
**Failed call:**
```json
{
    "status": 404,
    "body": "Calendar with ID: {id} does not exist."
}
```
### DELETE /calendar/{id}
**Description:**    
Delete an existing calendar from the database.

**Path Parameters:**
- {id}: String

**Valid Request Body:**     
```json
{
    "title": No request body required.
}
```

**Successful call:**
```json
{
    "status": 200,
    "body": "Calendar with ID: {id} has been deleted."
}
```
**Failed call:**
```json
{
    "status": 404,
    "body": "Calendar with ID: {id} does not exist."
}
```

### POST /calendar/event/{calendarId}
**Description:**    
Add a new event to a specific calendar.

**Path Parameters:**
- {calendarId}: String

**Valid Request Body:**     
```json
{
    "title": "String",
    "description": "String",
    "startTime": "String (DateTime format)",
    "endTime": "String (DateTime format)",
    "repeatRate": Integer,
    "alertTime": "String (DateTime format)"
}
```

**Successful call:**
```json
{
    "status": 201,
    "body": "A new event has been successfully added to the calendar."
}
```
**Failed call:**
```json
{
    "status": 404,
    "body": "Calendar with ID: {calendarId} does not exist."
}
```

### PUT/calendar/event/{calendarId}/{eventId}
**Description:**    
Update an event in a specific calendar.

**Path Parameters:**
- {calendarId}: String
- {eventId}: String


**Valid Request Body:**     
```json
{
    "title": "String",
    "description": "String",
    "startTime": "String (DateTime format)",
    "endTime": "String (DateTime format)",
    "repeatRate": Integer,
    "alertTime": "String (DateTime format)"
}
```

**Successful call:**
```json
{
    "status": 201,
    "body": "Event with ID: {eventId} has been updated."
}
```
**Failed call:**
```json
{
    "status": 404,
    "body": "Calendar with ID: {calendarId} or event with ID: {eventId} does not exist."
}
```

### DELETE /calendar/event/{calendarId}/{eventId}
**Description:**    
Delete an event from a specific calendar.

**Path Parameters:**
- {calendarId}: String
- {eventId}: String

**Valid Request Body:**     
```json
{
    "title": No request body required.
}
```

**Successful call:**
```json
{
    "status": 200,
    "body": "Event with ID: {eventId} has been deleted."
}
```
**Failed call:**
```json
{
    "status": 404,
    "body": "Calendar with ID: {calendarId} or event with ID: {eventId} does not exist."
}
```

### GET /calendar/events/{calendarId}
**Description:**    
Retrieve a list of events from a specific calendar.

**Path Parameters:**
- {calendarId}: String

**Valid Request Body:**     
```json
{
    "title": No request body required.
}
```

**Successful call:**
```json
{
        "title": An array of event objects.
}
```
**Failed call:**
```json
{
    "status": 404,
    "body": "Calendar with ID: {calendarId} does not exist."
}
```
## Module Class API Documentation
**Description:**    
The Module class API allows the system to interface with subsequent submodules and widgets. 

## Attributes

- `status (str)`: The current status of the module.
- `lastUpdate (int)`: The timestamp of the last update.
- `type (str)`: The type of the module.
- `permissionLevel (int const)`: The permission level of the module (constant).

### POST/module/
**Description:**    
Create a new module and initialize it.

**Valid Request Body:**     
```json
{
    "title": String,
}
```

**Successful call:**
```json
{
    "status": 201,
    "body": "A new module has been successfully created and initialized."
}
```

**Failed call:**
```json
{
    "status": 400,
    "body": "Invalid request body."
}
```

### GET/module/status
**Description:**    
Retrieve the current status of the module.

**Valid Request Body:**     
```json
{
    "title": No request body is required.
}
```

**Successful call:**
```json
{
    "status": 200,
    "body": "The current status of the module is: {status}"
}
```

**Failed call:**
```json
{
    "status": 400,
    "body": "Invalid request body."
}
```

### PUT/module/pause
**Description:**    
Pause the module's operations.

**Valid Request Body:**     
```json
{
    "title": No request body is required.
}
```

**Successful call:**
```json
{
    "status": 200,
    "body": "Module operations have been paused."
}
```

**Failed call:**
```json
{
    "status": 400,
    "body": "Module operations are already paused."
}
```

### PUT/module/resume
**Description:**    
Resume the module's operations.

**Valid Request Body:**     
```json
{
    "title": No request body is required.
}
```

**Successful call:**
```json
{
    "status": 200,
    "body": "Module operations have been resumed."
}
```

**Failed call:**
```json
{
    "status": 400,
    "body": "Module operations are already active."
}
```

### DELETE/module/disable
**Description:**    
Disable the module.

**Valid Request Body:**     
```json
{
    "title": No request body is required.
}
```

**Successful call:**
```json
{
    "status": 200,
    "body": "The module has been disabled."
}
```

**Failed call:**
```json
{
    "status": 400,
    "body": "The module is already disabled."
}
```

### PUT/module/refresh
**Description:**    
Refresh the module's data.

**Valid Request Body:**     
```json
{
    "title": No request body is required.
}
```

**Successful call:**
```json
{
    "status": 200,
    "body": "Module data has been refreshed."
}
```

**Failed call:**
```json
{
    "status": 400,
    "body": "Module is not active or initialized."
}
```
## Weather Class API  
**Description:**    
The Weather class provides functionality to retrieve weather-related information for a specific location.

### GET/weather/forecast/{zipCpde}
**Description:**    
Get Weather forecast 

**Valid Request Body:**     
```json
{
    "title": String,
}
```

**Successful call:**
```json
{
    "status": 200,
    "body": "Weather forecast data for the specified location."
}
```

**Failed call:**
```json
{
    "status": 400,
    "body": "Invalid request body."
}
```
### GET/weather/location/{zipCode}
**Description:**    
Get Current Weather

**Valid Request Body:**     
```json
{
    "title": String,
}
```

**Successful call:**
```json
{
    "status": 200,
    "body": "Current weather data for the specified location"
}
```

**Failed call:**
```json
{
    "status": 400,
    "body": "Invalid request body."
}
```

### PUT/weather/setLocation/{zipCode}
**Description:**    
Set Location 

**Valid Request Body:**     
```json
{
    "title": String,
}
```

**Successful call:**
```json
{
    "status": 200,
    "body": "Location set to the specified ZIP code."
}
```

**Failed call:**
```json
{
    "status": 400,
    "body": "Invalid request body."
}
```

### Delete/weather/location/{zipCode}
**Description:**    
Delete Location 

**Valid Request Body:**     
```json
{
    "title": String,
}
```

**Successful call:**
```json
{
    "status": 200,
    "body": "Location deleted successfully"
}
```

**Failed call:**
```json
{
    "status": 400,
    "body": "Invalid request body."
}
```

### GET/weather/daily/{zipCpde}
**Description:**    
Get Daily Weather Forecast

**Valid Request Body:**     
```json
{
    "title": String,
}
```

**Successful call:**
```json
{
    "status": 200,
    "body": "Daily weather forecast data for the specified location."
}
```

**Failed call:**
```json
{
    "status": 400,
    "body": "Invalid request body."
}
```

### GET/weather/weekly/{zipCpde}
**Description:**    
Get weekly Weather Forecast

**Valid Request Body:**     
```json
{
    "title": String,
}
```

**Successful call:**
```json
{
    "status": 200,
    "body": "Weekly weather forecast data for the specified location."
}
```

**Failed call:**
```json
{
    "status": 400,
    "body": "Invalid request body."
}
```

### GET/weather/alerts/{zipCpde}
**Description:**    
Get Weather alerts

**Valid Request Body:**     
```json
{
    "title": String,
}
```

**Successful call:**
```json
{
    "status": 200,
    "body": "Weather alerts for the specified location."
}
```

**Failed call:**
```json
{
    "status": 400,
    "body": "Invalid request body."
}
```

### DELETE/weather/alerts/{zipCpde}
**Description:**    
Delete Weather alerts

**Valid Request Body:**     
```json
{
    "title": String,
}
```

**Successful call:**
```json
{
    "status": 200,
    "body": "Weather alerts deleted successfully."
}
```

## Fitbit API
**Description:**    
The Fitbit API provides functionality to retrieve Fitbit information from the user's Fitbit account for the mirror to display.

### GET/api/fitbit/

**Parameters:**
Name | Description
--- | ---
id | ID of the fitbit user.
field | Name of the field to fetch data from.

