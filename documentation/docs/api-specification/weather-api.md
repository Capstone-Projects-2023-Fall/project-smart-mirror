# Weather Class API Documentation

**Purpose:**
The `Weather` class provides functionality to retrieve weather-related information for a specific location.

### `Weather` Class

**Data Fields:**
- `zipCode` (str): The ZIP code for the location.
- `currentTemperature` (float): The current temperature at the specified location.
- `currentPrecipitation` (str): The current precipitation status (e.g., "Rain," "Snow," "Clear," etc.).
- `currentAirQuality` (str): The current air quality index (AQI) at the specified location.

**Methods:**

## `SetLocation(zipCode: str)`

**Purpose:**
Set the location for which weather information will be fetched.

**Parameters:**
- `zipCode` (str): The ZIP code for the new location.

**Pre-conditions:**
- `zipCode` must be a valid ZIP code.

**Post-conditions:**
- The location is updated to the new ZIP code.

## `GetCurrentForecast() -> dict`

**Purpose:**
Fetch and return the current weather conditions for the specified location.

**Return Value:**
- `dict`: A dictionary containing the current weather data.

## `GetDailyForecast() -> dict`

**Purpose:**
Fetch and return the daily weather forecast for the specified location.

**Return Value:**
- `dict`: A dictionary containing the daily weather forecast data.

## `GetWeeklyForecast() -> dict`

**Purpose:**
Fetch and return the weekly weather forecast for the specified location.

**Return Value:**
- `dict`: A dictionary containing the weekly weather forecast data.

## `GetWeatherAlerts() -> list`

**Purpose:**
Retrieve a list of weather alerts for the specified location.

**Return Value:**
- `list`: A list of weather alerts.

## `GetAirQuality() -> str`

**Purpose:**
Retrieve the current air quality index (AQI) at the specified location.

**Return Value:**
- `str`: The current air quality index.

## `GetWindSpeed() -> float`

**Purpose:**
Retrieve the current wind speed at the specified location.

**Return Value:**
- `float`: The current wind speed in meters per second (m/s).

## `GetWeatherIcon() -> str`

**Purpose:**
Retrieve the URL of the weather icon representing the current weather conditions.

**Return Value:**
- `str`: The URL of the weather icon.

## `GetDateTime() -> str`

**Purpose:**
Retrieve the current date and time at the specified location.

**Return Value:**
- `str`: The current date and time.

## `GetHumidity() -> int`

**Purpose:**
Retrieve the current humidity level at the specified location.

**Return Value:**
- `int`: The current humidity level as a percentage.

## `RecommendOutfit() -> str`

**Purpose:**
Generate a clothing outfit recommendation based on the current weather conditions.

**Return Value:**
- `str`: A string containing the outfit recommendation.


**Exceptions Thrown:**
- `WeatherDataUnavailableError`: Raised if weather data cannot be fetched.
- `OutfitRecommendationError`: Raised if an outfit recommendation cannot be generated.

*Note: The exceptions mentioned above should be handled with meaningful error messages for the user.*

# WeatherAlerts Class API Documentation

**Purpose:**
The `WeatherAlerts` class represents a collection of weather alerts for a specific location.

# `WeatherAlerts` Class

**Attributes:**
- `alerts` (list): A list of `WeatherAlert` objects representing weather alerts.

**Methods:**

## `CheckAlerts(zipCode: string) -> WeatherAlert[]`

**Purpose:**
Retrieve and return weather alerts for the specified ZIP code.

**Parameters:**
- `zipCode` (str): The ZIP code for which weather alerts are requested.

**Pre-conditions:**
- `zipCode` must be a valid ZIP code.

**Return Value:**
- `list`: A list of `WeatherAlert` objects representing weather alerts for the specified ZIP code.


# WeatherAlert Class API Documentation

**Purpose:**
The `WeatherAlert` class represents a single weather alert with specific details.

## `WeatherAlert` Class

**Attributes:**
- `alertType` (str): The type of weather alert.
- `description` (str): A description of the weather alert.
- `timeStamp` (Date): The timestamp when the alert was issued.

**Methods:**

## `Create(AlertData: object) -> WeatherAlert`

**Purpose:**
Create a new `WeatherAlert` object with the provided data.

**Parameters:**
- `AlertData` (object): An object containing data for creating the alert.

**Return Value:**
- `WeatherAlert`: A new `WeatherAlert` object created with the provided data.

### `GetAlertType() -> str`

**Purpose:**
Retrieve the type of weather alert.

**Return Value:**
- `str`: The type of weather alert.

## `GetDescription() -> str`

**Purpose:**
Retrieve the description of the weather alert.

**Return Value:**
- `str`: The description of the weather alert.

## `GetTimestamp() -> Date`

**Purpose:**
Retrieve the timestamp when the weather alert was issued.

**Return Value:**
- `Date`: The timestamp of the weather alert issuance.

