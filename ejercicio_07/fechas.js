/**
 * Crea un archivo llamado fechas.js que contenga las siguientes líneas
 *  La fecha de hoy
 *  La fecha de tu nacimiento
 *  Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
 *  Una variable que contenga el día de tu nacimiento
 *  Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
 *  Una variable que contenga el año de tu nacimiento (con 4 dígitos) 
 */

const fechaHoy = new Date();
console.log(fechaHoy);

const fechaNacimiento = new Date(1983, 7, 6)
console.log(fechaNacimiento);

const comparaFecha = fechaHoy > fechaNacimiento
console.log(comparaFecha);

const diaNacimiento = fechaNacimiento.getDate()
console.log(diaNacimiento);

const mesNacimiento = fechaNacimiento.getMonth()+1 // Enero es 0
console.log(mesNacimiento);

const anyoNacimiento = fechaNacimiento.getFullYear()
console.log(anyoNacimiento);


