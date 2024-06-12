// 1 Even Number Generator
// Create a function that finds all even numbers from 1 to the given number.

// Examples
function findEvenNums(arr){
    let main = [];

    for(let i = 0; i<arr.length; i++){
        if(arr[i] /2 ){
            main.push(arr[i])
        }
    }
    return  main
}
// console.log(findEvenNums([8]));  // ➞ [2, 4, 6, 8]
// console.log(findEvenNums([4]));  // ➞ [2, 4]
// console.log(findEvenNums([2]));  // ➞ [2]

// 2 Retrieve the Last N Elements
// Write a function that retrieves the last n elements from an array.

// Examples
function last(arr,item){
    // let main =  [];

   if(arr < item){
  return arr

}
}
// console.log(last([1, 2, 3, 4, 5], 1) ); //➞ [5]
// console.log(last([4, 3, 9, 9, 7, 6], 3)); // ➞ [9, 7, 6]
// console.log(last([1, 2, 3, 4, 5], 7)); // ➞ "invalid"
// console.log(last([1, 2, 3, 4, 5], 0) );//➞ []

// 3 Say Hello to Guests
// In this exercise you will have to:

// Take a list of names.
// Add "Hello" to every name.
// Make one big string with all greetings.
// The solution should be one string with a comma in between every "Hello (Name)".

// Examples
function greetPeople (item){
 let main =  "";

 for(let i =  0; i<item.length; i++){
    main += "hello" + " "+ item[i]
    if(i <item.length -1){
        main += " ,"
    }
 }
 return main
}
console.log(greetPeople(["Joe"])); // ➞ "Hello Joe"
console.log(greetPeople(["Angela", "Joe"])); // ➞ "Hello Angela, Hello Joe"
console.log(greetPeople(["Frank", "Angela", "Joe"])); // ➞ "Hello Frank, Hello Angela, Hello Joe"
  
// 4 Lexicographically First and Last
// Write a function that returns the lexicographically first and lexicographically last rearrangements of a lowercase string. Output the results in the following manner:

// firstAndLast(string) ➞ [first, last]
// Examples

function firstAndLast(str) {
    const c = str.split('').sort().join('');
    const d = str.split('').sort().reverse().join('');
    return [c, d];
  }
  
//   console.log(firstAndLast("marmite")); // ➞ ["aeimmrt", "trmmiea"]
//   console.log(firstAndLast("bench")); // ➞ ["bcehn", "nhecb"]
//   console.log(firstAndLast("scoop")); // ➞ ["coops", "spooc"]
 

 // 5 Same Number of Unique Elements
// Write a function that returns true if two arrays have the same number of unique elements, and false otherwise.

// To illustrate:

// arr1 = [1, 3, 4, 4, 4]
// arr2 = [2, 5, 7]
// In arr1, the number 4 appears three times, which means it contains three unique elements: [1, 3, 4]. Since arr1 and arr2 both contain the same number of unique elements, this example would return true.

// Examples
function same(arr,item){
    for(let i = 0; i<item.length; i++){
if(arr[i] == item[i]){
    return true;

}else{
    return false
}
    }
}
// console.log(same([1, 3, 4, 4, 4], [2, 5, 7])); // ➞ true
// console.log(same([9, 8, 7, 6], [4, 4, 3, 1])); // ➞ false
// console.log(same([2], [3, 3, 3, 3, 3])); // ➞ true

// 6 Recursion: Array Sum
// Write a function that finds the sum of an array. Make your function recursive.

// Examples
function sum(arr){
    let total =  0;
    for(let i =  0; i<arr.length; i++){
        total +=  arr[i]
    }
    return total
}

// console.log(sum([1, 2, 3, 4]) ); //➞ 10
// console.log(sum([1, 2])); // ➞ 3
// console.log(sum([1])); // ➞ 1
// console.log(sum([])); // ➞ 0

// 7 Find the Smallest and Biggest Numbers
// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

// Examples
function minMax(arr){
    const a = Math.min(...arr);
    const b = Math.max(...arr);

    return [a,b]
}
// console.log(minMax([1, 2, 3, 4, 5])); // ➞ [1, 5]
// console.log(minMax([2334454, 5])); // ➞ [5, 2334454]
// console.log(minMax([1]) ); //➞ [1, 1]
