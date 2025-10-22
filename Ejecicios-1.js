/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea

// Un comentario de una linea

// 2. Escribe un comentario en varias líneas

/*
Comentario
de varias
lineas
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let nro = 12;
let texto = "hola peru";
let nulo = null;
let booleano = true;
let enorme = 2142354325n;
let indefinido;
let symbol = Symbol("que ro que");
let arreglo = [1,4,5,6,3];
// 4. Imprime por consola el valor de todas las variables
console.log("numero: ",nro,"texto: ", texto, "nulo:",nulo, "booleano:", booleano, "bigint", enorme, "indefinido", indefinido, 
    "simbolo", symbol, "arreglo", arreglo[0]);
// 5. Imprime por consola el tipo de todas las variables
console.log("\n", typeof(nro),typeof(texto),typeof(nulo),typeof(booleano),typeof(enorme),typeof(indefinido),typeof(symbol),typeof(arreglo));
// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
nro = 0;
texto = "pepe";
nulo = null;
booleano = false;
enorme = 3894895892939n;
indefinido;
symbol = Symbol("otro dato");
// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
nro = "pepe";
texto = 21;
nulo = true;
booleano = null;
symbol;
indefinido = Symbol("pepe");

console.log("\n", typeof(nro),typeof(texto),typeof(nulo),typeof(booleano),typeof(enorme),typeof(indefinido),typeof(symbol),typeof(arreglo));

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const nro2 = 12, texto2 = "hola";
// 9. A continuación, modifica los valores de las constantes
/*
nro2 = 43;
texto2 = "adios";
*/
// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse