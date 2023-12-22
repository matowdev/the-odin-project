const repeatString = function (str, count) {
  let repeatStr = '';

  if (count < 0) {
    return (repeatStr = 'ERROR');
  } else {
    for (let i = 1; i <= count; i++) {
      repeatStr += str;
    }
  }

  return repeatStr;
};

console.log(repeatString('hey', 3)); // heyheyhey
console.log(repeatString('hey', 10)); // heyheyheyheyheyheyheyheyheyhey
console.log(repeatString('hey', 1)); // hey
console.log(repeatString('hey', 0)); // ' '
console.log(repeatString('hey', -1)); // ERROR
console.log(repeatString('hey', randomNum())); // heyheyheyhey..

function randomNum() {
  let num = Math.floor(Math.random() * 100);
  return num;
}

// Do not edit below this line
module.exports = repeatString;
