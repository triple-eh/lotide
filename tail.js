const assertEqual = require('./assertEqual');

const tail = function(array) {
  let newarray = array.filter(function(item, index) {
    return index > 0;
  });
  return newarray;
};


module.exports = tail;