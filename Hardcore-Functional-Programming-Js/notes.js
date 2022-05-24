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

//Compose functions

const uppercase = str => str.toUpperCase();
const addQuestion = str => str + "?";
const compose = (f, g) => x => f(g(x));
const resultCompose = compose(addQuestion, uppercase);
console.log(resultCompose("hello"));
