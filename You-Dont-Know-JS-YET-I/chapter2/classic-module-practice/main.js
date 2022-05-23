function person(name, gender) {
    const print = console.log(`name is ${name} and gender is ${gender}`);
    return print;
}

function student(name, gender, grade) {
    let bob = person(name, gender, grade);
    bob;
    console.log(`and grade is ${grade}`);
}

student("Bob", "male", 5);