// 1 => Converting Objects to Arrays
// Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.

function toArray(obj) {
    return Object.entries(obj)
}

// console.log(toArray({ a: 1, b: 2 })); // [["a", 1], ["b", 2]]
// console.log(toArray({ shrimp: 15, tots: 12 })); // [["shrimp", 15], ["tots", 12]]
// console.log(toArray({})); // []


// 2 => Return the Objects Keys and Values
// Create a function that takes an object and returns the keys and values as separate arrays. Return the keys sorted alphabetically, and their corresponding values in the same order.

function keysAndValues(obj) {
    let res = [];
    let keys = Object.keys(obj);

    let values = keys.map(key => obj[key]);
    return [keys, values];
}


function keysAndValues(obj) {
    let key = [];
    let values = [];
    let keys = Object.keys(obj);

    for (let i = 0; i < keys.length; i++) {
        let currentKeys = keys[i];
        let currentValues = obj[keys[i]];

        key.push(currentKeys);
        values.push(currentValues);
    }

    return [keys, values];
}

// console.log(keysAndValues({ a: 1, b: 2, c: 3 })); // [["a", "b", "c"], [1, 2, 3]]
// console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })); // [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]
// console.log(keysAndValues({ key1: true, key2: false, key3: undefined })); // [["key1", "key2", "key3"], [true, false, undefined]]

// 3 => Convert Key, Values in an Object to Array
// Write a function that converts an object into an array of keys and values.

function objectToArray(obj) {
    return Object.entries(obj)
}

function objectToArray(obj) {
    let res = [];
    Object.keys(obj).forEach(key => {
        res.push(key, obj[key])
    })

    return res
}
// console.log(
//  objectToArray({
//   D: 1,
//   B: 2,
//   C: 3
// })); // [["D", 1], ["B", 2], ["C", 3]]

// console.log(
//  objectToArray({
//   likes: 2,
//   dislikes: 3,
//   followers: 10
// })); // [["likes", 2], ["dislikes", 3], ["followers", 10]]

// 4 =>   Get Sum of People's Budget
// Create the function that takes an array with objects and returns the sum of people's budgets.

function getBudgets(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i].budget;
    }

    return sum
}

// console.log(getBudgets([
//     { name: "John", age: 21, budget: 23000 },
//     { name: "Steve", age: 32, budget: 40000 },
//     { name: "Martin", age: 16, budget: 2700 }
// ])); // 65700

// console.log(getBudgets([
//     { name: "John", age: 21, budget: 29000 },
//     { name: "Steve", age: 32, budget: 32000 },
//     { name: "Martin", age: 16, budget: 1600 }
// ])); // 62600

// 5 => ES6: Destructuring Objects IV
const obj = { first: "James", last: "Baker", alias: "JB" }

var { first = "John", last = "Doe", alias: nickname = "JD" } = obj

// console.log(nickname) // outputs nickname is not defined
// There may be times where we would like the property name to be different from the object property names we receive and also give those new property names a default value.

// Question
// Use ES6 object destructuring to rename the variable alias to nickname and give nickname a default value of "JD". Ignore the .toString() function (used for validation).


// 6 => Online Shopping
// Create a function that determines whether a shopping order is eligible for free shipping. An order is eligible for free shipping if the total cost of items purchased exceeds $50.00.

function freeShipping(obj) {
    let sum = 0;
    let keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        sum += obj[keys[i]];
        if (sum > 50.00) {
            return true
        }
    }

    return false
}

// console.log(freeShipping({ "Shampoo": 5.99, "Rubber Ducks": 15.99 })); // false
// console.log(freeShipping({ "Flatscreen TV": 399.99 })); // true
// console.log(freeShipping({ "Monopoly": 11.99, "Secret Hitler": 35.99, "Bananagrams": 13.99 })); // true

// 7 => Lowercase and Uppercase Map
// Write a function that creates an object with each (key, value) pair being the (lower case, upper case) versions of a letter, respectively.

function mapping(arr) {
    let res = {};
    arr.forEach(key => {
        res[key] = key.toUpperCase();
    })
    return res
}



// console.log(mapping(["p", "s"])); // { "p": "P", "s": "S" }
// console.log(mapping(["a", "b", "c"])); // { "a": "A", "b": "B", "c": "C" }
// console.log(mapping(["a", "v", "y", "z"])); // { "a": "A", "v": "V", "y": "Y", "z": "Z" }


// 7 => ES6: Destructuring Objects X
// Given an array of user objects.

let names = []

let users = [
    { name: "John", email: "john@example.com" },
    { name: "Jason", email: "jason@example.com" },
    { name: "Jeremy", email: "jeremy@example.com" },
    { name: "Jacob", email: "jacob@example.com" }
]

for (let i = 0; i < users.length; i++) {
    names.push(users[i].name);
}

// console.log(names);

// should log ["John", "Jason", "Jeremy", "Jacob"]
// Push the first names of all users in the names array.

// 8 => Distance Between Two Points
// In this challenge, you have to find the distance between two points placed on a Cartesian plane. Knowing the coordinates of both the points, you have to apply the Pythagorean theorem to find the distance between them.

// Two points on a Cartesian plane

// Given two object literals a and b being the two points coordinates (x and y), implement a function that returns the distance between the points, rounded to the nearest thousandth.


function getDistance(a, b) {
    const xDiff = b.x - a.x;
    const yDiff = b.y - a.y;
    // Apply the Pythagorean theorem
    let distance = Math.sqrt(xDiff * xDiff + yDiff * yDiff);
    // Round the distance to the nearest thousandth 
    return Math.round(distance * 1000) / 1000;
}

// console.log(getDistance({ x: -2, y: 1 }, { x: 4, y: 3 })); //); // 6.325
// console.log(getDistance({ x: 0, y: 0 }, { x: 1, y: 1 }));   //); // 1.414
// console.log(getDistance({ x: 10, y: -5 }, { x: 8, y: 16 })); //); // 21.095

// 9 => 
class Name {
    constructor(fname, lname, fullNaem) {
        this.fname = fname.charAt(0).toUpperCase() + fname.slice(1).toLowerCase();  // Capitalizing the first letter and making the rest lowercase
        this.lname = lname.charAt(0).toUpperCase() + lname.slice(1).toLowerCase();  // Capitalizing the first letter and making the rest lowercase
    }

    get fullname() {
        return `${this.fname} ${this.lname}`;
    }

    get initials() {
        return `${this.fname.charAt(0)}.${this.lname.charAt(0)}`;
    }
}

let a1 = new Name("John", "Smith")

// console.log(a1.fname);     //); // "John"
// console.log(a1.lname);     //); // "Smith"
// console.log(a1.fullname);  //); // "John Smith"
// console.log(a1.initials);  //); // "J.S"


// 10 => Ageing the Population...
// Given an object of people and their ages, return how old the people would be after n years have passed. Use the absolute value of n.

function afterNYears(obj, n) {
    let res = {};
    Object.keys(obj).forEach(key => {
        res[key] = obj[key] + n
    })

    return res
}
// }

// console.log(
//     afterNYears({
//         "Joel": 32,
//         "Fred": 44,
//         "Reginald": 65,
//         "Susan": 33,
//         "Julian": 13
//     }, 1)); // {
// //   "Joel" : 33,
// //   "Fred" : 45,
// //   "Reginald" : 66,
// //   "Susan" : 34,
// //   "Julian" : 14
// // }

// console.log(
//     afterNYears({
//         "Baby": 2,
//         "Child": 8,
//         "Teenager": 15,
//         "Adult": 25,
//         "Elderly": 71
//     }, 19)); // {
// //   "Baby" : 21,
// //   "Child" : 27,
// //   "Teenager" : 34,
// //   "Adult" : 44,
// //   "Elderly" : 90
// // }

// console.log(
//     afterNYears({
//         "Genie": 1000,
//         "Joe": 40
//     }, 5)); // {
// //   "Genie" : 1005,
// //   "Joe" : 45
// // }


// 11 => Check If objOne Is Equal to objTwo
// Create a function that checks to see if two object arguments are equal to one another.Return true if the objects are equal, otherwise, return false.

function isEqual(obj1, obj2) {
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let i = 0; i < keys1.length; i++) {
        let key = keys1[i];
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }

    return true;
}

// console.log(isEqual({ name: "Benny", phone: "3325558745", email: "benny@edabit.com" }, { name: "Jason", phone: "9853759720", email: "jason@edabit.com" })); // false
// console.log(isEqual({ name: "Jason", phone: "9853759720", email: "jason@edabit.com" }, { name: "Jason", phone: "9853759720", email: "jason@edabit.com" }));// true