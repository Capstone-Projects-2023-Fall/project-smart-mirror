---
sidebar_position: 2
---
# Integration tests

## Use Case 1 - Custom Widgets
## Test Scenario : 
The user wants to view a custom widget on their current mirror layout so that they can view current stock quotes when they look at the mirror in the morning. 
## Test steps: 
1.	Open Companion App and Navigate to Widget Section:
- Test Step: Open the companion app and Navigate to the Widget section of the app
- Expected Result: The app interface should load successfully and a section displaying available widgets should be accessible.
2.	Add New Widget:
- Test Step: Press the Add New Widget button.
- Expected Result: A menu or list of available widgets should appear.
3.	Select Stock-Related Widget:
- Test Step: Choose a stock-related widget from the list.
- Expected Result: The selected widget should be highlighted or marked as chosen.
4.	Choose Widget Placement:
- Test Step: Choose the sub-profile where the widget should be added.
- Expected Result: The selected sub-profile should be highlighted or marked.
- Test Step: Choose the position on the mirror where the widget should be placed.
- Expected Result: The selected position should be highlighted or marked.
5.	Save Progress:
- Test Step: Save the changes.
- Expected Result: A confirmation message should indicate that the changes were saved successfully.
6.	Turn On the Mirror:
- Test Step: Walk up to the mirror and turn it on.
- Expected Result: The mirror should power up without issues.
7.	Observe Mirror Reflection:
- Test Step: Observe the mirror to see if the custom widget is reflected.
- Expected Result: The selected stock-related widget should be visible in the specified sub-profile and position in the mirror.

## Use Case 2 - Custom Alerts
# Test Scenario: 
The user wants to view a custom widget on their current mirror layout so that they can view current stock quotes when they look at the mirror in the morning.

# Test steps: 
1.	Open Companion App and navigate to reminder Section:
- Test Step: Open the companion app and Navigate to the Reminder section of the app
- Expected Result: The app interface should load successfully, and the reminder section should be accessible
2.	Create New Reminder:
- Test Step: Press the New Reminder button.
- Expected Result: A new reminder creation interface should appear.
3.	Enter Reminder Title:
- Test Step: Click on the title field and give the reminder a title.
- Expected Result: The title should be entered, and there should be an option for a default value.
4.	Set Reminder Date and Time:
- Test Step: Click on the time field to input the date and time for the reminder.
- Expected Result: The user should be able to set the date and time for the reminder.
5.	Save Reminder:
- Test Step: Save the progress.
- Expected Result: A confirmation message should indicate that the reminder has been set.
6.	Trigger Reminder Alert: 
- Test Step: Simulate the passage of time until the reminder should trigger.
- Expected Result: The mirror should turn on when the reminder time matches the current time.
7.	Display Reminder Alert:
- Test Step: Wait for the mirror to display the reminder alert.
- Expected Result: The mirror screen should display the title, time, and date of the reminder for 10 seconds, accompanied by a soft sound

## Use Case 3 - Sub-Profiles
# Test Scenario:
A user wants to create a sub-profile for someone else who also uses the mirror at 5 p.m. on Sundays.
# Test steps:
1.	Open Companion App and navigate to Sub-Profile Section:
- Test Step: Open the companion app and navigate to the Sub-Profile section of the app.
- Expected Result: The app interface should load successfully, and the Sub-Profile section should be accessible
2.	Create Sub-Profile:
- Test Step: Click on the Create Sub-Profile button.
- Expected Result: A new sub-profile creation interface should appear.
3.	Enter Sub-Profile Name:
- Test Step: Click on the title field and give the sub-profile a name.
- Expected Result: The sub-profile should be named, and there may be a default value.
4.	Customize Mirror Layout:
- Test Step: Add and customize elements on the mirror layout of the new sub-profile.
- Expected Result: The mirror layout should reflect the customization made for the sub-profile.
5.	Set Scheduled Switching:
- Test Step: Input "Sunday" and "5:00 PM" into the Scheduled Switching field.
- Expected Result: The sub-profile is scheduled to switch at 5:00 PM on Sundays.
6.	Save Progress:
- Test Step: Save the progress.
- Expected Result: A confirmation message should indicate that the sub-profile has been created and configured.
7.	View Sub-Profile on Mirror:
- Test Step: Simulate the passage of time until Sunday 5:00 PM.
- Expected Result: The mirror should turn on when the system time matches Sunday at 5:00 PM.
- Test Step: Observe the mirror to view the sub-profile.
- Expected Result: The created sub-profile should be displayed on the mirror.

## Use Case 4 - Height/Weight Tracking
# Test Scenario:
The user wants to set a weight goal from scratch and track their height and weight so they will have an easy way to access the knowledge needed to work towards their ideal weight.
# Test Steps:
1.	Open Companion App and navigate to Health Section:
- Test Step: User opens the companion app and navigates to the health section of the app.
- Expected Result: The app interface loads successfully, and the health section is accessible, showing various health-related features.
2.	Add Weight Goal:
- Test Step: User presses the "Add Weight Goal" button.
- Expected Result: A new interface for setting a weight goal is displayed.
3.	Input Desired Weight:
- Test Step: User inputs their desired weight.
- Expected Result: The desired weight is entered into the system.
4.	Input Height and Weight:
- Test Step: User inputs their current height and weight.
- Expected Result: The height and weight values are saved for tracking.
5.	Save Progress:
- Test Step: User saves their progress.
- Expected Result: A confirmation message indicates that the weight goal and initial data have been saved.
6.	Update Height and Weight:
- Test Step: User updates their height and weight when desired.
- Expected Result: The new height and weight values are successfully updated.
7.	Add Health Widget to Sub-Profile:
- Test Step: User adds the built-in health widget to their sub-profile.
- Expected Result: The health widget is displayed on the sub-profile's layout.
8.	View Weight Goal and History:
- Test Step: User views their weight goal and weight history using the health widget.
- Expected Result: The weight goal and historical weight data are accurately displayed on the widget.

## Use Case 5 - Rainy Day Fit​
# Test Scenario:
A user that wants to be informed on what to wear throughout the day as they are rushing to get ready to leave the house for work.

# Test Steps: 
1.	Morning Routine in Front of the Mirror:
- Test Step: User stands in front of the mirror during their morning routine.
- Expected Result: The mirror's camera detects the user's presence.
2.	Camera Activation:
- Test Step: The camera activation turns on the screen display behind the 2-way mirror.
- Expected Result: The mirror screen is activated, becoming visible to the user.
3.	Weather Widget Display:
- Test Step: The user sees a heavy rain forecast displayed by the weather widget on the mirror.
- Expected Result: Despite the current clear weather, the weather widget accurately reflects the afternoon forecast, providing information on heavy rain.
4.	User Takes Precautions:
- Test Step: The user, informed by the weather forecast, decides to grab their raincoat and umbrella.
- Expected Result: The user is well-prepared for the forecasted heavy rain, avoiding discomfort during their day.


## Use Case 6 - To-do List 

# Test Scenario:
A user that has a busy day full of important tasks to do wants to reference his Todo list on the cloud when they’re at home.
# Test Steps:
1.	Open Smart Mirror Companion App:
- Test Step: User opens the smart mirror companion app.
- Expected Result: The app interface loads successfully.
2.	Add Important Task:
- Test Step: User adds an important task to check in with a family member weekly after work.
- Expected Result: The task is successfully added to the user's Todo list on the cloud.
3.	View Mirror and Call Family Member:
- Test Step: User arrives home, looks at the smart mirror, and sees a reminder for the task to check in with the family member.
- Expected Result: The mirror displays the reminder for the added task.
- Test Step: User is reminded by the mirror and decides to call their family member.
- Expected Result: User successfully calls to check in with the family member.
4.	Check Off Task in PWA:
- Test Step: User opens the PWA associated with the Todo list on the cloud.
- Expected Result: The added task is visible, and the user can mark it as completed.
- Test Step: User marks the task "Check in with family member weekly after work" as completed.
- Expected Result: The task is successfully marked as completed in the PWA.



## Use Case 7 - Scheduling Assistant
# Test Scenario:
A user with a busy schedule of appointments at their workshop wants to efficiently view and manage their appointments using the smart mirror.
# Test Steps:
1.	Enter Workshop and Activate Mirror:
- Test Step: User steps in front of their workshop mirror.
- Expected Result: The mirror's camera detects the user, activating the screen display behind the 2-way mirror.
2.	View Calendar Display Widget:
- Test Step: User glances at the calendar display widget on the mirror.
- Expected Result: The mirror displays the upcoming appointments, and the user sees that their next appointment is scheduled in 20 minutes.
3.	Prepare for Next Appointment:
- Test Step: User gets ready for their upcoming appointment based on the information from the calendar display.
- Expected Result: The user is well-prepared for their next appointment.
4.	Mark Follow-Up Appointment in PWA:
- Test Step: During the appointment, the client requests a follow-up next month.
- Expected Result: The user decides to mark the follow-up appointment in the associated PWA (Progressive Web App).
5.	Update Google Calendar:
- Test Step: User opens their Google Calendar app and adds the information for the follow-up appointment.
- Expected Result: The follow-up appointment is successfully added to the user's Google Calendar.
6.	Submit Event to Mirror:
- Test Step: User clicks "submit" in the PWA to sync the follow-up event with their smart mirror.
- Expected Result: The event information is submitted and synchronized with the smart mirror.
7.	View Event on Mirror Day of the Appointment:
- Test Step: The day of the follow-up appointment arrives, and the user checks the mirror.
- Expected Result: The mirror displays the event information for the follow-up appointment scheduled for that day.


