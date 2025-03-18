import { Component } from '@angular/core';

@Component({
  selector: 'app-mathematics-calculator',
  templateUrl: './mathematics-calculator.component.html',
  styleUrls: ['./mathematics-calculator.component.css']
})
export class MathematicsCalculatorComponent {
  result = 0;

  performOperation(operation) {
    if (this.result === 0 && operation !== '=') {
      this.result = operation;
      return;
    }
    if (operation === '=' && typeof this.result === 'number') {
      this.result = eval(this.result);
      return;
    }
    if (typeof this.result === 'string' && operation !== '=') {
      this.result += operation;
      return;
    }
  }
}