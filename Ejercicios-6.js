/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
for (let i = 0; i < 21; i++){
}
// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let resultado = 0
let iteraciones = 1
while (iteraciones != 101){
    resultado += iteraciones
    iteraciones ++
}
console.log(resultado)
// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
for (i = 0; i < 51; i++){
    if (i % 2 == 0){
        console.log(i)
    }
}
// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let nombres = ["pepe", "juan", "manuel", "alex", "dios"]
for(let i of nombres){
    console.log(i)
}
// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let nro_vocales = 0
let palabra = "hola peru"
for(let i of palabra){
    nro_vocales++
}
console.log(nro_vocales)
// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let numero = [2,45,54,23,65,73]
let multiplicacion = 1
for( let i of numero){
    multiplicacion *= i
}
console.log(multiplicacion)
// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
for (let i = 0; i < 13; i++){
    console.log(`${i} x 5 = ${i*5}`)
}
// 8. Usa un bucle para invertir una cadena de texto
invertido = []
for(let i of palabra){
    invertido.unshift(i)
}
console.log(palabra, invertido)
// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let a = 0, b = 1;
for (let i = 0; i < 10; i++){
    console.log(a);
    [a, b] = [b, a + b];
}
// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
let numeros = [123,43,2,4,5,23,54,2]
let mayores_a_10 = []

for (let i of numeros){
    if (i>10){
        mayores_a_10.push(i)
    }
}
console.log(mayores_a_10)