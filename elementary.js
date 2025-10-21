function multiply(a, b) {
  let result = 0;
  const positive = Math.abs(b);
  for (let i = 0; i < positive; i++) {
    result += a;
  }
  return b < 0 ? -result : result;
}

function divide(a, b) {
  if (b === 0) throw new Error("Division by zero");
  let quotient = 0;
  const negative = (a < 0) ^ (b < 0);
  let dividend = Math.abs(a);
  const divisor = Math.abs(b);

  while (dividend >= divisor) {
    dividend -= divisor;
    quotient++;
  }

  return negative ? -quotient : quotient;
}

function modulo(a, b) {
  if (b === 0) throw new Error("Division by zero");
  const remainder = a - multiply(divide(a, b), b);
  return remainder;
}
