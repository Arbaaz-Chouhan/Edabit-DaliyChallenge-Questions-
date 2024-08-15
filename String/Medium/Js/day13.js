// 141 => New Word Builder
// Create a function that builds a word from the scrambled letters contained in the first array. Use the second array to establish each position of the letters in the first array. Return a string from the unscrambled letters (that made-up the word).

function wordBuilder(arr1, arr2) {
    let res = [];
    for (let i = 0; i < arr2.length; i++) {
        res.push(arr1[arr2[i]]);
    }
    return res.join("")
}

// console.log(wordBuilder(["g", "e", "o"], [1, 0, 2])); // "ego"
// console.log(wordBuilder(["e", "t", "s", "t"], [3, 0, 2, 1])); // "test"
// console.log(wordBuilder(["b", "e", "t", "i", "d", "a"], [1, 4, 5, 0, 3, 2])); // "edabit"


// 142 => Just Find the Vertex
// Today Juan learned to graph quadratic equations, so he chose to speed up the process and avoid having to write a lot of steps in his notebook to find the vertex. Just help him locate the vertex.

// Ok, I am going to give you some advantages. The first is that you will not have to perform so many steps. The equations will have an easy structure to avoid much complexity.

// Here I will leave you a shorter explanation of how we can find the vertex.

// We have the following equation:

// -5x ^ 2 + 50x -120
// Now we apply the formula to locate the vertex:

// -b / (2 * a)
// We divide our second term by 2 multiplied by the first term. Remember to use the negative sign in b. It would look like this:

// -50 / (2 * -5) = 5
// ... The third term will be insufficient in the challenge, but I wanted to add it to see if it complicates you.

// ... Remember to return the result rounded to zero decimals.

function findVertex(strNum) {
    let res = [];
    for (let i = 0; i < strNum.length; i++) {

        res.push(strNum)
    }

    return res
}

// console.log(findVertex("-5x + 50x -120")); // 5
// console.log(findVertex("-6x + 36x -72")); // 3
// console.log(findVertex("7x +14x +28")); // -1

