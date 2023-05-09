//!todo EJERCICIO LIBROS

class ListaLibros {
    constructor(dueno) {
        this.dueno = dueno;
        this.libros = [];
        this.librosYaLeidos = [];
        this.librosNoLeidos = [];
        this.libroActual = null;
        this.ultimoLibro = null;
        this.siguienteLibro = null;
    }
    agregarLibro(libro) {
        this.libros.push(libro);
        if (libro.leido === true) {
            this.librosYaLeidos.push(libro);
        } else {
            this.librosNoLeidos.push(libro);
        }
    }
    empezarLibro(libro) {
        
        this.libroActual = libro;
    }
    finalizarLibro(){
        //preguntar que deberia hacer esta funcion para finalizar un libro (en palabras no codigo)
            this.ultimoLibro = this.libroActual;
            this.librosYaLeidos.push(this.libroActual)
            this.librosNoLeidos = this.librosNoLeidos.filter( libro => libro.titulo != this.libroActual.titulo)
            this.libroActual = null;
    }
}
class Libro{
    constructor(titulo, genero, autor, leido) {
        this.titulo = titulo;
        this.genero = genero;
        this.autor = autor;
        this.leido = leido;
    }
}

const harrypotter = new Libro('harry potter', 'fantasia','Rouling', false);
const principito = new Libro('el principito', 'aventura', 'Saint Exupery', true);
const ficciones =  new Libro('ficciones', 'cuentos', 'Joge l. Borges', false);

const listaNicole = new ListaLibros('Nicole');