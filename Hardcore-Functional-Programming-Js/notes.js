//Pure funcionts checklist:

//Total
const total = i => i * 2; //For every input, there is an output

//Deterministc
const deterministic = a => a * 200; //always the same output for the same input

//No observable side-effects

const sideEffects = i => {
  console.log("anything"); //side effect
  i * i;
};

//Playing with properties

const add = (x, y) => x + y;

const toPair =
  f =>
  ([x, y]) =>
    f(x, y);

// //Same as:

// function toPair(f) {
//   return function ([x, y]) {
//     return f(x, y);
//   };
// }

var result = toPair(add);

const curry = f => x => y => f(x, y);

console.log(result([3, 2]));

var result = toPair(add)([2, 3]); //sending a nested parameter

console.log(result);

const addStepOne = curry(add)(1); //first one parameter
const addFinalStep = addStepOne(2); //then second parameter
console.log(addFinalStep);

//Loggin
const log = curry((tag, value) => (console.log(tag, value), value));

//Compose functions

const uppercase = str => str.toUpperCase();
const addQuestion = str => str + "?";
const compose = (f, g) => x => f(g(x));
const resultCompose = compose(
  addQuestion,
  compose(log("upercasse:"), uppercase)
);
console.log(resultCompose("hello"));

//Ramda is a library that helps with all this functions, curry, composition, etc:  https://ramdajs.com.

//Functors: "is any object we can map and apply a function generating another object instance of the same type and connections."

const Box = x => ({
  map: f => Box(f(x)),
  fold: f => f(x),
});

function copToMex(pesos) {
  const double = pesos * 2;
  const twoCeros = double * 100;
  return twoCeros;
}

console.log(copToMex(8500000));

const copToMexFP = Box(8500000)
  .map(x => x * 2)
  .fold(x => x * 100);

console.log(copToMexFP);
