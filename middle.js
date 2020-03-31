const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

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

module.exports = middle;





