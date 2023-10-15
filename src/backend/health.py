# class Health:

def calculate_bmi(height, weight):
    bmi = (weight / (height * height)) * 703
    bmi = round(bmi, 1)
    print(bmi)
    return bmi


def getsteps(steps):
    print(steps)
    return steps
