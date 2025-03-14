class Calculator {
  constructor(private readonly number1: number, private readonly number2: number) {}

  public add(): number {
    return this.number1 + this.number2;
  }

  public subtract(): number {
    return this.number1 - this.number2;
  }

  public multiply(): number {
    return this.number1 * this.number2;
  }

  public divide(): number | null {
    if (this.number2 === 0) {
      return null;
    }
    return this.number1 / this.number2;
  }
}
