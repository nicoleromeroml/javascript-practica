let products = ['gaseosa', 'agua', 'cerveza', 'fernet', 'gin', 'vodka', 'vino'];
let carrito = [];

const agregarProducto = () => {
 const productoAgregado = prompt('Que producto deseas agregar?').toLowerCase();
 if(products.includes(productoAgregado)) {
    carrito.push(productoAgregado);
    alert('producto agregado!');
 }else{
    alert('no vendemos ese producto, volve la proxima semana');
 }
  
}
const mostrarCarrito = () => {
    alert(`tus productos seleccionados son: ${carrito.join(', ')} `)
}

function buscarUnProducto () {
    const prodAbuscar = prompt('ingresa aca el producto que buscas').toLowerCase();
    const productoEncontrado = carrito.find(bebida => bebida == prodAbuscar);
    alert(productoEncontrado);
}

const buscarCoincidencias = function () {
    const buscar = prompt('buscar').toLowerCase();
    const resultado = products.filter(producto => producto.includes(buscar));
    alert(resultado);

}