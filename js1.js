console.log("gdfgdfgf");
console.log("It will be a wonderfull day")

let myAge = 19;
console.log (myAge);

for (let i = 0; i < 5; i++) {
console.log (i);
}

const myArray = [1,2,3,4, "majom"];
for (const value of myArray) {
    console.log(value);
}

const animals = [
    { name: 'Mango', type: 'dog', age: 7 },
    { name: 'Berry', type: 'dog', age: 12 },
    { name: 'Mango', type: 'cat', age: 7 },
    { name: 'Cocoa', type: 'dog', age: 3 },
    { name: 'Lily', type: 'cat', age: 2 },
  ];
  
  for (const animal of animals) {
    if (animal.type === 'dog') {
      console.log(`${animal.name} is a dog`);
    } else if (animal.type === 'cat') {
      console.log(`${animal.name} is a cat`);
    } else {
      console.log(`${animal.name} is not a dog or a cat`);
    }
  }





