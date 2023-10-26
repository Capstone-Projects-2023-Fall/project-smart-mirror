import pytest

from src.backend.modules.event import Event

def test_getTitle():
    testObj = Event('Test')
    assert testObj.getTitle() == 'Test'

