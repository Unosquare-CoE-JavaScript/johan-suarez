# You Don’t Know JS Yet: Get Started notes.

"you will always be more effective in
your development work if you more completely understand
how your code works than you are solely just getting it to
produce a desired outcome."

## Chapter 1:

JavaScript is a multi-paradigm language. You
can write procedural, class-oriented, or functional programming.

**Backwards compatibility**: Once something is accepted as valid JS, it cannot be removed it in the future, this to ensure the stability of the web and not break any past program (there have been some small exceptions to this rule).

**Forwards compatibility**: If a new addition to the language is added, it will not break if it's runs in past engines versions. JS is not forwards-compatible.

![Backwards and forwards compatibility](https://data-conversion.org/wp-content/uploads/2021/02/Forward-and-Backward-Compatibility-1.jpg)


**Babeljs**: Is a transpiler that helps to convert JS new ECMAScript features to a old versions

**Polyfill**: Handle explicitly cases for missing API methods in past engine versions.

**Web Assembly (WASM)**: Let other languages run in js engines.

**How to use Strict mode**:\
Use it per file.\
Only whitespace and comments are allowed, before the use-strict pragma.\
`"use strict";`\
Then, the rest of the file runs in strict mode.

Or in a per-function scope:\
```
function someOperations() {
// whitespace and comments are fine here
"use strict";
// all this code will run in strict mode
}
```

Also, by default all content in a module is set in strict mode.

---

## Chapter 2

**Interpolation**: `` `My name is ${name}` ``

**Js Types**:

![Js types](https://www.edureka.co/blog/wp-content/uploads/2012/09/data-types-in-python.png)

**typeof**: Let you know what type of data is a value, e.g:  
```
typeof 'lorep ipsum'
//string`
```

**Block scope**:

![Block scope](https://pbs.twimg.com/media/EeVw-DOXgAAMtKk.jpg)

**Coercive comparasion**:

Note: When two values are strings, and you use < or > comparator, JS use alphabetical comparation of the strings:

```

var x='10'
var y='9'
x<y // true
``` 

---

## Chapter 3

**Iterables**: arrays, strings, objects, maps.

Iterables has another ways to consume it, e.g:

iterable.values(): return only the values of the iterable
iterable.entries(): return [index,value] of the original iterable

**Spread operator**: Let spread iterables e.g:

```
let data=[1,2,3];
let copyArray=[...data]
let dataObj={color: "blue", name: "bob"}
let copyObj={...dataObj}
```

Also let pass arguments in a function:\
`someFunct(...dataObj)`

**Map**: Similar to objects, is a data structure with key - value form, but in map you can store in key any type of data, maps are iterables, objects not, you can get size of a map, in object you can't, also map has a few useful methods that objects don't have.

![maps in js](https://i.ytimg.com/vi/-HjvUAP2Zvg/maxresdefault.jpg)

**Destructuring**: Let unpack values from an array or object: e.g:

```
let [a,b]=[1,2,3,4,5];
console.log(a,b);
//1 2;

let objValue={name: "test", color: "black"};
const {name, color}=objValue;
console.log(name,color)
//test black`
```

**Closures**: Is a combination of a function and variables store it in a certain time e.g:

```
function creaSumador(x) {
  return function(y) {
    return x + y;
  };
}

var suma5 = creaSumador(5);
var suma10 = creaSumador(10);

console.log(suma5(2));  // muestra 7
console.log(suma10(2)); // muestra 12 
```

**This keyword**: Is an object, this object depends on where is called the function, e.g in js practice file.

**Prototype**: Is a characcteristic of objects (remember functions are objects), also is a mechanism to apply some sort of inheritance.


---

## Chapter 4

JS Pilars:

1.  Scope and closure
2.  Prototypes
3.  Types and Coercion


## Apendix A

-Primitive types assignment is by value, objects (arrays, objects and functions) assignment is by reference.

