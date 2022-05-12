"use strict"; //strict use
const name = "Johan";
console.log(`My name is: ${name}`); //interpolation

console.log(typeof 'Lorep ipsum');

var color = "blue";
function blockScopeTest() {
    var color = "red"; //var reassigned
    console.log(color);
}
blockScopeTest();
console.log(color);

var clima = {
    llover() {
        console.log('lluvia');
    },
    nevar: () => {
        console.log('nevando');
    }
}

clima.nevar();

const x = '10';
const y = '9';

console.log(x < y);