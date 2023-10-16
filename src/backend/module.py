# Module Class:
import time
class Module: 
    status = 'Uninitialized'
    lastUpdate = 0
    type = 'NULL'
    permissionLevel = -1

    def __init__(self):
        self.lastUpdate = time.time()
        self.type = "ModuleType"
        self.permissionLevel = 0 # Basic permissions
        self.status = 'OK'
   

    def get_status(self):
        return self.status
    
    def pauseModule(self):
        self.status = 'PAUSED'
        return self.status

    def resumeModule(self):
        self.status = 'OK'
        return self.status


