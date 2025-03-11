const display = document.getElementById('display');

// Function to append a value to the display
function appendValue(value) {
    display.value += value;
}

// Function to clear the display
function clearDisplay() {
    display.value = '';
}

// Function to delete the last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Function to evaluate the expression safely
function calculateResult() {
    try {
        display.value = new Function(`return ${display.value}`)();
    } catch {
        display.value = 'Error';
    }
}

// Add event listener for keyboard input
document.addEventListener('keydown', function (event) {
    const key = event.key;

    // Allow digits, operators, and backspace
    if (/[\d.+\-*/]/.test(key)) {
        appendValue(key);
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Backspace') {
        deleteLast();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});
