// Leap Year Checker

function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return `${year} is a leap year.`;
  } else {
    return `${year} is not a leap year.`;
  }
}

// Example usage
let year = parseInt(prompt("Enter a year to check if it's a leap year:"));
console.log(isLeapYear(year));
