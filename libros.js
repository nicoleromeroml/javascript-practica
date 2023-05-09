class ListaLibros {
    constructor(duenio) {
        this.duenio = duenio;
        this.libros = [];
        this.librosYaLeidos = [];
        this.librosNoleidos = [];
        this.libroActual = null;
        this.ultimoLibro = null;
        this.siguienteLibro = null;
    }
    agregarLibro(libro) {
        this.libros.push(libro);
        if (libro.leido == true) {
            this.librosYaleidos.push(libro)
        } else {
            this.librosNoleidos.push(libro)
        }
    }
    empezarLibro(libro) {
        this.libroActual = libro;
    }
    finalizarLibro(libro) {
        this.ultimoLibro = this.libroActual;
        this.librosYaLeidos.push(libro);
        this.librosNoleidos = this.librosNoleidos.filter(librito => librito.titulo != this.libroActual.titulo)
        this.libroActual = null
    }

}

class Libro {
    constructor(titulo, genero, autor, leido) {
        this.titulo = titulo;
        this.genero = genero;
        this.autor = autor;
        this.leido = leido;
    }
}
const libroCesar = new ListaLibros('cesar');

const harrypotter = new Libro('harry potter', 'fantasia', 'Rowling', false);
const elprincipito = new Libro('el principito', 'fantasia', 'exupery', true);
const elsenioranillo = new Libro('el senor de los anillos', 'Fantasia', 'Tolkien', true);

