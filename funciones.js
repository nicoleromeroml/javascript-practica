
//! FUNCION DECLARATIVA

// function saludo (){
//     console.log('hola')

// }
// saludo();

//! FUNCION ANONIMA

// const saludo2 = function () {
//     console.log('hola 2')
// }

// saludo2();
//! FUNCION DE FLECHA 

// const saludo3 = () => {
//     console.log('hola 3')
// }

// saludo3();


//todo FUNCION PARA SUMA

// const suma = (x, y) => {
//     const suma = x + y;
//     return suma;
// }
// const numeroSuma = suma(5,6)
// console.log(numeroSuma);

// const winner = (team1, team2) => console.log(`${team1} le gano a ${team2}` );

//todo : base de datos para eliminar usuario

let database = ['mauro', 'franco', 'francisco', 'priscila', 'camila', 'mario']

const getdatabase = () => {
    alert(database.join(', \n'))
}

// const deleteUser = () => {
//     let nameUser = prompt('que usuario queres eliminar').toLowerCase();
//     const position = database.indexOf(nameUser);
//     if (database.includes(nameUser)) {
//         database.splice(position, 1)
//         alert('usuario eliminado exitosamente ! :) ')
//     } else {
//         alert('usuario no encontrado')
//     }

// }
// const updateUser = () => {
//     const nameUser = prompt('que usuario queres modificar?').toLowerCase();
//     const update = prompt('que modificacion queres hacer?');
//     const position = database.indexOf(nameUser);

//     if (database.includes(nameUser)) {
//         database.splice(position, 1, update)
//         alert('usuario editado correctamente');
//     }else{
//         alert('usuario no encontrado');
//     }
// }

//LOS  CALLBACK SON FUNCIONES QUE SE PASAN COMO ARGUMENTO DE OTRAS FUNCIONES

// const hi = nombre => alert('hola ' + nombre);
// const bye = nombre => alert('chau '+ nombre);

// function userRegister (saludo) {
// const name = prompt('como es tu nombre?');
// saludo(name)
// }

// userRegister(hi);
// userRegister(bye);


//! DATABASE DE EDADES USUARIOS

const ageDatabase = [23, 30, 45, 37, 28, 25, 18];

// function mayoresde25 (edad) {
//         if(edad >= 25){
//                 return edad
//             }
//         }
        
//   const respuestaMayores =  ageDatabase.filter(mayoresde25);
 //todo FILTER NOS DEVUELVE UNA LISTA DE ELEMENTOS QUE CUMPLEN CON UNA DETERMINADA CONDICION
// const respuestaMayores = ageDatabase.filter(edad => edad >= 25);

//todo LO USAMOS CUANDO SABEMOS QUE EL ELEMENTO QUE BUSCAMOS ES UNICO
// const respuestaMayores2 = ageDatabase.find(edad => edad >= 25);
// console.log(respuestaMayores2);


//todo ejecuta una accion sobre cada uno de los elementos, los modifica y los guarda en uno nuevo
// const en20anios = ageDatabase.map(pepito => pepito +20)
// console.log(en20anios)

//todo no devuelve nada, tampoco modifica el array original, pide algo prestado, hace algo y lo devuelve
const en20anios = ageDatabase.forEach(age => console.log(age + 20));




