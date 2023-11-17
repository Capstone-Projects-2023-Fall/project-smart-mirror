#!/bin/bash
echo "Starting Mirror"
echo "Updating git repo"
cd /home/smartmirror/Desktop/project-smart-mirror
git stash
git pull origin SM-161

echo "Installing packages"
cd /home/smartmirror/Desktop/project-smart-mirror/frontend/mirror-frontend
npm update
npm i

echo "Starting mirror"
npm run dev &

while ! ncat -z localhost 5173; do
  sleep 1
done
sudo unclutter -idle 0 &
# Once the server is ready, open Chromium in kiosk mode
export DISPLAY=:0
chromium-browser --kiosk --disable-infobars --incognito http://localhost:5173/
echo "System initialized"
echo "Opening browser"

