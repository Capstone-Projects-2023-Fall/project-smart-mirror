from flask import Flask, render_template
import requests

app = Flask(__name__, template_folder='templates')


# API URLs for daily and weekly forecasts. (hard coded for now)
meteo_weather_url = "https://api.open-meteo.com/v1/forecast?latitude=39.9523&longitude=-75.1638&current=temperature_2m,precipitation,rain,weathercode&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min,uv_index_max,precipitation_probability_max&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timeformat=unixtime&timezone=America%2FNew_York"

def get_weather_data():
    response = requests.get(meteo_weather_url)
    if response.status_code == 200:
        return response
    else:
        print("Error connecting to API: ", response.status_code)

def get_current_temp(response):
    data = response.json()
    if "current" in data.keys():
        if "temperature_2m" in data["current"]:
            current_temp = data["current"]["temperature_2m"]
            return current_temp
    else:
        print("ERROR: Current temp not found")

def get_current_weather_code(response):
    data = response.json()
    if "current" in data.keys():
        if "weathercode" in data["current"]:
            weather_code = data["current"]["weathercode"]
            return weather_code
    else:
        print("ERROR: Weather code not found")

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
    
   

def get_uv(response):
    data = response.json()
    if "daily" in data.keys():
        if "uv_index_max" in data["daily"]:
            uv = data["daily"]["uv_index_max"][0]
            return uv
    else:
        print("ERROR: UV not found")

@app.route('/')
def index():
    response = get_weather_data()
    
    if response:
        uv = get_uv(response)
        weather_code = get_current_weather_code(response)
        weather = translate_weather_code(weather_code)
        current_temp = get_current_temp(response)

        
        print(response)
        print(weather)
        print(current_temp)
        print(uv)

        return render_template('demo.html', weather=weather, current_temp=current_temp, uv=uv)
    else:
        return "Unable to fetch weather data."
    
@app.route('/hello')
def hello_world():
    return "Hello, World!"


if __name__ == "__main__":
    app.run(debug=True)
