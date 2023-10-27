# Event Class:

class Event:

    eventTitle = '' 

    def __init__(self, eventTitle):
        self.eventTitle = eventTitle

    def getTitle(self):
        return self.eventTitle

