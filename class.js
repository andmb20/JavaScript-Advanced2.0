/*
    CLASS (CLASSES) - Estrutura que serve como um molde para criar objetos com caracteristicas semelhantes. Propriedades e Métodos.
*/

// Uma das maneiras de criar uma class
class Person {
    name;
    age;

    talk() {
        console.log(`Hello world, my name is ${this.name} and I'm ${this.age} years old.`)
    }
}

const newPerson = new Person()

newPerson.name = "André"
newPerson.age = 24
newPerson.talk()

const newPerson2 = new Person()

newPerson2.name = "João"
newPerson2.age = 26
newPerson2.talk()


// Outra maneira de criar uma class
class Person2 {
    constructor(name, age){
        console.log(`Hello, my name is ${name}`)
    
        this.name = name
        this.age = age
    }

    talk() {
        console.log(`Hello my friends, my name is ${this.name} and I'm ${this.age} years old.`)
    }
}

const newPerson3 = new Person2("Marcos", 28)
const newPerson4 = new Person2("Yuri", 34)

newPerson3.talk()
newPerson4.talk()