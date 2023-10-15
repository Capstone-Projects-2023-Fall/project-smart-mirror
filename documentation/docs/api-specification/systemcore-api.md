# System-Core
The system core is comprised of the System Class and the SystemUpdateHandler Class. These two work in cohesion to innitialize, maintain, and update the system.
# System Class API Documentation

**Purpose:**
The `System` class represents the core of a smart mirror system, responsible for managing system-wide operations.

### `System` Class

**Attributes:**
- `Status` (str): The current status of the system.

**Methods:**

#### `SystemActionLoop()`

**Purpose:**
Initiate the system action loop, which continuously performs system-level actions and maintains system integrity.

**Pre-conditions:**
- The system must be initialized and in an active state.

#### `WaitOnActivation()`

**Purpose:**
Wait for the system to activate.

**Pre-conditions:**
- The system must be in a standby or inactive state.

#### `ProcessUpdateInformation()`

**Purpose:**
Process incoming update information for the smart mirror system.

**Pre-conditions:**
- There must be new update information available.

#### `SwitchUser()`

**Purpose:**
Switch to a different user profile within the system.

**Pre-conditions:**
- Multiple user profiles must exist in the system.

#### `SwitchUserProfile()`

**Purpose:**
Switch to a specific user profile within the system.

**Pre-conditions:**
- The specified user profile must exist in the system.



# SystemUpdateHandler Class API Documentation

**Purpose:**
The `SystemUpdateHandler` class is responsible for managing and handling updates related to calendar information, weather data, and user preferences within a smart mirror system. It is associated with the core `System` class.

### `SystemUpdateHandler` Class

**Attributes:**
- `updateFrequency` (int): The frequency at which updates are checked and fetched.
- `lastUpdate` (long int): Timestamp of the last update.
- `calendarInfo` (val): Information related to the calendar.
- `weatherInfo` (val): Information related to weather data.
- `userPreferences` (val): User-specific preferences.

**Methods:**

#### `InitializeUpdater()`

**Purpose:**
Initialize the updater for handling updates.

**Pre-conditions:**
- The smart mirror system must be running and initialized.

#### `PullData()`

**Purpose:**
Retrieve and update calendar information, weather data, and user preferences.

**Pre-conditions:**
- The updater must be initialized.

#### `ForceUpdate()`

**Purpose:**
Force an immediate update of calendar information, weather data, and user preferences.

**Pre-conditions:**
- The updater must be initialized.

**Association with Core `System` Class:**

The `SystemUpdateHandler` class is associated with the core `System` class in the following way:

- The `System` class initializes and manages the overall smart mirror system, including user profiles and system status.

- The `SystemUpdateHandler` class, on the other hand, focuses on handling updates for specific data types like calendar information, weather data, and user preferences.

- The `SystemUpdateHandler` class is part of the smart mirror system and works in conjunction with the `System` class to ensure that relevant data is kept up to date for display on the smart mirror.

- The `System` class can interact with the `SystemUpdateHandler` to trigger updates or respond to update events, ensuring that the smart mirror provides timely and accurate information to users.
