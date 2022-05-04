// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// getMiddle("test") should return "es"
// getMiddle("testing") should return "t"
// getMiddle("middle") should return "dd"
// getMiddle("A") should return "A"

function getMiddle(str) {
  if (str.length === 1) return str;
  return str.length % 2 > 0
    ? str[(str.length - 1) / 2]
    : `${str[str.length / 2 - 1]}${str[str.length / 2]}`;
}

console.log(getMiddle('middle'));
