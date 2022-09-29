/**
 * Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:

- Tu nombre (string)

- Tu edad (number)

- ¿Eres desarrollador? (boolean)

- Tu fecha de nacimiento (Date)

- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)
 */

const libro_favorito = {
    titulo: "Mi libro favorito",
    autor: "Autor Favorito",
    fecha: new Date("january 23 2000"),
    url: "http://www.miweb.com"
}

var fecha_nacimiento = new Date("augoust 06 1983")

const lista = ["Juan Couto", 39, true, fecha_nacimiento, libro_favorito ]

console.log(lista);