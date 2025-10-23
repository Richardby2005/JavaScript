/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
function suma(a,b){
    return a+b
}
let resultado = suma (2,3)
console.log(resultado)
// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
function mayor(arr){
    //return Math.max(...lista)

    return arr.reduce((max,actual)=>actual>max? actual:max,-Infinity)
}
let lista = [12,4,54,32,124,4,2]

console.log(mayor(lista))
// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
function Vocales(x){
    nro = 0
    for(let i of x){
        nro++
    }
    return nro
}
let word = "hola"
console.log(Vocales(word))
// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
function Mayus(arr){
    arr_mayus = []
    arr.forEach((valor)=>arr_mayus.push(valor.toUpperCase()))
    return arr_mayus
}
let arr_strings = ["hola","pep", "fds","final"]
console.log(Mayus(arr_strings))

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
function evaluador(nro){
    if(nro<=1) return false
    for (let i = 2; i <= Math.sqrt(nro); i++){
        if (nro % i === 0) return false
    }
    return true
}

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
function coincidencias(arr1, arr2){
    arr_coinci = []
    arr1.forEach((value)=>arr2.forEach((val)=>val===value? arr_coinci.push(value):null))
    return arr_coinci
}
let arr1 = [1,2,3,4,5,6]
let arr2 = [4,5,6,7,8,9]
console.log(coincidencias(arr1,arr2));
// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
function Sum_pares(arr){
    let arr_pares = []
    arr.forEach((value)=> value%2 ==0?arr_pares.push(value):null)
    return arr_pares.reduce((a,b)=>a+b,0)
}
console.log(Sum_pares(arr1))
// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
function Cuadrado(arr){
    let arr_elevado = []
    arr.forEach((value)=>arr_elevado.push(value**2))
    return arr_elevado
}
console.log(Cuadrado(arr2))
// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
function Invertir(cad){
    let arr_cad = cad.split(" ") //divide la frase en un array de palabras 
    let arr_invertido = []
    arr_cad.forEach((value)=>arr_invertido.unshift(value))
    return arr_invertido.join(" ") //concatena el array en un string separados por espacio
}
let cadena = "hola que tal estas"
console.log(Invertir(cadena))
// 10. Crea una función que calcule el factorial de un número dado
function Factorial(nro){
    if (nro == 1) return 1
    let total = nro*Factorial(nro-1)
    return total
}
console.log(Factorial(3))
