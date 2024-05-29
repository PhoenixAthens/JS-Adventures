let verifiedMember = {
  verifiedFlag: false,
};
let doctor = {
  name: "House",
  profession: "DDX",
};
console.log(doctor);
console.log(verifiedMember);
console.log(Object.getPrototypeOf(doctor));
console.log(Object.getPrototypeOf(verifiedMember));
// { name: 'House', profession: 'DDX' }
// { verifiedFlag: false }
// [Object: null prototype] {}
// [Object: null prototype] {}

//setting prototype - apr1
doctor.__proto__ = verifiedMember;
console.log(doctor);
console.log(Object.getPrototypeOf(doctor));
//{ name: 'House', profession: 'DDX' }
//{ verifiedFlag: false }
console.log(doctor.verifiedFlag); //false

//setting prototype - apr2
Object.setPrototypeOf(doctor, verifiedMember);
console.log(doctor);
console.log(Object.getPrototypeOf(doctor));
//{ name: 'House', profession: 'DDX' }
//{ verifiedFlag: false }
console.log(doctor.verifiedFlag); //false

let str = new String("JukeBox");
console.log(str);
console.log(str.__proto__);
console.log(Object.getPrototypeOf(str));
// [String: 'JukeBox']
// {}
// {}

str.age = 89;
console.log(str); //[String: 'JukeBox'] { age: 89 }
console.log(str.__proto__);
console.log(Object.getPrototypeOf(str));
// {}
// {}

//Another way to set prototype for an object
let objectCreate = Object.create(verifiedMember, {
  name: {
    value: "Dr. Hourani",
  },
});
console.log(objectCreate);
console.log(objectCreate.__proto__);
console.log(Object.getPrototypeOf(objectCreate));
// {}
// { verifiedFlag: false }
// { verifiedFlag: false }

console.log(objectCreate.name + " " + objectCreate.verifiedFlag);
console.log(objectCreate.__proto__);
console.log(Object.getPrototypeOf(objectCreate));
// Dr. Hourani false
// { verifiedFlag: false }
// { verifiedFlag: false }
