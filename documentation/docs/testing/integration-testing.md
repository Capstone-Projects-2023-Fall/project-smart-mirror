---
sidebar_position: 2
---
# Integration tests

Tests to demonstrate each use-case based on the use-case descriptions and the sequence diagrams. External input should be provided via mock objects and results verified via mock objects. Integration tests should not require manual entry of data nor require manual interpretation of results.




**Use Case #2 - Custom Alerts**
<details>
<summary>
The user wants to view a custom widget on their current mirror layout so that they can view current stock quotes when they look at the mirror in the morning.
</summary>

1. Opens the companion app.
2. Navigates to the Reminder section of the app.
3. Presses the New Reminder button.
4. Clicks on the title field and gives the reminder a title. (Optional) (There will be a default value.)
5. Clicks on the time field to input the date and time that the timer should go off.
6. Saves their progress.
7. When the date and time of the reminder matches the current date and time, is alerted by the mirror turning on its screen, displaying the title, time and date of the alarm for 10 seconds, and playing a soft sound.
  
</details>


