import math

def calculate(num1: float, num2: float) -> float:
    return num1 + num2

def subtract(num1: float, num2: float) -> float:
    return num1 - num2

def multiply(num1: float, num2: float) -> float:
    return num1 * num2

def divide(num1: float, num2: float) -> float:
    if num2 != 0:
        return num1 / num2
    else:
        return "Cannot divide by zero"

print("This program can perform basic arithmetic operations.")
