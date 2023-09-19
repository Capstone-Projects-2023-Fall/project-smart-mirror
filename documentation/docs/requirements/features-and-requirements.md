---
sidebar_position: 4
---

# Features and Requirements
Function Requirements 

**Functional**

**Companion App**
    * The App will serve to be an interface to customize what is being shown on the mirror and what data is sent to the mirror. The mirror itself, however, will mostly display information.
* The companion app will allow the user to set personal preferences to their liking.
    * In the settings, the app will allow the user to set them:
    * User can set Gender
    * User can set Age 
    * User can set Birthdate
    * User can set zip code 
        * Adding the zip code will allow the app to calculate the timezone of where the mirror is and allow the mirror to correctly output the weather.
    * Will allow the user to set up a function called the Wake-on Approach where the mirror will wake up from idle/sleep when the user walks to the mirror.
    * Will allow the user to set dietary goals like:
        * User can set height
        * User can set weight
        * User can set a weight goal
* The companion app will allow users to create multiple account settings.
    * Can have multiple users use the same mirror with the function of switching sub-profiles where each sub-profiles will have different adjusted settings.

**Mirror**
    * The mirror will display information fed from the Companion App. The onboarding pi will gather data as needed in the backend.
* The mirror will display the time
    * The time will be dependent on the time zone based on the user preferences in the Companion App.
* The mirror will display the weather
    * The weather will be dependent on the zip code based on the user preferences in the Companion App.
    * It will have a Weather-based outfit suggestion depending on the weather.
* The mirror will have Face Detection 
* The mirror will display Infotainment
    * Mirror will have timers for the following items:
        * Will have a timer for Todo List set in the companion app
        * Will have a timer for Reminders set in the companion app
    * Will display notifications set on the companion apps based on what the users allow.
    * Will take data from the calendar and display events on the mirror 
* The mirror will support widgets
* Will have a function where the sub-profiles can be changed after a timer goes off set by the user

**Non-functional**
* Will have voice commands that allow the user to look at or change apps/widgets through
* Will have hand gesture movements
* Will have Optimized Face Detection Accuracy
