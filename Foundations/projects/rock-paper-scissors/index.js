function showWinnerPopup(winner) {
  let popup = document.getElementById('winnerPopup');
  let messageElement = document.getElementById('winnerMessage');
  let continueButton = document.getElementById('continuePopupButton');
  let cancelButton = document.getElementById('cancelPopupButton');

  messageElement.textContent = `Congratulations, ${winner}! You are the winner!`;

  continueButton.addEventListener('click', function () {
    resetGame();
    popup.style.display = 'none';
  });

  cancelButton.addEventListener('click', function () {
    resetGame();
    popup.style.display = 'none';
  });

  popup.style.display = 'flex';
}

function updateScoreAndCheckWinner() {
  let scoreElement = document.getElementById('score');
  scoreElement.textContent = `Player: ${userWins} | Computer: ${computerWins}`;

  if (userWins === 5 || computerWins === 5) {
    showWinnerPopup(userWins === 5 ? 'Player' : 'Computer');
  }
}

function resetGame() {
  userWins = 0;
  computerWins = 0;
  updateResults('', '');
}

let userWins = 0;
let computerWins = 0;

function playRound(playerSelection, computerSelection) {
  let roundResult = '';

  if (playerSelection === computerSelection) {
    roundResult = 'draw';
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    roundResult = 'user win';
  } else {
    roundResult = 'computer win';
  }

  return roundResult;
}

function getPlayerChoiceByButton(choice) {
  let computerSelection = getComputerChoice();
  let roundResult = playRound(choice, computerSelection);
  updateResults(`Player shows: ${choice}`);
  updateResults(`Computer selects: ${computerSelection}`);
  updateResults(`Round ${userWins + computerWins + 1}:`);
  updateResults(
    roundResult === 'draw'
      ? `It's a draw 🎲! ${choice.toUpperCase()} = ${computerSelection.toUpperCase()}!`
      : roundResult === 'user win'
      ? `Player - Win 🏆! ${choice.toUpperCase()} beats ${computerSelection.toUpperCase()}!`
      : `Computer - Win ✌! ${computerSelection.toUpperCase()} beats ${choice.toUpperCase()}!`,
    roundResult
  );

  return roundResult;
}

function getComputerChoice() {
  let arrOptions = ['rock', 'paper', 'scissors'];
  let randomIndex = Math.floor(Math.random() * arrOptions.length);

  return arrOptions[randomIndex];
}

function updateResults(message, result) {
  let gameResultsElement = document.getElementById('result');
  gameResultsElement.textContent = message;

  if (result === 'user win') {
    userWins++;
  } else if (result === 'computer win') {
    computerWins++;
  }

  updateScoreAndCheckWinner();
}

document.getElementById('rock').addEventListener('click', function () {
  getPlayerChoiceByButton('rock');
});

document.getElementById('paper').addEventListener('click', function () {
  getPlayerChoiceByButton('paper');
});

document.getElementById('scissors').addEventListener('click', function () {
  getPlayerChoiceByButton('scissors');
});
