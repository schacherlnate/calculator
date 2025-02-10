const symbols = [7, 8, 9, "/",
                 4, 5, 6, "x",
                 1, 2, 3, "-",
                 0, ".", "=", "+"];
const symbolIds = [7, 8, 9, "division",
                   4, 5, 6, "multiply",
                   1, 2, 3, "subtract",
                   0, "point", "equals", "plus"];
const inputs = document.querySelector("#inputs");
for (let i = 0; i < symbols.length; i++) {
    let symbolDiv = document.createElement("button");
    symbolDiv.classList.add("symbol");
    symbolDiv.style.width="calc(94%/4)";
    symbolDiv.textContent=`${symbols[i]}`;
    symbolDiv.id = `${symbolIds[i]}`;
    symbolDiv.addEventListener("click", e=>console.log(e.target.id));
    inputs.appendChild(symbolDiv);
}