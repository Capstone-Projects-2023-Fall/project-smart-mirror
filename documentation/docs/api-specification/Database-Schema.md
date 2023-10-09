---
sidebar_position: 3
---

# Database Schema Diagram

![Schema Diagram](https://github.com/Capstone-Projects-2023-Fall/project-smart-mirror/assets/74268497/c423f79b-a622-4fee-830b-6e822cae8ce7)


## Summary 
* This schema represents a system where the user uses the CompanionApp to store various data types. Data includes calendar events, fitness information, weather information, and many more.
* Each of the tables is associated with the **CompanionApp* table. Each table will be using the **UserID* foreign key to establish relationships between the user and data.


## Tables

# CompanionApp
* Attributes:
    * UserID: Primary key.
    * Username, PasswordHash, Email: Authentication-related data for the user.
    * FirstName, LastName: User's first and last names.

# UserData
* Attributes:
    * UserDataID: Primary Key.
    * DataTitle, DataDescription, DataType, DataContent: Information is for the user's Data

# Database
* Attributes:
    * DatabaseID: Primary key for each database entry.
    * DatabaseTitle, DatabaseDescription, DatabaseType, DatabaseData: These are information about Database

# SmartMirror
* Attributes:
    * MirrorID: Primary key.
    * MirrorName, MirrorLocation, ConfigurationDetails: This is all the information about the smart mirror setup.

# AccessRights
* Attributes: 
    * AccessID: Primary Key.
    * AccessLevel: Level of access granted to the user for the smart mirror.

# WeatherInfo
* Attributes:
    * WeatherInfoID: Primary Key.
    * City: City for which weather information is stored.
    * Temperature: Temperature data.
    * WeatherDescription: Description of the weather.

# UserPreferences: 
* Attributes: 
    * UserPreferencesID: Primary Key.
    * Theme: User's chosen theme.
    * Language: User's preferred language.

# CalendarInfo:
* Attributes: 
    * CalendarInfoID: Primary Key.
    * EventTitle: Title for the calendar events.
    * EventDescription: Will show event descriptions.
    * EventDate: Will have the date and time for the Event.

# FitnessInfo:
* Attributes:
    * FitnessInfoID: Primary Key.
    * WorkoutType: Types of workout.
    * DurationInMinutes: Will have the duration of the workout.
    * CaloriesBurned: Calories that are burned.
    * CurrentWeight: Current weight for the User/
    * Height: Height of the user.
    * WeightGoal: Set a goal for the user.
    * Steps: Number the steps the user has taken.
    * BMI: Body Mass Index.
    * WeightHistory: JSON array storing users' weight and date.

# UserID: 
* All the UserIDs for the tables are foreign keys referring to CompanionApp.UserID associated with the specific table.
