// 16 => Hashes and Pluses
// Create a function that returns the number of hashes and pluses in a string.

function hashPlusCount(str) {
    let arr = str.split("");
    let res = [];
    let hashescount = 0;
    let plusescount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes("#")) {
            hashescount++;
        } else if ([i].includes("+")) {
            plusescount++;
        }

    }
    res.push(hashescount, plusescount);


    return res
}

console.log(hashPlusCount("###+")); // [3, 1]
console.log(hashPlusCount("##+++#")); // [3, 3]
console.log(hashPlusCount("#+++#+#++#")); // [4, 6]
console.log(hashPlusCount("")); // [0, 0]