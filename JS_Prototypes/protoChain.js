let user = {
  admin: false,
};
let verifiedMember = {
  verified: true,
  intoduceSelf: function () {
    if (this.verified) {
      console.log("Yup, I am verified!");
    } else {
      console.log("No, I am not verified!");
    }
  },
};
let doctor = Object.create(verifiedMember, {
  name: {
    value: "clyde",
  },
});
Object.setPrototypeOf(verifiedMember, user);
for (let prop in doctor) {
  console.log(prop);
}
// verified
// intoduceSelf
// admin

//if we run the same code in browser
//output:
// verified
// intoduceSelf
// admin

//One might wonder, why are we not getting `name` property in the output of the for..in loop
//See README.md

let doctor_2 = {
  name: "willIam",
};
Object.setPrototypeOf(doctor_2, verifiedMember);
for (let prop in doctor_2) {
  console.log(prop);
}
// name
// verified
// intoduceSelf
// admin

console.log(Object.keys(doctor));
console.log(Object.getOwnPropertyNames(doctor));
//[]
//[ 'name' ]

console.log("=".repeat(40));
let doctor_3 = Object.create(verifiedMember, {
  name: {
    value: "Kungfu",
    enumerable: true,
  },
  age: {
    value: 21,
    enumerable: false,
  },
});
for (const propName in doctor_3) {
  console.log(propName);
}
// name
// verified
// intoduceSelf
// admin
console.log(Object.keys(doctor_3)); // [ 'name' ]
console.log(Object.getOwnPropertyNames(doctor_3)); // [ 'name', 'age' ]

Object.defineProperty(doctor, "salary", {
  value: 232_000,
  enumerable: true,
});
for (let prop in doctor) {
  console.log(prop);
}
// <if enumerable on `salary` is set to false>, OUTPUT:
// verified
// intoduceSelf
// admin

// <if enumerable on `salary` is set to true>, OUTPUT:
// salary
// verified
// intoduceSelf
// admin
