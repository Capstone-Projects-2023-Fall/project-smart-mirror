import requests
from datetime import datetime
import datetime
import time
import json

# API documentation: https://open-meteo.com/en/docs
# API URLs for daily and weekly forecasts. (hard coded for now)
meteo_weather_url = "https://api.open-meteo.com/v1/forecast?latitude=39.9523&longitude=-75.1638&current=temperature_2m,precipitation,rain,weathercode&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min,uv_index_max,precipitation_probability_max&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timeformat=unixtime&timezone=America%2FNew_York"


# Gets all weather data from weather API and populates response json for us to parse
def get_weather_data():
    response = requests.get(meteo_weather_url)
    if response.status_code == 200:
        return response
    else:
        print("Error connecting to API: ", response.status_code)


# Gets the current temperature from response in degrees farenheit
def get_current_temp(response):
    # response = requests.get(meteo_weather_url)
    data = response.json()

    if "current" in data.keys():
        if "temperature_2m" in data["current"]:
            current_temp = data["current"]["temperature_2m"]
            print(current_temp)
            return current_temp
    else:
        print("ERROR: not found")


# Returns the current WMO weathercode
def get_current_weather_code(response):
    # response = requests.get(meteo_weather_url)
    data = response.json()

    if "current" in data.keys():
        if "weathercode" in data["current"]:
            weather_code = data["current"]["weathercode"]
            return weather_code
    else:
        print("ERROR: not found")


# Translates weather code integer to weather conditions
# Ex: 0 = clear sky, 1 = mainly clear, 2 = partly cloudly, etc
def translate_weather_code(weather_code):
    if weather_code == 0:
        return "Clear sky"
    elif weather_code == 1:
        return "Mainly clear"
    elif weather_code == 2:
        return "Partly cloudy"
    elif weather_code == 3:
        return "Overcast"
    elif weather_code in (45, 46, 48):
        return "Fog"
    elif weather_code == 51:
        return "Light drizzle"
    elif weather_code == 53:
        return "Moderate drizzle"
    elif weather_code == 55:
        return "Dense drizzle"
    elif weather_code == 61:
        return "Slight rain"
    elif weather_code == 63:
        return "Moderate rain"
    elif weather_code == 65:
        return "Heavy rain"
    elif weather_code == 66:
        return "Freezing rain"
    elif weather_code == 67:
        return "Heavy freezing rain"
    elif weather_code == 71:
        return "Slight snow"
    elif weather_code == 73:
        return "Moderate snow"
    elif weather_code == 75:
        return "Heavy snow"
    elif weather_code == 77:
        return "Snow grains"
    elif weather_code == 80:
        return "Slight rain showers"
    elif weather_code == 81:
        return "Moderate rain showers"
    elif weather_code == 82:
        return "Violent rain showers"
    elif weather_code == 85:
        return "Slight snow shower"
    elif weather_code == 86:
        return "Heavy snow shower"
    elif weather_code == 95:
        return "Thunderstorm"
    elif weather_code == 96:
        return "Hail thunderstorm"
    elif weather_code == 99:
        return "Heavy hail thunderstorm"
    else:
        return ""


# What was I cooking here
def get_temp(response):
    data = response.json()
    # print(data)

    # Get the current time as a Unix timestamp
    currentTime = time.time()

    # Round the current timestamp to the nearest hour
    currentTime = round(currentTime / 3600) * 3600
    print(currentTime)

    # forecast = json.load(data)
    index = 0
    # if time in data[hourly]:
    values = data["hourly"]["time"]

    # Find current time
    for value in values:
        if value == currentTime:
            print(index)
            break
        index = index + 1

    currentTemp = data["hourly"]["temperature_2m"][index]
    print(currentTemp)
    currentTemp = round(currentTemp)
    print(currentTemp)
    return currentTemp


if __name__ == "__main__":
    response = get_weather_data()
    if response:
        weather_code = get_current_weather_code(response)
        weather = translate_weather_code(weather_code)
        print(weather)
        get_current_temp(response)
