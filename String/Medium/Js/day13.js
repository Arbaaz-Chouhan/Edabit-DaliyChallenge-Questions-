// 141 => New Word Builder
// Create a function that builds a word from the scrambled letters contained in the first array. Use the second array to establish each position of the letters in the first array. Return a string from the unscrambled letters (that made-up the word).

function wordBuilder(arr1,arr2){
    let res = [];
   for(let i = 0; i<arr2.length; i++){
    res.push(arr1[arr2[i]]);
   } 
   return res.join("")
}

// console.log(wordBuilder(["g", "e", "o"], [1, 0, 2])); // "ego"
// console.log(wordBuilder(["e", "t", "s", "t"], [3, 0, 2, 1])); // "test"
// console.log(wordBuilder(["b", "e", "t", "i", "d", "a"], [1, 4, 5, 0, 3, 2])); // "edabit"


// 142 => 