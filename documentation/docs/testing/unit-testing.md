---
sidebar_position: 1
---
# Unit tests
For each method, one or more test cases.

A test case consists of input parameter values and expected results.

All external classes should be stubbed using mock objects.






# Health Model

## `getWeight()`

Input / User Action:
* User enters their weight

Expected Result: 
* Weight is stored in `currentWeight`

## `getWeightGoal()`

Input / User Action:
* User enters their weight goal

Expected Result: 
* Weight goal is stored in `weightGoal`

## `getUserStepData()`

Input / User Action:
* User's apple watch api or fitbit api data

Expected Result: 
* Number of steps is stored in `steps`

## `getHeight()`

Input / User Action:
* User enters their height

Expected Result: 
* Height is stored in `height`


## `setWeightAtDate(int weight, DATE date)`
 
Input / User Action:
* `weight` — the current weight of the user
* `date` — the date the current weight was entered

Expected Result: 
* `weight` and `date` are stored in `weightHistory[][]`


## `setWeightGoal(int weightGoal)`
 
Input / User Action:
* `weightGoal` — the goal weight of the user

Expected Result: 
* `weightGoal` is stored into the database
 
## `setSteps(int steps)`
 
Input / User Action:
* `steps` — the number of steps the user has taken

Expected Result: 
* `steps` is stored into the database

## `displayWeight()`

Input / User Action:
* User clicks on option to display their weight

Expected Result: 
* `currentWeight` is displayed on the Smart Mirror

## `displaySteps()`

Input / User Action:
* User clicks on option to display their steps

Expected Result: 
* `steps` is displayed on the Smart Mirror

## `displayBmi()`

Input / User Action:
* User clicks on option to display their BMI

Expected Result: 
* `bmi` is displayed on the Smart Mirror

## `disableWeightDisplay()`

Input / User Action:
* User clicks on option to stop displaying their weight

Expected Result: 
* `currentWeight` is not displayed on the Smart Mirror

## `disableStepDisplay()`

Input / User Action:
* User clicks on option to stop displaying their steps

Expected Result: 
* `steps` is not displayed on the Smart Mirror

## `disableBmiDisplay()`

Input / User Action:
* User clicks on option to stop displaying their BMI

Expected Result: 
* `bmi` is not displayed on the Smart Mirror

## `calculateBmi()`

Input / User Action:
* User clicks on option to calculate their BMI

Expected Result: 
* BMI is calculated and stored in `bmi`
