// 131 => Replacing Letters with Hashes
// Write a function that replaces all letters within a specified range with the hash symbol #.

function replace(str1, str2) {
    let res = "";
    let startChar = str2.charAt(0);
    let endChar = str2.charAt(2);

    for (let i = 0; i < str1.length; i++) {
        let prevChar = str1[i - 1];
        let nextChar = str1[i + 1];
        
        if ((prevChar && prevChar >= startChar && prevChar <= endChar) || 
            (nextChar && nextChar >= startChar && nextChar <= endChar)) {
            res += "#";
        } else {
            res += str1[i];
        }
    }

    return res;
}

// console.log(replace("abcdef", "c-e")); // "ab###f"
// console.log(replace("rattle", "r-z")); // "#a##le"
// console.log(replace("microscopic", "i-i")); // "m#croscop#c"
// console.log(replace("", "a-z")); // ""


let arr = {a:"1" ,b:"2"}
let {a:firstvalue,b} =arr;
console.log(firstvalue);