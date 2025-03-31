import math

def calculate(num1: float, num2: float) -> float:
    result = num1 + num2
    return result

num1: float = 5.0
num2: float = 3.0
result: float = calculate(num1, num2)
print("The sum of", num1, "and", num2, "is:", result)
