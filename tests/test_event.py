import pytest

from src.backend.event import Event

def test_getTitle():
    testObj = Event('Test')
    assert testObj.getTitle() == 'Test'

