#!/bin/bash
echo "Starting Mirror"

echo "Updating git repo"
cd /home/smartmirror/Desktop/project-smart-mirror
git stash
git pull origin main

echo "Installing packages"
cd /home/smartmirror/Desktop/project-smart-mirror/frontend/mirror-frontend
npm i

echo "Starting mirror"
npm run dev

echo "System intialized"