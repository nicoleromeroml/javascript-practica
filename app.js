// let nombre = prompt('ingrese su nombre'); //mario
// let nombreModificado = nombre.charAt(0).toUpperCase() + nombre.substring(3).toLowerCase(); //Mario


// console.log(nombreModificado);

let numero = 15.75;
//todo PARA REDONDEAR UN NUMERO
console.log("Redondeamos un numero "+Math.round(numero));

//truncamiento
console.log("truncamos un numero " + Math.floor(numero));

//encontrar el maximo

let maximo = Math.max(1, 24, 39, 56, 2, 89);

console.log(`el numero mayor es ${maximo}`);

//encontrar el minimo
let minimo = Math.min(1, 34, 0, 47, 98)
console.log("el numero menor es " + minimo)

//potencias
console.log(Math.pow(3,2)); //tres al cuadrado ==> 6
console.log(Math.pow(3,3)); //tres al cubo ==> 27

//raices

console.log(Math.sqrt(9)); //==> raiz cuadrada
console.log(Math.cbrt(27)); // ==> raiz cubica

//obtener numeros aleatorios siempre devuelve entre 0 y 1

// let aleatorio = Math.random();

// console.log(Math.round(aleatorio));

// let aleatorio2 = Math.round(Math.random() * 10);
// console.log('soy un numero aleatorio multiplicado x 10 : ' + aleatorio2);

//Parsear cadenas de texto a numeros

//let numero2 = '15.67';
//console.log(parseInt(numero2)); // parsea enteros
//console.log(parseFloat(numero2)); 
//console.log(Number(numero2)); //solo funciona con numeros numeros

//Limitar la cantidad de decimales

//let numero3 = Math.random();

//console.log(Number(numero3.toFixed(4))) // convierte el numero en string

// let nota1 = parseInt(prompt('ingrese 1er nota'));
// let nota2 = parseInt(prompt('ingrese 2da nota'));
// let nota3 = parseInt(prompt('ingrese 3er nota'));
// let resultado = nota1 + nota2 + nota3;

// console.log(resultado)
// if(resultado <= 18 ) {
//     console.log('estas desaprobado, segui estudiando');

// }else{
//     console.log('aprobado! felicidades')
// }





