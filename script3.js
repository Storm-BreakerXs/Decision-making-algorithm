// Recursive Palindrome Checker

function isPalindrome(str) {
  // Clean the string by removing non-alphanumeric characters and converting to lowercase
  str = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Base case: if the string has 0 or 1 character, it is a palindrome
  if (str.length <= 1) {
    return true;
  }

  // Recursive case: compare first and last characters
  if (str[0] === str[str.length - 1]) {
    // Call the function with the string excluding the first and last characters
    return isPalindrome(str.slice(1, -1));
  } else {
    // If the first and last characters do not match, it's not a palindrome
    return false;
  }
}

// Example usage
const inputStr = prompt("Enter a string to check if it's a palindrome:");
console.log(`Is "${inputStr}" a palindrome? ${isPalindrome(inputStr)}`);
