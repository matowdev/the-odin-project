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
const SQUARES_NUMBER = 500;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  square.addEventListener('mouseover', setColor);
  // square.addEventListener('mouseleave', removeColor); // что-бы цвет пропадал
  board.append(square);
}

function setColor(event) {
  const element = event.target;
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(event) {
  const element = event.target;
  element.style.backgroundColor = '#2b6684';
  element.style.boxShadow = `0 0 2px #9cacbf`;
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
