class Person {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }

    print() {
        console.log(`Name is ${this.name} and gender is ${this.gender}`);
    }
}

class Student extends Person {
    constructor(name, gender, grade) {
        super(name, gender);
        this.grade = grade;
    }

    print() {
        super.print();
        console.log(`grade is ${this.grade}`);
    }
}

const bob = new Student("Bob", "male", 5);
bob.print();

