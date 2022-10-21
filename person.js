class Person {
    constructor(name){
        this.name = name;
    }

    sayMyName(){
        return `meu nominho é ${this.name}!`;
    }
}

module.exports = { //export objetos, pode ser unica coisa tambem, sem chves
    Person,
};