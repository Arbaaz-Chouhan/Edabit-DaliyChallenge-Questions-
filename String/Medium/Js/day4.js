// 41 =>  String Slice-athon
// This challenge has five miniature exercises to help practice proficiency in string slicing. Check the examples below for a visual indicator of how to slice the strings. Good luck!

function challenge1(s) {
    return s.slice(0, 5);
}

function challenge2(s) {
    return s.slice(-5)
}

function challenge3(s) {
    let res = "";
    for (let i = s.length - 1; i >= 0; i--) {
        res += s[i];
    }
    return res
}

function challenge4(s) {
    let res = "";
    for (let i = s.length - 21; i >= 0; i--) {
        res += s[i];
    }
    return res
}

function challenge5(s) {
    let res = "";
    let last7char = s.slice(-7)
    for (let i = 0; i < last7char.length; i++) {
        if ((i+1) % 2 === 1) {
            res += last7char[i];
        }
    }
    return res
}

// console.log(challenge1("abcdefghijklmnopqrstuvwxyz"
// )); // "abcde"
// // First 5 characters of the string."
// console.log(challenge2("abcdefghijklmnopqrstuvwxyz"
// )); // "vwxyz"
// // // Last 5 characters of the string."
// console.log(challenge3("abcdefghijklmnopqrstuvwxyz"
// )); // "zyxwvutsrqponmlkjihgfedcba"
// // // // All characters in the string from back."
// console.log(challenge4("abcdefghijklmnopqrstuvwxyz"
// )); // "fedcba"
// // // First 6 characters in the string (start with 6th character and go backwards)."
// console.log(challenge5("abcdefghijklmnopqrstuvwxyz"
// )); // "tvxz"
// // // Take last 7 characters and only return odd positioned ones.


// 42 => The Reverser!
// The "Reverser" takes a string as input and returns that string in reverse order, with the opposite case.


// reverse("Hello World") ➞ "DLROw OLLEh"

// reverse("ReVeRsE") ➞ "eSrEvEr"

// reverse("Radar") ➞ "RADAr"