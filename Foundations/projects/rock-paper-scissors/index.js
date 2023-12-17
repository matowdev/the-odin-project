function playRound(playerSelection, computerSelection) {
  if (playerSelection === 'cancelled') {
    return console.log("The game didn't happen.. 😭!");
  } else if (playerSelection === computerSelection) {
    return console.log("It's a draw 🎲!");
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    return console.log('Player - Win 🏆!');
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    return console.log('Player - Win 🏆!');
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    return console.log('Player - Win 🏆!');
  } else {
    return console.log('Computer - Win ✌!');
  }
}

function getPlayerChoice() {
  let playerChoice = prompt('Type: rock, paper or scissors', '');

  if (playerChoice === null) {
    alert('You canceled the typing, bye((');
    playerChoice = 'cancelled';
  } else if (playerChoice === '' || Number(playerChoice)) {
    alert('Incorrect typing..');
    playerChoice = getPlayerChoice();
  }

  let correctPlayerChoice = playerChoice.toLowerCase();

  if (
    correctPlayerChoice === 'rock' ||
    correctPlayerChoice === 'paper' ||
    correctPlayerChoice === 'scissors'
  ) {
    console.log('typing.. ok');
  } else if (correctPlayerChoice !== 'cancelled') {
    alert('Your typing incorrect.. try again!?');
    correctPlayerChoice = getPlayerChoice();
  }

  console.log(`Player shows: ${correctPlayerChoice}`);

  return correctPlayerChoice;
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
