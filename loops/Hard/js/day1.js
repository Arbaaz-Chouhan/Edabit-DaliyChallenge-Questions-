// 1  Reverse the Odd Length Words
// Given a string, reverse all the words which have odd length. The even length words are not changed.

// Examples
function reverseOdd(str) {
    let res = "";
    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
        if (words[i].length % 2 !== 0) {
            res += words[i].split("").reverse().join("") + " ";
        } else {
            res += words[i] + " ";
        }

    }
    return res.trim();
}
// console.log(reverseOdd("Bananas")); // ➞ "sananaB"
// console.log(reverseOdd("One two three four")); //➞ "enO owt eerht four"
// console.log(reverseOdd("Make sure uoy only esrever sdrow of ddo length"));
// //➞ "Make sure you only reverse words of odd length"

// 2 Numbers in Strings
// Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. If there are no strings containing numbers, return an empty array.

// Examples
function numInStr(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        const currentEle = arr[i];

        for (let j = 0; j < currentEle.length; j++) {
            if (!isNaN(parseInt(currentEle[j]))) {
                res.push(currentEle);
                break;
        }
        }
    }
    return res
}
// console.log(numInStr(["1a", "a", "2b", "b"])); // ➞ ["1a", "2b"]
// console.log(numInStr(["abc", "abc10"])); // ➞ ["abc10"]
// console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"])); // ➞ ["ab10c", "a10bc"]
// console.log(numInStr(["this is a test", "test1"])); // ➞ ["test1"]


// 3 Frequency Distribution
// Create a function that returns the frequency distribution of an array. This function should return an object, where the arr are the unique elements and the values are the frequency in which those elements occur.

// Examples

function getFrequencies(arr) {
    let res = {};
    for (let i = 0; i < arr.length; i++) {
        let currentEle = arr[i];
        if (res[currentEle] === undefined) {
            res[currentEle] = 1;
        } else {
            res[currentEle]++;
        }
    }

    return res;
}
// console.log(getFrequencies(["A", "B", "A", "A", "A"])); // ➞ { A: 4, B: 1 }
// console.log(getFrequencies([1, 2, 3, 3, 2])); // ➞ { "1": 1, "2": 2, "3": 2 }
// console.log(getFrequencies([true, false, true, false, false])); // ➞ { true: 2, false: 3 }
// console.log(getFrequencies([])); // ➞ {}


// 4  Converting One Binary String to Another
// Write a function that returns the minimum number of swaps to convert the first binary string into the second.

// Examples
function minSwaps(s1, s2) {

    let count = 0;
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            count++;
        }
    }
    return count / 2; // Divide by 2 because each swap fixes 2 differences
}
// console.log(minSwaps("1100", "1001")); // ➞ 1
// console.log(minSwaps("110011", "010111")); // ➞ 1
// console.log(minSwaps("10011001", "01100110")); // ➞ 4

// 5  Pronic Number
// A pronic number (or otherwise called as heteromecic) is a number which is a product of two consecutive integers, that is, a number of the form n(n + 1). Create a function that determines whether a number is pronic or not.

// Examples
function isHeteromecic(n) {

    for (let i = 0; i <= n; i++) {

        let square = Math.sqrt(i);

        let res = square * (square + 1);
        if (res === n) {
            return true;
        }
    }
    return false
}
// console.log(isHeteromecic(0)); // // ➞ true
// // 0 * (0 + 1) = 0 * 1 = 0
// console.log(isHeteromecic(2)); // // ➞ true
// // 1 * (1 + 1) = 1 * 2 = 2
// console.log(isHeteromecic(7)); // //➞ false
// console.log(isHeteromecic(110)); // // ➞ true
// // 10 * (10 + 1) = 10 * 11 = 110
// console.log(isHeteromecic(136)); // //➞ false
// console.log(isHeteromecic(156)); // // ➞ true


// 6 Disarium Number
// A number is said to be Disarium if the sum of its digits raised to their respective positions is the number itself.

// Create a function that determines whether a number is a Disarium or not.

// Examples

function isDisarium(n) {
    let numStr = n.toString();
    let sum = 0;
    for (let i = 0; i < numStr.length; i++) {
        sum += Math.pow(numStr[i], 1 + i);
        if (sum === n) {
            return true;
        }
    }
    return false
}
// console.log(isDisarium(75) ); //➞ false
// // 7^1 + 5^2 = 7 + 25 = 32
// console.log(isDisarium(135)); // ➞ true
// // 1^1 + 3^2 + 5^3 = 1 + 9 + 125 = 135
// console.log(isDisarium(544)); // ➞ false
// console.log(isDisarium(518)); // ➞ true
// console.log(isDisarium(466)); // ➞ false

// 7 Mubashir Cipher
// In Mubashir Cipher, encoding is done by simply replacing paired letters from the provided key.

// Create a function that takes a string containing the message to be encoded with a fixed given 2D array of letters key.

// There are some variations on the rules of encipherment. One version of the cipher rules are outlined below:

// key = [['m', 'c'], ['u', 'e'], ['b', 'g'], ['a', 'k'],
//     ['s', 'v'], ['h', 'x'], ['i', 'z'], ['r', 'y'],
//     ['p', 'w'], ['l', 'n'], ['o', 'j'], ['t', 'f'], ['q', 'd']]

// message = "edabit is amazing !"

// console.log(mubashirCipher(message) ➞ "uqkgzf zv kckiz) ; //lb !"
// Step 1: Search letter in the given key and replace it with paired letter:

// e = u
// d = q
// a = k
// b = g
// .
// .
// .
// g = b
// Step 2: Keep all characters (including spaces) other than letters in their original positions:

// "uqkgzf zv kckizlb !"
// See the below examples for a better understanding:

// Examples
function mubashirCipher(str) {
    let key = [['m', 'c'], ['u', 'e'], ['b', 'g'], ['a', 'k'],
    ['s', 'v'], ['h', 'x'], ['i', 'z'], ['r', 'y'],
    ['p', 'w'], ['l', 'n'], ['o', 'j'], ['t', 'f'], ['q', 'd']
    ];

    let res = "";

    for (let i = 0; i < str.length; i++) {
        let found = false;
        for (let j = 0; j < key.length; j++) {
            if (key[j][0] === str[i]) {
                res += key[j][1];
                found = true;
                break;
            }
        }
        if (!found) {
            res += str[i];
        }
    }
    return res;
}

// console.log(mubashirCipher("mubashir is not amazing")); // "cegkvxzy vz njt kckizlb"
// console.log(mubashirCipher("%$ &%")); // "%$ &%"
// console.log(mubashirCipher("evgeny sh is amazing")); // "usbulr vx vz njt kckizlb"


// 8 Convert "Zero" and "One" to "1" and "0"
// Create a function that takes a string as an argument. The function must return a string containing 1s and 0s based on the string argument's words. If any word in the argument is not equal to "zero" or "one" (case insensitive), you should ignore it. The returned string's length should be a multiple of 8, if the string is not a multiple of 8 you should remove the numbers in excess.

// Examples
function textToNumberBinary(str) {
    let words = str.toLowerCase().split(" ");
    let res = "";

    for (let i = 0; i < words.length; i++) {
        if (words[i] === "one") {
            res += "1";
        } else if (words[i] === "zero") {
            res += "0"
        }
}
   return res

//    one misteck
 }
// console.log(textToNumberBinary("zero one zero one zero one zero one")); //➞ "01010101"
// console.log(textToNumberBinary("Zero one zero ONE zero one zero one")); //➞ "01010101"
// console.log(textToNumberBinary("zero one zero one zero one zero one one two"));// ➞ "01010101"
// console.log(textToNumberBinary("zero one zero one zero one zero three")); // ➞ ""
// console.log(textToNumberBinary("one one")); // ➞"""


//  9 Burglary Series (12): Get Vodka Bottle
// The insurance guy laughs, he's just kidding. He just needs an updated list. You just need one of those Rammstein Vodka bottles.

// Given an object with alcoholic drinks and a number, return a string with the name of the Rammstein bottle that matches the given number.

// Examples
function findRammsteinBottle(drinks, number) {
    for (const bottle in drinks) {
        if (bottle.startsWith("Rammstein") && drinks[bottle] === number) {
            return bottle;
        }
    }
    return "No matching Rammstein bottle found";
}

// const drinks1 = { whiskey: 100, "Rammstein A": 100, "Rammstein B": 50 };
// console.log(findRammsteinBottle(drinks1, 100)); // Output: "Rammstein A"

// const drinks2 = { whiskey: 100, "Rammstein A": 100, "Rammstein B": 50 };
// console.log(findRammsteinBottle(drinks2, 50)); // Output: "Rammstein B"

// const drinks3 = { whiskey: 100, "Rammstein A": 100, "Rammstein D": 70, beer: 70 };
// console.log(findRammsteinBottle(drinks3, 70)); // Output: "Rammstein D"

// 10 Finding Common Elements
// Create a function that takes two "sorted" arrays of numbers and returns an array of numbers which are common to both the input arrays.

// Examples
function commonElements(arr1,arr2){
    let res  = [];
    for(let i = 0; i<arr1.length; i++){
        if(arr1.includes(arr2[i])){
        res.push(arr2[i])
        }
    }
    return res
}
// console.log(commonElements([-1, 3, 4, 6, 7, 9], [1, 3])); // ➞ [3]
// console.log(commonElements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10])); // ➞ [1, 3, 4, 7]
// console.log(commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5])); // ➞ [1, 2, 4, 5]
// console.log(commonElements([1, 2, 3, 4, 5], [10, 12, 13, 15])); // ➞ []


