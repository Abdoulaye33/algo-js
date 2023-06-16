let firstInput = document.getElementById("firstname");
let secondInput =  document.getElementById("age");
let thirdInput = document.getElementById("pwd");
let fourthInput = document.getElementById("pwd-confirm");
let darkModeBtn = document.getElementById("toggle-darkmode");

let body = document.querySelector("body");
let all = document.querySelectorAll("*");

let spanOfFirstInput = document.getElementById("display-firstname");
let sectionOfSecondInput = document.getElementById("a-hard-truth");

firstInput.addEventListener('keyup', () => {
    spanOfFirstInput.textContent = firstInput.value;
});

secondInput.addEventListener('keyup', () => {
    if (secondInput.value >= 18) {
        sectionOfSecondInput.style.visibility = "visible";
    }
    else {
        sectionOfSecondInput.visibility = "hidden";
    };
});

thirdInput.addEventListener('keyup', () => {
    if (thirdInput.value.length >= 0 && thirdInput.value.length < 6) {
        thirdInput.style.backgroundColor = "red";
        thirdInput.style.color = "white";
    } else {
        thirdInput.style.backgroundColor = "transparent";
        thirdInput.style.color = "black";
    };
});

fourthInput.addEventListener('keyup', () => {
    if (fourthInput.value != thirdInput.value) {
        fourthInput.style.backgroundColor = "red";
        fourthInput.style.color = "white";
    }
    else {
        fourthInput.style.backgroundColor = "transparent";
        fourthInput.style.color = "black";
    };
});

darkModeBtn.addEventListener('change', (event) => {
    if (event.target.value === "dark") {
        body.style.backgroundColor = "black";
        body.style.color = "white";
    } else {
        body.style.backgroundColor = "white";
        body.style.color = "black";
    }
})