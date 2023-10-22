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

## Use Case 3 - Sub-Profiles
A user wants to create a sub-profile for someone else who also uses the mirror at 5 p.m. on Sundays.
1. Opens the companion app.
2. Navigates to the Sub-Profile section of the app.
3. Clicks on the Create Sub-Profile button.
4. Clicks on the title field and gives the Sub-Profile a name.
5. Adds and customizes the elements on the mirror layout of the new Sub-Profile.
6. Inputs Sunday and 5pm into the Scheduled Switching field.
7. Saves their progress.
8. Is able to view their sub-profile on the mirror at 5pm on Sundays.

### Assertions
- After clicking the "Create Sub-Profile" button, a new sub-profile should generated and user can assign a name to the sub-profile. 
- The new sub-profile should be successfully customized and saved. 
- When the user inputs "Sunday" and "5 p.m." into the Scheduled Switching field, it should accept and save this schedule for the sub-profile without errors.
- After making changes, the user can save their progress and at 5 p.m. on a Sunday, the mirror should automatically switch to the newly created sub-profile.

## Use Case 5 - Rainy Day Fit​
A user that wants to be informed on what to wear throughout the day as they are rushing to get ready to leave the house for work.
1. Steps in front of the mirror as they do their daily morning routine in the bathroom.
2. Is detected by the camera, which turns on the screen display behind the 2 way mirror.
3. Sees a heavy rain forecast in the afternoon displayed by the weather widget, despite being currently clear as day.
4. Remembers to grab their raincoat and umbrella and goes about their day avoiding the uncomfortableness of cold rain.

### Assertions
- When a user stands in front of the mirror, the camera detects their face and triggers the display to turn on. 
- The Raspberry Pi, which controls the mirror, successfully retrieves weather data from the Open Weather API and displays a heavy rain forecast for the afternoon, even if the current   weather is clear. 
- The user remembers to grab their raincoat and umbrella before heading out. 

## Use Case 6 - Todo List
A user that has a busy day full of important tasks to do wants to reference his Todo list on the cloud when they’re at home.
1. Opens up the smart mirror companion app and fills out his important task of checking in with his family member weekly after work.
2. Goes about his normal routine, gets back home later on and views their mirror which reminds them of their task.
3. Is reminded to call their family member, so they call to see how they are doing.
4. Checks off their task for this week in the PWA.

### Assertions
- After the user adds all his task through the CompanionApp, it will display on the Smart Mirror
- Task will be deleted when completed
- The list will be deleted when the user completes all the tasks.

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

