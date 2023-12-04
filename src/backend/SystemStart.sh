#!/bin/bash
echo "Starting Mirror"
echo "Updating git repo"
cd /home/smartmirror/Desktop/project-smart-mirror
#LOG_FILE="/home/smartmirror/Desktop/project-smart-mirror/logs/python_output.log"
git stash
git pull origin main

cd /home/smartmirror/Desktop/project-smart-mirror/src/backend/LoadingScreen

echo "Loading screen"

export FONTCONFIG_PATH=/etc/fonts
python -m http.server &
while ! ncat -z localhost 8000; do
  sleep 1
done
export DISPLAY=:0
chromium-browser --kiosk --disable-infobars --incognito http://localhost:8000/ & PID=$!

echo "Installing packages"
cd /home/smartmirror/Desktop/project-smart-mirror/frontend/progressive-app
npm update
npm i
npm run dev &

cd /home/smartmirror/Desktop/project-smart-mirror/frontend/mirror-frontend
npm i

echo "Starting mirror"
npm run dev &

while ! ncat -z localhost 5173; do
  sleep 1
done
# Once the server is ready, open Chromium in kiosk mode
export DISPLAY=:0
# sudo unclutter -idle 0 &
kill $PID &
cd /home/smartmirror/Desktop/project-smart-mirror/src/backend/
python3 Camera.py & #> "$LOG_FILE" 2>&1 &
cd /home/smartmirror/Desktop/project-smart-mirror/frontend/mirror-frontend
chromium-browser --kiosk --disable-infobars --incognito --hide-scrollbars http://localhost:5173/

echo "System initialized"
echo "Opening browser"
