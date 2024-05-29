**Context:[`protoChain.js`](add-link-here)**<br>
`Q1:` In the following code
```js
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
```
why doesn't the output of for..in loop include `name` as a property of the `doctor` object

`A:` The reason why the `for-in` loop does not print `name` as a property of `doctor` is because `name` is not an enumerable property of the `doctor` object.

In the line,
```js
let doctor = Object.create(verifiedMember, {
  name: {
    value: "clyde",
  },
});
```
the `Object.create()` method is used to create a new object `doctor` with `verifiedMember` as its prototype. The second argument `{name: {value: "clyde"}}` is a property descriptor object that defines a non-enumerable property `name` with the value `"clyde"`.

By default, properties created using object literal notation `({name:"clyde"})` are enumerable, but properties defined using property decriptors `({name:{value:"clyde"}})` are non-enumerable unless the `enumerable` property in the descriptor is set to `true`.

The `for-in` loop iteratres over the enumerable properties of an object, including those inherited from the prototype chain. Since `name` is a non-enumerable property of `doctor`, it is not included in the loop.

To make the `name` property enumerable, you can modify the property descriptor as follows:
```js
let doctor = Object.create(verifiedMember, {
  name: {
    value: "clyde",
    enumerable: true //Make the property enumerable
  }
});
```
Now, the `for-in` loop will include the `name` property when iterating over the `doctor` object.

Alternatively, you can use the `Object.keys()` method to get an array of all enumerable properties (including non-enumerable properites if you pass `Object.getOwnPropertyNames(doctor)` instead) of the `Object.getPropertyNames()` method to get an array of all properties (enumerable and non-enumerable) of the `doctor` object itself (excluding inherited properties).

---
