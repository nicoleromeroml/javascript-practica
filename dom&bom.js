//? DOM MODIFICAR EL HTML, QUE ES UN ESTANDAR


//? BOM: MANIPULAR LA BARRA DE HERRAMIENTAS, EL HISTORIAL, LA MEMORIA, LAS FUNCIONES DEL TIEMPO, LA CAMARA.ETC.

//!FUNCIONES PARA MANEJAR EL TIEMPO
//todo SetInterval : Ejecuta una tarea cada un determinado lapso de tiempo
function helloWorld(){
    console.log('hola comision');
}

const idInterval = setInterval(()=> helloWorld(),1000);

clearInterval(idInterval)


//todo setTimeout: Ejecuta una funcion pasado un determinado lapso de tiempo

setTimeout( ()=> console.log('hola buen dia'), 5000 );


// let contador = 10;

// const contadorInter = setInterval( ()=> {
//     console.log('Despegue en ', + contador);
//     contador--;
// },1000 )

// setTimeout( ()=> {
//     clearInterval(contadorInter);
//     console.log('Despegueeeeeee!!!!!');
// },10000);

function cambiarTexto(){
   const h2Cambio = document.getElementById('h2-paraCambiar');
   h2Cambio.innerText = 'el texto ha sido cambiado'
   h2Cambio.style.backgroundColor='green';
   h2Cambio.style.display='none'
//    h2Cambio.style.marginLeft='100px';
}
function cambiarTema(){
   const elementoCambiado = document.getElementById('probando-tema');
   if(elementoCambiado.classList.contains('light')){
    elementoCambiado.classList.add('dark');
    elementoCambiado.classList.remove('light');
   }else{
    elementoCambiado.classList.add('light');
    elementoCambiado.classList.remove('dark');
   }
}

// POR  ID : document.getElementById('id')
// POR CLASE: document.getElementByClassName('clase')
// POR NOMBRE: document.getElementByTagName('tag')
// POR selectores de CSS: document.querySelector('.clase', '#id')

//TODO EJERCICIO 3 : CREAR UN NUEVO ELEMENTO, CREAR UN CUADRADO.

function agergarElemento(){
  const newElement = document.createElement('div'); //creamos el elememnto
  newElement.classList.add('cuadrado'); //le ponemos la informacion
  newElement.innerText = 'cuadrado';//le ponemos la informacion
  const padreElemento = document.querySelector('.nuevo-elemento');//ubicamos 
  padreElemento.appendChild(newElement);//el padre adopa al hijo

}