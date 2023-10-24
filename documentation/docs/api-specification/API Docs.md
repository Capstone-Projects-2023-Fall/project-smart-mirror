---
sidebar_position: 1
description: API Documentation
---
API Documentation
=============================

## Calander API 
**Description:**    
The Calendar API allows you to manage user calendars and events.

### POST /calendar/create
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

### PUT /calendar/update/{id}
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
### DELETE /calendar/delete/{id}
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

### POST /calendar/event/add/{calendarId}
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

### PUT/calendar/event/update/{calendarId}/{eventId}
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

### DELETE /calendar/event/delete/{calendarId}/{eventId}
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
