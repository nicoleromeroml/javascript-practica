function publicar(event){
    event.preventDefault()
    const tweet = document.getElementById('tweet');
    const tweetText = tweet.value;
    const newTeet = document.createElement('div')
    const id = new Date().getTime()
    newTeet.id = id;
    newTeet.innerHTML = `
    <p>${tweetText}</p>
    <button class=" btn btn-danger d-block ms-auto" onclick="eliminarTweet(${id})"> Eliminar </button>
    `;
    newTeet.classList.add('text-light', 'bg-secondary', 'my-2', 'p-3', 'rounded');
    const tweetContainer = document.querySelector('.contenedor-tweet');
    tweetContainer.appendChild(newTeet);
    document.querySelector('form').reset();

}

function eliminarTweet(id){
 const tweetToDelete = document.getElementById(id);
 tweetToDelete.remove();
}