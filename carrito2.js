class Product {
    constructor(name, price, productId, description, image){
        this.name = name;
        this.price = price;
        this.productId = productId;
        this.description = description;
        this.image = image;
    }
}

let products = [
    new Product('Samsumg galaxy s2', 40000, 'ee12galx', 'Telefono samsumg viejito de oferta', 'https://http2.mlstatic.com/D_NQ_NP_995961-MLA53452151923_012023-O.jpg'),
    new Product('Iphone 14', 500000, 'ee14iph', 'iphone 14 pro max nuevo en caja bat 100%', 'https://d28hi93gr697ol.cloudfront.net/9ef84dda-32dd-4016-7da3-1c0a824fffb4/img/Producto/3eab131d-b1a0-6cab-1350-e538fd9b2419/iphone14promax-637e89105ddd4.webp'  ),
    new Product('Motorola g24', 70000, 'MotG24', 'Telefono motorola g24 camara 4k 64gb', 'https://armoto.vtexassets.com/arquivos/ids/162644-800-auto?v=638097446537170000&width=800&height=auto&aspect=true'),
    new Product('Motorola g25', 70000, 'MotG255', 'Telefono motorola g25 camara 4k 64gb', 'https://armoto.vtexassets.com/arquivos/ids/162644-800-auto?v=638097446537170000&width=800&height=auto&aspect=true')
]
let carrito = [];

products.forEach(
    product => {
        //Creamos el elemento
        const newProductCard = document.createElement('div')
        newProductCard.id = product.productId
        //Agregamos la informacion
        newProductCard.classList.add('card', 'mx-2');
        newProductCard.style.width='18rem'
        newProductCard.innerHTML = `
        <img src=${product.image} class="card-img-top" alt=${product.name}>
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">${product.description}</p>
            <p class="card-text"> $ ${product.price}</p>
          <a href="#" class="btn btn-primary" onclick="agregarCarrito(${product.productId})">Agregar al carrito</a>
        </div>
        `
        //Buscamos al padre
const padreContainer = document.querySelector('main');
        //Adoptamos al hijo
        padreContainer.appendChild(newProductCard)
    }
)

function agregarCarrito (productId) {
// debugger
   let product =  products.find( product => product.productId == productId.id)
    console.log(product)
    carrito.push(product)
   //Creamos el elemento
   const newProductCard = document.createElement('div')
   newProductCard.id = product.productId
   //Agregamos la informacion
   newProductCard.classList.add('card', 'mx-2');
   newProductCard.style.width='18rem'
   newProductCard.innerHTML = `
   <img src=${product.image} class="card-img-top" alt=${product.name}>
   <div class="card-body">
     <h5 class="card-title">${product.name}</h5>
     <p class="card-text">${product.description}</p>
       <p class="card-text"> $ ${product.price}</p>
   </div>
   `
   //Buscamos al padre
const padreContainer = document.querySelector('#cart-body');
   //Adoptamos al hijo
   padreContainer.appendChild(newProductCard)

}

function getCart  () {
    carrito.forEach(
        product => {
            //Creamos el elemento
            const newProductCard = document.createElement('div')
            newProductCard.id = product.productId
            //Agregamos la informacion
            newProductCard.classList.add('card', 'mx-2');
            newProductCard.style.width='18rem'
            newProductCard.innerHTML = `
            <img src=${product.image} class="card-img-top" alt=${product.name}>
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">${product.description}</p>
                <p class="card-text"> $ ${product.price}</p>
            </div>
            `
            //Buscamos al padre
    const padreContainer = document.querySelector('#cart-body');
            //Adoptamos al hijo
            padreContainer.appendChild(newProductCard)
        }
    )
}
