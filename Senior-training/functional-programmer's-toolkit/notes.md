## Combining things with Monoids

- **Definition**: Monoids are algebraic structures that help combine values of the same type in a functional way.

  ```javascript
  // Monoid for addition
  const sumMonoid = {
    empty: 0, // Identity element
    concat: (a, b) => a + b, // Combining operation
  };

  const numbers = [1, 2, 3, 4, 5];
  
  // Using reduce to combine values with the monoid
  const sum = numbers.reduce((acc, curr) => sumMonoid.concat(acc, curr), sumMonoid.empty);
  
  console.log(sum); // Output: 15
  ```

## Effects

- **Definition**: Effects are actions that produce observable results and are typically non-pure, like I/O operations or network requests. In functional programming, it's essential to manage and isolate effects.

  ```javascript
  // Asynchronous effect with a Promise
  const fetchData = async () => {
    try {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };
  ```

## Moving values between the "Option" and "Normal" worlds with "map"

- **Definition**: "Map" is a higher-order function used in functional programming to transition between the "Option" world (where values can be nullable or wrapped) and the "Normal" world (where values are plain and not wrapped). It allows you to apply a function to the wrapped value and return a new wrapped value or, in the case of Option types, gracefully handle potential null values.

  ```javascript
  // Mapping between the "Option" and "Normal" worlds
  const optionValue = Maybe.of(42); // Wrapping a value in the "Option" world
  const normalValue = optionValue.map((value) => value * 2); // Mapping to the "Normal" world
  //the idea is operate first in the option world and just at the end go to normal world

  ```

## Moving values between worlds with "return"

- **Definition**: "Return" or "pure" functions wrap a value in a container, making it compatible with the functional paradigm. For instance, in JavaScript, a plain value can be wrapped in a Promise.

- **Example in JavaScript**:
  ```javascript
  // Wrapping a value in a Promise
  const value = 42;
  
  // Creating a Promise that resolves to the value
  const promise = Promise.resolve(value);
  ```

## Chaining world-crossing functions with "bind"

- **Definition**: "Bind" (or "flatMap" in some languages) is used to chain functions that produce containerized values, allowing for sequential operations.

- **Example in JavaScript**:
  ```javascript
  // Chaining Promises with bind (then)
  const fetchUserData = (userId) => {
    return fetch(`https://api.example.com/user/${userId}`)
      .then((response) => response.json());
  };
  
  const functionA = (userData) => {
    // do something
  };

    const functionB = (userData) => {
    // do something else
  };

    const functionC = (userData) => {
    // do something else
  };
  
  // Chaining the promises
  fetchUserData(123)
    .then(functionA)
    .then(functionB)
    .then(functionC)
    .catch((error) => console.error('Error:', error));
  ```

## Combining effects in parallel with applicatives

- **Definition**: Applicatives allow you to execute multiple effects independently and combine their results. This is useful for scenarios like parallel API requests.

  ```javascript
  // Fetching data from two different sources in parallel
  const fetchData1 = fetch('https://api.example.com/data1').then((response) => response.json());
  const fetchData2 = fetch('https://api.example.com/data2').then((response) => response.json());

  // Using Promise.all to combine the results when both promises resolve
  Promise.all([fetchData1, fetchData2])
    .then(([data1, data2]) => {
      // Process both sets of data
      console.log(data1, data2);
    })
    .catch((error) => console.error('Error:', error));
  ```