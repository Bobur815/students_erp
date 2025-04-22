class Person {
    constructor(name, age) {
        this.name=name;
        this.age=age;
    }
    introduce() {
        return `i'm ${this.name}, and i'm ${this.age} years old`;
    }
    celebrateBirthday() {
        this.age++;
    }

    setName(newName) {
        this.name=newName;
    }
}

let person=new Person("Ali", 20);
console.log(person.introduce());
person.celebrateBirthday();
console.log(person.introduce());
person.setName("Vali");
console.log(person.introduce());
