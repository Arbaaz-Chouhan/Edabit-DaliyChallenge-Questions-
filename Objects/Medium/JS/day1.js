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


// 12 => Burglary Series (08): Remove an Entry
// Your spouse tells you that one of the items on the list wasn't stolen, it is in your castle in Transilvania. Given an object of the stolen items and an item name, return a copy without that item on the list.

function removeEntry(obj, item) {
    let res = {};
    let keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        if (keys[i] !== item) {
            res[keys[i]] = obj[keys[i]]

        }
    }
    return res
}

// console.log(removeEntry({ piano: 300, tv: 100, skate: 50 }, "skate")); // { piano: 300, tv: 100 }
// console.log(removeEntry({ mirror: 500, painting: 1 }, "mirror")); // { painting: 1 }



// 13 => How Good is Your Name?
// Create a function that takes a string of name and checks how much good is the given name. A preloaded dictionary of alphabet scores is available in the Code tab. Add up the letters of your name to get the total score.

// Return your result as per the following rules:
// const scores = {
//     "A": 100, "B": 14, "C": 9, "D": 28, "E": 145, "F": 12, "G": 3,
//     "H": 10, "I": 200, "J": 100, "K": 114, "L": 100, "M": 25,
//     "N": 450, "O": 80, "P": 2, "Q": 12, "R": 400, "S": 113,
//     "T": 405, "U": 11, "V": 10, "W": 10, "X": 3, "Y": 210, "Z": 23
// }

// score <= 60:   "NOT TOO GOOD"

// 61 <= score <= 300:  "PRETTY GOOD"

// 301 <= score <= 599:  "VERY GOOD"
// score >= 600:  "THE BEST"

function nameScore(str) {

    let sumscore = 0;
    const scores = {
        "A": 100, "B": 14, "C": 9, "D": 28, "E": 145, "F": 12, "G": 3,
        "H": 10, "I": 200, "J": 100, "K": 114, "L": 100, "M": 25,
        "N": 450, "O": 80, "P": 2, "Q": 12, "R": 400, "S": 113,
        "T": 405, "U": 11, "V": 10, "W": 10, "X": 3, "Y": 210, "Z": 23
    }

    for (let i = 0; i < str.length; i++) {
        let letter = str[i].toUpperCase();


        if (scores[letter]) {
            sumscore += scores[letter];
        }
    }


    if (sumscore <= 60) {
        return "NOT TOO GOOD";
    } else if (sumscore >= 61 && sumscore <= 300) {
        return "PRETTY GOOD";
    } else if (sumscore >= 301 && sumscore <= 599) {
        return "VERY GOOD";
    } else if (sumscore >= 600) {
        return "THE BEST";
    }
}


// console.log(nameScore("MUBASHIR")); // "THE BEST"
// console.log(nameScore("YOU")); // "VERY GOOD"
// console.log(nameScore("MATT")); // "THE BEST"
// console.log(nameScore("PUBG")); // "NOT TOO GOOD"


//  14 => ES6: Destructuring Objects VI
// function shirtSize({size = "big"}) {
//     return size
//   }

//   shirtSize()  // error: Cannot destructure property "size" of "undefined" or "null"
//   The preceding code produces an error because no object was passed to the function. Fix the function to return the default size, even if nothing is passed to the function. Don't remove the {size = "big"} object in the parameter and don't change the return statement.



function shirtSize(size = "big") {
    return size
}

// console.log(shirtSize());  // "big"


// 15 => Burglary Series (02): Most Valuable Item
// You call your spouse to inform his/her most precious item is gone! Given an object of stolen items, return the most expensive item on the list.

function mostExpensiveItem(obj) {
    let keys = Object.keys(obj);
    let maxPrice = -Infinity;
    let mostExpensive = '';

    for (let i = 0; i < keys.length; i++) {
        let currentPrice = obj[keys[i]];


        if (currentPrice > maxPrice) {
            maxPrice = currentPrice;
            mostExpensive = keys[i];
        }
    }

    return mostExpensive;
}


// console.log(mostExpensiveItem({
//     piano: 2000,
// })); // "piano"

// console.log(mostExpensiveItem({
//     tv: 30,
//     skate: 20,
// })); // "tv"

// console.log(mostExpensiveItem({
//     tv: 30,
//     skate: 20,
//     stereo: 50,
// })); // "stereo"



// 16 => Burglary Series (06): Convert to Number
// You prepare a list to send to the insurance company. As you finish, you notice you misformatted it. Given an object with at least one key/value pair, convert all the values to numbers.

function convertToNumber(obj) {
    let res = {};
    let keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        // res[keys[i]] = parseInt(obj[keys[i]]);
        res[keys[i]] = Number(obj[keys[i]]);
    }
    return res
}

// console.log(convertToNumber({ piano: "200" })); // { piano: 200 }
// console.log(convertToNumber({ piano: "200", tv: "300" })); // { piano: 200, tv: 300 }
// console.log(convertToNumber({ piano: "200", tv: "300", stereo: "400" })); // { piano: 200, tv: 300, stereo: 400 }


// 17 => Edabit Experience Points
// As you complete questions on Edabit, you gain experience points depending on the difficulty of the question. The points for each difficulty are as follows:

// Difficulty	Experience Points
// Very Easy	5XP
// Easy	10XP
// Medium	20XP
// Hard	40XP
// Very Hard	80XP
// Given an object of how many questions a person has completed of each difficulty, return how many experience points they'll have.

function getXP(obj) {

    let sumxp = 0;
    const experiencePoint = {
        "Very Easy": 5,
        "Easy": 10,
        "Medium": 20,
        "Hard": 40,
        "Very Hard": 80
    };


    let keys = Object.keys(obj);

    for (let i = 0; i < keys.length; i++) {
        sumxp += obj[keys[i]] * experiencePoint[keys[i]];
    }

    return sumxp + "XP"
}

// console.log(
//     getXP({
//         "Very Easy": 89,
//         "Easy": 77,
//         "Medium": 30,
//         "Hard": 4,
//         "Very Hard": 1
//     })); // "2055XP"


// console.log(
//     getXP({
//         "Very Easy": 254,
//         "Easy": 32,
//         "Medium": 65,
//         "Hard": 51,
//         "Very Hard": 34
//     })); // "7650XP"


// console.log(
//     getXP({
//         "Very Easy": 11,
//         "Easy": 0,
//         "Medium": 2,
//         "Hard": 0,
//         "Very Hard": 27
//     })); // "2255XP"


// 18 => Invert Keys and Values
// Write a function that inverts the keys and values of an object.

function invert(obj) {
    let res = {};
    let keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        let currentKeys = keys[i]
        res[obj[currentKeys]] = currentKeys;
    }
    return res
}

// console.log(invert({ "z": "q", "w": "f" })); // { "q": "z", "f": "w" }
// console.log(invert({ "a": 1, "b": 2, "c": 3 })); // { 1: "a", 2: "b", 3: "c" }
// console.log(invert({ "zebra": "koala", "horse": "camel" })); // { "koala": "zebra", "camel": "horse" }


//  19 => Expensive Orders
// Write a function that has two parameters: orders and cost. Return any orders that are greater than the cost.

function expensiveOrders(order, cost) {
    let res = {};
    let keys = Object.keys(order);
    for (let i = 0; i < keys.length; i++) {
        let currentKeys = keys[i];
        let currentValues = order[currentKeys];

        if (currentValues > cost) {
            res[currentKeys] = currentValues;
        }
    }

    return res
}

// console.log(expensiveOrders({ "a": 3000, "b": 200, "c": 1050 }, 1000)); // { "a": 3000, "c": 1050 }
// console.log(expensiveOrders({ "Gucci Fur": 24600, "Teak Dining Table": 3200, "Louis Vutton Bag": 5550, "Dolce Gabana Heels": 4000 }, 20000)); // { "Gucci Fur": 24600 }
// console.log(expensiveOrders({ "Deluxe Burger": 35, "Icecream Shake": 4, "Fries": 5 }, 40)); // {}


// 20 => Count the Letters and Digits
// Write a function that takes a string and calculates the number of letters and digits within it. Return the result as an object.

function countAll(str) {
    let lengthCount = 0
    let digitsCount = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= '0' && str[i] <= '9') {
            digitsCount++;
        } else {
            // Otherwise, consider it a letter
            lengthCount++;
        }

    }
    return { LETTERS: lengthCount, DISGITS: digitsCount }
}

// console.log(countAll("Hello World")); // { "LETTERS":  10, "DIGITS": 0 }
// console.log(countAll("H3ll0 Wor1d")); // { "LETTERS":  7, "DIGITS": 3 }
// console.log(countAll("149990")); // { "LETTERS": 0, "DIGITS": 6 }


// 21 => ES6: Destructuring Objects IX
// Given an array of user objects. If we just wanted to get the name of the third object in the array, one way could be to use an array method like:
const user = [
    { name: "John", email: "john@example.com" },
    { name: "Jason", email: "jason@example.com" },
    { name: "Jeremy", email: "jeremy@example.com" },
    { name: "Jacob", email: "jacob@example.com" }
]

let thirdUser = users[2].name;
// console.log(thirdUser)   // "Jeremy"


//   However, you can combine array and Object destructuring to extract it more declaratively. Use array and object destructuring to extract the name from the third object in the users array and assign it to the variable thirdUser. Provide the solution inside the brackets only. Ignore the .toString() function (used for validation).



//22 => Shopping for Memorial Day!
// Create a function that takes an array of objects and calculate the total based on the quantity of items purchased. Apply a 6% sales tax for each item when appropriate.

function checkout(items) {
    let total = 0;

    for (let item of items) {
        let itemTotal = item.prc * item.qty;
        if (item.taxable) {
            itemTotal += itemTotal * 0.06; // Apply 6% tax
        }

        total += itemTotal;
    }

    return total.toFixed(2);
}

// console.log(checkout([
//     { desc: "potato chips", prc: 2, qty: 2, taxable: false },
//     { desc: "soda", prc: 3, qty: 2, taxable: false },
//     { desc: "paper plates", prc: 5, qty: 1, taxable: true }
// ])); //); // 15.30



// 23 => International Greetings
// Suppose you have a guest list of students and the country they are from, stored as key-value pairs in an object.

// const GUEST_LIST = {
//   Randy: "Germany",
//   Karla: "France",
//   Wendy: "Japan",
//   Norman: "England",
//   Sam: "Argentina"
// }
// Write a function that takes in a name and returns a name tag, that should read:

// "Hi! I'm [name], and I'm from [country]."
// If the name is not in the object, return:

// "Hi! I'm a guest."


function greeting(str) {
    const GUEST_LIST = {
        Randy: "Germany",
        Karla: "France",
        Wendy: "Japan",
        Norman: "England",
        Sam: "Argentina"
    }


    let country = GUEST_LIST[str];
    if (country) {
        return `Hi! I'm ${str}, and I'm from ${country}.`
    }

    return `Hi! I'm a guest`


}

console.log(greeting("Randy")); // "Hi! I'm Randy, and I'm from Germany."
console.log(greeting("Sam")); // "Hi! I'm Sam, and I'm from Argentina."
console.log(greeting("Monti")); // "Hi! I'm a guest.

