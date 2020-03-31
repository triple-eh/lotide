const findKey = (obj, cb) => {
  for (const el in obj) {
    if (cb(obj[el])) {
      return el;
    }
  }
};

module.exports = findKey;