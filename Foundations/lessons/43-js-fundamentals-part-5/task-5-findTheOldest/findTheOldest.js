const findTheOldest = function (people) {
  if (people.length === 0) {
    return null;
  }

  return people.reduce((oldest, person) => {
    const currentYear = new Date().getFullYear();
    const currentAge = (person.yearOfDeath || currentYear) - person.yearOfBirth;
    const oldestAge = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;

    return currentAge > oldestAge ? person : oldest;
  });
};

const people = [
  {
    name: 'Carly',
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: 'Ray',
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: 'Jane',
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

console.log(findTheOldest(people).name); // Ray

// Do not edit below this line
module.exports = findTheOldest;
