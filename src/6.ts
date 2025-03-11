// math-calculator.ts
import { ArithmeticOperator } from '../operators';

class MathCalculator {
  private operator: ArithmeticOperator;

  constructor(operator: ArithmeticOperator) {
    this.operator = operator;
  }

  calculate(num1: number, num2: number): number {
    return this.operator.calculate(num1, num2);
  }
}

export default MathCalculator;
