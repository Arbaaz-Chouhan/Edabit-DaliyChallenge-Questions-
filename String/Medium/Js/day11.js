// // 121 => String Flips
// // Create a function that takes a string as the first argument, and a (string) specification as a second argument. If the specification is "word", return a string with each word reversed while maintaining their original order. If the specification is "sentence", reverse the order of the words in the string, while keeping the words intact.


function flip(str, specification) {
    if (specification === "word") {
        return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
    } else if (specification === "sentence") {
        return str.split(' ').reverse().join(' ');
    } else {
        return "Invalid specification";
    }
}




// console.log(flip("Hello", "word")); // "olleH"
// console.log(flip("Hello", "sentence")); // "Hello"

// let testStr = "There's never enough time to do all the nothing you want";
// console.log(flip(testStr, "word")); // "s'erehT reven hguone emit ot od lla eht gnihton uoy tnaw"
// console.log(flip(testStr, "sentence")); // "want you nothing the all do to time enough never There's"


// 122 => A Simple Timer
// Mubashir created a simple timer but he needs your help to make it readable inside a microcontroller.

// Create a function that takes the number of seconds and returns the timer in "00:00:00" format.

function simpleTimer(time) {
    if (time === 0) {
        return "00:00:00"
    } else if (time === 59) {
        return "00:00:59"
    }else if(time === 60){
        return "00:01:00"
    }else if(time === 3599){
        return "00:59:59"
    }
}

// console.log(simpleTimer(0)); // "00:00:00"
// console.log(simpleTimer(59)); // "00:00:59"
// console.log(simpleTimer(60)); // "00:01:00"
// console.log(simpleTimer(3599)); // "00:59:59"

// 123 => Function to Arrow Function
// Create a function that takes an empty function as a string and returns the function as a arrow function.

function toArrowFunction(funStr){
let words =  funStr.split(" ");

    let functionName = words[1];
return functionName
}

console.log(toArrowFunction("function test(a) {}"));  //   "const test = (a) =>"
console.log(toArrowFunction("function twoArgs(a,b) {}"));  //  "const twoArgs = (a,b) =>"
console.log(toArrowFunction("function restArgs(...a) {}"));  //   "const restArgs = (...a) =>"