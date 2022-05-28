import fetch from "node-fetch";
const urlSWApi = "https://swapi.dev/api";

const getData = async id => {
  const response = await fetch(`${urlSWApi}/people/${id}`);
  const data = await response.json();
  console.log(data.name);
};

getData(5);
