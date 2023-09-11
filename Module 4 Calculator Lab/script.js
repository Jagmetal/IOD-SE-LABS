let currentExpression = "";

function appendNumber(num) {
  currentExpression += num;
  updateDisplay(currentExpression);
}

function appendOperator(op) {
  currentExpression += ` ${op} `;
  updateDisplay(currentExpression);
}

function calculate() {
  try {
    const result = eval(currentExpression);
    updateDisplay(result);
    currentExpression = result;
  } catch (error) {
    updateDisplay("Error");
    currentExpression = "";
  }
}

function clearCalculator() {
  currentExpression = "";
  updateDisplay("");
}

function updateDisplay(value) {
  document.getElementById("result").value = value;
}
