import { Component } from '@angular/core';
@Component({
selector: 'app-mathematics-calculator',
templateUrl: './mathematics-calculator.component.html',
styleUrls: ['./mathematics-calculator.component.css']
})
export class MathematicsCalculatorComponent {
constructor() {}
performOperation(a, b, op) {
switch (op) {
case '+':
return a + b;
break;
case '-':
return a - b;
break;
case '*':
return a * b;
break;
case '/':
if (b === 0) {
throw new Error('Cannot divide by zero');
} else {
return a / b;
}
break;
default:
throw new Error('Invalid operator');
}
}
}