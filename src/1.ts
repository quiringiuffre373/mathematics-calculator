import { Component } from '@angular/core';

@Component({
  selector: 'app-mathematics-calculator',
  template: `
    <div>
      <h2>Mathematics Calculator</h2>
      <form (ngSubmit)="onSumbit()">
        <label for="number1">Number 1:</label>
        <input type="text" id="number1" [(ngModel)]="number1"><br>
        <label for="number2">Number 2:</label>
        <input type="text" id="number2" [(ngModel)]="number2"><br>
        <button type="submit">Submit</button>
      </form>
    </div>
  `,
})
export class MathematicsCalculator {
  number1: string;
  number2: string;

  onSumbit() {
    const num1 = parseInt(this.number1);
    const num2 = parseInt(this.number2);
    if (num1 && num2) {
      this.result = this.calculateResult(num1, num2);
    } else {
      alert('Please enter two numbers!');
    }
  }

  calculateResult(num1: number, num2: number): number {
    return num1 + num2;
  }
}