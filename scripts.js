let operator;
let num1 ="";
let num2 ="";

const symbols = [7, 8, 9, "/",
                 4, 5, 6, "x",
                 1, 2, 3, "-",
                 0, ".", "=", "+"];
const symbolIds = [7, 8, 9, "division",
                   4, 5, 6, "multiply",
                   1, 2, 3, "subtract",
                   0, "point", "equals", "plus"];
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

//

const numSetter = function (e) {
    if (!operator) {
        num1 += e.target.id;
    } else {
        num2 += e.target.id;
    }
}

const operatorSetter = function (e) {
    if (num2.length!=0) {
        // perform operation, store result as num1
    } else if (operator) {
        // error, reset all values
    } else if (num1.length!=0) {
        // all is good, set operator
    } else {
        // error, no value to perform operation on
    }
}

const evaluator = function() {
    if (num2.length!=0) {
        // call operate function, get result
        // reset variables
    } else {
        // error
    }
}

const performOperation = function() {
    let result;
    if (operator=="+"){
        //
    } else if (operator=="+"){
        //
    } else if (operator=="+"){
        //
    } else {
        //
    }
    return result
}