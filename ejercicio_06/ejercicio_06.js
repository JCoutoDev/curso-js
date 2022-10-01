/**
 * Crea un archivo JS que contenga las siguientes líneas
 *
 */

// Una variable que contenga la lista de la compra (mínimo 5 elementos)
const listaCompra = ["pan", "huevos", "leche", "agua", "harina"];

// Modifica la lista de la compra y añádele "Aceite de Girasol"
listaCompra.push("Aceite de Girasol");

// Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listaCompra.pop();

// Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const peliculasFavoritas = [
  {
    titulo: "Pelicula 1",
    director: "Director 1",
    fecha: new Date(2004, 10, 10),
  },
  {
    titulo: "Pelicula 2",
    director: "Director 2",
    fecha: new Date(2010, 11, 11),
  },
  {
    titulo: "Pelicula 3",
    director: "Director 3",
    fecha: new Date(2022, 12, 12),
  },
];

// Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const peliculasPosteriores = peliculasFavoritas.filter(pelicula=>pelicula.fecha > new Date(2010, 0, 1))

// Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const directoresPeliculas = peliculasFavoritas.map(pelicula=> {
    return pelicula.director
})

// Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const titulosPeliculas = peliculasFavoritas.map(pelicula=> {
    return pelicula.titulo
})

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const directores_titulos = directoresPeliculas.concat(titulosPeliculas)

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const directores_titulos_pro = [...directoresPeliculas, ...titulosPeliculas]

