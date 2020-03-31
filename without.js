const without = function(original, exclude) {
  if (!original || !exclude) {
    return undefined;
  }
  let newarray = original;
  for (let i = 0; i < newarray.length; i++) {
    for (let j = 0; j < exclude.length; j++) {
      if (newarray[i] === exclude[j]) {
        newarray.splice(i, 1);
      }
    }
  }
  return newarray;
};

module.exports = without;
