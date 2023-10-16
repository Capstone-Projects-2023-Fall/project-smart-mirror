import pytest
from src.backend.health import calculate_bmi
from src.backend.health import get_steps

def test_bmi():
    assert calculate_bmi(70, 165) == 23.7

def test_getsteps():
    assert get_steps(1000) == 1000