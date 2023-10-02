---
sidebar_position: 1
---

**Purpose**

The Design Document - Part I Architecture describes the software architecture and how the requirements are mapped into the design. This document will be a combination of diagrams and text that describes what the diagrams are showing.

**Sequence Diagrams**

**Use Case #4 Height/Weight Tracking**: A user wants to set a weight goal from scratch and track their height and weight so they will have an easy way to access the knowledge needed to work towards their ideal weight.

<details>
<summary>
Height/Weight Tracking Description
</summary>

1. Opens the companion app.
2. Navigates to the Health section of the app.
3. Presses the Add Weight Goal button.
4. Inputs their desired weight.
5. Inputs their height and weight.
6. Saves their progress.
7. May update their height and weight when they wish.
9. Adds the built-in health widget to their sub-profile.
8. Is able to view their weight goal and weight history.


</details>

**Use Case #5 Rainy Day**: A user that wants to be informed on what to wear throughout the day as they are rushing to get ready to leave the house for work.
<details>
<summary>
Rainy Day Description
</summary>

1. They step in front of the mirror as they do their daily morning routine in the bathroom.
2. The camera detects the user’s face with the camera and turns on the screen display behind the 2 way mirror.
3. The mirror's Rasberry Pi retrieves data from the Open Weather API.
3. The mirrors widget display shows a heavy rain forecast icon in the afternoon despite being currently clear as day.
4. The user remembers to grab their raincoat and umbrella and goes about their day avoiding the uncomfortableness of cold rain.
![sequence diagram](https://github.com/Capstone-Projects-2023-Fall/project-smart-mirror/assets/70285068/14a00b33-b869-43c2-982b-b520063bfc68)

</details>

**Use Case #6  ToDo List**: A user that has a busy day full of important tasks to do wants to reference his Todo list on the cloud when they’re at home
<details>
<summary>
ToDo List Description
</summary>

1. The user opens up the smart mirror companion app and fills out his important task of checking in with his family member weekly after work.
2. The user goes about his normal routine, gets back home later on and views their mirror which reminds them of their task.
3. After being reminded, they call their family members and see how they are doing.
4. When the call is finished they open the companion app and check off their task for this week.

![Use case 6](https://github.com/Capstone-Projects-2023-Fall/project-smart-mirror/assets/74268497/3af74675-8621-435a-96a1-2f9e3bbda73b)
</details>


**Database**

Entity-relation diagram.

Table design.

A check list for architecture design is attached here [architecture\_design\_checklist.pdf](https://templeu.instructure.com/courses/106563/files/16928870/download?wrap=1 "architecture_design_checklist.pdf")  and should be used as a guidance.
