#include <iostream>
using namespace std;

int main() {
    int num1, num2, operation;
    
    cout << "Enter first number: ";
    cin >> num1;
    cout << "Enter second number: ";
    cin >> num2;
    cout << "Enter operation (+, -, *, /): ";
    cin >> operation;
    
    switch(operation) {
        case '+':
            cout << num1 << " + " << num2 << " = " << (num1 + num2) << endl;
            break;
        case '-':
            cout << num1 << " - " << num2 << " = " << (num1 - num2) << endl;
            break;
        case '*':
            cout << num1 << " * " << num2 << " = " << (num1 * num2) << endl;
            break;
        case '/':
            if (num2 != 0) {
                cout << num1 << " / " << num2 << " = " << (double)(num1 / num2) << endl;
            } else {
                cout << "Error: Division by zero." << endl;
            }
            break;
        default:
            cout << "Invalid operation. Please enter valid operation (+, -, *, /)." << endl;
    }

    return 0;
}
