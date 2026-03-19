const inputElement = document.getElementById("inputValue");
const baseSelect = document.getElementById("baseSelect");
const btnConvert = document.getElementById("btnConvert");

const resDec = document.getElementById("resDec");
const resBin = document.getElementById("resBin");
const resOct = document.getElementById("resOct");
const resHex = document.getElementById("resHex");

function obterValorDigito(char) {
    if (char >= '0' && char <= '9') return char.charCodeAt(0) - 48;
    if (char >= 'A' && char <= 'F') return char.charCodeAt(0) - 65 + 10;
    return NaN;
}

function obterCaractereDigito(valor) {
    if (valor >= 0 && valor <= 9) return String.fromCharCode(valor + 48);
    if (valor >= 10 && valor <= 15) return String.fromCharCode(valor - 10 + 65);
    return '?';
}

function converterParaDecimal(str, base) {
    str = str.toUpperCase().replace(',', '.');
    
    let ehNegativo = false;
    if (str.startsWith('-')) {
        ehNegativo = true;
        str = str.substring(1);
    }

    const partes = str.split('.');
    const parteInteira = partes[0];
    const parteFracionaria = partes.length > 1 ? partes[1] : "";

    let decimal = 0;

    for (let i = 0; i < parteInteira.length; i++) {
        let valor = obterValorDigito(parteInteira[i]);
        if (isNaN(valor) || valor >= base) return NaN;
        decimal += valor * Math.pow(base, parteInteira.length - 1 - i);
    }

    for (let i = 0; i < parteFracionaria.length; i++) {
        let valor = obterValorDigito(parteFracionaria[i]);
        if (isNaN(valor) || valor >= base) return NaN;
        decimal += valor * Math.pow(base, -(i + 1));
    }

    return ehNegativo ? -decimal : decimal;
}

function converterDeDecimal(decimal, baseDestino) {
    if (isNaN(decimal)) return "NaN";
    if (decimal === 0) return "0";

    let ehNegativo = decimal < 0;
    decimal = Math.abs(decimal);

    let parteInteira = Math.floor(decimal);
    let parteFracionaria = decimal - parteInteira;

    let resultadoInteiro = "";
    if (parteInteira === 0) {
        resultadoInteiro = "0";
    } else {
        let tempInt = parteInteira;
        while (tempInt > 0) {
            let resto = tempInt % baseDestino;
            resultadoInteiro = obterCaractereDigito(resto) + resultadoInteiro;
            tempInt = Math.floor(tempInt / baseDestino);
        }
    }

    if (parteFracionaria === 0) return ehNegativo ? "-" + resultadoInteiro : resultadoInteiro;

    let resultadoFracionario = "";
    let precisao = 8;
    let tempFrac = parteFracionaria;

    while (tempFrac > 0 && precisao > 0) {
        tempFrac *= baseDestino;
        let digitoInteiro = Math.floor(tempFrac);
        resultadoFracionario += obterCaractereDigito(digitoInteiro);
        tempFrac -= digitoInteiro;
        precisao--;
    }

    let resultadoFinal = resultadoInteiro + "," + resultadoFracionario;
    return ehNegativo ? "-" + resultadoFinal : resultadoFinal;
}

function decimalParaBinario(dec) {
    return converterDeDecimal(dec, 2);
}

function decimalParaOctal(dec) {
    return converterDeDecimal(dec, 8);
}

function decimalParaHexadecimal(dec) {
    return converterDeDecimal(dec, 16);
}

function formatarDecimal(dec) {
    return converterDeDecimal(dec, 10);
}

function converterBases() {
    const valorDigitado = inputElement.value.trim();
    const baseOriginal = parseInt(baseSelect.value, 10); 

    if (valorDigitado === "") {
        alert("Por favor, digite um número!");
        return;
    }

    const numeroDecimal = converterParaDecimal(valorDigitado, baseOriginal);

    if (isNaN(numeroDecimal)) {
        alert("Número inválido para a base selecionada.");
        return;
    }

    resDec.innerText = formatarDecimal(numeroDecimal);
    resBin.innerText = decimalParaBinario(numeroDecimal);
    resOct.innerText = decimalParaOctal(numeroDecimal);
    resHex.innerText = decimalParaHexadecimal(numeroDecimal);
}

btnConvert.addEventListener("click", converterBases);

inputElement.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        converterBases();
    }
});