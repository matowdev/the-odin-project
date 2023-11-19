// Давайте напишем несколько функций!

// 1
function addSumNum(n) {
  return n + 7;
}

console.log(addSumNum(2)); // 9

// 2
function getMultiplyNum(a, b) {
  return a * b;
}

console.log(getMultiplyNum(5, 5)); // 25

// 3
function getCapitalizeStr(str) {
  let newStr = str.toLowerCase();
  newStr = newStr.at(0).toUpperCase() + newStr.slice(1);

  return newStr;
}

console.log(getCapitalizeStr('HeLlO!')); // Hello!

// 4
function getLastLetter(str) {
  return str.at(length - 1);
}

console.log(getLastLetter('abcd')); // d
