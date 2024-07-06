// 101 => Create a function where given the number n to count down from, and some words str, return a console.log(countdown sequence as a string leading up to the words at the end.

// Put a full stop after each number and uppercase and add an exclamation mark to the word. See the examples below for clarification!

function countdown(num,str){
    let res = [];
    for(let i = 1; i<=num; i++){
        res.push(i)
    }

    return res.reverse().join(".")+  " . "+ str.toUpperCase();
}

// console.log(countdown(10, "Blast Off")); // "10. 9. 8. 7. 6. 5. 4. 3. 2. 1. BLAST OFF!"
// console.log(countdown(3, "go")); // "3. 2. 1. GO!"
// console.log(countdown(5, "FIRE")); // "5. 4. 3. 2. 1. FIRE!"

// 102 => 