const inputElement = document.getElementById("inputValue");
const baseSelect = document.getElementById("baseSelect");
const btnConvert = document.getElementById("btnConvert");

const resDec = document.getElementById("resDec");
const resBin = document.getElementById("resBin");
const resOct = document.getElementById("resOct");
const resHex = document.getElementById("resHex");

function converterBases() {
    const valorDigitado = inputElement.value.trim();
    const baseOriginal = parseInt(baseSelect.value);

    if (valorDigitado === "") {
        alert("Por favor, digite um número!");
        return;
    }


    const numeroDecimal = parseInt(valorDigitado, baseOriginal);

    if (isNaN(numeroDecimal)) {
        alert("Número inválido para a base selecionada.");
        return;
    }

    resDec.innerText = numeroDecimal.toString(10);
    resBin.innerText = numeroDecimal.toString(2);
    resOct.innerText = numeroDecimal.toString(8);
    
    resHex.innerText = numeroDecimal.toString(16).toUpperCase();
}


btnConvert.addEventListener("click", converterBases);

inputElement.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        converterBases();
    }
});