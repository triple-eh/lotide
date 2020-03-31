const head = require('../head');
const assertEqual = require('../assertEqual');

let a = ["hello", "goodbye", "alex"];

assertEqual(head(a),"hello");