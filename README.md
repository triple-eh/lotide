# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @learning2code/lotide`

**Require it:**

`const _ = require('@learning2code/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: returns the first element of an array;
* `tail(array)`: returns all but the first element of an array;
* `middle(array)`: returns the middle 1 or 2 elements of an array;
* `flatte(array)`: flattens a nest array into one;
* `findKeyByValue(object)`: returns the key that corresponds to a value;