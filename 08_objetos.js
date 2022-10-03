// Trabajando con Objetos

const obj = {
    id: 4,
    nombre: "Juan",
    apellido: "Couto",
    isDeveloper: true,
    libros_favoritos : ["El método", "El codigo de la manifestacion"],
    "4-juegos": [1, 2, 3, 4]
}

console.log(obj["4-juegos"])
console.log(obj.nombre)

const prop = "isDeveloper"
console.log(obj[prop])

const obj2 = obj
console.log(obj2)

obj2.nombre = "Iñigo"
console.log(obj2)
console.log(obj.nombre)