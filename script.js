let currentInput = "";
let resultDisplayed = false;

function appendNumber(number) {
    if (resultDisplayed) {
        clearResult();
    }
    currentInput += number.toString();
    updateDisplay();
}

function appendOperator(operator) {
    if (resultDisplayed) {
        resultDisplayed = false;
    }
    currentInput += operator;
    updateDisplay();
}

function clearResult() {
    currentInput = "";
    updateDisplay();
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        resultDisplayed = true;
    } catch (error) {
        currentInput = "Erro";
    }
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("resultado").innerText = currentInput || "0";
}
// Ajudado por Gabriel Oliveira
//https://github.com/OliveiraStrategic