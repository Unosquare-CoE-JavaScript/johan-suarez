##Async JS:
###Event loop:
![eventloop V8 view](https://geekflare.com/wp-content/uploads/2019/10/1_7GXoHZiIUhlKuKGT22gHmA-1.png)

###Promises:
a function that would return a failure or a success (resolve, reject) in future.

Syntax: `new Promise((resolve,reject)=>{})`

#####Resolve multiples promises at time:

**Promise.all** : Resolve only if all promises resolves
`Promise.all([p1,p2,pn3]).then((responses)=>{});`

**Promise.allSettled**: Resolve **or** reject for each prmise when all promises finish resolving.

`Promise.allSettled([p1,p2,p3]).then((responses)=>{});`

###Async/Await:
Syntax: `async function any(){await promise}`

It hold the **function** where is called, once the promise is resolved, it continues, e.g:

```

const getData = async id => {
  const response = await fetch(`${someApiUrl}/${id}`);
  const data = await response.json();
  console.log(data.name);
};
```

Every function with async keyword returns a promise

### Generators

Syntax: `function * name(){};`

A generator function return a generator object, that is an iterable (we can use for of or in)

Use the word yield to hold the execution and also to return multiple values e.g:

```
function \* generatorFunction(){
yield 1;
yield "2";
yield "blue";
}

let generatorObj = generatorFunction();

for(let value of generatorObj){
console.log(value); //1,2,blue
}
```

Also we can use like this:

```
let secondGeneratorObj=generatorFunction();
console.log(secondGeneratorObj.next().value) //1;
console.log(secondGeneratorObj.next().value) //2
console.log(secondGeneratorObj.next().value) //blue
console.log(secondGeneratorObj.next().done) //true
```
