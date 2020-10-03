const express = require('express');
const app = express();

app.use(express.json()); //indicarle a express que se debe interpretar json

app.get('/', function (req, res){
    res.send('El primer endpoint de mi API');
});

app.get('/usuarios', function (req, res){
    res.send('Aquí hay un listado de usuarios');
});

app.get('/usuarios/:id', function (req, res){
    console.log(req.params.id);
    res.send(`Aquí está la información del usuario con id: ${req.params.id}`);
});

app.post('/usuarios', function (req, res){
    res.send(`El nombre y apellido del usuario es ${req.body.nombre} ${req.body.apellido}`);
});

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});