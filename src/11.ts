import { Component } from '@angular/core';

@Component({
  selector: 'app-mathematics-calculator',
  template: `
    <div class="container">
      <h1>Mathematics Calculator</h1>
      <form (ngSubmit)="onSubmit()">
        <label for="firstNumber">First Number:</label>
        <input type="number" id="firstNumber" name="firstNumber" [(ngModel)]="firstNumber"><br><br>
        <label for="secondNumber">Second Number:</label>
        <input type="number" id="secondNumber" name="secondNumber" [(ngModel)]="secondNumber"><br><br>
        <button type="submit">Add</button>
      </form>
      <p>{{ result }}</p>
    </div>
  `,
})
export class MathematicsCalculatorComponent {
  firstNumber: number;
  secondNumber: number;
  result: number;

  onSubmit() {
    this.result = this.firstNumber + this.secondNumber;
  }
}