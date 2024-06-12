// 1 Chinese Zodiac
// Create a function that takes a year as an argument and returns the corresponding Chinese zodiac.

// Examples
function chineseZodiac(arr) {
    switch (arr) {
        case 2021:
            return ("OX");
            break;

        case 2020:
            return "Rat";
            break;

        case 1933:
            return " Rooster";
            break;
    }
}
// console.log(chineseZodiac(2021));   ///➞ "Ox"
// console.log(chineseZodiac(2020));   ///➞ "Rat"
// console.log(chineseZodiac(1933));   ///➞ "Rooster"


//2Tallest Birthday Cake Candles
// You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

// Examples
function birthdayCakeCandles(candles) {

    let maxheight = Math.max(...candles);
    let tallestCandles = candles.filter(candle => candle === maxheight);

    return tallestCandles.length
}
// console.log(birthdayCakeCandles([4, 4, 1, 3])); //➞ 2
// The maximum height candles are four units high.
// There are two of them, so you return 2.

// console.log(birthdayCakeCandles([3, 2, 1, 3])); // ➞ 2

// console.log(birthdayCakeCandles([82, 49, 82, 82, 41, 82, 15, 63, 38, 25])); //➞ 4

// 3 Sum of Minimums
// Create a function that takes a 2D array arr and returns the sum of the minimum value in each row.

// Examples

([
    [1, 2, 3, 4, 5],
    [5, 6, 7, 8, 9],
    [20, 21, 34, 56, 100]
])
//➞ 26
function sumMinimums(arr) {
    // return arr[0]
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let minvalue = Math.min(...arr[i]);
        sum += minvalue;
    }
    return sum;

}

// console.log(sumMinimums([1, 2, 3, 4, 5])); 
// console.log(sumMinimums([5, 6, 7, 8, 9])); 
// console.log(sumMinimums([20, 21, 34, 56, 100])); 

// minimum value of the first row is 1
// minimum value of the second row is 5
// minimum value of the third row is 20

//4 Cleaning Up Messy Arrays
// Create a function that takes an array. This array will contain numbers represented as strings.
// Your function should split this array into two new arrays. The first array should contain only even numbers. The second only odd. Then, wrap these two arrays in one main array and return it.
// Return an empty array if there are no even numbers, or odd.

// Examples

function cleanUpArray(arr) {
    const evenNumber = [];
    const oddNumber = [];

    for (let i = 0; i < arr.length; i++) {
        const num = Number(arr[i]);

        if (num) {
            if (num % 2 == 0) {
                evenNumber.push(num)
            } else {
                oddNumber.push(num)
            }
        }
    }
    return [evenNumber, oddNumber]

}
// console.log(cleanUpArray(["8"]) ); //➞ [[8], []]
// console.log(cleanUpArray(["11"]));  //➞ [[], [11]]
// console.log(cleanUpArray(["7", "4", "8"]));  //➞ [[4, 8], [7]]
// console.log(cleanUpArray(["9", "4", "5", "8"]));  //➞ [[4, 8], [9, 5]]

//5 Largest Numbers
// Create a function that takes two arguments of an array of numbers arr and a constant number n and returns the n largest numbers from the given array.

// Examples
function largestNumbers(n,arr) {
    let res = [];
    for (let i = 1; i < arr.length; i++) {
        let maxNumber = arr.slice(0,n);
        res.push(maxNumber)

    }
    return res.sort()
}

// console.log(largestNumbers(2, [4, 3, 2, 1]));  //➞ [3, 4]
// console.log(largestNumbers(2, [7, 19, 4, 2])) //➞ [19]
// console.log(largestNumbers(3, [14, 12, 57, 11, 18, 16])); //➞ [16, 18, 57]
// console.log(largestNumbers(0, [1, 3, 4, 2]));  //➞ []

// 6 Factors of a Given Number
// Create a function that finds each factor of a given number n. Your solution should return an array of the number(s) that meet this criteria.

// Examples

function findFactors(n) {

    let factor = [];

    for (let i = 1; i <= n; i++) {
        if (n % 1 == 0) {
            factor.push(i)
        }
    }
    return factor

}
// console.log(findFactors(9));  //➞ [1, 3, 9]
// // 9 has three factors 1, 3 and 9
// console.log(findFactors(12));  /// ➞ [1, 2, 3, 4, 6, 12]
// console.log(findFactors(20));  /// ➞ [1, 2, 4, 5, 10, 20]
// console.log(findFactors(0) );  ///➞ []
// // 0 has no factors


// 10 Trimmed Averages
// Given an array of numbers, remove the largest and smallest numbers, and calculate the average of the remaining numbers.

// Examples


function trimmedAverages(arr) {
    // let sum = 0;
    // for (let i = 0; i < arr.length; i++) {
    //     let MinNum  =  Math.min(...arr[i]);
    //     let MaxNum = Math.max(...arr[i]);
         
    // }
    // return sum

}

// console.log(trimmedAverages([4, 5, 7, 100])); // ➞ 6
// // Average of 5 and 7

// console.log(trimmedAverages([10, 25, 5, 15, 20])); /// ➞ 15
// // Average of 10, 15 and 20

// console.log(trimmedAverages([1, 1, 1]));// ➞ 1
// //1