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



const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArrayEqual(words, ["hello", "world", "lighthouse"]);

assertArrayEqual(without([1,2,3],[1]), [2,3]);
assertArrayEqual(without(["1","2",3],[1,"2"]), ["1",3]);

