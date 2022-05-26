import fetch from "node-fetch";

//Callbacks, are functions that are executed when some conditions happens. e.g:

//setTimeout(() => console.log("Here"), 2000); //the anonymous function with the log is a callback, it executed when two seconds have passed

//EventLoop explanaition: https://youtu.be/8aGhZQkoFbQ

//Promises:
//Represent the eventual completion or failure of an asynchronous task
//It can be created by us, or many times there are returned by some apis or methods.
//e.g

const promiseExample = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise answer"), 0);
});

promiseExample.then(response => console.log(`Line 18: ${response}`));

//fetch promise example
const urlSWApi = "https://swapi.dev/api/";
const searchCharacter = c => fetch(`${urlSWApi}/people/${c}`);
const dataCharacter = searchCharacter(1).then(data => data.json());
const characterName = dataCharacter.then(data => data.name);
const printCharacterName = async p =>
  console.log(`Line 25: ${await characterName}`);
printCharacterName(characterName);
