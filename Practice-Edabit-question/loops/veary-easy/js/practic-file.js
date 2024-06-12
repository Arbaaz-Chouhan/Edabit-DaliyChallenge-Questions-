//1 
function printArray(num) {
    let res = [];
    for (let i = 1; i <= num; i++) {
        res.push(i)
    }
    return res
}

// console.log(printArray(1)); // ➞ [1]
// console.log(printArray(3)); // ➞ [1, 2, 3]
// console.log(printArray(6)); // ➞ [1, 2, 3, 4, 5, 6]

// 2
function calculateExponent(num1, num2) {
    let res = 1;
    for (let i = 0; i < num2; i++) {
        res *= num1
    }
    return res
}
// console.log(calculateExponent(5, 5)); //➞ 3125
// console.log(calculateExponent(10, 10)); // ➞ 10000000000
// console.log(calculateExponent(3, 3)); // ➞ 27

//3
function findIndex(arr, item) {
    for (let i = 0; i < arr.length; i++) {
        const currentEle = arr[i];
        if (currentEle === item) {
            return i
        }
    }
}
// console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh") ); //➞ 2
// console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue") ); //➞ 1
// console.log(findIndex(["a", "g", "y", "d"], "d") ); //➞ 3
// console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple")); // ➞ 0

// 4
function word(obj) {

    const String = {
        "one": 1,
        "two": 2,
        "three": 3,
        "four": 4,
        "five": 5,
        "six": 6,
        "seven": 7,
        "eight": 8,
        "nine": 9,
        "zero": 0,

    }
    return String[obj]
}


// console.log(word("one") ); //➞ 1
// console.log(word("two") ); //➞ 2
// console.log(word("nine")); // ➞ 9

// 5
function length(str) {
    let res = 0;
    for (let i = 0; i < str.length; i++) {
        res += 1
    }
    return res
}
// console.log(length("Hello World") ); //➞ 11
// console.log(length("Edabit") ); //➞ 6
// console.log(length("wash your hands!") ); //➞ 16

// 6
let arr = [1, 2, 8]
// first, , last = arr


// first = arr[0]

// last = arr[arr.length - 1]

// console.log(first) // ➞ outputs 1
// console.log(last)  //➞ outputs 8

//7
function addUpTo(n) {
    let res = 0;
    for (let i = 0; i <= n; i++) {
        res += i;

    }
    return res
}
// console.log(addUpTo(3) ); //➞ 6
// 1 + 2 + 3 = 6

// console.log(addUpTo(10)); // ➞ 55
// 1 + 2 + 3 + ... + 10 = 55

// console.log(addUpTo(7) ); //➞ 28
// 1 + 2 + 3 + ... + 7 = 28

//8
function addIndexes(arr) {
    let res = [];

    for (let i = 0; i < arr.length; i++) {
        res.push(arr[i] + i)
    }
    return res
}

// console.log(addIndexes([0, 0, 0, 0, 0])); // ➞ [0, 1, 2, 3, 4]
// console.log(addIndexes([1, 2, 3, 4, 5])); // ➞ [1, 3, 5, 7, 9]
// console.log(addIndexes([5, 4, 3, 2, 1])); // ➞ [5, 5, 5, 5, 5]

// 9
function addOddToN(n) {
    let res = 0;

    for (let i = 0; i <= n; i++) {
        if (i % 2 !== 0) {
            res += i;
        }
    }
    return res
}
// console.log(addOddToN(5)); // ➞ 9
// // 1 + 3 + 5 = 9

// console.log(addOddToN(13)); //  ➞ 49
// console.log(addOddToN(47)); //  ➞ 576

// 10
function squaresSum(n) {
    let res = 0;

    for (let i = 0; i <= n; i++) {
        res += i * i
    }
    return res
}
// console.log(squaresSum(3) ); //➞ 14
// console.log(squaresSum(12)); // ➞ 650
// console.log(squaresSum(13)); // ➞ 819

// 11
function filterArray(arr) {
    let res = [];

    for (let i = 0; i < arr.length; i++) {
        const currentEle = parseInt(arr[i]);
        if (Number.isNaN(currentEle) === false) {
            res.push(currentEle);
        }
    }
    return res
}
// console.log(filterArray([1, 2, 3, "a", "b", 4])); // ➞ [1, 2, 3, 4]
// console.log(filterArray(["A", 0, "Edabit", 1729, "Python", "1729"])); // ➞ [0, 1729]
// console.log(filterArray(["Nothing", "here"]) ); //➞ []

// 12
function integerBoolean(num) {
    let res = [];

    for (let i = 0; i <= num; i++) {
        if (num[i] == 1) {
            res.push(true)

        } else if (num[i] == 0) {
            res.push(false)
        }
    }
    return res
}


// console.log(integerBoolean("100101") ); //➞ [true, false, false, true, false, true]
// console.log(integerBoolean("10")); //➞ [t rue, false]
// console.log(integerBoolean("001"));// ➞ [false, false, true]

//13
function object(obj) {
    let res = "";
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        let currentEle = keys[i];
        let currentVal = obj[keys[i]];
        res = res + currentVal + " "
        // console.log(currentEle);
    }
    res += obj[2]
    return res
}
// console.log(object({ 1: "Mommy", 2: "please", 3: "help" }) ); //➞ "Mommy please help please"
// console.log(object({ 1: "Me", 2: "innocent", 3: "is" })); // ➞ "Me innocent is innocent"
// console.log(object({ 1: "Must", 2: "lawyer", 3: "call" })); // ➞ "Must lawyer call lawyer

//14
function makeRug(m, n, s = "#") {
    let res = [];
    for (let i = 1; i <= n; i++) {
        let str = "";

        for (let i = 1; i <= n; i++) {
            str += s;
        }
        res.push(str)
    }
    return res
}
// console.log(makeRug(3, 5)); // ➞ [
// "#####",
// "#####",
// "#####"
//   ]

//   console.log(makeRug(3, 5, '$') ); // ➞ [
//     "$$$$$",
//     "$$$$$",
//     "$$$$$"
//   ]

//   console.log(makeRug(2, 2, 'A'));   //➞ [
//     "AA",
//     "AA"
//   ]

// 15
function nTablesPlusOne(n) {
    let main = [];
    for (let i = 1; i <= 10; i++) {
        main.push(n * i + 1);
    }
    return main
}
// console.log(nTablesPlusOne(7)); // ➞ "8,15,22,29,36,43,50,57,64,71"
// console.log(nTablesPlusOne(1)); // ➞ "2,3,4,5,6,7,8,9,10,11"
// console.log(nTablesPlusOne(3)); // ➞ "4,7,10,13,16,19,22,25,28,31"

//16
function uploadCount(date, month) {
    let count = 0;
    for (let i = 0; i < date.length; i++) {

        const currentEle = date[i].split(" ");
        if (currentEle[0] === month) {
            count += 1
        }

    }
    return count
}
// console.log(uploadCount(["Sept 22", "Sept 21", "Oct 15"], "Sept")); // ➞ 2
// console.log(uploadCount(["Sept 22", "Sept 21", "Oct 15"], "Oct") ); //➞ 11
// 17
function forbiddenLetter(char, arr) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes(char)) {
            return false;
        }

    }
    return true
}
// console.log(forbiddenLetter("r", ["rock", "paper", "scissors"])); // ➞ false
// console.log(forbiddenLetter("a", ["spoon", "fork", "knife"])); //  ➞ true
// console.log(forbiddenLetter("m", [])); //  ➞ true

// 18
function sumMinimums(arr) {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        let min = Infinity;

        for (let j = 0; j < arr.length; j++) {
            const currentEle = arr[i][j];
            if (min > currentEle) {
                min = currentEle
            }
        }
        res += min

    }
    return res
}

// console.log(sumMinimums([
//     [1, 2, 3, 4, 5],
//     [5, 6, 7, 8, 9],
//     [20, 21, 34, 56, 100]
//   ]));  //➞ 26

// minimum value of the first row is 1
// minimum value of the second row is 5
// minimum value of the third row is 20

// 19
function findFactors(n) {
    let res = [];

    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            res.push(i)
        }
    }
    return res
}
//   console.log(findFactors(9) ); //➞ [1, 3, 9]
// // 9 has three factors 1, 3 and 9
// console.log(findFactors(12) ); //➞ [1, 2, 3, 4, 6, 12]
// console.log(findFactors(20) ); //➞ [1, 2, 4, 5, 10, 20]
// console.log(findFactors(0) ); //➞ []
// 0 has no factors

//20
function evenOddString(str) {
    let evenNumber = "";
    let oddNuber = "";
    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            evenNumber += str[i];

        } else {
            oddNuber += str[i]
        }
    }
    return evenNumber + " " + oddNuber
}
// console.log(evenOddString("mubashir")); // ➞ "mbsi uahr"
// // Letters at even indexes = "mbsi"
// // Letters at odd indexes = "uahr"
// // Join both strings with a space
// console.log(evenOddString("edabit") ); //➞ "eai dbt"
// console.log(evenOddString("airforce")); // ➞ "aroc ifre"

// 21
function deNest(arr) {
    let sum = [];
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}
// console.log(deNest([[[[[[[[[[[[3]]]]]]]]]]]]) ); //➞ 3
// console.log(deNest([[[[[[[true]]]]]]])); // ➞ true
// console.log(deNest([[[[[[[[[[[[[[[[["edabit"]]]]]]]]]]]]]]]]]) ); //➞ "edabit"

// 22
function preventDistractions(str) {
    const forbiddenLetter = ["anime", "meme", "vines", "roasts", "Danny DeVito"
    ]
    for (let i = 0; i < forbiddenLetter.length; i++) {
        if (str.includes(forbiddenLetter[i])) {
            return "NO!"
        }
    }
    return "Safe watching!"
}
// console.log(preventDistractions("vines that butter my eggroll"));// ➞ "NO!"
// console.log(preventDistractions("Hot pictures of Danny DeVito"));// ➞ "NO!"
// console.log(preventDistractions("How to ace BC Calculus in 5 Easy Steps") ); //➞ "Safe watching!"

//23
function capitalLetters(str) {
    let res = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            res += 1
        }
    }
    return res
}
// console.log(capitalLetters("fvLzpxmgXSDrobbgMVrc")); // ➞ 6
// console.log(capitalLetters("JMZWCneOTFLWYwBWxyFw")); // ➞ 14
// console.log(capitalLetters("mqeytbbjwqemcdrdsyvq")); // ➞ 0

// 24
function binaryToDecimal(arr) {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            res += 1 + Math.pow(2, i) - 1
        }
    }
    return res

}
// console.log(binaryToDecimal([1, 1, 1, 1, 1, 1, 1, 1]));// ➞ 255
// console.log(binaryToDecimal([0, 0, 0, 0, 0, 0, 0, 0]));// ➞ 0
// console.log(binaryToDecimal([1, 0, 1, 1, 1, 1, 0, 0]));// ➞ 188

//25
function sumEvenNumsInRange(num1, num2) {
    let res = 0;
    for (let i = num1; i <= num2; i++) {
        if (i % 2 === 0) {
            res += i
        }
    }
    return res
}
// console.log(sumEvenNumsInRange(10, 20) ); //➞ 90
// // 10, 12, 14, 16, 18, 20
// console.log(sumEvenNumsInRange(51, 150)); // ➞ 5050
// console.log(sumEvenNumsInRange(63, 97) ); //➞ 1360

//26
function hammingDistance(str1, str2) {
    let count = 0;

    for (let i = 0; i < str2.length; i++) {
        if (str1[i] !== str2[i]) {
            count++;
        }
    }
    return count
}
// console.log(hammingDistance("abcde", "bcdef") ) ; //➞ 5
// console.log(hammingDistance("abcde", "abcde") );//➞ 0
// console.log(hammingDistance("strong", "strung")); // ➞ 1

// 27
function findLargestNum(arr) {
    return Math.max(...arr)
}

// console.log(findLargestNum([4, 5, 1, 3])); // ➞ 5
// console.log(findLargestNum([300, 200, 600, 150])); // ➞ 600
// console.log(findLargestNum([1000, 1001, 857, 1])); // ➞ 1001

// 28
function correctStream(arr1, arr2) {
    let res = [];
    for (let i = 0; i < arr2.length; i++) {
        if (arr1[i] === arr2[i]) {
            res.push(1)
        } else if (arr1[i] !== arr2[i]) {
            res.push(-1)
        }
    }
    return res
}

// console.log(correctStream(
//     ["it", "is", "find"],
//     ["it", "is", "fine"]
//   )); //➞ [1, 1, -1]

//   console.log(correctStream(
//     ["april", "showrs", "bring", "may", "flowers"],
//     ["april", "showers", "bring", "may", "flowers"]
//   )); //➞ [1, -1, 1, 1, 1]

// 29

function addEnding(arr, str) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(arr[i] + str)
    }
    return res
}

// console.log(addEnding(["clever", "meek", "hurried", "nice"], "ly"));
//➞ ["cleverly", "meekly", "hurriedly", "nicely"]

// console.log(addEnding(["new", "pander", "scoop"], "er"));
//➞ ["newer", "panderer", "scooper"]

// console.log(addEnding(["bend", "sharpen", "console.log(mean"], "i);ng"));
// //➞ ["bending", "sharpening", "meaning"]

//30
function getSequence(low, high) {
    let res = [];
    for (let i = low; i <= high; i++) {
        res.push(i);
    }
    return res
}
// console.log(getSequence(1, 5));// ➞ [1, 2, 3, 4, 5]
// console.log(getSequence(98, 100)); // ➞ [98, 99, 100]
// console.log(getSequence(1000, 1000)); // ➞ [1000]

// 31
function negate(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            res.push(-arr[i]);
        } else if (-arr[i]) {
            res.push(arr[i])
        }
    }
    return res
}
// console.log(negate([1, 2, 3, 4])); // ➞ [-1, -2, -3, -4]
// console.log(negate([-1, 2, -3, 4])); // ➞ [1, -2, 3, -4]
// console.log(negate([])); // ➞ []

// 32 
function multiplyByLength(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(arr[i] * arr.length)
    }
    return res
}
// console.log(multiplyByLength([2, 3, 1, 0])); // ➞ [8, 12, 4, 0]
// console.log(multiplyByLength([4, 1, 1])); // ➞ ([12, 3, 3])
// console.log(multiplyByLength([1, 0, 3, 3, 7, 2, 1])); // ➞  [7, 0, 21, 21, 49, 14, 7]
// console.log(multiplyByLength([0])); // ➞ ([0])

// 33
function findSmallestNum(arr) {
    return Math.min(...arr);
}
// console.log(findSmallestNum([34, 15, 88, 2])); // ➞ 2
// console.log(findSmallestNum([34, -345, -1, 100])); // ➞ -345
// console.log(findSmallestNum([-76, 1.345, 1, 0])); // ➞ -76
// console.log(findSmallestNum([0.4356, 0.8795, 0.5435, -0.9999])); // ➞ -0.9999
// console.log(findSmallestNum([7, 7, 7]) ); //➞ 7

// 34
function diffMaxMin(arr) {

    let max = Math.max(...arr);
    let min = Math.min(...arr);

    return max - min
}
// console.log(diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21])); // ➞ 82
// Smallest number is -50, biggest is 32.

// console.log(diffMaxMin([44, 32, 86, 19])); // ➞ 67
// Smallest number is 19, biggest is 86.

//35
function countdown(n) {
    let res = [];
    for (let i = n - 0; i >= 0; i--) {
        res.push(i);
    }
    return res
}

// console.log(countdown(5)); // ➞ [5, 4, 3, 2, 1, 0]
// console.log(countdown(1)); // ➞ [1, 0]
// console.log(countdown(0)); // ➞ [0]

// 36
function Go(n) {
    let res = "";
    for (let i = 0; i <= n; i++) {
        res += "-";
    }
    return res
}
// console.log(Go(1)); // ➞ "-"
// console.log(Go(5)); // ➞ "-----"
// console.log(Go(3)); // ➞ "---"

//37

function checkPalindrome(str1) {
    const arr = ["mom", "racecar", "kayak"];
    for (let i = 0; i < str1.length; i++) {
        if (arr[i].includes(str1[i])) {
            return true;
        } else {
            return false
        }

    }
}
// console.log(checkPalindrome("mom")); // ➞ true
// console.log(checkPalindrome("scary")); // ➞ false
// console.log(checkPalindrome("reviver")); // ➞ true
// console.log(checkPalindrome("stressed")); // ➞ false

// 38
function firstVowel(str) {

    const vowel = "aeoiu";
    for (let i = 0; i < str.length; i++) {
        if (vowel.includes(str[i].toLowerCase())) {
            return i;
        }
    }

}

// console.log(firstVowel("apple")); // ➞ 0
// console.log(firstVowel("hello")); // ➞ 1
// console.log(firstVowel("STRAWBERRY")); // ➞ 3
// console.log(firstVowel("pInEaPPLe")); //➞ 1

// 39
function toArray(arr) {
    let res = "";
    for (let i = 0; i < arr.length; i++) {
        res += arr[i];
    }
    return res;
}
// console.log(toArray("watermelon, raspberry, orange"));
// //➞ ["watermelon", "raspberry", "orange"]

// console.log(toArray("x1, x2, x3, x4, x5"));
// //➞ ["x1", "x2", "x3", "x4", "x5"]

// console.log(toArray("a, b, c, d"));
// //➞ ["a", "b", "c", "d"]

// console.log(toArray(""));
// //➞ []

// 40

function howManyTimes(n) {
    let str = "Ed";
    for (let i = 0; i <= n; i++) {
        str += "a";
    }
    str += "bit";
    return str
}
// console.log(howManyTimes(5) ); //➞ "Edaaaaabit"
// console.log(howManyTimes(0) ); //➞ "Edbit"
// console.log(howManyTimes(12)); // ➞ "Edaaaaaaaaaaaabit"

// 41
function repeat(item, items) {
    let res = [];
    for (let i = 1; i <= items; i++) {

        res.push(item);

    }

    return res
}
// console.log(repeat("edabit", 3)); // ➞ ["edabit", "edabit", "edabit"]
// console.log(repeat(13, 5)); // ➞ [13, 13, 13, 13, 13]
// console.log(repeat("7", 2)); // ➞ ["7", "7"]
// console.log(repeat(0, 0)); // ➞ []

// 42 
function returnOnlyInteger(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        const currentEle = parseFloat(arr[i]);
        if (Number.isNaN(currentEle) === false) {
            res.push(currentEle);
        }
    }
    return res
}
// console.log(returnOnlyInteger([9, 2, "space", "car", "lion", 16])); // ➞ [9, 2, 16]
// console.log(returnOnlyInteger(["hello", 81, "basketball", 123, "fox"])); // ➞ [81, 123]
// console.log(returnOnlyInteger([10, "121", 56, 20, "car", 3, "lion"]) ); //➞ [10, 56, 20, 3]
// console.log(returnOnlyInteger(["String",  true,  3.3,  1]) ); //➞ [1]


// 43
function repeat(str, n) {
    let res = "";

    for (let i = 0; i < str.length; i++) {

        for (let j = 0; j < n; j++) {
            res += str[i]
        }

    }
    return res
}
// console.log(repeat("mice", 5) ); //➞ "mmmmmiiiiiccccceeeee"
// console.log(repeat("hello", 3)); // ➞ "hhheeellllllooo"
// console.log(repeat("stop", 1) ); //➞ "stop"

//44
function mysteryFunc(arr, num) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % num === 0) {
            res.push(arr[i] % num);
        } else {
            res.push(arr[i] % num)
        }
    }

    return res
}
// console.log(mysteryFunc([5, 7, 8, 2, 1], 2 )); //➞ [1, 1, 0, 0, 1]
// console.log(mysteryFunc([9, 8, 16, 47], 4 )); // ➞ [1, 0, 0, 3]
// console.log(mysteryFunc([17, 11, 99, 55, 23, 1], 5 )); // ➞ [2, 1, 4, 0, 3, 1]
// console.log(mysteryFunc([6, 1], 7  )); //➞ [6, 1]
// console.log(mysteryFunc([3, 2, 9], 3  )); //➞ [0, 2, 0]
// console.log(mysteryFunc([48, 22, 0, 19, 33, 100], 10  )); //➞ [8, 2, 0, 9, 3, 0]

//45
function checkFactors(arr, n) {
    for (let i = 1; i < arr.length; i++) {
        if (n % arr[i] !== 0) {
            return false;
        }


    }
    return true;


}
// console.log(checkFactors([2, 3, 4], 12)); // ➞ true
// // Since 2, 3, and 4 are all factors of 12.
// console.log(checkFactors([1, 2, 3, 8], 12)); // ➞ false
// // 8 is not a factor of 12.
// console.log(checkFactors([1, 2, 50], 100)); // ➞ true
// console.log(checkFactors([3, 6], 9)); //➞ false

//46
function minimumRemovals(arr) {
    let sum = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum += 1

        }
    }
    return sum

}
// console.log(minimumRemovals([1, 2, 3, 4, 5])) ;//➞ 1
// console.log(minimumRemovals([5, 7, 9, 11]) ); //➞ 0
// console.log(minimumRemovals([5, 7, 9, 12]) ); //➞ 1

// 47
function abcmath(a, b, c) {
    let res = a;
    for (let i = 1; i <= b; i++) {
        res += res;
        if (res % c === 0) {
            return true
        } else {
            return false
        }

    }
    // return false
    return res;
}
// console.log(abcmath(42, 5, 10)); // ➞ false
// 42+42 = 84,84+84 = 168,168+168 = 336,336+336 = 672, 672+672 = 1344
// 1344 is not divisible by 10

// console.log(abcmath(5, 2, 1)); //➞ true
// console.log(abcmath(1, 2, 3)); //➞ false

//48
function greetPeople(names) {
    let str = "";
    for (let i = 0; i < names.length; i++) {
        if (i < names.length - 1) {
            str += "Hello" + " " + names[i] + " ";
        } else {
            str += "Hello" + names[i]
        }
    }
    return str
}
// console.log(greetPeople(["Joe"])); // ➞ "Hello Joe"
// console.log(greetPeople(["Angela", "Joe"]));// ➞ "Hello Angela, Hello Joe"
// console.log(greetPeople(["Frank", "Angela", "Joe"]));// ➞ "Hello Frank, Hello Angela, Hello Joe"


//49
function sumDigits(n) {
    let res = 0
    let numString = n.toString();
    for (let i = 0; i < numString; i++) {
        if (numString[i] === '0') {
            res += 1
        }
    }
    return res;
}
// console.log(sumDigits(100)); // ➞ 3
// console.log(sumDigits(1000)); // ➞ 4
// console.log(sumDigits(1)); // ➞ 1

// 50
function seriesResistance(arr) {
    let str = "ohms";
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        res = res + arr[i];
    }
    res += str;
    return res
}
// console.log(seriesResistance([1, 5, 6, 3]));// ➞ "15 ohms"
// console.log(seriesResistance([16, 3.5, 6]));// ➞ "25.5 ohms"
// console.log(seriesResistance([0.5, 0.5]));  //➞ "1.0 ohm"

//51
function charCount(char, str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i].includes(char)) {
            count++;
        }
    }
    return count;
}
// console.log(charCount("a", "edabit")); // ➞ 1
// console.log(charCount("c", "Chamber of secrets")); // ➞ 1
// console.log(charCount("b", "big fat bubble") ) //➞ 4

// 52
function sumOfCubes(arr) {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        res += Math.pow(arr[i], 3)
    }
    return res
}
// console.log(sumOfCubes([1, 5, 9])); // ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
// console.log(sumOfCubes([3, 4, 5])); // ➞ 216
// console.log(sumOfCubes([2])); // ➞ 8
// console.log(sumOfCubes([])); // ➞ 0

// 53
function countVowels(str) {
    let count = 0;
    let vowel = "aeiou";
    for (let i = 0; i < str.length; i++) {
        if (vowel.includes(str[i])) {
            count++;
        }
    }
    return count;
}
// console.log(countVowels("Celebration")); // ➞ 5
// console.log(countVowels("Palm")); // ➞ 1
// console.log(countVowels("Prediction")); // ➞ 4

// 54
function calculateDifference(obj, limit) {
    let res = 0;
    let value = Object.values(obj);
    for (let i = 0; i < value.length; i++) {
        res += value[i];
    }
    return res - limit;
}

// console.log(calculateDifference({ "baseball bat": 20 }, 5));// ➞ 15
// console.log(calculateDifference({ skate: 10, painting: 20 }, 19));// ➞ 11
// console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400));// ➞ 1

// 55
function isAvgWhole(arr) {
    let average = 0;
    for (let i = 0; i < arr.length; i++) {
        average += arr[i] / average.length;

    }
    return Number.isInteger(average)
}

// console.log(isAvgWhole([1, 3])); // ➞ true
// console.log(isAvgWhole([1, 2, 3, 4])); // ➞ false
// console.log(isAvgWhole([1, 5, 6])); // ➞ true
// console.log(isAvgWhole([1, 1, 1])); // ➞ true
// console.log(isAvgWhole([9, 2, 2, 5]) ); //➞ false

// 56
function getAbsSum(arr) {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        res += Math.abs(arr[i])
    }
    return res
}
// console.log(getAbsSum([2, -1, 4, 8, 10])); // ➞ 25
// console.log(getAbsSum([-3, -4, -10, -2, -3]) ); //➞ 22
// console.log(getAbsSum([2, 4, 6, 8, 10])); // ➞ 30
// console.log(getAbsSum([-1]) ); //➞ 1

// 57
function findLargestNum(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        // const currentEle  =
        res.push(Math.max(...arr[i]));
    }
    return res
}
// console.log(findLargestNum([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]])); // ➞ [7, 90, 2]
// console.log(findLargestNum([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]])); // ➞ [-34, -2, 7]
// console.log(findLargestNum([[0.4321, 0.7634, 0.652], [1.324, 9.32, 2.5423, 6.4314], [9, 3, 6, 3]])); // ➞ [0.7634, 9.32, 9]

// 58
function maximumScore(arr) {

    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        res += arr[i].score;
    }
    return res
}
// console.log(maximumScore([
//     { tile: "N", score: 1 },
//     { tile: "K", score: 5 },
//     { tile: "Z", score: 10 },
//     { tile: "X", score: 8 },
//     { tile: "D", score: 2 },
//     { tile: "A", score: 1 },
//     { tile: "E", score: 1 }
//   ]) ); //➞ 28

//   console.log(maximumScore([
//     { tile: "B", score: 2 },
//     { tile: "V", score: 4 },
//     { tile: "F", score: 4 },
//     { tile: "U", score: 1 },
//     { tile: "D", score: 2 },
//     { tile: "O", score: 1 },
//     { tile: "U", score: 1 }
//   ])); // ➞ 15

// 59
function set(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (res.indexOf(arr[i]) === -1) {
            res.push(arr[i])
        }
    }
    return res
}

// console.log(set([1, 3, 3, 5, 5])); // ➞ [1, 3, 5]
// console.log(set([4, 4, 4, 4])); // ➞ [4]
// console.log(set([5, 7, 8, 9, 10, 15]) ); //➞ [5, 7, 8, 9, 10, 15]
// console.log(set([3, 3, 3, 2, 1])); // ➞ [1, 2, 3]

// 60
function amplify(n) {
    let res = [];

    let count = 0;

    for (let i = 1; i <= n; i++) {
        count += 1;
        res.push(count)

        if (i % 4 === 0) {
            res.push(i * 10);
        }

    }

    return res
}
// console.log(amplify(4)); // ➞ [1, 2, 3, 40]
// Create a sequence from 1 to 4
// 4 is exactly divisible by 4, so it will be 4*10 = 40

// console.log(amplify(3)); // ➞ [1, 2, 3]
// Create a sequence from 1 to 3
// There are no numbers that can be exactly divided by 4

// console.log(amplify(25)); // ➞ [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]
// Create a sequence from 1 to 25
// The numbers exactly divisible by 4 are: 4 (4*10 = 40), 8 (8 * 10 = 80)... and so on.

// 61
function hashPlusCount(str) {

    let count1 = 0;
    let count2 = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "#") {
            count1 += 1;

        } else if (str[i] === "+") {
            count2 += 1

        }
    }
    return [count1, count2]
}
// console.log(hashPlusCount("###+")); // ➞ [3, 1]
// console.log(hashPlusCount("##+++#") ); //➞ [3, 3]
// console.log(hashPlusCount("#+++#+#++#") ); //➞ [4, 6]
// console.log(hashPlusCount("") ); //➞ [0, 0]

//62
function reverseCase(str) {
    let res = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            res += str[integerBoolean].toLowerCase();

        } else if (str[i] === str[i].toLowerCase()) {
            res += str[i].toUpperCase();
        }
    }
    return res
}
// console.log(reverseCase("Happy Birthday") ); //➞ "hAPPY bIRTHDAY"
// console.log(reverseCase("MANY THANKS")); // ➞ "many thanks"
// console.log(reverseCase("sPoNtAnEoUs")); // ➞ "SpOnTaNeOuS"

// 63
function isOmnipresent(arr, item) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes(item)) {
            return true;
        } else {
            return false
        }
    }
}
// console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1) ); //➞ true
// console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6)); // ➞ false
// console.log(isOmnipresent([[5], [5], [5], [6, 5]], 5) ); //➞ true
// console.log(isOmnipresent([[5], [5], [5], [6, 5]], 6)); // ➞ false

//64
function countOnes(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr[i].length; j++) {

            if (arr[i][j] === 1) {
                count++;
            }
        }

    }
    return count;

}
// console.log(countOnes([
//     [1, 0],
//     [0, 0]
// ])); // ➞ 1

// console.log(countOnes([
//     [1, 1, 1],
//     [0, 0, 1],
//     [1, 1, 1]
// ])); //➞ 7

// console.log(countOnes([
//     [1, 2, 3],
//     [0, 2, 1],
//     [5, 7, 33]
// ])); // ➞ 2

//65 
function indexShuffle(str) {
    let res = "";
    let evenIndex = "";
    let oddIndex = "";
    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            evenIndex += str[i]
        } else if (i % 2 !== 0) {
            oddIndex += str[i]
        }
    }
    res += evenIndex;
    res += oddIndex;
    return res
}
// console.log(indexShuffle("abcdefg")); //➞ "acegbdf"
// console.log(indexShuffle("holiday")); //➞ "hldyoia"
// console.log(indexShuffle("maybe"));// ➞"myeab"

// 66
function isSubset(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (!arr2.includes(arr1[i])) {
            return false; // If any element of arr1 is not found in arr2, return false
        }
    }
    return true; // If all elements of arr1 are found in arr2, return true
}

// console.log(isSubset([3, 2, 5], [5, 3, 7, 9, 2])); // ➞ true
// console.log(isSubset([8, 9], [7, 1, 9, 8, 4, 5, 6])); // ➞ true
// console.log(isSubset([1, 2], [3, 5, 9, 1])); // ➞ false

//67
function triangle(n) {
    return n * (n + 1) / 2
}
// console.log(triangle(1)); // ➞ 1
// console.log(triangle(6)); // ➞ 21
// console.log(triangle(215) ); //➞ 23220

//68
function arrayOfMultiples(num, length) {
    let res = [];

    for (let i = 1; i <= length; i++) {
        res.push(i * num)
    }
    return res
}
// console.log(arrayOfMultiples(7, 5) ); //➞ [7, 14, 21, 28, 35]
// console.log(arrayOfMultiples(12, 10)); // ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
// console.log(arrayOfMultiples(17, 6)); // ➞ [17, 34, 51, 68, 85, 102]


//69
function count(n) {
    let res = 0;
    let numString = n.toString();
    for (let i = 0; i < numString; i++) {
        if (numString[i] === "0") {
            res += 1;
        }
        // no solve
    }
    return res
}

// console.log(count(318)); // ➞ 3
// console.log(count(-92563)); // ➞ 5
// console.log(count(4666)); //➞ 4
// console.log(count(-314890)); // ➞ 6
// console.log(count(654321)); //➞ 6
// console.log(count(638476)); //➞ 6

//70
function jazzify(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes("7")) {
            res.push(arr[i]);
        } else {
            res.push(arr[i] + 7)
        }

    }

    return res
}
// console.log(jazzify(["G", "F", "C"]) ); //➞ ["G7", "F7", "C7"]
// console.log(jazzify(["Dm", "G", "E", "A"]) ); // ➞ ["Dm7", "G7", "E7", "A7"]
// console.log(jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"]) ); // ➞ ["F7", "E7", "A7", "Ab7", "Gm7", "C7"]
// console.log(jazzify([])  ); //➞ []

//71
function reverseWords(str) {

    let words = str.split(" ");
    let reverseWords = [];
    for (let i = words.length - 1; i >= 0; i--) {
        if (words[i] !== "") {
            reverseWords.push(words[i]);
        }
    }
    return reverseWords.join(" ")
}
// console.log(reverseWords(" the sky is blue")); // ➞ "blue is sky the"
// console.log(reverseWords("hello   world!  ") ); // ➞ "world! hello"
// console.log(reverseWords("a good example")); //  ➞ "example good a"

//72
function isSpecialArray(arr) {
    // let res = [];
    let evenIndex = [];
    let oddIndex = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenIndex.push(i);
        } else {
            oddIndex.push(i);
        }
        if (evenIndex[i] === oddIndex[i]) {
            return true;
        } else {
            return false
        }
    }

    return res

    // No solve
}
// console.log(isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3])); // ➞ true
// // Even indices: [2, 4, 6, 6]; Odd indices: [7, 9, 1, 3]

// console.log(isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3])); // ➞ false
// // Index 2 has an odd number 9.

// console.log(isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3])); // ➞ false
// // Index 3 has an even number 8.

// 73
function  calculateLosses(obj) {
	let res = 0;

let value = Object.values(obj);

if(value.length === 0 ){
    return "Lucky you!"
}
for(let i = 0; i<value.length; i++){
    res += value[i];
}
return res;
}
// const stolenItems1 = {
//     tv: 30,
//     skate: 20,
//     stereo: 50,
//   } //➞ 100
// console.log(calculateLosses(stolenItems1));  
//   const stolenItems2 = {
//     painting: 20000,
//   } //➞ 20000
//   console.log(calculateLosses(stolenItems2));
  
//   const stolenItems3 = {} //➞ "Lucky you!"
//   console.log(calculateLosses(stolenItems3));

//74
function factorChain(arr){
    for(let i = 0; i<arr.length; i++){
        if(arr[i] % arr.length -1 === 0){
            return true;
        }else{
            return false
        }
    }
}
// console.log(factorChain([1, 2, 4, 8, 16, 32]) ); //➞ true
// console.log(factorChain([1, 1, 1, 1, 1, 1]) );//➞ true
// console.log(factorChain([2, 4, 6, 7, 12]) ); //➞ false
// console.log(factorChain([10, 1])); // ➞ false

//75
function allTruthy(...arr){

 return arr.every(value => Boolean(value))   
}
// console.log(allTruthy(true, true, true) ); //➞ true
// console.log(allTruthy(true, false, true)); // ➞ false
// console.log(allTruthy(5, 4, 3, 2, 1, 0) ); //➞ false

//76
function progressDays(arr){
let res = 0; 
for(let i = 0; i<arr.length; i++){
    if(arr[i]> arr[i-1]){
        res += 1
    }
}
return res
}
// console.log(progressDays([3, 4, 1, 2])); // ➞ 2
// // There are two progress days, (3->4) and (1->2)
// console.log(progressDays([10, 11, 12, 9, 10])); // ➞ 3
// console.log(progressDays([6, 5, 4, 3, 2, 9])); // ➞ 1
// console.log(progressDays([9, 9]) );  //➞ 0

//78
function uniqueSort(arr){
    let res = [];

    for(let i = 0; i<arr.length; i++){
        if(res.indexOf(arr[i]) === -1){
            res.push(arr[i])
        }else{
            
        }
    }
    return res.sort()
}

// console.log(uniqueSort([1, 2, 4, 3])); // ➞ [1, 2, 3, 4]
// console.log(uniqueSort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2])); // ➞ [1, 2, 3, 4]
// console.log(uniqueSort([6, 7, 3, 2, 1])); // ➞ [1, 2, 3, 6, 7]

//79
function  mean(n){
    let res = 0;
    let count = 0;
    let num =  n.toString()
    for(let i = 0; i<num.length; i++){
let digit = parseInt(num[i]);
 res += digit;
 count++;
    }
    return Math.floor(res /count)
}
// console.log(mean(42)); //➞ 3
// console.log(mean(12345)); // ➞ 3
// console.log(mean(666) ); //➞ 6


function inBox(arr){
    let res = 0; 
    for(let i = 0; i<arr.length; i++){
        if(arr[i].includes("*")){
          return true;
        
        }
    }
    
    return false
}
// console.log(inBox([
//     "###",
//     "#*#",
//     "###"
//   ])); // ➞ true
  
//   console.log(inBox([
//     "####",
//     "#* #",
//     "#  #",
//     "####"
//   ])); // ➞ true
  
//   console.log(inBox([
//     "*####",
//     "# #",
//     "#  #*",
//     "####"
//   ])); // ➞ false
  
//   console.log(inBox([
//     "#####",
//     "#   #",
//     "#   #",
//     "#   #",
//     "#####"
//   ])); //➞ false

// 80
function makeTitle(str){
    let words =str.split(" ")
    let res = [];
    for(let i = 0; i<words.length; i++){
    if(words[i].length > 0){
        res.push(str[i][0].toUpperCase()  + words[i].slice(1).toLowerCase());
    } 
    }
    return res.join(" ")
}

// console.log(makeTitle("This is a title") ); //➞ "This Is A Title"
// console.log(makeTitle("capitalize every word") ); // ➞ "Capitalize Every Word"
// console.log(makeTitle("I Like Pizza")  ); //➞ "I Like Pizza"
// console.log(makeTitle("PIZZA PIZZA PIZZA") ); // ➞ "PIZZA PIZZA PIZZA"
