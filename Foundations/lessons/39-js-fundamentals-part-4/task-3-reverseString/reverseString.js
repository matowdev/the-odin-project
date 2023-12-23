const reverseString = function (str) {
  let newStr = str.split('').reverse().join('');
  return newStr;
};

console.log(reverseString('hello')); // olleh
console.log(reverseString('hello there')); // ereht olleh
console.log(reverseString('123! abc!')); // !cba !321
console.log(reverseString('')); // ' '

// Do not edit below this line
module.exports = reverseString;
