// 1 Index Shuffle
// Write a function that takes all even-indexed characters and odd-indexed characters from a string and concatenates them together.

// To illustrate:

// indexShuffle("abcd") ➞ "acbd"
// // "ac" (even-indexed) + "bd" (odd-indexed)


function indexShuffle(str) {

    let result = "";
    let envenIndex = "";
    let oddIndex = "";

    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            envenIndex += str[i];

        } else if (i % 2 !== 0) {
            oddIndex += str[i]

        }
        
    }
    result += envenIndex;
    result += oddIndex
    return result;
}

// console.log(indexShuffle("abcdefg")); //➞ "acegbdf"
// console.log(indexShuffle("holiday")); //➞ "hldyoia"
// console.log(indexShuffle("maybe")); // ➞ "myeab"

// 2 Is One Array a Subset of Another?
// Create a function that returns true if the first array is a subset of the second. Return false otherwise.



function isSubset(arr1,arr2){
    
    for(let i = 0; i<arr2.length; i++){
        if (arr1.includes(arr2[i])){
            return true;
         }else{
            return false
         } 
    }

}
// console.log(isSubset([3, 2, 5], [5, 3, 7, 9, 2])); // ➞ true
// console.log(isSubset([8, 9], [7, 1, 9, 8, 4, 5, 6])); // ➞ true
// console.log(isSubset([1, 2], [3, 5, 9, 1]));// ➞ false

// 3 Triangular Number Sequence
// This Triangular Number Sequence is generated from a pattern of dots that form a triangle. The first 5 numbers of the sequence, or dots, are:

// 1, 3, 6, 10, 15
// This means that the first triangle has just one dot, the second one has three dots, the third one has 6 dots and so on.

// Write a function that returns the number of dots when given its corresponding triangle number of the sequence.


function  triangle(n){
for(let i = 0; i<n; i++){
    return  n * (n +1) / 2
}

}
// console.log(triangle(1)); //➞ 1
// console.log(triangle(6)); //➞ 21
// console.log(triangle(215)); // ➞ 23220


// 4 Array of Multiples
// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.


function arrayOfMultiples(num,length){

    let res = [];
    for(let i = 1; i<=length; i++){
        res.push(num * i)
    }
    return res;
}

// console.log(arrayOfMultiples(7, 5)); // ➞[7, 14, 21, 28, 35]
// console.log(arrayOfMultiples(12, 10)); //➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
// console.log(arrayOfMultiples(17, 6) ); //➞ [17, 34, 51, 68, 85, 102]

// 5 Integer Digits Count
// Create a function that counts the integer's number of digits.


function count(num){
    let str = num.toString();
    let count = 0;
    for(let i = 0; i<str.length; i++){
        if((parseInt(str.length) )){
            count++;
        }
    }
    return count;
}
// console.log(count(318)); // ➞ 3
// console.log(count(-92563)); // ➞ 5
// console.log(count(4666) ); //➞ 4
// console.log(count(-314890));// ➞ 6
// console.log(count(654321));  // ➞ 6
// console.log(count(638476));  // ➞ 6

// 6 Instant JAZZ
// Create a function which concatenates the number 7 to the end of every chord in an array. Ignore all chords which already end with 7.


function jazzify(str){
    let  res = [];
    for(let i= 0; i<str.length; i++){
if(str[i].includes('7')){
    res.push(str[i]);
}else{
    res.push(str[i] + 7);
}
        
    }
    return res;
}

// console.log(jazzify(["G", "F", "C"])); // ➞ ["G7", "F7", "C7"]
// console.log(jazzify(["Dm", "G", "E", "A"])); // ➞ ["Dm7", "G7", "E7", "A7"]
// console.log(jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"])); // ➞ ["F7", "E7", "A7", "Ab7", "Gm7", "C7"]
// console.log(jazzify([]) ); //➞ []


// 7 Reverse Words in a String
// Given an input string, reverse the string word by word, the first word will be the last, and so on.


function reverseWords(str){
    let arr =  str.split(" ");
    let res = [];
    for(let i = arr.length -1; i>= 0;  i--){
     res.push(arr[i]);

    }
    return res.join(" ")
}

// console.log(reverseWords(" the sky is blue"))// ➞ "blue is sky the"
// console.log(reverseWords("hello   world!  "))// ➞ "world! hello"
// console.log(reverseWords("a good example")); // ➞ "example good 

// 8 Algebra Sequence — Boxes
// Create a function that takes a number (step) as an argument and returns the amount of boxes in that step of the sequence.

// Box Sequence Image

// Step 0: Start with 0
// Step 1: Add 3
// Step 2: Subtract 1
// Repeat Step 1 & 2 ...

function boxSeq(n){

        return n + (n % 2 *2)
    
}
// console.log(boxSeq(0)); // ➞ 0
// console.log(boxSeq(1)); // ➞ 3
// console.log(boxSeq(2)); // ➞ 2


// 9  Special Arrays
// An array is special if every even index contains an even number and every odd index contains an odd number. Create a function that returns true if an array is special, and false otherwise.


function isSpecialArray(arr){
    // let res = [];
    for(let i = 1; i<arr.length; i++){
    
    if(i % 2 == 0 && arr[i] % 2 !== 0 ){
        return false;

    }else if(i % 2 !== 0 && arr[i] % 2 == 0 ){
        return false
    }
      
    }

    return true

   
}; 
// console.log(isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]) ); //➞ true
// // Even indices: [2, 4, 6, 6]; Odd indices: [7, 9, 1, 3]

// console.log(isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]) ); //➞ false
// // Index 2 has an odd number 9.

// console.log(isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3]) ); //➞ false
// // Index 3 has an even number 8.

// 10 Burglary Series (01): Calculate Total Losses
// You just returned home to find your mansion has been robbed! Given an object of the stolen items, return the total amount of the burglary (number). If nothing was robbed, return the string "Lucky you!".


function calculateLosses(obj){

    let res = 0;
let value = Object.values(obj);
if(value.length === 0){
    return "Lucky you!"
}
for(let i = 0; i<value.length; i++){

res += value[i];

}
return  res

}
// const stolenItems1 = {
//   tv: 30,
//   skate: 20,
//   stereo: 50,
// }   //➞ 100

// console.log(calculateLosses(stolenItems1));

// const stolenItems2 = {
//   painting: 20000,
// } // ➞ 20000
// console.log(calculateLosses(stolenItems2));

// const stolenItems3 = {} //➞ "Lucky you!"

// console.log(calculateLosses(stolenItems3));  


