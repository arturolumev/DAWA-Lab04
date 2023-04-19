var fecha= new Date();

function hora24() {
    var hora = fecha.getHours();
    var ampm = hora >=  12 ? 'pm' : 'am';
    var minutos = fecha.getMinutes();
    minutos = minutos < 10 ? '0' + minutos : minutos;
    var strTime = hora + ':' + minutos + ' ' + ampm;
    return strTime;
}

function hora12() {
    var hora24 = fecha.getHours();
    var ampm = hora24 >= 12 ? 'pm' : 'am';
    hora = fecha.getHours() % 12 || 12;
    var minutos = fecha.getMinutes();
    minutos = minutos < 10 ? '0' + minutos : minutos;
    var strTime = hora + ':' + minutos + ' ' + ampm;
    return strTime;
}

module.exports.hora24 = hora24;
module.exports.hora12 = hora12;
