import cv2
import os;
import time;
import ctypes;
import subprocess;

face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

camera = cv2.VideoCapture(0)

print("Starting")
os.popen("xset -display :0.0 dpms force off")
interval = 0
lastsignal = 0
DISPLAY_TIMEOUT = 10
while True:
    current = time.time()
    ret, frame = camera.read()
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=3, minSize=(20, 20))
    override = current-lastsignal<5
    if len(faces) > 0 or (current-lastsignal<10):
       print("Face detected")
       subprocess.call('xset dpms force on',shell=True)
      # if not override:
          #interval = 60
    elif current-lastsignal>DISPLAY_TIMEOUT:
        os.popen("xset -display :0.0 dpms force off")
    time.sleep(interval)
