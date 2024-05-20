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
console.log(str);
console.log(str.__proto__);
console.log(Object.getPrototypeOf(str));
