import math

def add(x, y):
    return x + y

def subtract(x, y):
    return x - y

def multiply(x, y):
    return x * y

def divide(x, y):
    if y != 0:
        return x / y
    else:
        return "Error! Division by zero."

# Example usage:
result_add = add(10, 5)
result_subtract = subtract(10, 5)
result_multiply = multiply(4, 2)
result_divide = divide(10, 0)

print("Addition:", result_add)
print("Subtraction:", result_subtract)
print("Multiplication:", result_multiply)
print("Division (Error! Division by zero.):", result_divide)
