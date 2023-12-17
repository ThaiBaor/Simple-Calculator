// Declare variables
let screen = document.getElementById('screen');
let numberButtons = document.querySelectorAll('.number-button');
let funcButtons = document.querySelectorAll('.func-button');
let clearAllButton = document.getElementById('clear-all-button');
let delButton = document.getElementById('del-button');
let resultButton = document.getElementById('result-button');
let decimalButton = document.getElementById('decimal-button');

let funcArr = ['+', '-', "*", '/', '%'];
let result = '';
let checkLastChar = (char) => {
    for (let i = 0; i < funcArr.length; i++) {
        if (funcArr[i] === char) {
            return true;
        }
    }
    return false;
}

// Handle number buttons
numberButtons.forEach(button => {
    button.addEventListener('click', (e) => {

        if (e.target.innerHTML === 'π') {
            if (!checkLastChar(result.charAt(result.length - 1))) {
                result = '3.141';
            }
            else {
                result += '3.141';
            }
            screen.innerHTML = result;
            return;
        }

        if (result === '0') {
            result = e.target.innerHTML;
        }
        else {
            result += e.target.innerHTML;
        }
        screen.innerHTML = result;
    })
});

// Handle delete button
delButton.addEventListener('click', (e) => {
    if (result === '0') return;
    result = result.slice(0, result.length - 1);
    if (result.length === 0) {
        result = '0';
    }
    screen.innerHTML = result;
});

// Handle clear all button
clearAllButton.addEventListener('click', (e) => {
    result = '';
    screen.innerHTML = '0';
});

// Handle func buttons
funcButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        if ((result === '' || result === '0') && e.target.innerHTML !== '-') return;
        if (!checkLastChar(result.charAt(result.length - 1))) {
            result += e.target.innerHTML;
        }
        else {
            result = result.slice(0, result.length - 1) + e.target.innerHTML;
        }
        screen.innerHTML = result;
    })
});

// Handle result button
resultButton.addEventListener('click', (e) => {
    result = eval(result) + '';
    screen.innerHTML = result;
});

// Handle decimal button
decimalButton.addEventListener('click', (e) => {
    if (checkLastChar(result.charAt(result.length - 1))) return;
    if (!result.includes('.')) {
        if (result === '') {
            result = '0';
        }
        result += e.target.innerHTML;
        screen.innerHTML = result;
    }
})