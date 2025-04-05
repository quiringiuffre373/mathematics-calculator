function add(x: number, y: number): number {
  return x + y;
}

function subtract(x: number, y: number): number {
  return x - y;
}

function multiply(x: number, y: number): number {
  return x * y;
}

function divide(x: number, y: number): number | null {
  if (y === 0) {
    return null;
  }
  return x / y;
}
