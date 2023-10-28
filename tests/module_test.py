import time
import pytest

from src.backend.module import Module

@pytest.fixture
def module():
    return Module("WidgetTest")

def test_get_status(module):
    # Initially, the status should be 'Uninitialized'
    assert module.get_status() == 'OK'

def test_pauseModule(module):
    # Test pausing the module
    module.pauseModule()
    assert module.status == 'PAUSED'

def test_widgetCreation(module):
    widget = module.get_widgetInstance()
    assert widget != None

def test_widgetInitialization(module):
    # Test pausing the module
    
    assert module.widgetInstance.testValue == 'Set'

def test_ModuleRestart(module):
    # Test pausing the module
    module.restartModule()
    assert module.get_status() == 'OK'


def test_Initialize(module):
    # Test initializing the module
    assert isinstance(module, Module)
    assert module.type == 'ModuleType'
    assert module.permissionLevel == 0
    assert module.status == 'OK'

def test_resumeModule(module):
    # Test resuming the module
    module.pauseModule()  # Pause the module first
    module.resumeModule()
    assert module.status == 'OK'
