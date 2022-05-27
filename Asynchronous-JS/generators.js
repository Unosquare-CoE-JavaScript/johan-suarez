function* generatorFunction() {
  yield 1;
  yield "2";
  yield "blue";
}

let generatorObj = generatorFunction();

for (let value of generatorObj) {
  console.log(value); //1,2,blue
}

let secondGeneratorObj = generatorFunction();
console.log(secondGeneratorObj.next().value); //1;
console.log(secondGeneratorObj.next().value); //2
console.log(secondGeneratorObj.next().value); //blue
console.log(secondGeneratorObj.next().done); //blue
