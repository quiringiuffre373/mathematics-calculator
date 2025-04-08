import math

def simple_math_calculator():
    while True:
        print("1. Addition")
        print("2. Subtraction")
        print("3. Multiplication")
        print("4. Division")
        choice = input("Enter your choice (1/2/3/4): ")
        
        if choice == "1":
            num1 = float(input("Enter the first number: "))
            num2 = float(input("Enter the second number: "))
            result = num1 + num2
            print(f"Result: {result}")
            
        elif choice == "2":
            num1 = float(input("Enter the first number: "))
            num2 = float(input("Enter the second number: "))
            result = num1 - num2
            print(f"Result: {result}")
        
        elif choice == "3":
            num1 = float(input("Enter the first number: "))
            num2 = float(input("Enter the second number: "))
            if num2 != 0:
                result = num1 * num2
                print(f"Result: {result}")
            else:
                print("Error: Division by zero is not allowed.")
        elif choice == "4":
            num1 = float(input("Enter the first number: "))
            num2 = int(input("Enter the second number: "))
            if num2 != 0:
                result = num1 / num2
                print(f"Result: {result}")
            else:
                print("Error: Division by zero is not allowed.")
        
        else:
            print("Invalid choice. Please try again.")

simple_math_calculator()
