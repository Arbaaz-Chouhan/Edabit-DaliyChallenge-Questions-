// 1 Is the String a Palindrome?
// A palindrome is a word that is identical forward and backwards.

// mom
// racecar
// kayak
// Given a word, create a function that checks whether it is a palindrome.

function checkPalindrome(str) {

    arr = ["mom", "racecar", "kayak"]
    return arr.includes(str);

}
// console.log(checkPalindrome("mom"));// ➞ true
// console.log(checkPalindrome("scary"));// ➞ false
// console.log(checkPalindrome("reviver"));// ➞ true
// console.log(checkPalindrome("stressed"));// ➞ false

//2 Additive Inverse
// A number added with its additive inverse equals zero. Create a function that returns an array of additive inverses.

function additiveInverse(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (+arr[i]) {
            res.push(-arr[i])
        } else if (-arr[i]) {
            res.push(+arr[i])
        }
    }
    return res
}
// console.log(additiveInverse([5, -7, 8, 3]) ); //➞ [-5, 7, -8, -3]
// console.log(additiveInverse([1, 1, 1, 1, 1]) ); //➞ [-1, -1, -1, -1, -1]
// console.log(additiveInverse([-5, -25, 35])); // ➞ [5, 25, -35]


// 3 Odd Up, Even Down
// Create a function that goes through the array, incrementing (+1) for each odd-valued number and decrementing (-1) for each even-valued number.

function transform(arr) {
    let res = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            res.push(arr[i] - 1)
        } else if (arr[i] % 2 !== 0) {
            res.push(arr[i] + 1)
        }

    }
    return res
}
// console.log(transform([1, 2, 3, 4, 5]));// ➞ [2, 1, 4, 3, 6]
// console.log(transform([3, 3, 4, 3]));// ➞ [4, 4, 3, 4]
// console.log(transform([2, 2, 0, 8, 10]));// ➞ [1, 1, -1, 7, 9]

// 4 Array from Comma-Delimited String
// Write a function that turns a comma-delimited list into an array of strings.

function toArray(str){

    let words = str.split(" ");
    if(words == ""){
        return []
    }
    for (let i = 0; i < words.length; i++) {

        return words;
    }
};

// console.log(toArray("watermelon, raspberry, orange"));
// //➞ ["watermelon", "raspberry", "orange"]

// console.log(toArray("x1, x2, x3, x4, x5"));
// //➞ ["x1", "x2", "x3", "x4", "x5"]

// console.log(toArray("a, b, c, d"));
// //➞ ["a", "b", "c", "d"]

// console.log(toArray(""));
// ➞ []


//5 State Names and Abbreviations
// Createunction that filters out an array of state names into two categories based on the second parameter.
//  a f
// Abbreviations abb
// Full names full

function filterStateNames(arr, type) {
    let res = [];

    const abb = "abb";
    const full = "full"

    for (let i = 0; i < arr.length; i++) {
        if (type === abb && arr[i].length === 2) {
            res.push(arr[i])
        } else if (type === full && arr[i].length > 2) {
            res.push(arr[i])
        }

    }


    return res
}
// console.log(filterStateNames(["Arizona", "CA", "NY", "Nevada"], "abb"));
// //➞ ["CA", "NY"]
// console.log(filterStateNames(["Arizona", "CA", "NY", "Nevada"], "full"));
// //➞ ["Arizona", "Nevada"]

// console.log(filterStateNames(["MT", "NJ", "TX", "ID", "IL"], "abb"));
// //➞ ["MT", "NJ", "TX", "ID", "IL"]

// console.log(filterStateNames(["MT", "NJ", "TX", "ID", "IL"], "full"));
//➞ []


// 6 Edaaaaabit
// Write a function that takes an integer and returns a string with the given number of "a"s in Edabit.

function howManyTimes(n) {
    let res = "Edb";
    for (let i = 0; i < n; i++) {
        res += "a";
    }
    res += "bit"
    return res
}
// console.log(howManyTimes(5) );  //➞ "Edaaaaabit"
// console.log(howManyTimes(0) );  //➞ "Edbit"
// console.log(howManyTimes(12));  // ➞ "Edaaaaaaaaaaaabit"

// 7 Repeat the Same Item Multiple Times
// Create a function that takes two arguments (item, times). The first argument (item) is the item that needs repeating while the second argument (times) is the number of times the item is to be repeated. Return the result in an array.

function repeat(item, n) {
    let res = [];
    for (let i = 1; i <= n; i++) {
        res.push(item)


    }

    return res
}

// console.log(console.log(repeat("edabit", 3); //)); // ➞ ["edabit", "edabit", "edabit"]
// console.log(console.log(repeat(13, 5) ); /); ///➞ [13, 13, 13, 13, 13]
// console.log(console.log(repeat("7", 2) ); ); ////➞ ["7", "7"]
// console.log(console.log(repeat(0, 0)); // ); //➞ []

// 8 Return Only the Integer
// Write a function that takes an array of elements and returns only the integers.

function returnOnlyInteger(arr) {
    let res = [];

    for (let i = 0; i < arr.length; i++) {
        const currntEle = parseInt(arr[i]);

        if (Number.isNaN(currntEle) === false) {
            res.push(currntEle)
        }

    }
    return res
}
// console.log(returnOnlyInteger([9, 2, "space", "car", "lion", 16])); // ➞ [9, 2, 16]
// console.log(returnOnlyInteger(["hello", 81, "basketball", 123, "fox"])); // ➞ [81, 123]
// console.log(returnOnlyInteger([10, "121", 56, 20, "car", 3, "lion"])); // ➞ [10, 56, 20, 3]
// console.log(returnOnlyInteger(["String",  true,  3.3,  1])); // ➞ [1]


// 9 Repeating Letters N Times
// Create a function that repeats each character in a string n times.

function repeat(str, n) {
    let res = "";
    for (let i = 0; i < str.length; i++) {

        for (let j = 0; j <= n; j++) {
            res += str[i]
        }
    }
    return res
}
// console.log(repeat("mice", 5)); //➞ "mmmmmiiiiiccccceeeee"
// console.log(repeat("hello", 3)); // ➞ "hhheeellllllooo"
// console.log(repeat("stop", 1) ); //➞ "stop"

// 10 Reverse Coding Challenge #3
// This is a reverse coding challenge. Normally you're given explicit directions with how to create a function. Here, you must generate your own function to satisfy the relationship between the inputs and outputs.

// Your task is to create a function that, when fed the inputs below, produces the sample outputs shown.

function mysteryFunc(arr, num) {
    let res = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % num === 0) {
            res.push(0);
        } else {
            res.push(1)
        }
    }

    return res
}
// console.log(mysteryFunc([5, 7, 8, 2, 1], 2)); // ➞ [1, 1, 0, 0, 1]
// console.log(mysteryFunc([9, 8, 16, 47], 4)); // ➞ [1, 0, 0, 3]
// console.log(mysteryFunc([17, 11, 99, 55, 23, 1], 5 )); //➞ [2, 1, 4, 0, 3, 1]
// console.log(mysteryFunc([6, 1], 7)); // ➞ [6, 1]
// console.log(mysteryFunc([3, 2, 9], 3 )); //➞ [0, 2, 0]
// console.log(mysteryFunc([48, 22, 0, 19, 33, 100], 10 )); //➞ [8, 2, 0, 9, 3, 0]


// 11 Check Factors
// Write a function that returns true if all integers in an array are factors of a number, and false otherwise.

function checkFactors(factor, num) {
    for (let i = 0; i < factor.length; i++) {
        if (num % factor[i] !== 0) {
            return false;
        }
    }
    return true
}
// console.log(checkFactors([2, 3, 4], 12)); //➞ true
// // Since 2, 3, and 4 are all factors of 12.

// console.log(checkFactors([1, 2, 3, 8], 12));// ➞ false
// // 8 is not a factor of 12.

// console.log(checkFactors([1, 2, 50], 100)); //➞ true

// console.log(checkFactors([3, 6], 9)); // ➞ false

// 12 Minimum Removals to Make Sum Even
// Create a function that returns the minimum number of removals to make the sum of all elements in an array even.

function minimumRemovals(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            return 1;
        }

    }

    return 0;
}
// console.log(minimumRemovals([1, 2, 3, 4, 5]));// ➞ 1
// console.log(minimumRemovals([5, 7, 9, 11]) );// ➞0
// console.log(minimumRemovals([5, 7, 9, 12]) );// ➞1

// 13 Multi-division
// Create a function, that will for a given a, b, c, do the following:

// Add a to itself b times.
// Check if the result is divisible by c.

function abcmath(a, b, c) {
    let res = a;
    for (let i = 1; i <= b; i++) {
        res += res;
        if (res % c == 0) {
            return true;
        } else {
            return false;
        }

    }

    return res;
}
// console.log(abcmath(42, 5, 10)); //➞ false
// // 42+42 = 84,84+84 = 168,168+168 = 336,336+336 = 672, 672+672 = 1344
// // 1344 is not divisible by 10

// console.log(abcmath(5, 2, 1) );//➞ true

// console.log(abcmath(1, 2, 3) );//➞ false

