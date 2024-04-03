let result = document.getElementById('result');
let expression = '';

function Numbers(number) {
  expression += number;
  result.value += number;
}

function Operator(operator) {
  expression += operator;
  result.value += operator;
}

function calculate() {
  try {
    result.value = eval(expression);
  } catch (error) {
    result.value = 'Error';
  }
}