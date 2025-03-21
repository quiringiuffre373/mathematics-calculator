function main() {
  const mathCalc = new MathCalculator();
  console.log("Hello from my project.");
}

class MathCalculator {
  constructor() {}

  performOperation(a: number, b: number, operation: string) {
    switch (operation) {
      case "add":
        return a + b;
      case "subtract":
        return a - b;
      case "multiply":
        return a * b;
      case "divide":
        if (b === 0) throw new Error("Cannot divide by zero.");
        return a / b;
    }
}

class Example {
  constructor() {}

  performOperation(a: number, b: number, operation: string) {
    const mathCalc = new MathCalculator();
    try {
      return mathCalc.performOperation(a, b, operation);
    } catch (error) {
      console.error("Error:", error.message);
    }
  }
}

function main() {
  const example = new Example();
  example.performOperation(5, 3, "add");
  example.performOperation(4.5, 2.0, "multiply");
}
main();
