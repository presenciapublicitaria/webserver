const express = require('express'); //La libreria Express permite montar tu server pero con poco codigo
const app = express();
const hbs = require('hbs'); //HBS permite editar handlebars para usar las paginas de vista hbs

app.use(express.static(__dirname + '/public'))

// Express Hbs Engine

//Usando Parciales de HBS 
hbs.registerPartials(__dirname + '/views/parciales/');
//Usando el motor hbs
app.set('view engine', 'hbs');

//Si deseamos crear un servicio web desde la raiz

app.get('/', (req, res) => {
    // res.send('Hola Mundo')

    // let salida = {
    //     nombre: 'Cristian',
    //     edad: 32,
    //     url: req.url
    // }

    // res.send(salida);

    res.render('home', {
        nombre: 'Princesa Rosada',
        anio: new Date().getFullYear()
    });

});

app.get('/about', (req, res) => {

    res.render('about', {
        anio: new Date().getFullYear()
    });

})

// app.get('/data', (req, res) => {
//     res.send('Hola Mundo')
// })



app.listen(8090, () => {
    console.log('Escuchando contenido del puerto 8090');
})