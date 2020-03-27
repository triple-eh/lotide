const words = ["ground", "control", "to", "major", "tom"];

const map = function(arr, callback) {
  let newarr = [];
  arr.forEach(element => newarr.push(callback(element)));
  return newarr;
};

const results1 = map(words, word => word[0]);
console.log(results1);
