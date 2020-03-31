const findKeyByValue = function(searchObject, value) {
  let result = undefined;
  for (const key in searchObject) {
    if (searchObject[key] === value) {result = key};
  }
  return result;
};

module.exports = findKeyByValue;