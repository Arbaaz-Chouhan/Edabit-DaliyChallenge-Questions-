// 1 

function calculateExponent(n, power) {
    let sum = 1;
    for (let i = 0; i < power; i++) {
        sum *= power;
    }
    return sum
}
// console.log(calculateExponent(5, 5) )// 3125
// console.log(calculateExponent(10, 10))  // 10000000000
// console.log(calculateExponent(3, 3) )// 27


// 2

function findIndex(arr, str) {
    return arr.indexOf(str)

}
// console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh")); // 2
// console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue")); // 1
// console.log(findIndex(["a", "g", "y", "d"], "d")); // 3
// console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple")); // 0


// 3 
function length(str) {
    let TotalLength = 0;
    TotalLength += str.length;
    return TotalLength
}

// console.log( length("Hello World")); //   //11
// console.log( length("Edabit") ); //  //6
// console.log( length("wash your hands!")); //   //16


// 4 
let arr = [1, 2, 8]

let [first, second, last] = arr

// console.log(first);
// console.log(last);

// 5

function getSumOfItems(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum
}
// console.log(getSumOfItems([2, 7, 4])); //➞ 13
// console.log(getSumOfItems([45, 3, 0]) ); // 48
// console.log(getSumOfItems([-2, 84, 23]));   //105


// 6  

function uploadCount(date, item) {
    let count = 0;

    for (let i = 0; i < date.length; i++) {
        let word = date[i].split(" ")

        if (word[0] === item) {
            count++;
        }
    }
    return count
}
// console.log(uploadCount(["Sept 22", "Sept 21", "Oct 15"], "Sept")); // ➞ 2
// console.log(uploadCount(["Sept 22", "Sept 21", "Oct 15"], "Oct")); //➞ 1

function nTablesPlusOne(n) {
    let res = "";
    for (let i = 1; i <= 10; i++) {
        res  += n *i  +1  + ","
    }

    return res
}
// console.log(nTablesPlusOne(7)); //➞ "8,15,22,29,36,43,50,57,64,71"
// console.log(nTablesPlusOne(1)); //➞ "2,3,4,5,6,7,8,9,10,11"
// console.log(nTablesPlusOne(3)); //➞ "4,7,10,13,16,19,22,25,28,31"