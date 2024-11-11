// Recursive Power Function

function power(base, exponent) {
  // Base case: Any number to the power of 0 is 1
  if (exponent === 0) {
    return 1;
  }
  // Recursive case: Multiply base with power(base, exponent - 1)
  else {
    return base * power(base, exponent - 1);
  }
}

// Example usage
const base = parseInt(prompt("Enter the base number:"));
const exponent = parseInt(prompt("Enter the exponent:"));
console.log(
  `${base} raised to the power of ${exponent} is ${power(base, exponent)}`
);
