# Event Class:

class Widget:

    eventTitle = '' 
    testValue = ''
    def __init__(self):
        self.testValue = "Set"
        print("initting event")

    def getTitle(self):
        return self.eventTitle

