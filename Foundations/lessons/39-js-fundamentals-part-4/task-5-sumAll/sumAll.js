const sumAll = function (n, m) {
  if (n === Number(n) && n > 0 && m === Number(m) && m > 0) {
    let numMax = Math.max(n, m);
    let arrLength = new Array(numMax);
    let arrSum = 0;

    for (let i = 1; i <= arrLength.length; i++) {
      arrSum += i;
    }

    return arrSum;
  } else {
    return 'ERROR';
  }
};

console.log(sumAll(1, 4)); // 10
console.log(sumAll(1, 4000)); // 8002000
console.log(sumAll(123, 1)); // 7626
console.log(sumAll(-10, 4)); // ERROR
console.log(sumAll(10, '90')); // ERROR
console.log(sumAll(10, [90, 1])); // ERROR

// Do not edit below this line
module.exports = sumAll;
