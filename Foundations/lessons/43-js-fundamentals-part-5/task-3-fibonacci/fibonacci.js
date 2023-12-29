const fibonacci = function (num) {
  let sequenceNum = +num;

  if (sequenceNum < 0) {
    return 'OOPS';
  } else if (sequenceNum === 0) {
    return 0;
  } else if (sequenceNum === 1 || sequenceNum === 2) {
    return 1;
  } else {
    return fibonacci(sequenceNum - 1) + fibonacci(sequenceNum - 2);
  }
};

console.log(fibonacci(4)); // 3
console.log(fibonacci(6)); // 8
console.log(fibonacci(10)); // 55
console.log(fibonacci(15)); // 610
console.log(fibonacci(25)); // 75025
console.log(fibonacci(0)); // 0
console.log(fibonacci(-25)); // OOPS
console.log(fibonacci('0')); // 0
console.log(fibonacci('1')); // 1
console.log(fibonacci('2')); // 1
console.log(fibonacci('8')); // 21

// ? такое решение (через перетасовку)
// function fibonacci2(num) {
//   let sequenceNum = +num;

//   if (sequenceNum < 0) {
//     return 'OOPS';
//   } else if (sequenceNum === 0) {
//     return 0;
//   } else if (sequenceNum === 1 || sequenceNum === 2) {
//     return 1;
//   } else {
//     let prev = 0;
//     let current = 1;

//     for (let i = 2; i <= sequenceNum; i++) {
//       let next = prev + current;
//       prev = current;
//       current = next;
//     }

//     return current;
//   }
// }

// console.log(fibonacci2(4)); // 3
// console.log(fibonacci2(6)); // 8
// console.log(fibonacci2(15)); // 610

// ? и такое решение (через массив)
// function fibonacci3(num) {
//   let sequenceNum = +num;

//   if (sequenceNum < 0) {
//     return 'OOPS';
//   } else if (sequenceNum === 0) {
//     return 0;
//   } else if (sequenceNum === 1 || sequenceNum === 2) {
//     return 1;
//   } else {
//     let fibArr = [0, 1];

//     for (let i = 2; i <= sequenceNum; i++) {
//       fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
//     }

//     return fibArr[sequenceNum]; // возврат значения/числа расположенного по соответ. индексу
//   }
// }

// console.log(fibonacci3(4)); // 3
// console.log(fibonacci3(6)); // 8
// console.log(fibonacci3(15)); // 610

// Do not edit below this line
module.exports = fibonacci;
