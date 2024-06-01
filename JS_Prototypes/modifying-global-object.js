let doctor = {};
Object.defineProperty(doctor, "name", {
  value: "Travis",
  enumerable: true,
});

//but the above approach is tad cumbersome
//let's do things rambo style

console.log(Object.prototype); //[Object: null prototype] {}

Object.prototype.add = function (propName, propValue, isEnumerable) {
  Object.defineProperty(this, propName, {
    value: propValue,
    enumerable: isEnumerable,
  });
};

doctor.add("secret-Salary", "234_000", true);
doctor.add("age", 78, false);

for (let props in doctor) {
  console.log(props);
}
//name
//secret-Salary
//add

console.log(doctor);
// { name: 'Travis', 'secret-Salary': '234_000' }

console.log(Object.keys(doctor)); //[ 'name', 'secret-Salary' ]

console.log(Object.getOwnPropertyNames(doctor)); //[ 'name', 'secret-Salary', 'age' ]
