
// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
let numeros = [1, 2, 3, 4, 5];
let [nro1, nro2] = numeros
console.log(nro1,nro2)
// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let [value1, value2, nr3, , ,nro6 = 0 ] = numeros
console.log(value1, value2, nr3, nro6)
// 3. Usa desestructuración para extraer dos propiedades de un objeto
let person = {
    name : "pepe",
    age : 19,
    walk : function() {
        console.log("la persona esta caminando")
    },
    job : {
        name: "programador",
        time: 2
    }

}
let {age , name} = person
console.log(age, name)
// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes
let {age : edad , name : nombre} = person
console.log(edad , nombre)
// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
let {job : {name: namejob}} = person
console.log(namejob)
// 6. Usa propagación para combinar dos arrays en uno nuevo
let arr = [7,5,3,2,1]
let Union = [...arr, ...numeros]
console.log(Union)
// 7. Usa propagación para crear una copia de un array
let copia = [...arr]
console.log(copia)
// 8. Usa propagación para combinar dos objetos en uno nuevo
let obj = {
    propiedad : "nose"
}
let Union2 = {...person, ...obj}
console.log(Union2)
// 9. Usa propagación para crear una copia de un objeto
let copiaobj = {...Union2}
console.log(copiaobj)
// 10. Combina desestructuración y propagación
let {propiedad: nose} = Union2
console.log(nose)