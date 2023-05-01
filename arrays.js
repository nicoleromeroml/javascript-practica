// let alumnos = [1, 'franco', 'priscilia', 'mario', false]

// console.log(alumnos[2]);

let days = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];

days.push('feriadol');
console.log(days)

let diaEliminado = days.pop();
console.log(diaEliminado)

days.unshift('domingol');
console.log(days);
console.log(days.shift());


console.log(days.indexOf('lunes'));
// console.log(days.reverse())

console.log(days.includes('domingol'));

console.log(days.join(', '));
console.log(days.sort())

days.splice(1,2,'feriadol');
console.log(days);

// for(let index = 0; index < days.length; index++){
// console.log(days[index]);
// }

