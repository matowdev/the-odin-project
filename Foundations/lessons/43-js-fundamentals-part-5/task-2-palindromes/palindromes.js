const palindromes = function (str) {
  let palindromStr = str.replace(/[^a-zA-Z\d]/g, '').toLowerCase();
  return palindromStr === palindromStr.split('').reverse().join('');
};

console.log(palindromes('racecar')); // true
console.log(palindromes('racecar!')); // true
console.log(palindromes('Racecar!')); // true
console.log(palindromes('A car, a man, a maraca.')); // true
console.log(palindromes('Animal loots foliated detail of stool lamina.')); // true
console.log(palindromes('ZZZZ car, a man, a maracaz.')); // false
console.log(palindromes('rac3e3car')); // true
console.log(palindromes('r3ace3car')); // false

// Do not edit below this line
module.exports = palindromes;
