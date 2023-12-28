const board = document.querySelector('#board');
const colors = [
  '#35C0CD',
  '#028E9B',
  '#F9FE72',
  '#6D89D5',
  '#259433',
  '#920031',
  '#FF4100',
  '#499500',
  '#B8BE2F',
  '#572781',
  '#A69E00',
  '#A368D5',
];
const SQUARES_NUMBER = 992;
let isDrawing = false;

const changeBtn = document.querySelector('.change__btn');
changeBtn.addEventListener('click', enableRainbowMode);

function enableRainbowMode() {
  isDrawing = false;
  board.addEventListener('mousemove', setRandomColor);
}

const resetBtn = document.querySelector('.reset__btn');
resetBtn.addEventListener('click', clearCanvas);

function clearCanvas() {
  isDrawing = false; // Добавьте эту строку
  board.removeEventListener('mousemove', setRandomColor); // Добавьте эту строку

  const squares = document.querySelectorAll('.square');
  squares.forEach((square) => {
    square.style.backgroundColor = '#2b6684';
  });
}

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  square.addEventListener('mouseover', setColor);
  board.append(square);
}

board.addEventListener('mousedown', () => {
  event.preventDefault();
  isDrawing = true;
});

board.addEventListener('mouseup', () => {
  isDrawing = false;
});

board.addEventListener('mouseleave', () => {
  isDrawing = false;
});

function setColor(event) {
  if (!isDrawing) return;
  const element = event.target;
  const color = '#29354d';
  element.style.backgroundColor = color;
}

function setRandomColor(event) {
  if (!isDrawing) return;
  const element = event.target;
  const color = getRandomColor();
  element.style.backgroundColor = color;
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
