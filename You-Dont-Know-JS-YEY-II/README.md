# You Don’t Know JS Yet: Scope & Closures.

"When a function is defined, a
new scope is created. The positioning of scopes nested inside
one another creates a natural scope hierarchy throughout the
program, called the scope chain. The scope chain controls
variable access, directionally oriented upward and outward.
Each new scope offers a clean slate, a space to hold its own
set of variables. When a variable name is repeated at different
levels of the scope chain, shadowing occurs, which prevents
access to the outer variable from that point inward."

**Shadowing**: Use the same name to a variable in nested scopes:

```
function another() {
// ..
{
var special = "JavaScript";
{
let special = "JavaScript";
// ..
}
}
}
```

-Always use var for declaring global variables.

-All variables/functions defined in global scope can be accessed by window keyword in navigator enviroments or global for Node.

-In modules, although you define your variables/functions in a global scope, when you import that module in another file, those variables defined initial like global, are really not, their scope is called "module-global" and there are not accessible from windows object for example.

-Curiously, in Node every file is treated like modules, so although you define something in the "global scope" is not really there, you have to define through global keyword to define it there.

Like this: 

``global.someObject=5``

-Every new loop cycle is a new scope

-**Hoisting**: It means that in a figurative way, when you define a function or a variable with var, it goes up to the code, so you can use it or called no matter where you define it. For the specific case of var, the hoisting "moves" the declaration up, but, and this is important, the variable is set as undefined, the assignation is not set untilx runtime.

-**POLE (Principle of least exposure)**: Limit scope of variables and functions to avoid name collisions and other problems.

-**Closure**: Is a function that saves their outter scope in order to use variables that are out of his own scope.

-**Modules**:

export default: only can use it once, and when import it, it can be import it with any name

export: can be used as many times as you want, it must be imported with the same name that export it.








