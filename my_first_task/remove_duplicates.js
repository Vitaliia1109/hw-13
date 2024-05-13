// Importing the lodash library
const lodash = require("lodash");

// Defining the array with duplicates
const myArray = [1, 2, 10, 100, 10, 2, 5, 6, 10, 1000, 7, 2, 100, 1, 5, 7, 10];

// Using lodash to remove duplicates from the array
const myNewArray = lodash.uniq(myArray);

// Logging the array with duplicates removed
console.log(myNewArray);
