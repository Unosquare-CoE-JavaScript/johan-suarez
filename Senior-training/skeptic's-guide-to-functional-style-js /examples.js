 // regular programming
 let numbers = [1,2,3,4,5,6,7,8,9,12,15,19]
 let evenNumbers = [];
 for(let i=0;i<numbers.length;i++){
 if(numbers[i]%2===0) {
  evenNumbers.push(numbers[i]);
 }
 }
 console.log(evenNumbers);


 // functional programming

  let numbers2 = [1,2,3,4,5,6,7,8,9,12,15,19]
  let isEven = number => number%2===0;
  let evenNumbers2 = numbers2.filter(isEven); // more readable, simpler
  console.log(evenNumbers2);

  // currying
  let multiplyByNumber = number => number2 => number * number2;
  let multiplyBy10 = multiplyByNumber(10);
  console.log(multiplyBy10(5)); 
