let displayValue = '0';
let firstOperand = null;
let operator = null;
let fullExpression = '';

function updateDisplay() {
  document.getElementById('display').value =
    operator === '=' ? displayValue : fullExpression || displayValue;
}

function appendToDisplay(value) {
  if (displayValue === '0' || operator === '=') {
    displayValue = value;
  } else {
    displayValue += value;
  }

  if (fullExpression === '') {
    fullExpression += value;
  } else {
    fullExpression += value;
  }

  updateDisplay();
}

function appendOperator(nextOperator) {
  if (operator !== '=') {
    fullExpression += ' ' + nextOperator + ' ';
  }
}

function clearDisplay() {
  displayValue = '0';
  fullExpression = '';
  firstOperand = null;
  operator = null;

  updateDisplay();
}

function operate(nextOperator) {
  if (operator !== null && operator !== '=') {
    calculate();
  }

  firstOperand = parseFloat(displayValue);
  operator = nextOperator;

  if (fullExpression === '') {
    fullExpression += displayValue + ' ' + nextOperator + ' ';
  } else {
    fullExpression =
      removeTrailingZeros(firstOperand) + ' ' + nextOperator + ' ';
  }

  displayValue = '0';
}

function calculate() {
  const secondOperand = parseFloat(displayValue);

  if (operator === '+') {
    displayValue = removeTrailingZeros(firstOperand + secondOperand);
  } else if (operator === '-') {
    displayValue = removeTrailingZeros(firstOperand - secondOperand);
  } else if (operator === '*') {
    displayValue = removeTrailingZeros(firstOperand * secondOperand);
  } else if (operator === '/') {
    if (secondOperand !== 0) {
      displayValue = removeTrailingZeros(firstOperand / secondOperand);
    } else {
      alert('ERROR: division by zero!');
      clearDisplay();
      return;
    }
  }

  appendOperator('=');
  operator = '=';
  firstOperand = null;
  updateDisplay();
}

function addDecimal() {
  if (!displayValue.includes('.')) {
    displayValue += '.';
    fullExpression += '.';
    updateDisplay();
  }
}

function backspace() {
  displayValue = displayValue.slice(0, -1);
  fullExpression = fullExpression.slice(0, -1);

  if (displayValue === '') {
    displayValue = '0';
  }

  updateDisplay();
}

function removeTrailingZeros(value) {
  const result = value.toString();
  return result.includes('.') ? result.replace(/\.0+$/, '') : result;
}
