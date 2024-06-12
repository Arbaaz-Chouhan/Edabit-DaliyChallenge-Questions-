//1 Return the Last Element in an Array
// Create a function that accepts an array and returns the last item in the array.

// Examples
// getLastItem([1, 2, 3]) ➞ 3
// getLastItem(["cat", "dog", "duck"]) ➞ "duck"
// getLastItem([true, false, true]) ➞ true


function getLastItem(arr){
    // return arr[2];
    // return arr.pop()
    // return arr.slice(2,3);
    // return arr.splice(2,3);
    
    for(let i = arr.length-1; i >= 0; i--){
     return arr[i]        
    }
}
// console.log(getLastItem([1, 2, 3]));
// console.log(getLastItem(["cat", "dog", "duck"]));
// console.log(getLastItem([true, false, true]));

//2 Convert an Array to a String
// Create a function that takes an array of numbers or letters and returns a string.

// Examples
// arrayToString([1, 2, 3, 4, 5, 6]) //➞ "123456"
// arrayToString(["a", "b", "c", "d", "e", "f"])// ➞ "abcdef"
// arrayToString([1, 2, 3, "a", "s", "dAAAA"]) //➞ "123asdAAAA"


function arrayToString(arr){
// return arr.join("");
    // return arr.join("") 
    let main = "";
    for(let i =0; i <arr.length; i++){
        main +=  arr[i]; 
    }
    return main;    
}
// console.log(arrayToString([1, 2, 3, 4, 5, 6]));
// console.log(arrayToString(["a", "b", "c", "d", "e", "f"]));
// console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"]));

//3 Concatenating Two Integer Arrays
//Create a function to concatenate two integer arrays.

// Examples
// concat([1, 3, 5], [2, 6, 8]) ➞ [1, 3, 5, 2, 6, 8]
// concat([7, 8], [10, 9, 1, 1, 2]) ➞ [7, 8, 10, 9, 1, 1, 2]
// concat([4, 5, 1], [3, 3, 3, 3, 3]) ➞ [4, 5, 1, 3, 3, 3, 3, 3]


function concat(arr1,arr2){ 
// return arr1 +arr2
// let concatArray  =  arr1.concat(arr2);
// return concatArray ;

// return [...arr1, ...arr2];
// return [arr1,arr2].flat()

}
// console.log(concat([1, 3, 5], [2, 6, 8]) );
// console.log(concat([7, 8], [10, 9, 1, 1, 2]));
// console.log(concat([4, 5, 1], [3, 3, 3, 3, 3]));

//4 Find the Index
// Create a function that takes an array and a string as arguments and returns the index of the string.

// Examples
// findIndex(["hi", "edabit", "fgh", "abc"], "fgh") ➞ 2
// findIndex(["Red", "blue", "Blue", "Green"], "blue") ➞ 1
// findIndex(["a", "g", "y", "d"], "d") ➞ 3
// findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple") ➞ 0


function findIndex(str, item) {
    // return str.indexOf(item);
    // return str.lastIndexOf(item);
    for(let i = 0; i<str.length; i++){
        if(str[i].includes(item)){
            return  i;
        }

        
    }
}
console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"));
console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue"));
console.log(findIndex(["a", "g", "y", "d"], "d"));
console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple"));
