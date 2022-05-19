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

``global.someObject=5``






