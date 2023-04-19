var diasDelMes = new Date(2023, 4, 0).getDate();
var diaActual = new Date().getDate();

function diasMes() {
    return diasDelMes;
}

function diaActual() {
    return diaActual;
}

function diasFaltantes() {
    return diasDelMes - diaActual;
}

module.exports.diasMes = diasMes;
module.exports.diaActual = diaActual
module.exports.diasFaltantes = diasFaltantes;
