// This project is dealing with different use cases of using the 'for in' and 'for of'
//iterating over the index values of an iterable like an array or a string.
let animals = [
  "chicken",
  "cow",
  "pig",
  "Raccoon",
  "sheep",
  "Bat",
  "Frog",
  "Kitten",
];
let names = [
  "sammy",
  "kyle",
  "peeter",
  "charles",
  "Pinky",
  "Rupert",
  "candace",
  "Chauncie",
];
for (let animal in animals) {
  //random name for an animal
  let nameIdx = Math.floor(Math.random() * names.length);
  let animalType = animals[Math.floor(Math.random() * animals.length)];

  console.log(`${names[nameIdx]} the ${animalType} a ${animal}`);
  //   console.log(`I also generated you a ${animalType}!`);
}
console.log("AAAAAANNNNNNDDDDDDDD");
let oldCar = {
  make: "Suburu",
  model: "Impreza",
  year: "2008",
};
for (let key in oldCar) {
  console.log(`${key} --> is  ${oldCar[key]}`);
}
