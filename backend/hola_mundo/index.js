
const persona = require("./persona.js")

function saludar(nombre, edad) {
    console.log(`Hola, soy ${nombre} y tengo ${edad}`)
}

saludar(persona.nombre, persona.edad)

//control + c para terminar con el proceso de nodemon
// para el modulo, hay que crear un archivo aparte 
// en el momento de require, "./persona" por alguna razón no acepta la extensión. 
// Ahora si acepta la extensión WTF?
