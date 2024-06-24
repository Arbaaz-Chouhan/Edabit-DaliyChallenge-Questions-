// 21 => Convert to Decimal Notation
// Create a function to convert an array of percentages to their decimal equivalents.

// function convertToDecimal(arr){
//     let res = [];
// for(let i = 0; i<arr.length; i++){
//     let number = parseFloat(arr[i]) / 100;
//         res.push(number);
// }
// return res

// }


function convertToDecimal(arr) {
    let res = [];
    arr.forEach(ele => {
        let number = parseFloat(ele) / 100;
        res.push(number);
    });

    return res

}

// console.log(convertToDecimal(["1%", "2%", "3%"])); // [0.01, 0.02, 0.03]
// console.log(convertToDecimal(["45%", "32%", "97%", "33%"])); // [0.45, 0.32, 0.97, 0.33]
// console.log(convertToDecimal(["33%", "98.1%", "56.44%", "100%"])); // [0.33, 0.981, 0.5644, 1]


// 22 => Baseball Batting Average
// A baseball player's batting average is calculated by the following formula:

// BA = (number of hits) / (number of official at-bats)
// Batting averages are always expressed rounded to the nearest thousandth with no leading zero. The top 3 MLB batting averages of all-time are:

// Ty Cobb .366
// Rogers Hornsby .358
// Shoeless Joe Jackson .356
// The given array represents a season of games. Each array item indicates a player's [hits, official at bats] per game. Return a string with the player's seasonal batting average rounded to the nearest thousandth.

function battingAvg(arr) {
    let totalhits = 0;
    let totalball = 0;

    for (let i = 0; i < arr.length; i++) {
        totalhits += arr[i][0];
        totalball += arr[i][1];


    }
    let average = totalhits / totalball;
    return average.toFixed(3)
}

// console.log(battingAvg([[0, 0], [1, 3], [2, 2], [0, 4], [1, 5]])); //".286"
// console.log(battingAvg([[2, 5], [2, 3], [0, 3], [1, 5], [2, 4]])); //".350"
// console.log(battingAvg([[2, 3], [1, 5], [2, 4], [1, 5], [0, 5]])); //".273"


// 23 => Transforming Words into Binary Strings
// Write a function that transforms all letters from [a, m] to 0 and letters from [n, z] to 1 in a string.


function convertBinary(str) {
    let res = "";
    let lowerStr = str.toLowerCase();
    for (let i = 0; i < lowerStr.length; i++) {
        if ('abcdefghijklm'.includes(lowerStr[i])) {
            res += '0';
        } else if ('nopqrstuvwxyz'.includes(lowerStr[i])) {
            res += '1';
        }
    }
    return res;
}

// console.log(convertBinary("house")); // "01110"
// console.log(convertBinary("excLAIM")); // "0100000"
// console.log(convertBinary("moon")); // "0111"

// 24 => Most Left Digit
// Write a function that takes a string as an argument and returns the left most digit in the string.

function leftDigit(str) {
    let arr = str.split("");
    for (let i = 0; i < arr.length; i++) {
        let number = parseInt(arr[i]);
        if (str[i].includes(number)) {
            return number;
        }
    }
}


// console.log(leftDigit("TrAdE2W1n95!")); // 2
// console.log(leftDigit("V3r1ta$")); // 3
// console.log(leftDigit("U//DertHe1nflu3nC3")); // 1
// console.log(leftDigit("J@v@5cR1PT")); // 5


// 25 => Video Length in Seconds
// You are given the length of a video in minutes. The format is mm:ss (e.g.: "02:54"). Create a function that takes the video length and return it in seconds.

function minutesToSeconds(time) {

    let parts = time.split(":");
    let minutes = parseInt(parts[0]);
    let seconds = parseInt(parts[1]);


    if (seconds >= 60) {
        return false;
    }

    let totalSeconds = (minutes * 60) + seconds;

    return totalSeconds;
}

// console.log(minutesToSeconds("01:00")); // 60
// console.log(minutesToSeconds("13:56")); // 836
// console.log(minutesToSeconds("10:60")); // false


// 26 => How Many Decimal Places?
// Create a function that returns the number of decimal places a number (given as a string) has. Any zeros after the decimal point count towards the number of decimal places.

function getDecimalPlaces(num) {
    let parts = num.split(".");
    if (parts.length === 1) {
        return 0
    }
    return parts[1].length
}

// console.log(getDecimalPlaces("43.20")); // 2
// console.log(getDecimalPlaces("400")); // 0
// console.log(getDecimalPlaces("3.1")); // 1

// 27 => Index Shuffle
// Write a function that takes all even-indexed characters and odd-indexed characters from a string and concatenates them together.

// To illustrate:

//  console.log(indexShuffle("abcd")); // "acbd"
// "ac" (even-inexed) + "bd" (odd-indexed)

function indexShuffle(str) {
    let words = str.split("");
    let evenwords = "";
    let oddwords = "";
    for (let i = 0; i < words.length; i++) {
        if (i % 2 === 0) {
            evenwords += str[i];
        } else {
            oddwords += str[i]
        }
    }
    return evenwords + oddwords
}

// console.log(indexShuffle("abcdefg")); // "acegbdf"
// console.log(indexShuffle("holiday")); // "hldyoia"
// console.log(indexShuffle("maybe")); // "myeab"


//  28 => Regex Series: 5-Digit Zip Code
// Write a regular expression that matches a string if and only if it is a valid zip code.

function regex(num) {
    for (let i = 0; i <= num; i++) {
        let intigerNum = parseInt(num[i])
        if (intigerNum <= 5) {
            return true
        }
    }

    return false
}


// console.log(regex("32554"));  // true
// console.log(regex("92 342"));  // false
// // Invalid:contains a whitespace
// console.log(regex("9@342"));  // false
// // Invalid cregex(ontains a non-numeric character
// console.log(regex("923444"));  // false
// // Invalid:length is not 5



