# Event Class:

class Widget: ## Widget classes must have the name 
    status = None
    testValue = ''
    def __init__(self):
        # All widgets now need an init
        self.testValue = "Set"

    def getTitle(self):
        return self.eventTitle

