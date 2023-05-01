let person = {
    name : 'camila',
    age: 26,
    location : 'san miguel de tucuman',
    hobbies : ['tocar el piano', 'estudiar'],
    pet: [
        {
            name: 'lola',
            type: 'dog'
        },
        {
            name: 'titan',
            type: 'dog'
        }
    ],
    children : null,
    saludar : function () {
        console.log('Hola soy camila');
    }
}

console.log(person.name);



let persona2 = {
    name : 'messi',
    age: 35,
    dni : 37373737,
    domicilio : ['en mi corazon', 'Barcelona'],
    children: 3,
    profesion: 'El mejor del mundo',
    saludar: function() {
        console.log('Hola campeon del mundo !!!')
    },
    listar: function() {
for(property in this){
    console.log(property)
}
  }
}
//TODO CREANDO OBJETOS A PARTIR DE FUNCIONES CONSTRUCTORAS

function Team (name, colors, people){
    this.name = name;
    this.colors = colors;
    this.people = people;
}
let sanMartin = new Team('San Martin de tucuman', ['rojo','blanco'], 70000);
let Atletico = new Team('Atletico tucuman', ['celeste', 'blanco'], 80000);

console.log(sanMartin);

//TODO CREANDO OBJETOS A PARTIR DE CLASES

class Country {
    constructor(name, people){
        this.name = name;
        this.people = people;
    }
}
const argentina = new Country('Argentina', 40000000);
const brasil = new Country('Brasil', 80000000);
console.log(argentina);
console.log(brasil);

