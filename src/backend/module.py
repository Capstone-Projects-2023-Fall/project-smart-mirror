# Module Class:
import time
class Module: 
    status = 'Uninitialized'
    lastUpdate = 0
    type = 'NULL'
    permissionLevel = -1
    name = 'NULL'
    widgetInstance = 'NULL'

    def __init__(self,moduleName):
        self.lastUpdate = time.time()
        self.type = "ModuleType"
        self.permissionLevel = 0 # Basic permissions
        self.status = 'OK'
        self.name = moduleName

        # Init the module based on name. Files are located inside of src.backend.modules 

        try:
            widget_module = __import__(f"modules.{moduleName}", fromlist=[None])
            self.widgetInstance = widget_module.Widget()
        except ImportError as e:
            # incase it doesnt exists
            print(f"Widget '{moduleName}' not found. Error: {e}")

        #return self

    def get_widgetInstance(self):
        return self.widgetInstance

    def get_status(self):
        return self.status
    def set_status(self,goalStatus):
        self.status = goalStatus
        return self.status
    def pauseModule(self):
        self.status = 'PAUSED'
        return self.status

    def resumeModule(self):
        if self.get_status() == 'PAUSED':
            self.set_status('OK')

        return self.status

if __name__ == "__main__":
    mod = Module("WidgetTest")

