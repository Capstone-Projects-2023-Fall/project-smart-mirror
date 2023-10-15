import pytest
from src.backend.health import calculate_bmi
from src.backend.health import getsteps

def test_bmi():
    assert calculate_bmi(70, 165) == 23.7

def test_getsteps():
    assert getsteps(1000) == 1000