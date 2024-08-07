let display = document.getElementById('display');
let currentInput = '';

function appendValue(value) {
    currentInput += value;
    display.textContent = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.textContent = '0';
}

function calculateResult() {
    try {
        currentInput = eval(currentInput);
        display.textContent = currentInput;
    } catch {
        display.textContent = 'Error';
    }
}
