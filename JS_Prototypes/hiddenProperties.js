function greeting() {
  return {
    greet: "Hi there, welcome",
    cartoon() {
      console.log("MickeyMouse");
    },
  };
}
let person1 = greeting();
console.log(person1.greet.toUpperCase()); //HI THERE, WELCOME
console.log(person1.greet.__proto__.toUpperCase()); //We got nothing, just a blank line
console.log(person1.__proto__); //[Object: null prototype] {}
console.log(Object.getPrototypeOf(person1)); //[Object: null prototype] {}
person1.cartoon(); //MickeyMouse
delete person1.cartoon;
//person1.cartoon(); //TypeError: person1.cartoon is not a function
console.log(person1); //{ greet: 'Hi there, welcome' }
delete person1.greet.__proto__.toUpperCase;
//console.log(person1.greet.toUpperCase()); //TypeError: person1.greet.toUpperCase is not a function

let person2 = greeting();
console.log(person2.greet); //Hi there, welcome
//console.log(person2.greet.toUpperCase()); //TypeError: person2.greet.toUpperCase is not a function

let nameOF = "Hungry Grinder";
//console.log(nameOF.toUpperCase()); //TypeError: nameOF.toUpperCase is not a function

//console.log(Object.getPrototypeOf(null));//TypeError: Cannot convert undefined or null to object
//console.log(Object.getPrototypeOf(undefined)); //TypeError: Cannot convert undefined or null to object
console.log(Object.getPrototypeOf(Object)); //{}

console.log(Object.getPrototypeOf(String)); //{}
console.log(Object.getPrototypeOf("string")); //{}
console.log(Object.getPrototypeOf(Number)); //{}
console.log(Object.getPrototypeOf(9)); //{}
