let objetos = {
    nombre : 'nicole',
    apellido : 'romero',
    edad: 28 
}

console.log(objetos)

//TODO PASAMOS NUESTRO OBJETO A JSON PARA COMUNICARNOS CON UN BACK

let objetoTraducido = JSON.stringify(objetos); 
console.warn(objetoTraducido);

//TODO PASAMOS NUEVAMENTE A OBJETO 

let objetoQueVuelve = JSON.parse(objetoTraducido);
console.error(objetoQueVuelve);


//GUARDADO DE ELEMENTOS EL LOCAL STORAGE
localStorage.setItem('elemento1', 45);
localStorage.setItem('elemento2', 'hola hola');
localStorage.setItem('elemento3', objetoTraducido);


//TRAER ELEMENTOS DE LOCAL STORAGE

let valor = JSON.parse(localStorage.getItem('elemento3'));
console.log(valor.nombre, valor.apellido);

//BORRAR UN ELEMENTO
localStorage.removeItem('elemento2');
localStorage.clear()
