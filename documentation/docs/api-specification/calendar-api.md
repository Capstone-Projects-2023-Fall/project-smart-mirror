# Calendar Module API Documentation

The `CalendarModule` is what controls the calendar functionality of the mirror.

### `CalendarModule` Class

**Properties**

calendars: Calendar[]
- A list of Calendars owned by the user.

getCalendar(int): Calendar
- Takes an integer representing the ID of a calendar. Outputs the calendar object associated with that ID.

**Methods:**

addCalendar():
- Adds a calendar to the list of Calendar objects in the calendars property.

deleteCalendar(int):
- Deletes a calendar in the list of Calendar objects associated with a given integer that represents the calendar's ID.

editEvent(int):
- Edits an event in a calendar with a given int that represents the calendar's ID.

displayAlert():
- Displays an alert for a calendar event.

### `Calendar` Class

**Properties**

`Calendar` holds information pertaining to a single calendar.

calendarID: int
- An integer representation of the calendar's ID.

calendarTitle: String
- A String which holds the title of the calendar.

events: Event[]
- An array of Event objects that holds each event associated with the calendar.

**Methods**

GetID(): int
- Returns the ID of the calendar.

GetTitle(): String
- Returns the title of the calendar.

GetEvent(): Event
- Returns an Event object from the list of events in the calendar.

AddEvent():
- Adds an Event object to the calendar.

DeleteEvent(int):
- Deletes an event from the calendar using an event's event ID.

EditEvent(int, int, String):
- Edits an event from the list of events in the calendar using the target event's event ID, an integer which determines the field to overwrite, and a String representation of what to overwrite the field with.

### `Event` Class

`Event` holds information pertaining to a single event from a Calendar object.

**Properties**

eventID: int
- The event's ID.

eventTitle: String
- The event's title.

eventDesc: String
- A description of the event.

startTIme: DateTime
- The time and date at which the event starts.

endTime: DateTime
- The time and date at which the event ends.

repeatRate: int
- The number of days that must pass for the event to be repeated.

alertTime: DateTime
- The time and date at which the user will receive an alert about the event.

**Methods**

GetID(): int
- Returns the event's ID.

GetTitle(): String
- Returns the event's title.

GetDesc(): String
- Returns the event's description.

GetStartTime(): DateTime
- Returns the event's starting time.

GetEndTime(): DateTime
- Returns the event's ending time.

GetRepeatRate(): int
- Returns the repeat rate of the event.

GetAlertTime(): DateTime
- Returns the alert time.

SetTitle(String):
- Sets the title attribute to the given string.

SetDesc(String):
- Sets the description attribute to the given string.

SetStartTime(DateTime):
- Sets the starting time attribute to the given DateTime object.

SetEndTime(DateTime):
- Sets the ending time attribute to the given DateTime object.

SetRepeatTime(int):
- Sets the repeat time attribute to the given integer.
  
SetAlertTime(DateTIme):
- Sets the alert time attribute to the given DateTime object.




