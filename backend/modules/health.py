# class Health:

def calculate_bmi(height, weight):
    bmi = (weight / (height * height)) * 703
    bmi = round(bmi, 1)
    print(bmi)
    return bmi


def get_steps(steps):
    print(steps)
    return steps

def displayBMI(height, weight):
    bmi = calculate_bmi(height, weight)
    return bmi
