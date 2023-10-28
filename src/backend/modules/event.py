# Event Class:

class Event:

    eventTitle = '' 

    def __init__(self, eventTitle):
        self.eventTitle = eventTitle
        print("initting event")

    def getTitle(self):
        return self.eventTitle

