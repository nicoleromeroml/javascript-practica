// let numero = 5;

// if(numero < 10) {
//     console.log('el numero es menor a 10');
// }else{
//     console.log('el numero es MAYOR a 10')
// }

//TODO EJERCICIO DE COMPARACION

// let numeroUsuario = parseInt(prompt('ingrese el primer numero'));
// let numeroUsuario2 = parseInt(prompt('ingrese el segundo numero'));

// if(numeroUsuario >= numeroUsuario2) {
//     console.log('el primer numero es MAYOR o IGUAL');
// }else{
//     console.log('el primer numero es MENOR');
// }

// if(numeroUsuario > numeroUsuario2)
// {
//     console.log('es mayor')
// } else if (numeroUsuario < numeroUsuario2) {
//     console.log('es menor')
// } else {
//     console.log('el numero es igual')
// }


//Todo EJERCICIO PAR O IMPAR

// let numero3 = parseInt(prompt('ingrese un numero'));

// if(numero3%2 == 0){
//     alert(`el numero ${numero3} es par`)
// }else{
//     alert(`el numero ${numero3} es impar`)
// }

//todo EJERCICIO DE MUSICA POR EDAD

// let edad = prompt('ingrese su edad');

// if(edad >= 18 && edad <= 30) {
// console.log('El tema para tu edad es : Ojos bonitos');
// }else if (edad >30 && edad <=60) {
//     console.log('el tema para vos es : Ricardo Arjona');
// }else if (edad >60 && edad <95){
//     console.log('el tema para vos es : Naranjo en flor')
// }else{
//     console.log('Edad invalida');
// }

//todo CEMENTERIO EMBRUJADO

// let pregunta = prompt('trajiste anteojos ?');

// if(pregunta.toLowerCase() == 'si') {
//     console.log('corre, no te conviene!!!');
// }else if (pregunta == 'no'){
//     console.log('compra tranquilo pa!');
// }else{
//     console.log('solo se admiten respuestas de \"SI\" y \"NO\"');
// };

//todo PROVINCIAS COPADAS CON IF && ELSE IF

// const provincias = prompt('De que provincia sos pa\'');

// if(provincias == 'tucuman') {
//     alert('alta milanga chango!!!');
// }else if (provincias == 'cordoba'){
//     alert('Cuartetazos papaaa!!!!')
// }else if(provincias == 'santiago') {
// alert('Aguanten las siestas eternas !!!');
// }else{
//     alert('provincia irrelevante! XD');
// }

//todo PROVINCIAS COPADAS CON SWITCH

// const provincias = prompt('ingrese provincia');

// switch (provincias) {
//     case 'tucuman':
//         alert('alta milanga chango!!!');
//         break;
//     case 'santiago':
//         alert('Aguanten las siestas eternas !!!');
//         break;
//     case 'cordoba':
//         alert('Aguante el cuarteto !!!');
//         break;
//     case 'jujuy':
//         alert('Soltame carnaval !!!');
//         break;
//         default:
//             alert('provincia irrelevante! XD ')
// }

//todo que dia es hoy

// let day = new Date().getDay();

// switch(day){
//     case 1 :
//         console.log('hoy es lunes');
//         break;
//     case 2 : 
//     console.log('hoy es martes') ;
//     break;
//     case 3 :
//         console.log('hoy es miercoles');
// }

// let numero = prompt('ingrese numero');
// let contador = 0;

// while (contador < numero) {
//     console.log(contador);
//     contador++
// }
// while (numero > 0) {
//   console.log(numero);
//   numero--  
// }

// let respuesta = prompt('xq la luna es mayor que el sol?');
// let contador = 1;
// while (respuesta.toLowerCase() !== 'por que sale de noche') {
//     respuesta = prompt('segui intentando');
//     contador++
// if(contador == 3 ){
//     alert('Empeza con l')
// }
// }
// alert('Excelente!!!')




//todo xq la luna es mayor que el sol ?

// let pregunta = prompt('xq la luna es mayor que el sol?');
// let contador = 0;

// while (pregunta !== 'xq sale de noche') {
//      pregunta = prompt('segui intentado');
//      contador++
//     if (contador == 3) {
//         alert('pista: pensa en batman');
//     }if (contador == 5) {
//         alert('amargo!!!')
//         pregunta = 'xq sale de noche'
//     }

// }
// console.log('Excelente!!!')
//todo 
// let numeroUser= 10;

// for(let numero = 0; numero <= numeroUser ; numero++){
//     console.log(`soy el numero en el while ${numero}`)
// }

//toDo: ejercicio de excalibur

let nameUser;
let isKing = false;

while (nameUser !== 'arturo' || isKing !== true ) {
    nameUser = prompt('como te llamas?');
    if(nameUser.toLowerCase() == 'arturo'){
        isKing = confirm('sos rey??');
        if (isKing == false) {
            alert('no sos rey pa')
        }
    }else{
        alert('no te llamas arturo, segui intentado!')
    }
}

console.log('grande rey!!!')