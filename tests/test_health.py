import pytest
from src.smartmirror.health import calculate_bmi

def test_bmi():
    assert calculate_bmi(70, 165) == 23.7