const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🙌🙌🙌Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤔🤔🤔Assertion failed: ${actual} <> ${expected}`);
  }
};


const countLetters = function(string) {
  let results = {};
  for (const letter of string) {
    if (letter !== " ") {
      results[letter] ? results[letter] += 1 : results[letter] = 1; 
    }
  }
  return results;
};

console.log(countLetters("lighthouse in the house"));