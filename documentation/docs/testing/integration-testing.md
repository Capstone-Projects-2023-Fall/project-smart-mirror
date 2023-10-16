---
sidebar_position: 2
---
# Integration tests

Tests to demonstrate each use-case based on the use-case descriptions and the sequence diagrams. External input should be provided via mock objects and results verified via mock objects. Integration tests should not require manual entry of data nor require manual interpretation of results.

## Use Case 1 - Custom Widgets
The user wants to view a custom widget on their current mirror layout.
The user:
1. Opens the companion app.
2. Navigates to the Widget section of the app.
3. Presses the Add New Widget button.
4. Selects a stock-related widget from the list of widgets available.
5. Chooses which sub-profile and where on the mirror the widget shall be added.
6. Saves their progress.
7. Walks up to the mirror to turn the mirror on.
8. Observes the mirror reflecting the user's changes.

### Assertions
- The stock-related Widget shall appears in the selected sub-profile's widget list.
- The Widget shall be placed in the correct position on the mirror.

## Use Case 2 - Custom Alerts
The user wants to view a custom widget on their current mirror layout so that they can view current stock quotes when they look at the mirror in the morning.
The user:
1. Opens the companion app.
2. Navigates to the Reminder section of the app.
3. Presses the New Reminder button.
4. Clicks on the title field and gives the reminder a title. (Optional) (There will be a default value.)
5. Clicks on the time field to input the date and time that the timer should go off.
6. Saves their progress.
7. When the date and time of the reminder matches the current date and time, is alerted by the mirror turning on its screen, displaying the title, time and date of the alarm for 10 seconds, and playing a soft sound.

### Assertions
- The smart mirror will turn on at the time of the alert
- The smart mirror will display the title, time, and date of the alert
- The smart mirror will play a soft sound at the time of the alert

## Use Case 7 - Scheduling Assistant
**Description**: A user with a busy schedule of appointments at their workshop wants to efficiently view and manage their appointments using the smart mirror.

**The User:**:
1. Steps in front of their smart mirror located in their workshop.
2. The built-in camera detects the user and activates the screen display behind the two-way mirror.
3. Glances at the calendar display widget on the screen and notices that their next appointment is scheduled for 20 minutes from now.
4. Gets ready for their upcoming appointment with their client.
5. The client requests a follow-up meeting next month.
6. The user decides to add this follow-up appointment to their schedule.
7. Opens their Google Calendar app using the mirror's interface and enters the event details, including the date, time, and client information.
8. After entering the information, the user clicks the "Submit" button, and the event is automatically synchronized with their Google Calendar.
9. On the day of the follow-up appointment, sees the event displayed on the smart mirror's screen.

**Assertions**:
- The smart mirror accurately displays the user's upcoming appointments and updates in real-time.
- Adding, editing, or removing appointments through the mirror's interface seamlessly synchronizes with the user's Google Calendar.
- The mirror effectively assists the user in managing their schedule, enhancing productivity and time management.

