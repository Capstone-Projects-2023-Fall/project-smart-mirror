# Module Class API Documentation

**Purpose:**
The `Module` class allows the system to interface with subsequent submodules and widgets. All widgets will inherit the module class, giving it access to system properties based on permission level, and a variety of others features for system integrity.

## `Module` Class

**Attributes:**
- `status` (str): The current status of the module.
- `lastUpdate` (int): The timestamp of the last update.
- `type` (str): The type of the module.
- `permissionLevel` (int const): The permission level of the module (constant).

**Methods:**

## `PullUserProfile()`

**Purpose:**
Pull user profile data for the module.

**Pre-conditions:**
- The module must have appropriate access permissions.

## `GetStatus() -> str`

**Purpose:**
Retrieve the current status of the module.

**Return Value:**
- `str`: The current status of the module.

## `Initialize()`

**Purpose:**
Initialize the module.

**Pre-conditions:**
- The module must not be already initialized.

## `GetType() -> str`

**Purpose:**
Retrieve the type of the module.

**Return Value:**
- `str`: The type of the module.

## `PauseModule()`

**Purpose:**
Pause the module's operations.

**Pre-conditions:**
- The module must be currently active.

## `ResumeModule()`

**Purpose:**
Resume the module's operations.

**Pre-conditions:**
- The module must be paused.

## `DisableModule()`

**Purpose:**
Disable the module.

**Pre-conditions:**
- The module must be initialized.

## `Refresh()`

**Purpose:**
Refresh the module's data.

**Pre-conditions:**
- The module must be active and initialized.
