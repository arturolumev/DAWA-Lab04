function dividirPalabras(texto) {
    var resultado = texto.split(' ');
    return resultado;
}

function dividirLetras(palabra) {
    var resultado = palabra.split('');
    return resultado;
}

function eliminarEspacios(texto) {
    var palabra = texto.split(' ');
    var resultado = ""

    for (var i = 0; i < palabra.length; i++) {
        console.log(palabra[i]);
        resultado = resultado + palabra[i]
    }

    return resultado;
}


module.exports.dividirPalabras = dividirPalabras;
module.exports.dividirLetras = dividirLetras;
module.exports.eliminarEspacios = eliminarEspacios;
