import os
from google.oauth2 import service_account
from google_auth_oauthlib.flow import InstalledAppFlow, Flow
from google.auth.transport.requests import Request
from googleapiclient.discovery import build
from google.oauth2.credentials import Credentials

# It's called CalendarModule for now
# Handles API calls to Google Calendar API

# Requires a client-secret.json and client ID from Google Cloud Console

# Must be run in the venv "smart_env" with the following command: 
#   smart_env/Scripts/activate
# Make sure virtualenv is installed to your machine (through a pip install)
# If your script execution permissions are insufficient, run this command in the terminal:
#   set-executionpolicy Remotesigned Process
# (Process is the scope of the policy change, so closing and making a new process means you must 
# use the command again)

# Event Resource Format: see event_structure.txt
# Calendar Resource Format: see calendar_structure.txt

# DO NOT delete token.json once created until this comment block disappears
#   (creates an issue where there is no refresh token in token.json upon regen) 
#   (I only have a max of 100 users and already wasted a slot)

class CalendarModule:

    def __init__(self):

        self.CLIENT_SECRET = 'src/backend/modules/client-secret.json'
        # currently hardcoded
        self.CLIENT_ID = '280917108631-kiggastrj94d7jl4rc63blaj361prrho.apps.googleusercontent.com'
        self.API_NAME = 'calendar'
        self.API_VERSION = 'v3'
        self.SCOPES = ['https://www.googleapis.com/auth/calendar']
        self.TOKEN_FILE = 'src/backend/modules/token.json'



    # calls the Google Calendar API and returns a resource to interact with the API
    def getService(self):

        creds = None
        if os.path.exists(self.TOKEN_FILE):
            creds = Credentials.from_authorized_user_file(self.TOKEN_FILE, self.SCOPES)
        if not creds or not creds.valid:
            if creds and creds.expired and creds.refresh_token:
                creds.refresh(Request())
            else:
                calFlow = Flow.from_client_secrets_file(self.CLIENT_SECRET, self.SCOPES, redirect_uri='http://localhost:8080')
                auth_uri = calFlow.authorization_url()
                code = input('Enter authorization code from the following link: ' + auth_uri[0] + 
                '\nAfter allowing access to your account\'s calendar, the page\'s URL contains the code  after the phrase: \"code=\"\n')
                calFlow.fetch_token(code=code)
                creds = calFlow.credentials
            with open(self.TOKEN_FILE, 'w') as token:
                token.write(creds.to_json())

        service = build(self.API_NAME, self.API_VERSION, credentials=creds)
        return service

    # Returns a list of Calendars from an Calendar API service
    #   service: resource object that allows interaction with the API
    #   writeOnly: if true, only lists calendars that the user owns or has write permissions to
    def getCals(self, service, writeOnly = None):
        calendars = dict()
        page_token = None
        i = 0
        while True:
            calendar_list = service.calendarList().list(pageToken=page_token).execute()
            for calendar_list_entry in calendar_list['items']:
                if (writeOnly):
                    if (calendar_list_entry['accessRole'] == 'owner' or calendar_list_entry['accessRole'] == 'writer'):
                        calendars[i] = calendar_list_entry['id']
                        i += 1
                else:        
                    calendars[i] = calendar_list_entry['id']
                    i += 1
            page_token = calendar_list.get('nextPageToken')
            if not page_token:
                break
            
        return calendars
    # Returns information related to a calendar
    #   service: resource object that allows interaction with the API
    #   calId: ID of the event's associated calendar (gotten from the API beforehand, see getCals())
    def getCalInfo(self, service, calId):
        calendar = service.calendars().get(calendarId=calId).execute()
        return calendar['summary']

    # Returns a list of events within a calendar
    #   service: resource object that allows interaction with the API
    #   calId: ID of the event's associated calendar (gotten from the API beforehand, see getCals())
    #   timeMin, timeMax: (optional) defines a range of events according to time (datetime) 
    def getEvents(self, service, calId, timeMin = None, timeMax = None):
        events = dict()
        page_token = None
        i = 0
        isTimeMin = False
        isTimeMax = False
        if (timeMin != None):
            isTimeMin = True
        if (timeMax != None):
            isTimeMax = True
            
        # need to verify isTimeMin/Max values
          
        event_list = service.events().list(calendarId=calId, pageToken=page_token).execute()
        for event in event_list['items']:
            if (not (isTimeMin and isTimeMax) or event['start']['dateTime'] >= timeMin and event['end']['dateTime'] <= isTimeMax):
                events[i] = event['id']
                page_token = event_list.get('nextPageToken')
                if not page_token:
                    break
                i += 1
        return events

    # Returns information related to an event
    #   service: resource object that allows interaction with the API
    #   calId: ID of the event's associated calendar (gotten from the API beforehand, see getCals())
    #   eventId: ID of the event (gotten from the API beforehand, see getEvents())
    def getEventInfo(self, service, calId, eventId):

        event = service.events().get(calendarId=calId, eventId='eventId').execute()
        return event['summary']

    def deleteEvent(self, service, calId, eventId):
        return service.events().delete(calendarId=calId, eventId=eventId).execute()

    def deleteCal(self, service, calId):
        return service.calendar().delete(calendarId=calId).execute()

