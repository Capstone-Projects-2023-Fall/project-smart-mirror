import cv2
import os;
import time;
import ctypes;
import subprocess;

face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

camera = cv2.VideoCapture(0)

print("Starting")
os.popen("xset -display :0.0 dpms force off")
interval = .1
lastsignal = 0
DISPLAY_TIMEOUT = 10
while True:
    current = time.time()
    ret, frame = camera.read()
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=3, minSize=(19, 19))
    override = current-lastsignal<DISPLAY_TIMEOUT
    if len(faces) > 0 or (current-lastsignal<DISPLAY_TIMEOUT):
       print("Face detected")
       subprocess.run(["xset", "-display", ":0.0", "dpms", "force", "on"])
       if not override:
          lastsignal = current
          #interval = 60
    elif current-lastsignal>DISPLAY_TIMEOUT:
        os.popen("xset -display :0.0 dpms force off")
    time.sleep(interval)
