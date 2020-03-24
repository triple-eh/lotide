const letterPositions = function(string) {
  let results = {};
  for (let index in string) {
    let letter = string[index];
    if (letter !== ' ') {
      results[letter] ? results[letter].push(parseInt(index)) : results[letter] = [parseInt(index)];
    }
  }
  return results;
};

let example = "lighthouse in the house";

console.log(letterPositions(example));