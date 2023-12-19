function playRound(playerSelection, computerSelection) {
  let roundResult = '';

  if (playerSelection === computerSelection) {
    console.log("It's a draw 🎲!");
    roundResult = 'draw';
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    console.log('Player - Win 🏆!');
    roundResult = 'user win';
  } else {
    console.log('Computer - Win ✌!');
    roundResult = 'computer win';
  }

  return roundResult;
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
    console.log(`Player shows: ${correctPlayerChoice}`);
  } else if (correctPlayerChoice !== 'cancelled') {
    alert('Your typing incorrect.. try again!?');
    correctPlayerChoice = getPlayerChoice();
  }

  return correctPlayerChoice;
}

function getComputerChoice() {
  let arrOptions = ['rock', 'paper', 'scissors'];
  let randomIndex = Math.floor(Math.random() * arrOptions.length);

  console.log(`Computer selects: ${arrOptions[randomIndex]}`);

  return arrOptions[randomIndex];
}

function playGame() {
  alert(`Game: Rock, Paper, Scissors. Up to FIVE wins! Let's get started!`);

  let userWins = 0;
  let computerWins = 0;

  for (let i = 1; i <= 11; i++) {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();

    if (playerSelection === 'cancelled') {
      console.log("The game didn't happen.. 😭!");
      break;
    }

    let roundResult = playRound(playerSelection, computerSelection);
    console.log(`Round ${i}:`);

    if (roundResult === 'draw') {
      userWins++;
      computerWins++;
    } else if (roundResult === 'user win') {
      userWins++;
    } else if (roundResult === 'computer win') {
      computerWins++;
    }

    console.log(`Player's intermediate result: ${userWins}`);
    console.log(`Computer's intermediate result: ${computerWins}`);
    console.log('---');

    if (userWins == 5 && computerWins == 5) {
      alert('Draw! Friendship Wins 🎲!');
      console.log('Draw! Friendship Wins 🎲!');
      break;
    } else if (userWins == 5) {
      alert('Congratulations! Player Won 🏆!');
      console.log('Congratulations! Player Won 🏆!');
      break;
    } else if (computerWins == 5) {
      alert('Congratulations! Computer Won ✌!');
      console.log('Congratulations! Computer Won ✌!');
      break;
    }
  }

  console.log(`Player's win streak: ${userWins}`);
  console.log(`Computer's win streak: ${computerWins}`);
}

playGame();
