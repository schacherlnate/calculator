let operator;
let num1 ="";
let num2 ="";
const output = document.querySelector("#output");

const symbols = [7, 8, 9, "/",
                 4, 5, 6, "x",
                 1, 2, 3, "-",
                 0, ".", "=", "+"];
const symbolIds = [7, 8, 9, "division",
                   4, 5, 6, "multiply",
                   1, 2, 3, "subtract",
                   0, "point", "equals", "plus"];
const operators = ["division", "multiply", "subtract", "plus"];
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

// add event listeners for numbers
for (let i = 0; i<10; i++) {
    let numKey = document.querySelector(`#${i}`);
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

const numSetter = function (e) {
    if (output.textContent==="ERROR") {
        output.textContent="";
    }
    if (!operator) {
        num1 += e.target.id;
        output.textContent = num1;
    } else {
        num2 += e.target.id;
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
    num1 = "";
    num2 = "";
    operator = null;
}

const performOperation = function() {
    let result;
    if (operator=="+"){
        result = Number(num1) + Number(num2);
    } else if (operator=="-"){
        result = num1 - num2;
    } else if (operator=="*"){
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