import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mathematics-calculator',
  templateUrl: './mathematics-calculator.component.html',
  styleUrls: ['./mathematics-calculator.component.css']
})
export class MathematicsCalculatorComponent {
  calculatorForm = new FormGroup({
    number1: new FormControl('', Validators.required),
    operator: new FormControl('', Validators.required),
    number2: new FormControl('', Validators.required)
  });

  onCalculate() {
    const number1 = parseInt(this.calculatorForm.get('number1').value, 10);
    const operator = this.calculatorForm.get('operator').value;
    const number2 = parseInt(this.calculatorForm.get('number2').value, 10);

    if (isNaN(number1) || isNaN(number2)) {
      return;
    }

    let result: any = null;

    switch (operator) {
      case '+':
        result = number1 + number2;
        break;
      case '-':
        result = number1 - number2;
        break;
      case '*':
        result = number1 * number2;
        break;
      case '/':
        if (number2 === 0) {
          return;
        }
        result = number1 / number2;
        break;
    }

    this.calculatorForm.patchValue({
      result: result
    });
  }
}