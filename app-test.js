const http =  require('http')

http.createServer((req, res) => {
    res.writeHead(200, {'content-type' : 'application/json'})
    let salida = {
        nombre: 'Pedro Martinez',
        edad: 32,
        url: req.url
    }
    res.write(JSON.stringify(salida))
    res.end();
})
.listen(8080)
console.log('Escuchando puerto 8080');