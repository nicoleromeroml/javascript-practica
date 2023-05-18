const id = window.location.hash.slice(1);

let products = JSON.parse(localStorage.getItem('products'));

const product = products.find(product => product.productId == id);
let productDetail= document.createElement('div');
productDetail.id = product.productId;
productDetail.classList.add('row');
productDetail.innerHTML = `
<div class="row">
<div>
    <img src=${product.image} alt="">
</div>
<div>
    <h2>
   
    ${product.name}</h2>
    <h3>${product.price}</h3>
    <p>${product.description}</p>
</div>
</div>
`
let productContainer = document.querySelector('#container-product');
productContainer.appendChild(productDetail)