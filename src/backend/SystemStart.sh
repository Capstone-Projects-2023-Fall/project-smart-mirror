#!/bin/bash
export PATH=$PATH:/usr/local/bin   # Adjust the path as needed
export NODE_ENV=production
export PATH=/usr/local/bin:/usr/bin:/bin
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
npm run dev

echo "System initialized"
