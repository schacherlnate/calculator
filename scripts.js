let operator = null;
let num1 ="";
let num2 ="";
let isDecimal = false;
const output = document.querySelector("#output");

const symbols = [7, 8, 9, "/",
                 4, 5, 6, "x",
                 1, 2, 3, "-",
                 0, ".", "=", "+"];
const symbolIds = ["seven", "eight", "nine", "division",
                   "four", "five", "six", "multiply",
                   "one", "two", "three", "subtract",
                   "zero", "point", "equals", "plus"];
const operators = ["division", "multiply", "subtract", "plus"];
const numIds = ["zero", "one", "two", 
                "three", "four", "five", 
                "six", "seven", "eight", "nine"];
const inputs = document.querySelector("#inputs");

// insert all the buttons in order
for (let i = 0; i < symbols.length; i++) {
    let symbolDiv = document.createElement("button");
    symbolDiv.classList.add("symbol");
    symbolDiv.style.width="calc(94%/4)";
    symbolDiv.textContent=`${symbols[i]}`;
    symbolDiv.id = `${symbolIds[i]}`;
    inputs.appendChild(symbolDiv);
}

const numSetter = function (e) {
    if (output.textContent==="ERROR") {
        output.textContent="";
    }
    if (!operator) {
        num1 += e.target.dataset.val;
        output.textContent = num1;
    } else {
        num2 += e.target.dataset.val;
        output.textContent = num2;
    }
}

const operatorSetter = function (e) {
    if (num2.length!=0) {
        num1 = performOperation();
        output.textContent = num1;
        operator = e.target.id;
        num2 = "";
    } else if (operator || num1.length===0) {
        output.textContent = "ERROR";
        num1 = "";
        num2 = "";
        operator = null;
    } else {
        // num1.length!=0 all is good, set operator
        operator = e.target.id;
    }
}

const evaluator = function() {
    if (num2.length!=0) {
        // call operate function, get result
        let result = performOperation();
        output.textContent = result;
    } else {
        output.textContent = "ERROR";
    }
    num1 = result;
    num2 = "";
    operator = null;
    if (num1=="ERROR" || Math.floor(num1)===num1) {
        isDecimal = false;
    } else {
        isDecimal = true;
    }
}

const performOperation = function() {
    let result;
    if (operator=="plus"){
        result = Number(num1) + Number(num2);
    } else if (operator=="subtract"){
        result = num1 - num2;
    } else if (operator=="multiply"){
        result = num1 * num2;
    } else {
        if (num2==0) {
            result = "ERROR";
        } else {
            result = num1 / num2;
        }
    }
    return result
}

const clear = function() {
    num1 = "";
    num2 = "";
    operator = null;
    isDecimal = false;
    output.textContent = "";
}

const putDecimal = function() {
    if (output.textContent==="ERROR") {
        output.textContent="";
    }
    if (!isDecimal) {
        if (!operator) {
            num1 += ".";
            output.textContent = num1;
        } else {
            num2 += ".";
            output.textContent = num2;
        }
        isDecimal = true;
    } else {
        output.textContent = "ERROR";
        clear();
    }
}

// add event listeners for numbers
for (let i = 0; i<10; i++) {
    let numKey = document.querySelector(`#${numIds[i]}`);
    numKey.dataset.val = i;
    numKey.addEventListener("click", numSetter);
}

// add event listeners for operators
operators.forEach(op => {
    let opButton = document.querySelector(`#${op}`);
    opButton.addEventListener("click", operatorSetter);
});

// add event listener for equal sign
let eqButton = document.querySelector("#equals");
eqButton.addEventListener("click", evaluator);

// add event listener and button functionality for clear
let clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", clear);