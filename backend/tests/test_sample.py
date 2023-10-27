import pytest

# Example of how to use pytest unit testing
# Example of how to run tests (python -m pytest)

def inc(x):
    return x


def test_answer():
    assert inc(3) == 3

