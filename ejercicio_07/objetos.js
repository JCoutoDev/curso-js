/**
 * Crea un archivo llamado objetos.js que contenga las siguientes líneas:
 *   Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
 *   Una variable que obtenga tu edad a partir del objeto anterior
 *   Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
 *   Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
 */

const datosPersonales = {
  nombre: "Juan",
  apellido: "Couto",
  edad: 39,
  altura: 180,
  eresDesarrollador: false,
};
console.log(datosPersonales);

const edad = datosPersonales.edad;
console.log(edad);

const listaAmigos = [
  {
    ...datosPersonales,
  },
  {
    nombre: "Ricardo",
    apellido: "Garcia",
    edad: 29,
    altura: 170,
    eresDesarrollador: false,
  },
  {
    nombre: "Diego",
    apellido: "Perez",
    edad: 36,
    altura: 187,
    eresDesarrollador: true,
  },
];
console.log(listaAmigos);

const listaAmigosOrdenada = listaAmigos.sort((a, b) => b.edad - a.edad);
console.log(listaAmigosOrdenada);
