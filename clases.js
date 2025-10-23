// 1. Crea una clase que reciba dos propiedades
class auto {
    constructor(marca, peso){
        this.marca = marca,
        this.peso = peso
    }
    calidad(){
        this.marca == "toyota"? console.log("buena marca") : null
    }
    static capacidad(a){
        return a*12
    }
    get Mostrar_marca(){
        console.log("la marca de este vehiculo es",this.marca)
    }
    set mod_peso(nuevo){
        this.peso = nuevo
        console.log("peso modificado a", this.peso)
    }
}
let mycar = new auto("toyota", 12)
console.log(mycar)
// 2. Añade un método a la clase que utilice las propiedades

let car2 = new auto("toyota", 13)
car2.calidad()
// 3. Muestra los valores de las propiedades e invoca a la función
console.log(car2.marca)
car2.calidad()
// 4. Añade un método estático a la primera clase//Haz uso del método estático
console.log(auto.capacidad(2)) 

// 6. Crea una clase que haga uso de herencia
class camioneta extends auto{
    constructor(marca, peso, ruedas){
        super(marca, peso)
        this.ruedas = ruedas
    }
}
let mycamioneta = new camioneta("nisan", 12, 4)
// 7. Crea una clase que haga uso de getters y setters
let car3 = new auto("toyota", 12)
car3.Mostrar_marca
car3.mod_peso = 15
// 8. Modifica la clase con getters y setters para que use propiedades privadas
class bicicleta {
    #marca
    #peso
    constructor(marca, peso){
        this.#marca = marca,
        this.#peso = peso
    }
    get mostrar_marca(){
        console.log("la marca de la bicicleta es", this.#marca)
    }
    set cambiar_peso(nuevo){
        this.#peso = nuevo
        console.log("peso modifica a", this.#peso)
    }
}


// 9. Utiliza los get y set y muestra sus valores
let bici = new bicicleta("nisan", 12)
bici.mostrar_marca
bici.cambiar_peso = 14
// 10. Sobrescribe un método de una clase que utilice herencia 
class camioneta extends auto{
    constructor(marca, peso, ruedas){
        super(marca)
        this.peso = peso
        this.ruedas = ruedas
    }
}