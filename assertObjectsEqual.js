const eqObjects = function(object1, object2) {

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (let k in object1) {
      if (object1[k] instanceof Object) {
        if (!eqObjects(object1[k], object2[k])) {
          return false;
        }
      } else {
        if (object1[k] !== object2[k]) {
          return false;
        }
      }
    }
    return true;
  }
};

const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  if (!eqObjects(object1, object2)) {
    return console.log("🙁" + `Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  } else {
    return console.log("😀" + `Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cab = { c: "3", a: "1", b: "2" };
const xyz = { x: "3", y: "1", z: "2" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertObjectsEqual(ab, ba);
assertObjectsEqual(abc, cab);
assertObjectsEqual(ab, abc);