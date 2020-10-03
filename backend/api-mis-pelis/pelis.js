const express = require('express');
const app = express();


const mongoose = require('mongoose');

app.use(express.json()); //indicarle a express que se debe interpretar json

app.use(require('./controllers/peliculas.routes'));


// escribir código aquí
mongoose.connect(
    'mongodb+srv://stefifm:metcamppeugeot19@cluster-stefifm-met-cam.xy4fb.mongodb.net/stefifm',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    },
    (err, res) => {
      if (err) {
        throw err;
      } else {
        console.log('Conección a la Base de datos ONLINE establecida');
      }
    }
  );
  

//Aquí hay una función de flecha y anónima porque no hay algún nombre en paréntesis
app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});