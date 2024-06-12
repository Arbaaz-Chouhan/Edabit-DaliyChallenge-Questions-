// 1 Mubashir Cipher
// In Mubashir Cipher, encoding is done by simply replacing paired letters from the provided key.
// Create a function that takes a string containing the message to be encoded with a fixed given 2D array of letters key.

// There are some variations on the rules of encipherment. One version of the cipher rules are outlined below:

// key = [['m', 'c'], ['u', 'e'], ['b', 'g'], ['a', 'k'],
//     ['s', 'v'], ['h', 'x'], ['i', 'z'], ['r', 'y'],
//     ['p', 'w'], ['l', 'n'], ['o', 'j'], ['t', 'f'], ['q', 'd']]

// message = "edabit is amazing !"

// mubashirCipher(message)) // ➞ "uqkgzf zv kckizlb !"
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
    let res = [];
    let arr = str.split(" ");

    let key = [['m', 'c'], ['u', 'e'], ['b', 'g'], ['a', 'k'],
    ['s', 'v'], ['h', 'x'], ['i', 'z'], ['r', 'y'],
    ['p', 'w'], ['l', 'n'], ['o', 'j'], ['t', 'f'], ['q', 'd']];

    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        let encryptedWord = "";

        for (let j = 0; j < word.length; j++) {
            let originalChar = word[j];
            let encryptedChar = originalChar; // Default value

            // Search for the character in the key and replace it with the paired letter
            for (let k = 0; k < key.length; k++) {
                if (originalChar === key[k][0]) {
                    encryptedChar = key[k][1];
                    break;
                }
            }

            encryptedWord += encryptedChar;
        }

        res.push(encryptedWord);
    }

    return res.join(" ");
}

// console.log(mubashirCipher("mubashir is not amazing")); // ➞ "cegkvxzy zv ljf kckizlb"
// console.log(mubashirCipher("%$ &%")); // ➞ "%$ &%"
// console.log(mubashirCipher("evgeny sh is amazing")); // ➞ "usbulr vx zv kckizlb"


// 2 Convert "Zero" and "One" to "1" and "0"
// Create a function that takes a string as an argument. The function must return a string containing 1s and 0s based on the string argument's words. If any word in the argument is not equal to "zero" or "one" (case insensitive), you should ignore it. The returned string's length should be a multiple of 8, if the string is not a multiple of 8 you should remove the numbers in excess.

// Examples
function textToNumberBinary(str) {
    let res = [];
    let arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "zero") {
            res.push(0);
        } else if (arr[i] === "one") {
            res.push(1)
        }
        else {
            return ""
        }


    }
    return res.join("")
}
// console.log(textToNumberBinary("zero one zero one zero one zero one"));  // ➞ "01010101"
// console.log(textToNumberBinary("Zero one zero ONE zero one zero one"));  // ➞ "01010101"
// console.log(textToNumberBinary("zero one zero one zero one zero one one two"));  // ➞ "01010101"
// console.log(textToNumberBinary("zero one zero one zero one zero three"));  // ➞ ""
// console.log(textToNumberBinary("one one"));  // ➞ ""



// 3 Burglary Series (22): Sign All
// You finally receive the entire stolen list document from the police. You need to sign at the end of the document but also each sub-list corresponding to each room in your house where the items were stolen.

// You are given two arguments, one object with nested objects and a string that corresponds to your name. The object already contains several signature properties, one on the root, the others on each nested object. Return an object with all containing signature values set to your name.

// Examples

function singnAll(obj, name) {
    for (let key in obj) {
        if (typeof obj[key] === "Object" && obj[key] !== null) {
            singnAll(obj[key], name)
        }

        else if (key === "signature") {
            obj[key] = name;
        }
    }

    return obj
}

const obj = {
    kitchen: {
        painting: 100,
        piano: 1000,
        signature: "",
    },
    bathroom: {
        stereo: 220,
        signature: "",
    },
    signature: "",
};

// console.log(singnAll(obj, "Rocky"));



// 4 Pluralize!
// Given a list of words in the singular form, return a set of those words in the plural form if they appear more than once in the list.

// Examples
function pluralize(arr) {
    let res = [];

    for (let i = 0; i < arr.length; i++) {
        if (res.indexOf(arr[i]) === -1) {
            res.push(arr[i]);
        }
    }


    return res
}
// console.log(pluralize(["cow", "pig", "cow", "cow"]));//➞ ["cows", "pig"]
// console.log(pluralize(["table", "table", "table"])); // ➞ ["tables"]
// console.log(pluralize(["chair", "pencil", "arm"])); //➞ ["chair", "pencil", "arm"]


// 5 Pile of Cubes
// Mubashir needs your help to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n^3, the cube above will have volume of (n-1)^3 and so on until the top which will have a volume of 1^3.

// Given the total volume m of the building, can you find the number of cubes n required for the building?

// In other words, you have to return an integer n such that:

// n^3 + (n-1)^3 + ... + 1^3 == m
// Return null if there is no such number.

// Examples

function pileCubes(m) {
    let n = 1;
    let totalVolume = 0;

    while (totalVolume < m) {
        totalVolume += Math.pow(n, 3);
        if (totalVolume === m) {
            return n;
        }
        n++;
    }


    return null;
}

// console.log(pileCubes(1071225));          // ➞ 45
// console.log(pileCubes(4183059834009));    // ➞ 2022
// console.log(pileCubes(16));               // ➞ null


// 6 Instances of the Fibonacci Sequence
// Create a function that takes a number as an argument and returns n instances of the Fibonacci sequence as an array.

// Fibonacci numbers: F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1. So the easy explanation is: The next element is the sum of the two previous elements.

// If you want to read more about this sequence, take a look at the On-Line Encyclopedia of Integer Sequences. Fibonacci numbers are strongly related to the golden ratio. See the OEIS and Wikipedia links in the resources tab.

// Examples

function fibSeq(n) {
    let sequence = [];

    // Handle edge case where n is 0
    if (n === 0) {
        return sequence;
    }

    // Add initial Fibonacci numbers
    sequence.push(0);
    if (n > 1) {
        sequence.push(1);
    }

    // Generate subsequent Fibonacci numbers
    for (let i = 2; i < n; i++) {
        let nextFib = sequence[i - 1] + sequence[i - 2];
        sequence.push(nextFib);
    }

    return sequence;
}

// console.log(fibSeq(4)); // ➞ [0, 1, 1, 2]
// console.log(fibSeq(7)); // ➞ [0, 1, 1, 2, 3, 5, 8]
// console.log(fibSeq(0)); // ➞ []



