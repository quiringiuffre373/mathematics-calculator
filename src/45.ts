import math

def calculate(a, b, operation):
    if operation == 'add':
        return a + b
    elif operation == 'subtract':
        return a - b
    elif operation == 'multiply':
        return a * b
    elif operation == 'divide':
        return a / b
    else:
        raise ValueError("Unsupported operation")

# Example usage
result = calculate(10, 5, 'add')
print(result)  # Output: 15

result = calculate(2.5, 4.0, 'multiply')
print(result)  # Output: 10.0

result = calculate(3, 7, 'divide')
print(result)  # Output: 0.857142857142857
