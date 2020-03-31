const takeUntil = function(array, callback) {
  let results = [];
  for (const el of array) {
    if (callback(el)) return results;
    results.push(el);
  }
  return results;
};

module.exports = takeUntil;