#!/bin/bash
echo "Starting Mirror"
echo "Updating git repo"
cd /home/smartmirror/Desktop/project-smart-mirror
git stash
git pull origin LoadingScreen

cd /home/smartmirror/Desktop/project-smart-mirror/src/backend/LoadingScreen

echo "Loading screen"
python -m http.server
chromium-browser --kiosk --disable-infobars --incognito http://localhost:8000/ &
PID=$!

echo "Installing packages"
cd /home/smartmirror/Desktop/project-smart-mirror/frontend/mirror-frontend
npm update
npm i

echo "Starting mirror"
npm run dev &

while ! ncat -z localhost 5173; do
  sleep 1
done
kill $PID
sudo unclutter -idle 0 &
# Once the server is ready, open Chromium in kiosk mode
export DISPLAY=:0
chromium-browser --kiosk --disable-infobars --incognito http://localhost:5173/
echo "System initialized"
echo "Opening browser"

