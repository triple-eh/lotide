const assertArrayEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`🙌🙌🙌Assertion passed: ${array1} === ${array2}`);
  } else {
    console.log(`🤔🤔🤔Assertion failed: ${array1} <> ${array2}`);
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

const flatten = function(array) {
  let newarray = [];
  array.forEach((element) => {
    if (Array.isArray(element)) {
      element.forEach((subelement) => {
        newarray.push(subelement);
      });
    } else {
      newarray.push(element);
    }
  });
  return newarray;
};

assertArrayEqual(flatten([1, 2, [3, 4], 5, [6]]),[1,2,3,4,5,6]);