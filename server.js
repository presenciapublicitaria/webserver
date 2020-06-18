const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'))


//Si deseamos crear un servicio web desde la raiz

// app.get('/', (req, res) => {
//     // res.send('Hola Mundo')

//     let salida = {
//         nombre: 'Cristian',
//         edad: 32,
//         url: req.url
//     }

//     res.send(salida);

// })

// app.get('/data', (req, res) => {
//     res.send('Hola Mundo')
// })



app.listen(8090, () => {
    console.log('Escuchando contenido del puerto 8090');
})