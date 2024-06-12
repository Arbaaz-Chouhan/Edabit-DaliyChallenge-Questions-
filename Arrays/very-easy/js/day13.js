// 1 Filter by Digit Length
//Create a function that filters out an array to include numbers that only have a certain number of digits.

// // Examples
function filterDigitLength(arr,item){
    return  arr.filter(Number => String(Number).length === item )
}
// console.log(filterDigitLength([88, 232, 4, 9721, 555], 3)); // ➞ [232, 555]
// // Include only numbers with 3 digits.

// console.log(filterDigitLength([2, 7, 8, 9, 1012], 1) ); //➞ [2, 7, 8, 9]
// // Include only numbers with 1 digit.

// console.log(filterDigitLength([32, 88, 74, 91, 300, 4050], 1)); // ➞ []
// // No numbers with only 1 digit exist => return empty array.

// console.log(filterDigitLength([5, 6, 8, 9], 1) ); //➞ [5, 6, 8, 9]
// // All numbers in the array have 1 digit only => return original array.


// 2 Even Odd Partition
// Write a function that partitions the array into two subarrays: one with all even integers, and the other with all odd integers. Return your result in the following format:

// [[evens], [odds]]
// Examples

function evenOddPartition(num){
let even = [];
let odd = [];

for(let i = 0; i<num.length; i++){
    if(num[i] % 2 == 0){
        even.push(num[i])
    }else{
        odd.push(num[i])
    }
}
return [even, odd]
}
// console.log(evenOddPartition([5, 8, 9, 2, 0])); // ➞ [[8, 2, 0], [5, 9]]
// console.log(evenOddPartition([1, 0, 1, 0, 1, 0]));// ➞ [[0, 0, 0], [1, 1, 1]]
// console.log(evenOddPartition([1, 3, 5, 7, 9]) );// ➞ [[], [1, 3, 5, 7, 9]]
// console.log(evenOddPartition([])); //➞ [[], []]

// 3 Fix the Error: Mutating Arrays
// Suppose I want to define a function that removes the last element of an array each time I call it, but does not mutate the original array. Fix the code so that the results are no longer mutating the array.

function minusOne(arr) {
  arr.pop()
  return arr
}
// Examples
// x = [1, 2, 3, 4, 5]
// minusOne(x) ➞ [1, 2, 3, 4]  // 1st time function is called.
// minusOne(x) ➞ [1, 2, 3]  // 2nd time function is called.
// minusOne(x) ➞ [1, 2]  // 3rd time function is called.
// minusOne(x) ➞ [1]  // 4th time function is called.

// // What I want instead:
// minusOne(x) ➞ [1, 2, 3, 4]  // 1st time function is called.
// minusOne(x) ➞ [1, 2, 3, 4]  // 2nd time function is called.
// minusOne(x) ➞ [1, 2, 3, 4]  // 3rd time function is called.
// minusOne(x) ➞ [1, 2, 3, 4]  // 4th time function is called.


// 4  Check Factors
// Write a function that returns true if all integers in an array are factors of a number, and false otherwise.

// Examples
function checkFactors(arr,item){
   
    for(let i = 0; i<arr.length; i++){
        if(item % arr[i] !== 0){
            return false
        }
    }
   
    return true;
}
// console.log(checkFactors([2, 3, 4], 12)); //➞ true
// // Since 2, 3, and 4 are all factors of 12.
// console.log(checkFactors([1, 2, 3, 8], 12)); // ➞ false
// // 8 is not a factor of 12.
// console.log(checkFactors([1, 2, 50], 100)); // ➞ true
// console.log(checkFactors([3, 6], 9)); // ➞ false

// 5 Get the File Extension
// Write a function that maps files to their extension names.

// Examples
function getExtension(arr){
 
  return arr.map(str => str.split(".").pop())  
}
console.log(getExtension(["code.html", "code.css"]));
// ➞ ["html", "css"]

console.log(getExtension(["project1.jpg", "project1.pdf", "project1.mp3"]));
// ➞ ["jpg", "pdf", "mp3"]

console.log(getExtension(["ruby.rb", "cplusplus.cpp", "python.py", "javascript.js"]));
// ➞ ["rb", "cpp", "py", "js"]

// 6 Basic Statistics: Mean
// The mean of a group of numbers is calculated by summing all numbers, and dividing this sum by the total count of numbers in the group. Given a sorted array of numbers, return the mean (rounded to one decimal place).

// Examples
function mean(nums){
    let sum = 0;
    for(let i = 0; i<nums.length; i++){
        
     sum += nums[i]
       
    }
    return sum / nums.length
}
// console.log(mean([1, 6, 6, 7, 8, 8, 9, 10, 10])); // ➞ 7.2
// console.log(mean([1, 3, 8, 9, 9, 10])); // ➞ 6.7
// console.log(mean([2, 3, 3, 6, 6, 8, 9, 10])); // ➞ 5.9

// 7 Product of All Odd Integers
// Create a function that returns the product of all odd integers in an array.

// Examples
function oddProduct(arr){
let product = 1;
for(let i = 0; i<arr.length; i++){
if(arr[i] %  2  !== 0){
      product *= arr[i]
}  
}
return product
}
// console.log(oddProduct([3, 4, 1, 1, 5]));// ➞ 15
// console.log(oddProduct([5, 5, 8, 2, 4, 32])); // ➞ 25
// console.log(oddProduct([1, 2, 1, 2, 1, 2, 1, 2]))// ➞ 1

// 8 Minimum Removals to Make Sum Even
// Create a function that returns the minimum number of removals to make the sum of all elements in an array even.

// Examples
function minimumRemovals(arr){
   
  let min =  Math.min(...arr);

    if(min % 2 === 0 ){
        return 1;
    }else{
    return 0;
  }
}
// console.log(minimumRemovals([1, 2, 3, 4, 5]) );//➞ 1
// console.log(minimumRemovals([5, 7, 9, 11]));// ➞ 0
// console.log(minimumRemovals([5, 7, 9, 12]));// ➞ 1


// 9 Is Sam with Frodo?
// Sam and Frodo need to be close. If they are side by side in the array, your function should return true. If there is a name between them, return false.

// Examples
function middleEarth(arr){
  
  for(let i = 0; i<arr.length; i++){
    if(arr[i] === "Frodo"){
      return true;

    }else{
      return false
    }
  }
}
// console.log(middleEarth(["Frodo", "Sam", "Gandalf"]) ); //➞ true
// console.log(middleEarth(["Frodo", "Saruman", "Sam"]) ); //➞ false
// console.log(middleEarth(["Orc", "Sam", "Frodo", "Legolas"])); // ➞ true
