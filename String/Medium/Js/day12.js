// 131 => Replacing Letters with Hashes
// Write a function that replaces all letters within a specified range with the hash symbol #.

function replace(str1, str2) {
  let res = "";
  let startChar = str2.charAt(0);
  let endChar = str2.charAt(2);

  for (let i = 0; i < str1.length; i++) {
    let prevChar = str1[i - 1];
    let nextChar = str1[i + 1];

    if ((prevChar && prevChar >= startChar && prevChar <= endChar) ||
      (nextChar && nextChar >= startChar && nextChar <= endChar)) {
      res += "#";
    } else {
      res += str1[i];
    }
  }

  return res;
}

// console.log(replace("abcdef", "c-e")); // "ab###f"
// console.log(replace("rattle", "r-z")); // "#a##le"
// console.log(replace("microscopic", "i-i")); // "m#croscop#c"
// console.log(replace("", "a-z")); // ""


// 132 => Number of Two or More Consecutive Ones
// Create a function that counts the number of blocks of two or more adjacent 1s in an array.


function countOnes(arr) {
  let count = 0;
  let consecutiveOnes = 0;

  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === 1) {
      consecutiveOnes++;
    } else {
      if (consecutiveOnes >= 2) {
        count++;
      }
      consecutiveOnes = 0;
    }
  }

  return count;
}

//   console.log(countOnes([1, 0, 0, 1, 1, 0, 1, 1, 1])); //  2
//   console.log(countOnes([1, 0, 1, 0, 1, 0, 1, 0])); //  0
//   console.log(countOnes([1, 1, 1, 1, 0, 0, 0, 0])); //  1
//   console.log(countOnes([0, 0, 0])); //  0


// 133 =>  A Letter's Best Friend
// Given a string, return if a given letter always appears immediately before another given letter.

// Worked Example
// bestFriend("he headed to the store", "h", "e")  true

// All occurences of "h": ["he", "headed", "the"]
// All occurences of "h" have an "e" after it.
// Return true

function bestFriend(str, a, b) {

  for (let i = 0; i < str.length; i++) {
    if (str[i] === a) {
      if (str[i + 1] !== b) {
        return false;
      }
    }

  }
  return true
}

// console.log(bestFriend("he headed to the store", "h", "e")); //  true
// console.log(bestFriend("i found an ounce with my hound", "o", "u")); //  true
// console.log(bestFriend("we found your dynamite", "d", "y")); //  false


// 134 => Letters Only
// Check if the given string consists of only letters and spaces and if every letter is in lower case.

function lettersOnly(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      return false
    } else {
      return true
    }
  }

}

// console.log(lettersOnly("JAVACRIPT")); // false
// console.log(lettersOnly("javascript")); // true
// console.log(lettersOnly("12321313")); // false
// console.log(lettersOnly("i have spaces")); // true
// console.log(lettersOnly("i have numbers(1-10)")); // false
// console.log(lettersOnly("")); // false

// 135 => Partially Hidden String
// Create a function that takes a phrase and transforms each word using the following rules:

// Keep first and last character the same.
// Transform middle characters into a dash -.

function partiallyHide(str) {
  let words = str.split(" ");
  let res = "";
  for (let i = 0; i < words.length; i++) {
    res += words[i].slice(0, 1);
    let letter = words[i].slice(1, -1);

    for (let j = 0; j < letter.length; j++) {
      res += "-"
    }
    res += words[i].slice(-1) + " ";

  }
  return res
}

// console.log(partiallyHide("skies were pretty")); // "s---s w--e p----y"
// console.log(partiallyHide("red is not my color")); // "r-d is n-t my c---r"
// console.log(partiallyHide("She rolled her eyes")); // "S-e r----d h-r e--s"
// console.log(partiallyHide("Harry went to fight the basilisk")); // "H---y w--t to f---t t-e b------k"


// 136 => Index Filtering
// Create a function that takes two inputs: idx (an array of integers) and str (a string). The function should return another string with the letters of str at each index in idx in order.

function indexFilter(idx, str) {
  let result = '';
  for (let i = 0; i < idx.length; i++) {
    // If index is negative, adjust it to refer from the end of the string
    let index = idx[i] < 0 ? str.length + idx[i] : idx[i];
    result += str[index];
  }
  return result.toLowerCase();
}

// console.log(indexFilter([7, -1, 5, 1], "She is the love of my love")); // Output: "tesh"
// console.log(indexFilter([4, -7, -13, -11, -2, 0], "Relax and stay calm to avoid failures")); // Output: "xavier"
// console.log(indexFilter([9, -9, 2, 27, 36, 6, 5, 13, -1, 2, 0, 30, 2], "That's life, I've got you under my skin")); // Output: "frank sinatra"


// 137 => Word Riddles
// What does the word LFAND represent? It represents the word Finland, because F is in LAND!

// Create a function which replicates this to create brand new original word riddles! For the purposes of this challenge, take the string of letters before the word "in", and insert it into the 2nd letter position of the word formed after the word "in".

// See the examples below for further clarity :)

function makeWordRiddle(word) {
  const index = word.toLowerCase().indexOf("in");
  const beforeIn = word.slice(0, index);
  const afterIn = word.slice(index + 2);
  const result = afterIn.charAt(0) + beforeIn + afterIn.slice(1);
  return result.toUpperCase();
}


// console.log(makeWordRiddle("Finland"));  // LFAND
// console.log(makeWordRiddle("dinner"));   // NDER
// console.log(makeWordRiddle("tkinter"));  // TTKER
// console.log(makeWordRiddle("STRINGS"));  // GSTRS


// 138 =>  Remix the String(
// Create a function that takes both a string and an array of numbers as arguments. Rearrange the letters in the string to be in the order specified by the index numbers. Return the "remixed" string.

function remix(str, arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res[arr[i]] = str[i];
  }

  return res.join("")
}


// console.log(remix("abcd", [0, 3, 1, 2])); // "acdb"
// // The string you'll be returning will have: "a" at index 0, "b" at index 3, "c" at index 1, "d" at index 2, because the order of those characters maps to their corresponding numbers in the index array.
// console.log(remix("PlOt", [1, 3, 0, 2])); // "OPtl"
// console.log(remix("computer", [0, 2, 1, 5, 3, 6, 7, 4])); // "cmourpte"

// 139 => Evaluating Factorials
// Create a function that takes an array of factorial expressions and returns their sum.

// Examples
function evalFactorial(n){
  if(n === 0 || n === 1){
    return 1;
  }else{
    return n * evalFactorial(n-1)
  }
}

// console.log(evalFactorial(["2!", "3!"])); // 8
// console.log(evalFactorial(["5!", "4!", "2!"])); // 146
// console.log(evalFactorial(["0!", "1!"])); // 2



// 140 => Amazing Alliteration
//Alliteration refers to a sequence of words that begin with the same letter. For this exercise, a sentence is correctly alliterated if all words strictly greater than 3 characters begin with the same letter.

// function alliterationCorrect(str){
//   for(let i = 0; i<str.length; i++){
//     if(){}
//   }
// }

// console.log(alliterationCorrect("She swam to the shore.")); // true
// // All words >= 4 letters long begins with "s"

// console.log(alliterationCorrect("Maybel manages money well.")); // false
// // "well" does not begin with an "m"

// console.log(alliterationCorrect("He helps harness happiness.")); // true

// console.log(alliterationCorrect("There are many animals.")); // false


