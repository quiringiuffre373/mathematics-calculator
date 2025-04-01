# This is just a placeholder code for demonstration purposes.
def calculate(a, b, operation):
    if operation == 'add':
        return a + b
    elif operation == 'subtract':
        return a - b
    elif operation == 'multiply':
        return a * b
    else:  # division and root calculation not implemented yet.
        return "Invalid operation"

# Example usage:
result = calculate(5, 3, "add")
print(result)
