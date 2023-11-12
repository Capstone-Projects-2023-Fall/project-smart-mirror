import requests
from datetime import datetime
import datetime
import urllib.parse
import time
import json


class Widget:
    status = None
    testValue = ''
    def __init__(self):
        # API documentation: https://open-meteo.com/en/docs
        # API URLs for daily and weekly forecasts. (hard coded for now)
        meteo_weather_url = "https://api.open-meteo.com/v1/forecast?latitude=39.9523&longitude=-75.1638&current=temperature_2m,precipitation,rain,weathercode&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min,uv_index_max,precipitation_probability_max&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timeformat=unixtime&timezone=America%2FNew_York"
        self.testValue = "Set"

    def getTitle(self):
        return self.eventTitle

    def get_coords_from_API(self, name):
        URL = "https://geocoding-api.open-meteo.com/v1/search?"
        params = {
            "name": name,
            "count": 1,
            "language": "en",
            "format": "json"
        }
        URL = URL + urllib.parse.urlencode(params)
        response = requests.get(URL)
        if response.status_code == 200:
            return response
        else:
            print("Error connecting to geocoding API: ", response.status_code)

    def build_url_from_coords(self, lat, long):
        base_url = "https://api.open-meteo.com/v1/forecast?"
        params = {
            "latitude": lat,
            "longitude": long,
            "current": "temperature_2m,precipitation,rain,weathercode",
            "hourly": "temperature_2m",
            "daily": "temperature_2m_max,temperature_2m_min,uv_index_max,precipitation_probability_max",
            "temperature_unit": "fahrenheit",
            "windspeed_unit": "mph",
            "precipitation_unit": "inch",
            "timeformat": "unixtime",
            "timezone": "America/New_York",
        }
        url = base_url + urllib.parse.urlencode(params)
        return url

    # Check if an argument is a decimal or float
    def is_float(self, string):
        if string.replace(".", "").isnumeric():
            return True
        else:
            return False

    # Gets all weather data from weather API and populates response json for us to parse
    def get_weather_data(self, URL):
        response = requests.get(URL)
        if response.status_code == 200:
            return response
        else:
            print("Error connecting to API: ", response.status_code)

    # Parse the current temperature from response in degrees farenheit
    def get_current_temp(self, response):
        # response = requests.get(meteo_weather_url)
        data = response.json()

        if "current" in data.keys():
            if "temperature_2m" in data["current"]:
                current_temp = data["current"]["temperature_2m"]
                return current_temp
        else:
            print("ERROR: Current temp not found")

    # Parse the current WMO weathercode from response
    def get_current_weather_code(self, response):
        # response = requests.get(meteo_weather_url)
        data = response.json()

        if "current" in data.keys():
            if "weathercode" in data["current"]:
                weather_code = data["current"]["weathercode"]
                return weather_code
        else:
            print("ERROR: Weather code not found")

    # Translates weather code integer to weather conditions english
    # Ex: 0 = clear sky, 1 = mainly clear, 2 = partly cloudly, etc
    def translate_weather_code(self, weather_code):
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

    # Parses today's uv from the response variable
    def get_uv(self, response):
        data = response.json()
        if "daily" in data.keys():
            if "uv_index_max" in data["daily"]:
                uv = data["daily"]["uv_index_max"][0]
                # print(uv)
                return uv
        else:
            print("ERROR: UV not found")

    def parse_geocode_response(self, response):
        data = response.json()
        retVal = {
            "name": "",
            "latitude": "",
            "longitude": "",
            "timezone": ""
        }
        if "results" in data and isinstance(data["results"], list) and data["results"]:
            result = data["results"][0]
            if "name" and "latitude" and "longitude" and "timezone" in result:
                retVal["name"] = result["name"]
                retVal["latitude"] = result["latitude"]
                retVal["longitude"] = result["longitude"]
                retVal["timezone"] = result["timezone"]
                return retVal
        return None

    # What was I cooking here
    def get_temp(self, response):
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

    def display_forecast(self, weather, current_temp, uv):
        print(f'Weather forecast:')
        print(f'Description: {weather}')
        print(f'Temperature: {current_temp}°F')
        print(f'UV Index: {uv}')

    def find_key_in_dict(self, d, key_to_find):
        if isinstance(d, dict):
            for key, value in d.items():
                if key == key_to_find:
                    return value
                elif isinstance(value, dict):
                    result = weather.find_key_in_dict(value, key_to_find)
                    if result is not None:
                        return result
        return None

    def find_keys_in_dict(self, dictionary, key_to_find):
        found_values = []
        if isinstance(dictionary, dict):
            for key, value in dictionary.items():
                if key == key_to_find:
                    found_values.append(value)
                elif isinstance(value, dict):
                    found_values.extend(weather.find_keys_in_dict(value, key_to_find))

        return found_values

if __name__ == "__main__":
    weather = Widget()
    print(help(weather))
    #city_search = weather.get_coords_from_API("19128")
    # if city_search:
    #     parsed_values = weather.parse_geocode_response(city_search)
    #     if parsed_values:
    #         lat = parsed_values["latitude"]
    #         long = parsed_values["longitude"]
    #         city = parsed_values["name"]
    #
    #
    #         print(city)
    #         URL = weather.build_url_from_coords(lat, long)
    #         response = weather.get_weather_data(URL)
    #         if response:
    #             uv = weather.get_uv(response)
    #             weather_code = weather.get_current_weather_code(response)
    #             weather = weather.translate_weather_code(weather_code)
    #             current_temp = weather.get_current_temp(response)
    #             max_temps = weather.find_keys_in_dict(response.json(), "temperature_2m_max")
    #             min_temps = weather.find_keys_in_dict(response.json(), "temperature_2m_min")
    #             weather.display_forecast(weather, current_temp, uv)
    #     else:
    #         print("Error")
