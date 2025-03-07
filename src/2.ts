import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
@Component({
  selector: 'app-mathematics-calculator',
  templateUrl: './mathematics-calculator.component.html',
  styleUrls: ['./mathematics-calculator.component.css']
})
export class MathematicsCalculatorComponent {
  public result = '';
  public firstNumber = 0;
  public secondNumber = 0;
  public operator = '+';
  public inputNumber = new FormControl();
  public submitted = false;
  public calculate() {
    switch (this.operator) {
      case '+':
        this.result = String(this.firstNumber + this.secondNumber);
        break;
      case '-':
        this.result = String(this.firstNumber - this.secondNumber);
        break;
      case '*':
        this.result = String(this.firstNumber * this.secondNumber);
        break;
      case '/':
        if (this.secondNumber !== 0) {
          this.result = String(this.firstNumber / this.secondNumber);
        } else {
          alert('You cannot divide by zero');
        }
        break;
    }
  }
}
