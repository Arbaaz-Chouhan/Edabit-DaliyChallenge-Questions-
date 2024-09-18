// 151 =>Split String by Identical Characters
// Create a function that splits a string into an array of identical clusters.

function splitGroups(str) {
    let res = [];
    let currentGroup = str[0];
    for (let i = 1; i < str.length; i++) {
        if (str[i] === str[i - 1]) {
            currentGroup += str[i];
        } else {
            res.push(currentGroup);
            currentGroup = str[i];
        }
    }

    // Push the last group to the result
    res.push(currentGroup);

    return res;
}
// console.log(splitGroups("555"));  // ["555"]
// console.log(splitGroups("5556667788"));  // ["555", "666", "77", "88"]
// console.log(splitGroups("aaabbbaabbab"));  // ["aaa", "bbb", "aa", "bb", "a", "b"]
// console.log(splitGroups("abbbcc88999&&!!!_"));  // ["a", "bbb", "cc", "88", "999", "&&", "!!!", "_"]



// 152 =>Kaprekar Numbers
// A Kaprekar Number is a positive integer that is equal to a number formed by first squaring, then splitting and summing its two lexicographical parts:

// If the quantity of digits of the squared number is even, the left and right parts will have the same length.
// If the quantity of digits of the squared number is odd, then the right part will be the longer half, with the left part being the shorter or equal to zero if the quantity of digits is equal to 1.
// Given a positive integer n implement a function that returns true if it's a Kaprekar number, and false if it's not.

function isKaprekar(num) {
    let square = num * num;
    let numStr = square.toString();

    for (let i = 1; i < numStr.length; i++) {

        let leftPart = parseInt(numStr.slice(0, i));
        let rightPart = parseInt(numStr.slice(i));

        let sum = leftPart + rightPart;


        if (sum === num) {
            return true;
        }
    }

    return false;
}


// console.log(isKaprekar(3)) //9 //false
// // n² = "9"
// // Left + Right = 0 + 9 = 9); // 9 !== 3

// console.log(isKaprekar(5)) //false
// // n² = "25"
// // Left + Right = 2 + 5 = 7); // 7 !== 5

// console.log(isKaprekar(297)) // true
// // n² = "88209"
// // Left + Right = 88 + 209 = 297); // 297 === 297


// 153 => From A to Z
// Given a string indicating a range of letters, return a string which includes all the letters in that range, including the last letter. Note that if the range is given in capital letters, return the string in capitals also!

function gimmeTheLetters(str) {
    let startChar = str[0];
    let endChar = str[str.length - 1];

    let res = "";

    for (let i = startChar.charCodeAt(0); i <= endChar.charCodeAt(0); i++) {
        res += String.fromCharCode(i); // अक्षर जोड़ना
    }

    return res
}

// console.log(gimmeTheLetters("a-z")); // "abcdefghijklmnopqrstuvwxyz"
// console.log(gimmeTheLetters("h-o")); // "hijklmno"
// console.log(gimmeTheLetters("Q-Z")); // "QRSTUVWXYZ"
// console.log(gimmeTheLetters("J-J")); // "J"

// 154 => N-Sized Parts
// Create a function that divides a string into parts of size n.

function partition(str, num) {
    let res = [];
    for (let i = 0; i < str.length; i += num) {
        res.push(str.slice(i, i + num));
    }

    return res
}

// console.log(partition("chew", 2)); // ["ch", "ew"]
// console.log(partition("thematic", 4)); // ["them", "atic"]
// console.log(partition("c++", 2)); // ["c+", "+"]


// 155 => Return the End Letters of Numbers
// Create a function that takes an integer and returns it as an ordinal number. An Ordinal Number is a number that tells the position of something in a list, such as 1st, 2nd, 3rd, 4th, 5th, etc.

function returnEndOfNumber(num) {
    const lastDigit = num % 10;  // Extract the last digit
    const lastTwoDigits = num % 100; // Extract the last two digits

    // Determine the suffix
    let suffix;
    if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
        suffix = 'TH';
    } else if (lastDigit === 1) {
        suffix = 'ST';
    } else if (lastDigit === 2) {
        suffix = 'ND';
    } else if (lastDigit === 3) {
        suffix = 'RD';
    } else {
        suffix = 'TH';
    }

    // Return the original number with the suffix
    return `${num}-${suffix}`;
}


// console.log(returnEndOfNumber(553)); // "553-RD"
// console.log(returnEndOfNumber(34)); // "34-TH"
// console.log(returnEndOfNumber(1231)); // "1231-ST"
// console.log(returnEndOfNumber(22)); // "22-ND"
// console.log(returnEndOfNumber(412)); // "412-TH"

// 156 => Palindromic Dates
// The 2nd of February 2020 is a palindromic date in both dd/mm/yyyy and mm/dd/yyyy format (02/02/2020). Given a date in dd/mm/yyyy format, return true if the date is palindromic in both date formats, otherwise return false.


function isPalindrome(str) {
    return str === str.split('').reverse().join('');
  }
  
  function palindromicDate(date) {
    const [day, month, year] = date.split('/');
    
    
    const ddmmyyyy = `${day}${month}${year}`;
    const mmddyyyy = `${month}${day}${year}`;
    
    return isPalindrome(ddmmyyyy) && isPalindrome(mmddyyyy);
  }
  
console.log(palindromicDate("02/02/2020")); // true
console.log(palindromicDate("11/12/2019")); // false
console.log(palindromicDate("11/02/2011")); // false
// Although 11/02/2011 is palindromic in dd/mm/yyyy format,
// it isn't in mm/dd/yyyy format (02/11/2011)


// 157 => Sort a String by Its Last Character
// Create a function that takes a string of words and return a string sorted alphabetically by the last character of each word.
 
function sortByLast(str){
    let words = str.split(" ");
words.sort((a,b) => {
    return a.slice(-1).localeCompare(b.slice(-1));
})

return words.join(" ")
}

// console.log(sortByLast("herb camera dynamic")); // "camera herb dynamic"

// console.log(sortByLast("stab traction artist approach")); // "stab approach traction artist"

// console.log(sortByLast("sample partner autonomy swallow trend")); // "trend sample partner swallow autonomy"


 // 158 => Cluster Vowels, Single Out Consonants
// Write a function that takes in a word and splits the consonants one by one, but keeps the vowels in a cluster.

function split(str){
    
let vowels =  'aioue';
if(str === vowels){
    return str.join("");
}else{
    return str.split("")
}
}

// console.log(split("beautifully")); // ["b", "eau", "t", "i", "f", "u", "l", "l""y"]
// console.log(split("spoonful")); // ["s", "p", "oo", "n", "f", "u", "l"]
// console.log(split("swimming")); // ["s", "w", "i", "m", "m", "i", "n", "g"]


// 159 => Missing Letters
// Given a string containing unique letters, return a sorted string with the letters that don't appear in the string.

function getMissingLetters(str){
    let  res = "";
    let atoz = "abcdefghijklmnopqrstuvwxyz";
    for(let i = 0; i<atoz.length; i++){
        if(!str.includes(atoz[i])){
            res += atoz[i]
        }
    }

    return res
}

// console.log(getMissingLetters("abcdefgpqrstuvwxyz")); // "hijklmno"
// console.log(getMissingLetters("zyxwvutsrq")); // "abcdefghijklmnop"
// console.log(getMissingLetters("abc")); // "defghijklmnopqrstuvwxyz"
// console.log(getMissingLetters("abcdefghijklmnopqrstuvwxyz")); // ""


// 160 => Find the First Non-Repeated Character
// Create a function that accepts a string as an argument and returns the first non-repeated character.

function firstNonRepeatedCharacter(str){
   let charCount = []
    for (let char of str) {
        if (charCount[char]) {
          charCount[char] += 1;
        } else {
          charCount[char] = 1;
        }
      }
    
      // Step 2: Find the first character with a count of 1
      for (let char of str) {
        if (charCount[char] === 1) {
          return char;
        }
      }
      return false
}

// console.log(firstNonRepeatedCharacter("g")); // "g"
// console.log(firstNonRepeatedCharacter("it was then the frothy word met the round night")); // "a"
// console.log(firstNonRepeatedCharacter("the quick brown fox jumps then quickly blows air")); // "f"
// console.log(firstNonRepeatedCharacter("hheelloo")); // false
// console.log(firstNonRepeatedCharacter("")); // false

