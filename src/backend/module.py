# Module Class:
import time
import importlib.util
import os

def find_project_root():
    current_dir = os.path.abspath(os.path.dirname(__file__))
    
    while True:
        if 'README.md' in os.listdir(current_dir):
            return current_dir
        elif current_dir == '/':
            # Reached the root directory without finding the marker file
            raise RuntimeError("Project root not found.")
        else:
            # Move up one directory
            current_dir = os.path.dirname(current_dir)

# Example usage
project_root = find_project_root()

class Module: 
    status = 'Uninitialized'
    lastUpdate = 0
    type = 'NULL'
    permissionLevel = -1
    name = 'NULL'
    widgetInstance = None

    def __init__(self,moduleName):
        self.lastUpdate = time.time()
        self.type = "ModuleType"
        self.permissionLevel = 0 # Basic permissions
        self.name = moduleName

        # Init the module based on name. Files are located inside of src.backend.modules 

        self.tryWidgetInit(moduleName)

    def tryWidgetInit(self,moduleName):
        module_path = os.path.join(project_root, "src", "backend", "modules", moduleName + ".py")
        try:
            spec = importlib.util.spec_from_file_location(moduleName, module_path)
            module = importlib.util.module_from_spec(spec)
            spec.loader.exec_module(module)
            try:
                self.widgetInstance = module.Widget()
                self.status = 'OK'
            except Exception as e:
                # Handle any exception that occurs during widget instantiation
                print(f"Widget instantiation failed for '{moduleName}'. Error: {e}")
                self.status = 'ERR-01'
        except Exception as e:
            #Failed to import
            print(f"Widget '{moduleName}' not found. Error: {e}")
            self.status = 'ERR'

    def get_widgetInstance(self):
        #return widget instance
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
    
    def restartModule(self):
        #attempt to reinit widget
        self.set_status("RESTARTING")
        self.tryWidgetInit(self.name)
        return self.status
    
if __name__ == "__main__":
    mod = Module("WidgetTest")

