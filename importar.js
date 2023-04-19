var http = require('http'),
    fs = require('fs')
    parser = require('./parser_var.js')
    p = parser.parse_vars,
    datos = parser.batman

    horaformato = require('./formato_hora.js')
    hora24 = horaformato.hora24,
    hora12 = horaformato.hora12

    diasFaltantes = require('./dias_faltantes.js')
    diasMes = diasFaltantes.diasMes,
    diaActual = diasFaltantes.diaActual,
    dias = diasFaltantes.diasFaltantes,
    
    calculadora = require('./calculadora.js')
    sumar = calculadora.sumar,
    restar = calculadora.restar,
    multiplicar = calculadora.multiplicar,
    dividir = calculadora.dividir

    procesador = require('./procesador.js')
    dividirPalabras = procesador.dividirPalabras,
    dividirLetras = procesador.dividirLetras
    eliminarEspacios = procesador.eliminarEspacios;

http.createServer(function(req, res) {  
    
    if (req.url === '/' || req.url === '/inicio') {
        fs.readFile('./public/inicio.html',function(error,html){
            res.write(html);
            res.end();
        });
    }

    if (req.url === '/galeria') {
        fs.readFile('./public/fotos.html',function(error,html){
            res.write(html);
            res.end();
        });
    }

    if (req.url === '/form') {
        fs.readFile('./public/form.html', function(err, html){

            
            var html_string = html.toString();
    
            var respuesta = p(req),
            parametros = respuesta['parametros'],
            valores = respuesta['valores'];
    
            console.log(respuesta)
            
            for (var i = 0; i < parametros.length; i++) {
                var html_string = html_string.replace('{' + parametros[i] + '}', valores[i]);
            }
    
            html_string = html_string.replace('{identidad}', datos['identidad']);
            html_string = html_string.replace('{poder}', datos['poder']);
    
            html_string = html_string.replace('{hora12}', hora12);
            html_string = html_string.replace('{hora24}', hora24);
    
            html_string = html_string.replace('{diasMes}', diasMes);
            html_string = html_string.replace('{diaActual}', diaActual);
            html_string = html_string.replace('{dias}', dias);
    
            res.writeHead(200, {'Content-type':'text'});
            res.write(html_string);
            res.end();
        });
    }

    if (req.url === '/calculadora') {
        fs.readFile('./public/calculadora.html',function(error,html){
            var html_string = html.toString();
            
            html_string = html_string.replace('{suma}', sumar(10, 20));
            html_string = html_string.replace('{resta}', restar(10, 20));
            html_string = html_string.replace('{multiplicacion}', multiplicar(10, 20));
            html_string = html_string.replace('{division}', dividir(10, 20));

            res.writeHead(200, {'Content-type':'text'});
            res.write(html_string);
            res.end();
        });
    }

    if (req.url === '/procesador') {
        fs.readFile('./public/procesador.html',function(error,html){
            var html_string = html.toString();

            html_string = html_string.replace('{dividirPalabras}', dividirPalabras("Hola soy Arturo"));
            html_string = html_string.replace('{dividirLetras}', dividirLetras("Arturo"));
            html_string = html_string.replace('{eliminarEspacios}', eliminarEspacios("Hola soy Arturo"));

            res.writeHead(200, {'Content-type':'text'});
            res.write(html_string);
            res.end();
        });
    }
}).listen(9090);
