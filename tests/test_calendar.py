import time
import pytest

from src.backend.modules.calendar_module import CalendarModule

def test_getService():
    testCM = CalendarModule()
    service = testCM.getService()
    assert service

def test_getCals():
    testCM = CalendarModule()
    service = testCM.getService()
    calendars = testCM.getCals(service, 1)
    # assertion hardcoded using my token.json info, does not work for others yet
    # may need to run tests on some test google accounts?
    assert calendars.get(0) == 'michael.wilcox35@gmail.com'

def test_getEvents():
    testCM = CalendarModule()
    service = testCM.getService()
    calendars = testCM.getCals(service, 1)
    events = testCM.getEvents(service, calendars.get(0))
    # assertions incomplete
    assert events[0]