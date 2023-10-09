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

