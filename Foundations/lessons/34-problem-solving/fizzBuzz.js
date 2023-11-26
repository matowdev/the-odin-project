function playFizzBuzz() {
  let userNum = +prompt('Enter a number..', '15');

  if (!userNum) {
    alert('Вы не ввели число.. или нажали отмена!? До свидания :(');
  }

  let arrNum = [];

  for (let i = 1; i <= userNum; i++) {
    arrNum.push(i);
  }

  for (let i = 0; i < arrNum.length; i++) {
    if (arrNum[i] % 3 === 0 && arrNum[i] % 5 === 0) {
      arrNum[i] = 'Fizz Buzz';
    } else if (arrNum[i] % 3 === 0) {
      arrNum[i] = 'Fizz';
    } else if (arrNum[i] % 5 === 0) {
      arrNum[i] = 'Buzz';
    }
    console.log(arrNum[i]);
  }

  return console.log(arrNum); // (15) [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'Fizz Buzz']
}

playFizzBuzz();

// решение TOP
let answer = parseInt(
  prompt('Please enter the number you would like to FizzBuzz up to: ')
);

for (let i = 1; i <= answer; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}
