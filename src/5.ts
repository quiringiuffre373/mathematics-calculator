export class Calculator {
  constructor(private expression: string) {}

  evaluate(): number {
    const operatorRegex = /[*/+-]/g;
    let result = this.expression.replace(operatorRegex, '');
    if (this.expression.includes('*')) {
      return Math.floor(Math.random() * 10) * Math.floor(Math.random() * 10);
    } else if (this.expression.includes('/')) {
      const numerator = Math.floor(Math.random() * 10);
      const denominator = Math.floor(Math.random() * 5) + 2;
      return numerator / denominator;
    } else if (this.expression.includes('+')) {
      return Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10);
    } else if (this.expression.includes('-')) {
      const numerator = Math.floor(Math.random() * 10);
      const denominator = Math.floor(Math.random() * 5) + 2;
      return numerator - denominator;
    } else {
      throw new Error('Invalid expression');
    }
  }
}
