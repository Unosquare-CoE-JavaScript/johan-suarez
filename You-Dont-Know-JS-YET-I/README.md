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
`function someOperations() {`\
`// whitespace and comments are fine here`\
`"use strict";`\
`// all this code will run in strict mode`\
`}`

Also, by default all content in a module is set in strict mode.


