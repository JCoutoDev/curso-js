/** 
 * Crea un archivo JS que contenga las siguientes líneas
 * - Una función sin parámetros que devuelva siempre "true"
 * - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
 * - Una función generadora de índices pares automáticos
 */


function miFuncion() {
    return true
}
 

async function asincFunc(){
    setTimeout(()=>console.log("Hola soy una promesa"), 5000)
}

asincFunc()

function* idPar(){
    let id = 0
    while(id < 20) { 
        yield id +=2
        
    }
}

const id_par = idPar()

console.log(id_par.next())
console.log(id_par.next())








