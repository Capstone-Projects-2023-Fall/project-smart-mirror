import cv2
import os;
import time;
import ctypes;

face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

camera = cv2.VideoCapture(0)

'''
# Define constants
SC_MONITORPOWER = 0xF170
MONITOR_OFF = 2
MONITOR_ON = -1

def control_display_power(mode):
    SendMessage = ctypes.windll.user32.SendMessageW
    HWND_BROADCAST = 0xFFFF
    WM_SYSCOMMAND = 0x0112

    SendMessage(HWND_BROADCAST, WM_SYSCOMMAND, SC_MONITORPOWER, mode)

control_display_power(MONITOR_OFF)



time.sleep(10)

'''

print("Starting")

os.popen("xset -display :0.0 dpms force off")
interval = 0
while True:
    ret, frame = camera.read()
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    #faces = face_cascade.detectMultiScale(gray, scaleFactor=1.3, minNeighbors=5, minSize=(30, 30))
    faces = face_cascade.detectMultiScale(gray, scaleFactor=1.2, minNeighbors=4, minSize=(30, 30))

    #cv2.imshow('Face Detection', frame)

    if len(faces) > 0:
       print("Face detected")
       os.popen("xset -display :0.0 dpms force on")
       interval = 60
    else:
        os.popen("xset -display :0.0 dpms force off")
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break
    time.sleep(interval)
camera.release()
cv2.destroyAllWindows()
