// 1 Return Something to Me!
// Write a function that returns the string "something" joined with a space " " and the given argument a.

function giveMeSomething(a) {
    let str = "something" + " ";
    let res = str.concat(a);
    return res
}

function giveMeSomething(a) {
    let str = "something";
    str += " " + a;
    return str
}

function giveMeSomething(a) {
    return "something" + " " + a;

}

// console.log(giveMeSomething("is better than nothing")); // "something is better than nothing"
// console.log(giveMeSomething("Bob Jane")); // "something Bob Jane"
// console.log(giveMeSomething("something")); // "something something"


// 2 Basic Variable Assignment
// A student learning JavaScript was trying to make a function. His code should concatenate a passed string name with string "Edabit" and store it in a variable called result. He needs your help to fix this code.

function nameString(str) {
    let res = str.concat("Edabit");
    return res
}

function nameString(str) {
    let res = str + "Edabit";
    return res
}

// console.log(nameString("Mubashir")) ; // "MubashirEdabit"
// console.log(nameString("Matt")) ; // "MattEdabit"
// console.log(nameString("javaScript")) ; // "javaScriptEdabit"

// 3 Boolean to String Conversion
// Create a function that takes a boolean variable flag and returns it as a string.

function boolToString(boolToString) {
    return String(boolToString)

}

function boolToString(boolToString) {
    let res = "";
    res += boolToString;
    return res
}

// console.log(boolToString(true)) ; // "true"
//  console.log(boolToString(false)) ; // "false"

// 4 Miserable Parody of a Calculator
// Create a function that will handle simple math expressions. The input is an expression in the form of a string.


function calculator(num) {
    return eval(num)
}

// console.log(calculator("23+4"));    // 27
// console.log(calculator("45-15"));   // 30 
// console.log(calculator("13+2-5*2"));    // 5
// console.log(calculator("49/7*2-3"));    // 11


// 5 Buggy Code (Part 4)
// Emmy has written a function that returns a  greeting to users. However, she's in love with Mubashir, and would like to greet him slightly differently. She added a special case in her function, but she made a mistake.

// Can you help her?

function greeting(str) {
    let res = "Hello" + ",";
    if (str === "Mubashir") {
        return res.concat("my Love!")
    } else {
        return res.concat(str + "!")
    }

}

function greeting(str) {
    let res = "Hello" + ",";
    if (str === "Mubashir") {
        res += "my Love!"
    }
    res += str + "!"
    return res
}


// console.log(greeting("Matt")); // "Hello, Matt!"
// console.log(greeting("Helen")); // "Hello, Helen!"
// console.log(greeting("Mubashir")); // "Hello, my Love!"


// 6 Compare Strings by Count of Characters
// Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.

function comp(str1, str2) {
    return str1.length === str2.length
}

// console.log(comp("AB", "CD") ); // true
// console.log(comp("ABC", "DE") ); // false
// console.log(comp("hello", "edabit") ); // false


// 7 Is the String Empty?
// Create a function that returns true if a string is empty and false otherwise.

function isEmpty(s) {
    if (s === "") {
        return true
    } else {
        return false
    }
}

// console.log(isEmpty("") ); //true
// console.log(isEmpty(" ")); // false
// console.log(isEmpty("a")); // false


// 8 Recursion: Length of a String
// Write a function that returns the length of a string. Make your function recursive.

function length(str) {
    let count = 0;
    return count += str.length;
}

// console.log(length("apple")) ; // 5
// console.log(length("make")) ; // 4
// console.log(length("a")) ; // 1
// console.log(length("")) ; // 0



// 9 Return a String as an Integer
// Create a function that takes a string and returns it as an integer.

function stringInt(strnum) {
    // return parseInt(strnum)
    // return Number(strnum)

}
//  console.log(stringInt("6")) ; //  6
//  console.log(stringInt("1000")) ; //  1000
//  console.log(stringInt("12")) ; //  12


// 10 Concatenate First and Last Name into One String
// Given two strings, firstName and lastName, return a single string in the format "last, first".

function concatName(...str) {
    return str.reverse().join();
}

function concatName(...str) {
    let [fname, lname] = str;
    return [lname, fname].join()
}


function concatName(...str) {
    return [str[1], str[0]].join()
}

// console.log(concatName("First", "Last")); // "Last, First"
// console.log(concatName("John", "Doe")); // "Doe, John"
// console.log(concatName("Mary", "Jane")); // "Jane, Mary"


//  11 Evaluate an Equation
// Create a function that evaluates an equation.

function eq(strnum) {
    let res = 0;
    let arr = strnum.split("/ ,+ ,* ,- ,/");
    for (let i = 1; i < arr.length; i++) {
        res += Math.abs(arr[i]);
    }

    return res
}
// console.log(eq("1+2")); // 3
// console.log(eq("6/(9-7)")); // 3
// console.log(eq("3+2-4")); // 1



// 12  Format I: Template String
// Write a template string according to the following example:

const a = "John";
const b = "Joe";
const c = "Jack";

let template = `Their names were : ${a} ${b} and ${c}.`
// console.log(template);


// 13 Is the String Odd or Even?
// Given a string, return true if its length is even or false if the length is odd.
function oddOrEven(str) {
    let totalstrlength = 0;
    totalstrlength += str.length;

    if (totalstrlength % 2 === 0) {
        return true
    } else {
        return false
    }

}

// console.log(oddOrEven("apples")); // true
// The word "apples" has 6 characters.
// 6 is an even number, so the program outputs true.

// console.log(oddOrEven("pears")); //false
// "pears" has 5 letters, and 5 is odd.
// Therefore the program outputs false.

// console.log(oddOrEven("cherry")); // true


// 14  String and Number Conversions
// You need to create two functions to substitute toString() and parseInt(); A function called   console.log(intToString() that converts integers into strings and a function called console.log(stringToInt() that converts strings into integers.

function intToString(num) {
    // return String(num);

    let res = "";
    return res += num
}

function stringToInt(num) {
    return Number(num);
}

// console.log(intToString(4)); // "4"
// console.log(stringToInt("4")); // 4
// console.log(intToString(29348)); // "29348"


// 15 Word without First Character
// Create a function that takes a word and returns the new word without including the first characonsole.log( cter.console); //og( 

function newWord(str) {
    return str.slice(1);
}

// console.log(newWord("apple")); // "pple"
// console.log(newWord("cherry")); //  "herry"
// console.log(newWord("plum") ); // "lum"

