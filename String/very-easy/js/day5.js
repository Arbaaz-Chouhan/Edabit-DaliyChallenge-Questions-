// 56 => Cleaning Up Messy Arrays
// Create a function that takes an array. This array will contain numbers represented as strings.

// Your function should split this array into two new arrays. The first array should contain only even numbers. The second only odd. Then, wrap these two arrays in one main array and return it.

// Return an empty array if there are no even numbers, or odd.

function cleanUpArray(arr) {
    let res = [];
    let evenNumber = [];
    let oddNumber = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNumber.push(arr[i]);
        } else {
            oddNumber.push(arr[i])
        }

    }
    res.push(evenNumber, oddNumber);
    return res
}


// console.log(cleanUpArray(["8"])); // [[8], []]
// console.log(cleanUpArray(["11"])); // [[], [11]]
// console.log(cleanUpArray(["7", "4", "8"])); // [[4, 8], [7]]
// console.log(cleanUpArray(["9", "4", "5", "8"])); // [[4, 8], [9, 5]]

// 57 => Calculate Using String Operation
// Create a function that takes two numbers and a mathematical operator and returns the result.

function calculate(num1, num2, operator) {
    return eval(num1 + operator + num2);
}

// console.log(calculate(4, 9, "+")); // 13
// console.log(calculate(12, 5, "-")); // 7
// console.log(calculate(6, 3, "*")); // 18
// console.log(calculate(25, 5, "/")); // 5
// console.log(calculate(14, 3, "%")); // 2

// 58 => Keyboard Mistakes
// Character recognition software often makes mistakes when documents (especially old ones written with a typewriter) are digitized.

// Your task is to correct the errors in the digitized text. You only have to handle the following mistakes:

// A is misinterpreted as 4
// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

function keyboardMistakes(str) {
    return str.replace(4, "A").replace(5, "S").replace(0, "O").replace(1, "I");
}

// console.log(keyboardMistakes("MUB45H1R")); // "MUBASHIR"
// console.log(keyboardMistakes("DUBL1N")); // "DUBLIN"
// console.log(keyboardMistakes("51NG4P0RE")); // "SINGAPORE"

// 58 => Arithmetic Progression
// In mathematics, an Arithmetic Progression (AP) is a sequence of numbers such that the difference between the consecutive terms is constant. Create a function that takes three arguments:

// First element of the sequence first
// Constant difference between the elements diff
// Total numbers in the sequence n
// Return the first n elements of the sequence with the given common difference diff. The final result should be a string of numbers, separated by comma and space.

function arithmeticProgression(first, diff, n) {
    let res = [];
    for (let i = 0; i < n; i++) {
        res.push(first + i * diff);
    }
    return res
}


// console.log(arithmeticProgression(1, 2, 5)); // "1, 3, 5, 7, 9"
// console.log(arithmeticProgression(1, 0, 5)); // "1, 1, 1, 1, 1"
// console.log(arithmeticProgression(1, -3, 10)); // "1, -2, -5, -8, -11, -14, -17, -20, -23, -26"

// 59 => Return Last Item
// Create a function that returns the last value of the last item in an array or string.

function lastItem(input) {
    return input[input.length - 1];
}

// console.log(lastItem([0, 4, 19, 34, 50, -9, 2]) ); // 2
// console.log(lastItem("The quick brown fox jumped over the lazy dog") ); // "g"
// console.log(lastItem([]) ); // undefined


// 60 => Even and Odd Strings
// Given a one word lowercase string txt, return another string such that even-indexed and odd-indexed characters are grouped and groups are space-separated.

function evenOddString(str) {
    // let words = str.split(" ")
    let evenstr = "";
    let oddstr = "";
    for(let i = 0; i<str.length; i++){
        if(i % 2 === 0){
            evenstr += str[i];
        }else{
            oddstr += str[i];
        }
    }
    return evenstr + "  " + oddstr;
}

console.log(evenOddString("mubashir")); // "mbsi uahr"
// Letters at even indexes = "mbsi"
// Letters at odd indexes = "uahr"
// Join both strings with a space

console.log(evenOddString("edabit")); // "eai dbt"

console.log(evenOddString("airforce")); // "aroc ifre"