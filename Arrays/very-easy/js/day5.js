//1 Burglary Series (14): Adjectives Total
// You call your spouse in anger and a "little" argument takes place. Count the total amount of insults used. Given an object of insults, return the total amount of insults used.

// Examples

function totalAmountAdjectives(obj){
let total = 0;
const keys = Object.keys(obj);
for(let i = 0; i<keys.length; i++){
    let key =  keys[i];
   let value = obj[key];
    if( typeof value === "string"){
        total++;
    }
}
return total

}
// console.log(totalAmountAdjectives({ a: "moron" })); //➞ 1
// console.log(totalAmountAdjectives({ a: "idiot", b: "idiot", c: "idiot" })); //➞ 3
// console.log(totalAmountAdjectives({ a: "moron", b: "scumbag", c: "moron", d: "dirtbag" })); //➞ 4

//2 First Class, Second Class and Third Class Levers
// Levers are simple machines with a rigid beam and a fulcrum. From the picture below, you can see that there are 3-types of levers: first class, second class and third class.

// In a first class lever, the fulcrum is situated in the middle with the effort and the load being positioned opposite of each other.
// In a second class lever, the fulcrum is situated in the right with the effort on the left and the load in the middle.
// In a third class lever, the fulcrum is situated in the left with the effort being in the middle and the load being on the right.


// Given an array that contains the fulcrum "f", the effort "e", and the load "l", write a function that determines whether or not the array shows a first class lever, second class lever, or a third class lever.

// Examples
function determineLever(arr) {
    switch (arr[1]) {
        case 'f':
            console.log("first class lever");
            break
        case 'l':
            console.log("second class lever");
            break
        case 'e':
            console.log("third class lever");
            break
    }
}

// determineLever(["e", "f", "l"])  //➞ first class lever
// determineLever(["e", "l", "f"])  //➞ "second class lever"
// determineLever(["f", "e", "l"])  //➞ "third class lever"

//3 Recreating the String.length Property
// Create a function which returns the length of a string, WITHOUT using String.length property.

// Examples
function length1(arr) {
// return arr.length
   let main = 0
    for (let i = 0; i < arr.length; i++) {
         main += arr[i].length
    }
   return main
}
// console.log(length1("Hello World")); //➞ 11
// console.log(length1("Edabit")); //➞ 6
// console.log(length1("wash your hands!")); // ➞ 16

//4 Half, Quarter and Eighth
// Create a function that takes a number and return an array of three numbers: half of the number, quarter of the number and an eighth of the number.

// Examples
function halfQuarterEighth(number){
    half = number /2;
    quarter = number/4;
    eighth = number /8

    return [half,quarter ,eighth]

}
// console.log(halfQuarterEighth(6) ); //➞ [3, 1.5, 0.75]
// console.log(halfQuarterEighth(22)); // ➞ [11, 5.5, 2.75]
// console.log(halfQuarterEighth(25)); // ➞ [12.5, 6.25, 3.125]


//5 Shapes With N Sides
// Create a function that takes a whole number as input and returns the shape with that number's amount of sides. Here are the expected outputs to get from these inputs.

// Inputs	Outputs
// Examples

function nSidedShape(e) {
    const shape = {
        1: "circle",
        2: "semi-circle",
        3: "triangle",
        4: "square",
        5: "pentagon",
        6: "hexagon",
        7: "heptagon",
        8: "octagon",
        9: "nonagon",
        10: "decagon",
    }
    return shape[e]
}
// console.log(nSidedShape(3));  //➞ "triangle"
// console.log(nSidedShape(1));  //➞ "circle"
// console.log(nSidedShape(9));  //➞ "nonagon"

//6 Multiply Every Array Item by Two
// Create a function that takes an array with numbers and return an array with the elements multiplied by two.

// Examples
function getMultipliedArr(arr){
    // return arr.map(item => item *2);
    let main = [];
    for(let i = 0; i < arr.length; i++){
        main.push(arr[i]*2);
    }
    return main
}
// console.log(getMultipliedArr([2, 5, 3]) ); //➞[4, 10, 6]
// console.log(getMultipliedArr([1, 86, -5])); //➞ [2, 172, -10]
// console.log(getMultipliedArr([5, 382, 0])); //➞ [10, 764, 0]

//7 Array of Word Lengths
// Create a function that takes an array of words and transforms it into an array of each word's length.

// Examples
function wordLengths(arr){
    return arr.map(item => item.length)
}
// console.log(wordLengths(["hello", "world"])); //➞ [5, 5]
// console.log(wordLengths(["Halloween", "Thanksgiving", "Christmas"])); //➞ [9, 12, 9]
// console.log(wordLengths(["She", "sells", "seashells", "down", "by", "the", "seashore"])); // ➞ [3, 5, 9, 4, 2, 3, 8]

//8 Difference of Volumes of Cuboids
// Create a program that will take two arrays of integers, a and b. Each array will consist of 3 positive integers, representing the dimensions of cuboids a and b. Find the difference of the cuboids' volumes.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// Examples
function findDifference(a,b){
    if(a.length !== b.length){
        console.log('hdjhfhddf');
    }
    let main = 0;
    for(let i = 0 ; i < a.length ; i++){
        main += a[i] * b[i];
    }
    return main
}

// console.log(findDifference([ 28, 16, 29 ], [ 7, 8, 17 ]) );  //➞ 12040
// console.log(findDifference([ 9, 22, 18 ], [ 16, 24, 10 ]));  //➞ 276
// console.log(findDifference([ 1, 9, 25 ], [ 10, 7, 9 ])  );  //➞ 405  
// console.log(findDifference([ 7, 6, 16 ], [ 26, 9, 26 ])  );  //➞ 5412

//8 ES6: Destructuring Arrays II
// You can assign variables from nested arrays like this:

const arr = ["cars", "planes", ["trains", ["motorcycles"]]]

let [trans1,trans2,[trans3,[trans4]]] = arr;
console.log(trans1) // outputs "cars"
console.log(trans2) // outputs "planes"
console.log(trans3) // outputs "trains"
console.log(trans4) // outputs "motorcycles"
// With ES6, you can assign variables from arrays in a much more succinct way.

//9 Rotate the Array by One 🔄
// Given an array, rotate the values clockwise by one (the last value is sent to the first position).

// Check the examples for a better understanding.

// Examples

function rotateByOne(arr){
    
    const lastElment = arr.pop();
    arr.unshift(lastElment);

    return arr;
}
// console.log(rotateByOne([1, 2, 3, 4, 5]) );//➞ [5, 1, 2, 3, 4]
// console.log(rotateByOne([6, 5, 8, 9, 7]) );//➞ [7, 6, 5, 8, 9]
// console.log(rotateByOne([20, 15, 26, 8, 4])); //➞ [4, 20, 15, 26, 8]
