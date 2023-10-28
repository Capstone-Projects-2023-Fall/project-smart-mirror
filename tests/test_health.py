import pytest
from src.backend.modules.health import calculate_bmi, displayBMI
from src.backend.modules.health import get_steps

def test_bmi():
    assert calculate_bmi(70, 165) == 23.7

def test_getsteps():
    assert get_steps(1000) == 1000
def test_Display_BMI():
    expected_bmi = 23.7
    assert displayBMI(70, 165) == expected_bmi