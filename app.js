const express = require ('express')
const app = express ()
app.use(express.static('public'))
app.set('views', 'views') //views va siempre 1ero, 2do va el nobmre de la carpeta
app.set('view engine', 'ejs') //let express which temple we are using

app.get('/', function(req,res) {
    res.render('home-guest') //entre () ponemos el nombre de nuestro template 
})

app.listen(3000)