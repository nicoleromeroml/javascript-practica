//! OBJETOS MATH


//todo REDONDEAR UN NUMERO
let numero = 37.65;
console.log(Math.round(numero));

//todo  TRUNCAMIENTO

console.log(Math.floor(numero));

//todo ENCONTRAR MAXIMOS Y MINIMOS

let maximo = Math.max(1, 35, 56, 59, 89);
console.log(`el numero mayor es ${maximo}`);

// todo ENCONTRAR UN NUMERO MINIMO 
let minimo = Math.min(15, 24, 6, 34, 1);
console.log(`el numero minimo es ${minimo}`);

//todo POTENCIAS

console.log(Math.pow(3,2));
console.log(Math.pow(3,3));

//todo Raiz

console.log(Math.sqrt(9));
console.log(Math.cbrt(27));

//todo OBTENER NUMERO ALEATORIOS // entre  0 y 1

let aleatorio = Math.random();
console.log(aleatorio)

let aleatorio2 = Math.round(Math.random() *10 );
console.log(aleatorio2);


//todo PARSEAR CADENAS 3 motodos

let numero2 = '45.76';

console.log(parseInt(numero2)); // solo nos devuelve numeros enteros
console.log(Number(numero2)); // parsea solo cuando tiene numeros
console.log(parseFloat(numero2));

//todo LIMITAR LA CANTIDAD DE DECIMALES

let numero3 = Math.random();
console.log(Number(numero3.toFixed(2)));


