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


 // 132 => Number of Two or More Consecutive Ones
// Create a function that counts the number of blocks of two or more adjacent 1s in an array.

 
function countOnes(arr) {
    let count = 0;
    let consecutiveOnes = 0;
  
    for (let i = 0; i <= arr.length; i++) {
      if (arr[i] === 1) {
        consecutiveOnes++;
      } else {
        if (consecutiveOnes >= 2) {
          count++;
        }
        consecutiveOnes = 0;
      }
    }
  
    return count;
  }
  
//   console.log(countOnes([1, 0, 0, 1, 1, 0, 1, 1, 1])); // ➞ 2
//   console.log(countOnes([1, 0, 1, 0, 1, 0, 1, 0])); // ➞ 0
//   console.log(countOnes([1, 1, 1, 1, 0, 0, 0, 0])); // ➞ 1
//   console.log(countOnes([0, 0, 0])); // ➞ 0
  

  