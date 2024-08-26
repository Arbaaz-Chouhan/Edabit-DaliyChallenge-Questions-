// 141 => New Word Builder
// Create a function that builds a word from the scrambled letters contained in the first array. Use the second array to establish each position of the letters in the first array. Return a string from the unscrambled letters (that made-up the word).

function wordBuilder(arr1, arr2) {
    let res = [];
    for (let i = 0; i < arr2.length; i++) {
        res.push(arr1[arr2[i]]);
    }
    return res.join("")
}

// console.log(wordBuilder(["g", "e", "o"], [1, 0, 2])); // "ego"
// console.log(wordBuilder(["e", "t", "s", "t"], [3, 0, 2, 1])); // "test"
// console.log(wordBuilder(["b", "e", "t", "i", "d", "a"], [1, 4, 5, 0, 3, 2])); // "edabit"


// 142 => Just Find the Vertex
// Today Juan learned to graph quadratic equations, so he chose to speed up the process and avoid having to write a lot of steps in his notebook to find the vertex. Just help him locate the vertex.

// Ok, I am going to give you some advantages. The first is that you will not have to perform so many steps. The equations will have an easy structure to avoid much complexity.

// Here I will leave you a shorter explanation of how we can find the vertex.

// We have the following equation:

// -5x ^ 2 + 50x -120
// Now we apply the formula to locate the vertex:

// -b / (2 * a)
// We divide our second term by 2 multiplied by the first term. Remember to use the negative sign in b. It would look like this:

// -50 / (2 * -5) = 5
// ... The third term will be insufficient in the challenge, but I wanted to add it to see if it complicates you.

// ... Remember to return the result rounded to zero decimals.

function findVertex(equation) {
    equation = equation.replace(/\s+/g, ''); // Remove all spaces

    const a = parseFloat(equation.split('x^2')[0]);
    const b = parseFloat(equation.split('x^2')[1].split('x')[0]);

    const vertexX = -b / (2 * a);

    return Math.round(vertexX);
}

// console.log(findVertex("-5x^2 + 50x -120")); // 5
// console.log(findVertex("-6x^2 + 36x -72")); // 3
// console.log(findVertex("7x^2 + 14x + 28")); // -1

// 143 =>  Is it a Valid Floating Numeric Character?
// Create a regular expression to check whether the given string is a valid floating numeric character or not.

function isFloatingCharacter(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i].includes(parseFloat(str[i]))) {
            return true
        } else {

        }
    }

    return false
}

// console.log(isFloatingCharacter("12.12")); // true
// console.log(isFloatingCharacter("12.")); // false
// console.log(isFloatingCharacter(".1")); // true
// console.log(isFloatingCharacter("-.1")); // true
// console.log(isFloatingCharacter("abc")); // false


// 144 => rder by Length First
// Graded lexicographic order (grlex order for short) is a way of ordering words that:

// First orders words by length.
// Then orders words of the same size by their dictionary order.
// For example, in grlex order:

// "tray" < "trapped" since "tray" has length 4 while "trapped" has length 7.
// "trap" < "tray" since both have length 4, but "trap" comes before "tray" in the dictionary.
// Given an array of words, return that array in grlex order.

function makeGrlex(arr) {
    return arr.sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length;
        }

        return a.localeCompare(b);
    });
}
// console.log(makeGrlex(["small", "big"])); // ["big", "small"]
// console.log(makeGrlex(["cat", "ran", "for", "the", "rat"])); // ["cat", "for", "ran", "rat", "the"]
// console.log(makeGrlex(["this", "is", "a", "small", "test"])); // ["a", "is", "test", "this", "small"]


// 145 => Count Palindrome Numbers in a Range
// Create a function that returns the number of palindrome numbers in a specified range (inclusive).

// For example, between 8 and 34, there are 5 palindromes: 8, 9, 11, 22 and 33. Between 1550 and 1552 there is exactly one palindrome: 1551.

function countPalindromes(start, end) {
    let count = 0;

    for (let i = start; i <= end; i++) {
        if (isPalindrome(i)) {
            count++;
        }
    }

    return count;
}

function isPalindrome(num) {
    let str = num.toString();
    let reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}
// console.log(countPalindromes(1, 10)); // 9
// console.log(countPalindromes(555, 556)); // 1
// console.log(countPalindromes(878, 898)); // 3