import cv2
import os;
import time;
import ctypes;
import subprocess;

def check_screen_status():
    try:
        # Run the xset command and capture its output
        result = subprocess.run(['xset', 'q'], capture_output=True, text=True, check=True)

        # Find the line containing "Monitor is On" or "Monitor is Off"
        monitor_status_line = next(
            (line for line in result.stdout.splitlines() if "Monitor is" in line),
            None
        )

        # Check if the monitor is on or off
        monitor_is_on = "Monitor is On" in monitor_status_line

        return monitor_is_on
    except subprocess.CalledProcessError as e:
        print(f"Error running xset: {e}")
        return None


face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

camera = cv2.VideoCapture(0)

print("Starting")
os.popen("xset -display :0.0 dpms force off")
interval = .1
lastsignal = 0
DISPLAY_TIMEOUT = 30
while True:
    current = time.time()
    ret, frame = camera.read()
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=3, minSize=(18, 18))
    override = current-lastsignal<DISPLAY_TIMEOUT
    screen_status = check_screen_status()
    if len(faces) > 0 or (current-lastsignal<DISPLAY_TIMEOUT):
       print("Face detected")
       if not screen_status:
           subprocess.run(["xset", "-display", ":0.0", "dpms", "force", "on"])
       if not override:
          lastsignal = current
          #interval = 60
    elif current-lastsignal>DISPLAY_TIMEOUT:
        if screen_status:
            os.popen("xset -display :0.0 dpms force off")
    time.sleep(interval)
