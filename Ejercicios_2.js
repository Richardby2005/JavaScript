/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética
let suma = 5 + 3;
let resta = 10 - 4;
let multiplicacion = 6 * 7;
let division = 20 / 5;
let modulo = 10 % 3;
let incremento = 1;
incremento++;
let decremento = 5;
decremento--;
// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
let asignacionSuma = suma;
let asignacionResta = resta;
let asignacionMultiplicacion = multiplicacion;
let asignacionDivision = division;
let asignacionModulo = modulo;
let asignacionIncremento = incremento;
let asignacionDecremento = decremento;

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(suma === 8, resta === 6, suma === suma, modulo == "1", division === asignacionDivision);
// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(suma === "8", resta == suma, !(suma == suma), modulo ==12, resta == incremento);
// 5. Utiliza el operador lógico and
console.log (suma > resta && division < multiplicacion)
// 6. Utiliza el operador lógico or
console.log(suma < resta || division < multiplicacion)
// 7. Combina ambos operadores lógicos
console.log(suma < resta && modulo ==1 || division > multiplicacion)
// 8. Añade alguna negación
console.log(!(0))
// 9. Utiliza el operador ternario
let nota = true
nota ? console.log ("El estudiante aprobo"): console.log("El estudiante desaprobo")
// 10. Combina operadores aritméticos, de comparáción y lógicas
console.log ((7-1)>=6 && 2 == (17%5))