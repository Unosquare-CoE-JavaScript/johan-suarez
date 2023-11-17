# # A Skeptic's Guide to Functional Style Javascript - Jonathan Mills

 - Functional programming makes code clearer, better structured, and it **prevents many classes of errors.**
- In javascript you can't avoid all side effects, not all functions are gonna be pure, not everything has to be immutable, the point is to making things smaller, keep things simple.
- Pure function, it has to meet these two requirements:
	 - [x] Same result always for same input
	 - [x] Has no side effects
Example of **not** a pure function:

 ```
sum = 0;
function add(number) {
sum = sum + number
}
// It's doing something outside (mutating)
```

Why use it?
-

 1. Less complexity
 2. Easier to test
 3. Easier to understand

**SIMPLIFY THE PIECES**

### Benefits of immutability in JavaScript:

1.  **Predictability**: By not changing existing data, you avoid unexpected side effects in other parts of the program that might depend on that data.
    
2.  **State management simplicity**: Having immutable states makes it easier to reason about the data flow in your application. This is especially useful in reactive applications like those built with React.
    
3.  **State history**: By not directly modifying data, you can maintain a history of previous states, making features like undo and redo easier to implement.
    
4.  **Concurrency and parallelism**: Immutable data structures are safer to work with in concurrent environments since there's no risk of two operations modifying a piece of data at the same time.
    
5.  **Performance improvement**: Some optimizations, like reference comparison, can be done by knowing that the data hasn't changed. If the reference hasn't changed, the data hasn't either.
    

### Drawbacks of immutability in JavaScript:

1.  **Memory overhead**: Since you're creating copies of data rather than modifying them in place, you might end up using more memory. However, there are libraries, like Immutable.js, that use persistent data structures to mitigate this problem.
    
2.  **Initial complexity**: If you're used to working with mutable data, it might take some time to adapt to immutable thinking and using operations that return new copies.
    
3.  **Performance**: At times, creating copies of large data structures can be less efficient than simply modifying the original data. However, in most modern web applications, the impact is usually minimal.
    
4.  **Integration with JS libraries and tools**: Not all libraries and tools in the JavaScript ecosystem are designed to work with immutable data, so it might require additional work to integrate them.