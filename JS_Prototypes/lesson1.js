let me = "James";
let array = [1, 2, 34, 9, 8];
let parent = {
  surname: "deekin",
};
let child = {
  firstName: "Umar",
};
Object.setPrototypeOf(child, parent);
console.log(child.__proto__); //{ surname: 'deekin' }
console.log(child.firstName); //Umar
console.log(child.surname); //deekin
child.surname = "Honas";
console.log(child.surname); //Honas
console.log(parent.surname); //deekin
for (const key in child) {
  if (Object.hasOwnProperty.call(child, key)) {
    const elem = child[key]; //we call properties like so because key is of type string
    console.log(elem);
  }
}
// Umar
// Honas
console.log(Object.keys(child)); //[ 'firstName', 'surname' ]

function hello(a, b) {
  console.log(this.surname);
  console.log(`a is ${a}, b is ${b}`);
}
hello.apply(child, [23, 45]);
//OUTPUT:
// Honas
// a is 23, b is 45
let nameTemp = "String";
console.log(Object.getPrototypeOf(nameTemp)); //{}
let nameTemp_2 = new String("String");
console.log(nameTemp_2); //[String: 'String']
console.log(Object.getPrototypeOf(nameTemp_2));

for (const item in child) {
  console.log(item);
}
// firstName
// surname

console.log(Object.keys(child)); //
