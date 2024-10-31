// 8 => Return Sole Element in a Set
// Given a set containing an element, return the sole element.

function elementSet(set) {
    return [...set.values()][0]; // Convert the set to an array and return the first element
}

// Example usage
const first = new Set();
first.add(1);
// console.log(elementSet(first)); // 1

// const second = new Set();
// second.add("apple");
// console.log(elementSet(second)); // "apple"

// const third = new Set();
// third.add(false);
// console.log(elementSet(third)); // false


// 9 Burglary Series (11): Say What
// The insurance guy calls again. Apparently, they were informed by your spouse that some items were not stolen at all and you failed to mention this detail to them. This is a fraud attempt! You freeze and mumble something unintelligible. Find out what you said.

// Given an object, return a string that concatenates all the values and adds the 2nd key at the end. Make sure you keep an empty space between them but not at the beginning or end of the string. Look at the examples for a clearer picture.

function sayWhat(obj) {
    let values = Object.values(obj);
    return valuess.join(" ") + " " + values[1]
}

// console.log(sayWhat({ 1: "Mommy", 2: "please", 3: "help" })); // "Mommy please help please"
// console.log(sayWhat({ 1: "Me", 2: "innocent", 3: "is" })); // "Me innocent is innocent"
// console.log(sayWhat({ 1: "Must", 2: "lawyer", 3: "call" })); // "Must lawyer call lawyer"


// 10 => Find the Bug: Returning Valid Units of Measure
// There has been a masterdata issue which affected the unit of measure of the products. All values need to be checked if they are valid. The unit of measure is valid when it is either "L" (liters), "PCE" (pieces) OR when the product has a comment.

// The return value should be a Boolean.

function hasValidUnitOfMeasure(obj) {
    let values = Object.values(obj);

    if (values[values.length - 1] === "") {
        return false
    }
    if (values[values.length - 1] === "L") {
        return true
    }
    return false
}


// console.log(hasValidUnitOfMeasure({ "product": "Milk", unitOfMeasure: "L" })); // true
// console.log(hasValidUnitOfMeasure({ "product": "Cereals", unitOfMeasure: "" })); // false
// console.log(hasValidUnitOfMeasure({ "product": "Beer", unitOfMeasure: false })); // false
// console.log(hasValidUnitOfMeasure({ "product": "Beef", unitOfMeasure: "Cow" })); // false


// 11 => Does the Object Contain a Given Key?
// Write a function that returns true if a hash contains the specified key, and false otherwise.

function hasKey(obj, key) {
    let keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        if (keys[i] === key) {
            return true
        }
    }
    return false

}

// console.log(hasKey({ a: 44, b: 45, c: 46 }, "d")); // false
// console.log(hasKey({ craves: true, midnight: true, snack: true }, "morning")); // false
// console.log(hasKey({ pot: 1, tot: 2, not: 3 }, "not")); // true