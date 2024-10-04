// 161 => Censor Words from Array
// Create a function that takes a string str and censors any word from a given array arr. The text removed must be replaced by the given character char.

function censorString(str, arr, char) {
    let res = "";

    let words = str.split(" ");

    for (let i = 0; i < words.length; i++) {
        if (arr.includes(words[i].toLowerCase())) {
            res += char.repeat(words[i].length) + " ";
        }
        res += words[i] + " ";


    }
    return res
}

// console.log(censorString("Today is a Wednesday!", ["today", "a"], "-")); // "----- is - Wednesday!"
// console.log(censorString("The cow jumped over the moon.", ["cow", "over"], "*")); // "The *** jumped **** the moon."
// console.log(censorString("Why did the chicken cross the road?", ["did", "chicken", "road"], "*")); // "Why *** the ******* cross the ****?"

// 162 => Convert camelCase to snake_case
// Create a function that takes a string of words (or just one word) and converts each word from camelCase to snake_case.

function camelToSnake(str) {
    let res = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i].includes(str[i].toUpperCase())) {
            res += "_";
        }
        res += str[i];
    }
    return res.toLowerCase()
}

// console.log(camelToSnake("magicCarrots")); // "magic_carrots"
// console.log(camelToSnake("greatApples for aSmellyRhino")); // "great_apples for a_smelly_rhino"
// console.log(camelToSnake("thatsGreat")); // "thats_great"


// 163 =>Tidy Hyperlinks
// Using markdown, it's possible to format links such as https://edabit.com/challenges, into something tidier like this. Notice how the text "Go to the challenges!" appears when hovering over the link.

// This was achieved by using this code:

// [this](https://edabit.com/challenges "Go to the challenges!")
// Given the url, the new name and optionally the hoverText, return the tidied up hyperlink as a string.

function tidyLink(url, linkText, hoverText = "") {
    // Format the link
    if (hoverText) {
        return `[${linkText}](${url} "${hoverText}")`;
    } else {
        return `[${linkText}](${url})`;
    }
}

// console.log(tidyLink("https://edabit.com/challenges", "this", "Go to the challenges!")); // "[this](https://edabit.com/challenges "Go to the challenges!")"
// console.log(tidyLink("https://www.google.com", "Google", "Google Search")); // "[Google](https://www.google.com "Google Search")"
// console.log(tidyLink("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "Click Me!")); // "[Click Me!](https://www.youtube.com/watch?v=dQw4w9WgXcQ)"


// 164 => camelCase ⇄ snake_case
// Create two functions toCamelCase() and toSnakeCase() that each take a single string and convert it into either camelCase or snake_case. If you're not sure what these terms mean, check the Resources tab above.

function toCamelCase(str) {
    let res = "";
    let words = str.split("_");
    for (let i = 1; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    return words.join("")
}


function toSnakeCase(str) {
    let res = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i].includes(str[i].toUpperCase())) {
            res += '_';
        }
        res += str[i];
    }


    return res.toLowerCase();
}
// console.log(toCamelCase("hello_edabit")); // "helloEdabit"
// console.log(toSnakeCase("helloEdabit")); // "hello_edabit"
// console.log(toCamelCase("is_modal_open")); // "isModalOpen"
// console.log(toSnakeCase("getColor")); // "get_color"



// 165 => Christmas Tree
// Write a function to create a Christmas tree based on height h.
function tree(num) {
    let res = []
    if (num == 0) return res.push("");
    for (let i = 0; i < num; i++) {
        let str = " ";

        for (let j = 0; j < 2 * i + 1; j++) {
            str += '#';
        }

        res.push(str)
    }
    return res

}

// console.log(
//     tree(1)); // [
// //   "#"
// // ]

// console.log(
//     tree(2)); // [
// //   " # ",
// //   "###"
// // ]

// console.log(
//     tree(5)); // [
// //   "    #    ",
// //   "   ###   ",
// //   "  #####  ",
// //   " ####### ",
// //   "#########"
// // ]

// console.log(
//     tree(0)); // []

 

// 166 =>  Spelling Bee
// Given a sentence spelling out a word, return true if the spelled letters match the word at the end of the string, or false otherwise.

function validateSpelling(str) {
    let words = str.split('.').join('').trim().split(' ');

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let expectedSpelling = '';

        for (let j = 0; j < word.length; j++) {
            let char = word[j];

            if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')) {
                expectedSpelling += char;
            }
        }


        if (expectedSpelling.toUpperCase() !== word.toUpperCase()) {
            return true;
        }
    }

    return false;
}

console.log(
 validateSpelling("C. Y. T. O. P. L. A. S. M. Cytoplasm?")); /// true
console.log(
 validateSpelling("P. H. A. R. A. O. H. Pharaoh!")); /// true
console.log(
 validateSpelling("H. A. N. K. E. R. C. H. E. I. F. Handkerchief.")); /// false



// 167 => Case and Index Inverter
// Write a function that takes a string input and returns the string in a reversed case and order.

function invert(str){
    let res = '';
    let words = str.split(" ");
    let strrev =  words.reverse();

    for(let i = 0; i<strrev.length; i++){
        res += " " + strrev[i].split('').reverse().join('');
    }

    return res
}

// console.log(invert("dLROW YM sI HsEt")); //  "TeSh iS my worlD"
// console.log(invert("ytInIUgAsnOc")); //  "CoNSaGuiNiTY"
// console.log(invert("step on NO PETS")); //  "step on NO PETS"
// console.log(invert("XeLPMoC YTiReTXeD")); //  "dExtErIty cOmplEx"