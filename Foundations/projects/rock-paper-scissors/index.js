function playRound(playerSelection, computerSelection) {
  if (playerSelection === null) {
    return console.log("The game didn't happen!");
  }

  let correctPlayerSelection = playerSelection.toLowerCase();

  // if (
  //   correctPlayerSelection === 'rock' ||
  //   correctPlayerSelection === 'paper' ||
  //   correctPlayerSelection === 'scissors'
  // ) {
  //   console.log('Typing correct!');
  // } else {
  //   alert('Something went wrong..?');
  // }

  if (correctPlayerSelection === computerSelection) {
    return console.log("It's a draw!");
  } else if (
    correctPlayerSelection === 'rock' &&
    computerSelection === 'scissors'
  ) {
    return console.log('Player - Win 🏆!');
  } else if (
    correctPlayerSelection === 'paper' &&
    computerSelection === 'rock'
  ) {
    return console.log('Player - Win 🏆!');
  } else if (
    correctPlayerSelection === 'scissors' &&
    computerSelection === 'paper'
  ) {
    return console.log('Player - Win 🏆!');
  } else {
    return console.log('Computer - Win ✌!');
  }
}

function getPlayerChoice() {
  let playerChoice = prompt('Type: rock, paper or scissors', '');

  if (playerChoice === null) {
    alert('You canceled the typing, bye((');
  } else if (playerChoice === '' || Number(playerChoice)) {
    alert('Incorrect typing..');
    // getPlayerChoice();
  }

  console.log(`Player shows: ${playerChoice}`);

  return playerChoice;
}

function getComputerChoice() {
  let arrOptions = ['rock', 'paper', 'scissors'];
  let randomIndex = Math.floor(Math.random() * arrOptions.length);

  console.log(`Computer selects: ${arrOptions[randomIndex]}`);

  return arrOptions[randomIndex];
}

let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();

playRound(playerSelection, computerSelection);

// function game() {
//   let totalGames = 5;

//   while (totalGames) {
//     playRound(playerSelection, computerSelection);

//     --totalGames;
//   }
// }

// game();
