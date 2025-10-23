/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales
let animales = ["Mono", "vaca", "caballo", "pato", "cerdo"]
// 2. Añade dos más. Uno al principio y otro al final
animales.push("perro")
animales.unshift("gato")

console.log(animales)
// 3. Elimina el que se encuentra en tercera posición

animales.splice(2,1)
console.log(animales)
// 4. Crea un set que almacene cinco libros
let libros = new Set(["libro1", "libro2", "libro3", "libro4", "libro5"])
console.log(libros)
// 5. Añade dos más. Uno de ellos repetido
libros.add("libro6", "libro1")
console.log(libros)
// 6. Elimina uno concreto a tu elección
libros.delete("libro3")
console.log(libros)
// 7. Crea un mapa que asocie el número del mes a su nombre
let meses = new Map([[1, "enero"],[2, "febrero"]])
console.log(meses)
// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
let mes = 1
if (meses.has(mes)) {
    console.log("mes existente")
} else {console.log(`no existe el mes ${mes} en la base de datos`)}
// 9. Añade al mapa una clave con un array que almacene los meses de verano
meses.set([1,2,3],"Verano")
console.log(meses)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let myarray = []
let myset = new Set(myarray)
let mymap = new map([["array",myset]])