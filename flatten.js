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

module.exports = flatten;