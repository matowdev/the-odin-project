const add = function (num1, num2) {
  return num1 + num2;
};

console.log(add(0, 0)); // 0
console.log(add(2, 2)); // 4
console.log(add(2, 6)); // 8

// -------------------

const subtract = function (num1, num2) {
  return num1 - num2;
};

console.log(subtract(10, 4)); // 6

// -------------------

const sum = function (arr) {
  let arrSum = 0;

  for (let i = 0; i < arr.length; i++) {
    arrSum += arr[i];
  }

  return arrSum;
};

console.log(sum([])); // 0
console.log(sum([7])); // 7
console.log(sum([7, 11])); // 18
console.log(sum([1, 3, 5, 7, 9])); // 25
console.log(sum([7, -7])); // 0

// -------------------

const multiply = function (arr) {
  let arrMultiply = 1;

  if (arr.length === 0) {
    arrMultiply = 0;
    return arrMultiply;
  }

  for (let i = 0; i < arr.length; i++) {
    arrMultiply *= arr[i];
  }

  return arrMultiply;
};

console.log(multiply([2, 4])); // 8
console.log(multiply([2, 4, 6, 8, 10, 12, 14])); // 645120

// -------------------

const power = function (x, y) {
  return Math.pow(x, y);
};

console.log(power(4, 3)); // 64

// -------------------

const factorial = function (n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
};

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(5)); // 120
console.log(factorial(10)); // 3628800

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
