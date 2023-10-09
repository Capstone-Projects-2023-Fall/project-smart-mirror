---
sidebar_position: 3
---

# Health

## `public class Health`

This class is responsible for getting inputs related to health and keeping track of this data.

## `public int currentWeight`

This is the current weight of the user.

## `public int height`

This is the height of the user.

## `public int weightGoal`

This is the goal weight the user wishes to get to.

## `public int steps`

This keeps track of the number of steps the user has taken.

## `public <DATE,int> weightHistory[][]`

This keeps track of the user's weight history. The first entry of the array is the date followed by the second entry being the weight.

## `public int bmi`

This is the BMI (body mass index) of the user.

## `public void getWeight()`

Prompts the user to enter their weight and updates currentWeight.

## `public void getWeightGoal()`

Prompts the user to enter their weight goal and updates weightGoal.

## `public void getUserStepData()`

Gets data from the user's apple watch api or fitbit api and updates steps

## `public void getHeight()`

Prompts the user to enter their height and updates height.

## `public void setWeightAtDate(int weight, DATE date)`

Stores currentWeight and the date it was entered into the database and updates weightHistory[][].

* **Parameters:**
  * `weight` — is the current weight of the user
  * `date` — is the date the current weight was entered

## `public void setWeightGoal(int weightGoal)`

Stores weightGoal into the database.

* **Parameters:**
  * `weightGoal` — is the goal weight of the user
 
## `public void setSteps(int steps)`

Stores steps into the database.

* **Parameters:**
  * `steps` — is the number of steps the user has taken

## `public void displayWeight()`

Displays currentWeight on the Smart Mirror.

## `public void displaySteps()`

Displays steps on the Smart Mirror.

## `public void displayBmi()`

Displays bmi on the Smart Mirror.

## `public void disableWeightDisplay()`

Stops displaying currentWeight on the Smart Mirror.

## `public void disableStepDisplay()`

Stops displaying steps on the Smart Mirror.

## `public void disableBmiDisplay()`

Stops displaying bmi on the Smart Mirror.

## `public void calculateBmi()`

Calculates the user's BMI and updates bmi.
