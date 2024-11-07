// 1 =>  Slightly Superior
// You will be given two extremely similar arrays, but exactly one of the items in an array will be valued slightly higher than its counterpart (which means that evaluating the value > the other value will return true).

// Create a function that returns whether the first array is slightly superior to that of the second.

function isFirstSuperior(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] > arr2[i]) {
            return true;
        } else if (arr1[i] < arr2[i]) {
            return false;
        }
    }
    return false;
}


// console.log(isFirstSuperior([1, 2, 4], [1, 2, 3])); //  true
// console.log(isFirstSuperior(["a", "d", "c"], ["a", "b", "c"])); //  true
// console.log(isFirstSuperior(["zebra", "ostrich", "whale"], ["ant", "ostrich", "whale"])); //  true
// console.log(isFirstSuperior([1, 2, 3, 4], [1, 2, 4, 4])); //  false
// console.log(isFirstSuperior([true, 10, "zebra"], [true, 10, "zebra"])); //  false


// 2 => Burglary Series (10): Calculate Difference
// The insurance guy calls again and apologizes. They found another policy made by your spouse, but this one is limited to cover a particular maximum in losses (for example, 50,000€). You send a bill to your spouse for the difference you lost.

// Given an object of the stolen items and a limit, return the difference between the total value of those items and the limit of the policy.

function calculateDifference(obj, limit) {
    let sum = 0;
    let keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        sum += obj[keys[i]];
    }

    return sum - limit
}

// console.log(calculateDifference({ "baseball bat": 20 }, 5));  // 15
// console.log(calculateDifference({ skate: 10, painting: 20 }, 19)); //  11
// console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400)); //  1

// 3 => Scrabble Hand
// Given an array of scrabble tiles, create a function that outputs the maximum possible score a player can achieve by summing up the total number of points for all the tiles in their hand. Each hand contains 7 scrabble tiles.

// Here's an example hand:

// [
//   { tile: "N", score: 1 },
//   { tile: "K", score: 5 },
//   { tile: "Z", score: 10 },
//   { tile: "X", score: 8 },
//   { tile: "D", score: 2 },
//   { tile: "A", score: 1 },
//   { tile: "E", score: 1 }
// ]
// The players maximumScore from playing all these tiles would be 1 + 5 + 10 + 8 + 2 + 1 + 1, or 28.

function maximumScore(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i].score;
    }
    return sum
}

// console.log(
//     maximumScore([
//         { tile: "N", score: 1 },
//         { tile: "K", score: 5 },
//         { tile: "Z", score: 10 },
//         { tile: "X", score: 8 },
//         { tile: "D", score: 2 },
//         { tile: "A", score: 1 },
//         { tile: "E", score: 1 }
//     ]));  // 28

// console.log(maximumScore([
//     { tile: "B", score: 2 },
//     { tile: "V", score: 4 },
//     { tile: "F", score: 4 },
//     { tile: "U", score: 1 },
//     { tile: "D", score: 2 },
//     { tile: "O", score: 1 },
//     { tile: "U", score: 1 }
// ])); ; // 15


// 4  => Printer Levels
// Given an object of how many more pages each ink color can print, output the maximum number of pages the printer can print before any of the colors run out.
function inkLevels(obj) {

    let minInkLevel = Math.min(...Object.values(obj));  // Find the minimum value in the object
    return minInkLevel;
}

// console.log(
//  inkLevels({
//   "cyan": 23,
//   "magenta": 12,
//   "yellow": 10
// })); // 10

// console.log(
//  inkLevels({
//   "cyan": 432,
//   "magenta": 543,
//   "yellow": 777
// })); // 432

// console.log(
//  inkLevels({
//   "cyan": 700,
//   "magenta": 700,
//   "yellow": 0
// })); // 0

// 5 =>  Burglary Series (04): Add its Name
// Given three arguments ⁠— an object obj of the stolen items, the pet's name and a value ⁠— return an object with that name and value in it (as key-value pairs).

function addName(obj, name, value) {
    obj[name] = value;
    return obj;

}

// console.log(addName({}, "Brutus", 300)); // { Brutus: 300 }
// console.log(addName({ piano: 500 }, "Brutus", 400)); // { piano: 500, Brutus: 400 }
// console.log(addName({ piano: 500, stereo: 300 }, "Caligula", 440)); // { piano: 500, stereo: 300, Caligula: 440 }


