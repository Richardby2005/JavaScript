// VARIABLES (var, let, const)
var nombre = "Juan"; // Variable de tipo var (tiene problemas pues es global)
let edad = 30; // Variable de tipo let (ámbito de bloque)
const PI = 3.14; // Variable de tipo const (valor constante)

// TIPOS DE DATOS
let numero = 42; // Número
let texto = "Hola Mundo"; // Cadena de texto
let booleano = true; // Booleano
let arreglo = [1, 2, 3, 4, 5]; // Arreglo
let objeto = { clave: "valor", edad: 25 }; // Objeto
let nulo = null; // Null (ausencia de valor intencional)
let indefinido; // Undefined (sera asignado después)
let mysymbol = Symbol("miSimbolo"); // Símbolo (valor único e inmutable)
let bigInt = 9007199254740991n; // BigInt (números enteros grandes)

console.log("El valor de la variable numero es: " + numero);
console.log("El valor de la variable texto es: " + texto);
console.log("El valor de la variable booleano es: " + booleano);
console.log("El valor de la variable objeto es: " + JSON.stringify(objeto));
console.log("El valor de la variable nulo es: " + nulo);
console.log("El valor de la variable indefinido es: " + indefinido);
console.log("El primer elemento del arreglo es: " + arreglo[0]);

console.log(typeof(objeto)); // Muestra 'object'

// FUNCIONES
function saludar(nombre) { // Función tradicional (puede ser llamada antes de su declaración)
    return "Hola, " + nombre + "!";
}

const sumar = (a, b) => { // Función flecha (solo pueden ser llamadas después de su declaración)
    return a + b;
};

let num1 = 13, num2 = 13;

console.log(`La suma de los numeros ${num1} y ${num2} es: ${sumar(num1, num2)}`);
console.log(saludar(nombre));


// CONDICIONALES
if (edad >= 18) {
    console.log("Eres mayor de edad.");
} else {
    console.log("Eres menor de edad.");
}

// BUCLES
for (let i = 0; i < 5; i++) {
    console.log("Número: " + i);
}

let contador = 0;
while (contador < 5) {
    console.log("Contador: " + contador);
    contador++;
}

// OBJETOS
const persona = {
    nombre: "Ana",
    edad: 25,
    saludar: function() {
        return "Hola, soy " + this.nombre;
    }
};

// ARREGLOS
const frutas = ["manzana", "banana", "cereza"];
frutas.push("naranja"); // Agregar un elemento al arreglo

// MOSTRAR RESULTADOS
console.log(saludar(nombre));
console.log("Suma: " + sumar(5, 10));
console.log(persona.saludar());
console.log("Frutas: " + frutas.join(", "));

// FIN DEL CÓDIGO