// Mathematics-Calculator.ts

class MathCalculator {
  constructor(private readonly value: number) {}

  public add(otherValue: number): number {
    return this.value + otherValue;
  }

  public subtract(otherValue: number): number {
    return this.value - otherValue;
  }

  public multiply(otherValue: number): number {
    return this.value * otherValue;
  }

  public divide(otherValue: number): number {
    if (otherValue === 0) {
      throw new Error("Cannot divide by zero");
    }
    return this.value / otherValue;
  }
}
