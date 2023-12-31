#!/bin/bash
echo "Starting Mirror"
echo "Updating git repo"
cd /home/smartmirror/Desktop/project-smart-mirror
#LOG_FILE="/home/smartmirror/Desktop/project-smart-mirror/logs/python_output.log"
git stash
git pull origin main

cd /home/smartmirror/Desktop/project-smart-mirror/backend/LoadingScreen

echo "Loading screen"

export FONTCONFIG_PATH=/etc/fonts
python -m http.server &
while ! ncat -z localhost 8000; do
  sleep 1
done
export DISPLAY=:0
chromium-browser --kiosk --disable-infobars --incognito http://localhost:8000/ & PID=$!

echo "Installing packages"
cd /home/smartmirror/Desktop/project-smart-mirror/frontend/mirror-frontend

echo "Starting mirror"
python ./flask_weather.py &
while ! ncat -z localhost 5000; do
  sleep 1
done

export DISPLAY=:0

kill $PID &
cd /home/smartmirror/Desktop/project-smart-mirror/backend/
python3 Camera.py & 

chromium-browser --kiosk --disable-infobars --incognito --hide-scrollbars http://www.projectlumina.app/mirror

echo "System initialized"
echo "Opening browser"
