//For with of
const data = [1, 2, 3, 4, 5];
for (let value of data) { //value is not an int, is a iterator
    console.log(value);
}

//Spread operator
const value = [...data];
console.log(value);

function test(a, b, c, d, e) {
    console.log(a, b, c, d, e);
}

test(...data);

const name = "johan";
console.log(...name);



//another way to consume iterables
for (let [key, value] of data.entries()) {
    console.log(key, value);
}

//Deconstructor

//arrays
const [val1, val2] = data;
console.log(val1, val2);
//objects
const { color, nameC } = { color: "blue", nameC: "bob" };
console.log(color, nameC);


//This KEYWORD
class ThisClass {

    thisTest() {
        console.log(`Hi ${this.name}`)
    }
    color = "blue";
    thisTest2() {
        console.log(`Hi ${this.color}`)
    }

}

const thisClass = new ThisClass();
thisClass.thisTest(); //Hi undefined
thisClass.thisTest2(); //Hi blue
let obj = { name: "Mario" };
thisClass.thisTest.call(obj); //Hi Bob

//Prototype

const prototypeFunc = {
    hello() {
        console.log(`hello ${this.name}`);
    }
}

const helloBob = Object.create(prototypeFunc);
helloBob.name = "Bob Carl";
helloBob.hello();



