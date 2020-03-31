const eqObjects = require('./index').default.eqObjects;

const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  if (!eqObjects(object1, object2)) {
    return console.log("🙁" + `Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  } else {
    return console.log("😀" + `Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  }
};

module.exports = assertObjectsEqual;