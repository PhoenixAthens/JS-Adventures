let parent = {
  surname: "deekin",
};
let child = {
  firstName: "Umar",
};
Object.setPrototypeOf(child, parent);
console.log(child.__proto__);
console.log(child.firstName);
console.log(child.surname);
child.surname = "Honas";
console.log(child.surname);
console.log(parent.surname);
for (const key in child) {
  if (Object.hasOwnProperty.call(child, key)) {
    const elem = child[key];
    console.log(elem);
  }
}
console.log(Object.keys(child));

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
