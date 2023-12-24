const removeFromArray = function (arr, ...data) {
  let newArr = [...arr];
  let dataArr = [...data];

  for (let i = 0; i < dataArr.length; i++) {
    let removeIndex = newArr.indexOf(dataArr[i]); // index №.. or -1

    if (removeIndex !== -1) {
      newArr.splice(removeIndex, 1);
    }
  }

  return newArr;
};

console.log(removeFromArray([1, 2, 3, 4], 3)); // [1, 2, 4]
console.log(removeFromArray([1, 2, 3, 4], 3, 2)); // [1, 4]
console.log(removeFromArray([1, 2, 3, 4], 7, 'tacos')); // [1, 2, 3, 4]
console.log(removeFromArray([1, 2, 3, 4], 7, 2)); // [1, 3, 4]
console.log(removeFromArray([1, 2, 3, 4], 1, 2, 3, 4)); // []
console.log(removeFromArray(['hey', 2, 3, 'ho'], 'hey', 3)); // [2, 'ho']
console.log(removeFromArray([1, 2, 3], '1', 3)); // [1, 2]

// Do not edit below this line
module.exports = removeFromArray;
