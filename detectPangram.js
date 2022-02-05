// A pangram is a sentence that contains every single letter
// of the alphabet at least once. For example, the sentence
// "The quick brown fox jumps over the lazy dog" is a pangram,
// because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram.
// Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string) {
  const alphabet = Array.from('abcdefghijklmnopqrstuvwxyz');
  const x = string
    .toLowerCase()
    .split('')
    .filter((char) => char != ' ')
    .join('');
  let allThere = true;
  if (x.length < alphabet.length) return false;

  for (i = 0; i < alphabet.length; i++) {
    if (!x.includes(alphabet[i])) return false;
  }
  return allThere;
}

const answer = isPangram('The quick brown fox jumps over the lazy dog');
const answer2 = isPangram('Cwm fjord bank glyphs vext quiz');
console.log(answer2);
