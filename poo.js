const series = [{
    nombre: 'friends',
    temporadas: 10,
    description: 'grupo de amigos que la pasan bien',
    mostrarDesc: function () {
        console.log(`La serie se llama ${this.nombre}, un resumen breve es: ${this.description}`)
    }
}, {
    nombre: 'The Crown',
    temporadas: 5,
    description: 'La verdades de la reina isabel',
    mostrarDesc: function () {
        console.log(`La serie se llama ${this.nombre}, un resumen breve es: ${this.description}`)
    }
}
]

series.forEach(serie => serie.mostrarDesc());


//todo creamos un objeto a partir de una clase

class Cancion {
    constructor(nombre, duracion, cantante) { //el constructor arma la instancia de la clase
        this.nombre = nombre;
        this.duracion = duracion;
        this.cantante = cantante;
    }
    mostrarCancion() {
        console.log(`la cancion de llama ${this.nombre}`)
    }
}
const nuevaCancion = new Cancion('torero', 180, 'chayanne');

//HERENCIA

class Persona {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    saludar() {
        console.log(`Hola soy ${this.name}`);
    }
}

class Estudiante extends Persona {
    constructor(name, age, comision) {
        super(name, age)
        this.comision = comision;
    }
}

const franco = new Estudiante('Franco', 28, '48i');


// SETTER Y GETTER

//todo get es una manera de obtener una propiedad

class SuperHeroe extends Persona {
    constructor(name, age, power) {
        super(name, age)
        this.power = power;
    }
    get getPower() {
        return this.power
    }
    set setPower(power) {
        this.power = power;
    }

}
const superman = new SuperHeroe('Superman', 40, 'volar');


// todo Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
//? Una propiedad titular.
//? Una propiedad saldo, teniendo como valor inicial 0.
//? Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
//? Un método extraer() que permita retirar la cantidad pasada como parámetro.
//? Un método informar() que retorne la información del estado de la cuenta. 


class Cuenta {
    constructor(titular) {
        this.id = Math.random() * 1000
        this.titular = titular;
        this.saldo = 0;
    }
    ingresar(monto) {
        if(monto > 0){
            this.saldo = this.saldo + monto
            console.log(`tu nuevo saldo es ${this.saldo}`)
        }else if (isNaN(monto)){
            console.log('Solo se adminten numeros')
        }
        else{
            console.log('Ingrese un monto valido')
        }
    }


    extraer(monto){
        if(monto <= this.saldo && monto > 0){
            this.saldo = this.saldo - monto
            console.log(`tu nuevo saldo ${this.saldo}`)
        }else{
            console.log('saldo insuficiente');
        }
    }
    informar() {
        console.log(`El saldo de la cuenta ${this.id}, a nombre de  ${this.titular} es de: ${this.saldo}`)
    }

}
const cuentaNicole = new Cuenta('nicole')
