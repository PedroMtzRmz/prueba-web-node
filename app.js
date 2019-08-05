const express = require('express')
const app = express()

const hbs = require('hbs')

app.use(express.static(__dirname+'/views'))
hbs.registerPartials(__dirname+'/views/partials')

app.set('view engine', 'hbs');

const port = process.env.PORT || 3000

//helpers
hbs.registerHelper('getYear',()=> new Date().getFullYear())
hbs.registerHelper('toUpper',(texto) => texto.toUpperCase())

app.get('/', (req, res) => {
    res.render('home.hbs',{
        nombre: 'Pedrito Mtz',
        year: new Date().getFullYear()
    })
})

app.get('/about', (req,res) => {
    res.render('about.hbs',{
        nombre: 'Pedrito Mtz',
        year: new Date().getFullYear()
    })
})

app.listen(port /*, callback*/, () => console.log(`Escuchando el puerto ${port}`))

// nodemon app -e js,hbs,css Para estar pendiente