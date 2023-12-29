const getTheTitles = function (books) {
  let arrTitle = [];

  for (let index in books) {
    arrTitle.push(books[index].title);
  }

  return arrTitle;
};

const books = [
  {
    title: 'Book',
    author: 'Name',
  },
  {
    title: 'Book2',
    author: 'Name2',
  },
];

console.log(getTheTitles(books)); // ['Book', 'Book2']

// Do not edit below this line
module.exports = getTheTitles;
