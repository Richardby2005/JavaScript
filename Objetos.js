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

for (let k in person){
    console.log(k, "=>", person[k])
}

//otra forma de iterar un objeto
Object.keys(person).forEach(value => console.log(value, "=>", person[value]))

// 1. Crea un objeto con 3 propiedades
let pet = {
    name : "marron",
    age : 7,
    race : "criollo"
}
// 2. Accede y muestra su valor
console.log("La edad de la mascota es",pet.age, "años")
// 3. Agrega una nueva propiedad
pet.walk = function () {return "la mascota esta caminando"}
console.log(pet.walk())
// 4. Elimina una de las 3 primeras propiedades
delete pet.race
console.log(pet)
// 5. Agrega una función e invócala
pet.run = function(){return "La mascota esta corriendo"}
console.log(pet.run())
// 6. Itera las propiedades del objeto
for (let i in pet){
    console.log(i, "=>", pet[i])
}
// 7. Crea un objeto anidado
let car ={
    wheels : 4,
    caracteristics : {
        weight : "12 toneladas"
    }
}

// 8. Accede y muestra el valor de las propiedades anidadas
console.log(car.caracteristics.weight)
// 9. Comprueba si los dos objetos creados son iguales
console.log(pet == car)
// 10. Comprueba si dos propiedades diferentes son iguales
console.log(pet.age == car.wheels)