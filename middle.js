const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🙌🙌🙌Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤔🤔🤔Assertion failed: ${actual} <> ${expected}`);
  }
};

const eqArrays = function(array1, array2) {

  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const middle = function(array) {
  let newarr = [];
  if (!array) {
    return undefined;
  }
  if (array.length === 1 || array.length === 2) {
    return newarr;
  }
  let middleBeg = 0;
  let middleEnd = 0;
  if (array.length % 2 === 0) {
    middleBeg = array.length / 2 - 1;
    middleEnd = middleBeg + 2;
  } else {
    middleBeg = Math.floor(array.length / 2);
    middleEnd = middleBeg + 1;
  }
  return newarr = array.slice(middleBeg, middleEnd);
};

assertEqual(eqArrays(middle([1, 2, 3]), [2]), true);
assertEqual(eqArrays(middle([1]), []), true);
assertEqual(eqArrays(middle([1, 2]), []), true);
assertEqual(eqArrays(middle([1, 2, 3, 4, 5, 6]), [3, 4]), true);






