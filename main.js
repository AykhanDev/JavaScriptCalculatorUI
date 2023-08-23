const buttonsEl = document.querySelectorAll('button');
const inputFieldEl = document.getElementById("result");

for (let i = 0; i < buttonsEl.length; i++) {
    buttonsEl[i].addEventListener("click", () => {
        const buttonValue = buttonsEl[i].textContent;
        if (buttonValue === "C") {
            clearReslut();
        } else if (buttonValue === "=") {
            calculateResult();
        } else {
            appendValue(buttonValue);
        };
    });
};

function clearReslut() {
    inputFieldEl.value = "";
};

function calculateResult() {
    inputFieldEl.value = eval(inputFieldEl.value);
};

function appendValue(buttonValue) {
    inputFieldEl.value += buttonValue;
};

