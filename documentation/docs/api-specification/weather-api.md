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

#### `SetLocation(zipCode: str)`

**Purpose:**
Set the location for which weather information will be fetched.

**Parameters:**
- `zipCode` (str): The ZIP code for the new location.

**Pre-conditions:**
- `zipCode` must be a valid ZIP code.

**Post-conditions:**
- The location is updated to the new ZIP code.

#### `GetCurrentForecast() -> dict`

**Purpose:**
Fetch and return the current weather conditions for the specified location.

**Return Value:**
- `dict`: A dictionary containing the current weather data.

#### `GetDailyForecast() -> dict`

**Purpose:**
Fetch and return the daily weather forecast for the specified location.

**Return Value:**
- `dict`: A dictionary containing the daily weather forecast data.

#### `GetWeeklyForecast() -> dict`

**Purpose:**
Fetch and return the weekly weather forecast for the specified location.

**Return Value:**
- `dict`: A dictionary containing the weekly weather forecast data.

#### `GetWeatherAlerts() -> list`

**Purpose:**
Retrieve a list of weather alerts for the specified location.

**Return Value:**
- `list`: A list of weather alerts.

#### `GetAirQuality() -> str`

**Purpose:**
Retrieve the current air quality index (AQI) at the specified location.

**Return Value:**
- `str`: The current air quality index.

#### `GetWindSpeed() -> float`

**Purpose:**
Retrieve the current wind speed at the specified location.

**Return Value:**
- `float`: The current wind speed in meters per second (m/s).

#### `GetWeatherIcon() -> str`

**Purpose:**
Retrieve the URL of the weather icon representing the current weather conditions.

**Return Value:**
- `str`: The URL of the weather icon.

#### `GetDateTime() -> str`

**Purpose:**
Retrieve the current date and time at the specified location.

**Return Value:**
- `str`: The current date and time.

#### `GetHumidity() -> int`

**Purpose:**
Retrieve the current humidity level at the specified location.

**Return Value:**
- `int`: The current humidity level as a percentage.

#### `RecommendOutfit() -> str`

**Purpose:**
Generate a clothing outfit recommendation based on the current weather conditions.

**Return Value:**
- `str`: A string containing the outfit recommendation.


**Exceptions Thrown:**
- `WeatherDataUnavailableError`: Raised if weather data cannot be fetched.
- `OutfitRecommendationError`: Raised if an outfit recommendation cannot be generated.

*Note: The exceptions mentioned above should be handled with meaningful error messages for the user.*
