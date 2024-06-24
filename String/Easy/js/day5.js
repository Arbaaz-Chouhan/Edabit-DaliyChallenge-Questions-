// 29 => Prefixes vs. Suffixes
// Create two functions: isPrefix(word, prefix-) and isSuffix(word, -suffix).

// isPrefix should return true if it begins with the prefix argument.
// isSuffix should return true if it ends with the suffix argument.
// Otherwise return false.

function isPrefix(word, prefix) {

    if (prefix.endsWith('-')) {
        prefix = prefix.slice(0, -1);
    }

    return word.startsWith(prefix);
}

function isSuffix(word, suffix) {

    if (suffix.startsWith('-')) {
        suffix = suffix.slice(1);
    }

    return word.endsWith(suffix);
}

// console.log(isPrefix("automation", "auto-")); // true
// console.log(isSuffix("arachnophobia", "-phobia")); // true
// console.log(isPrefix("retrospect", "sub-")); // false
// console.log(isSuffix("vocation", "-logy")); // false



// 30 => Hiding the Card Number
// Write a function that takes a credit card number and only displays the last four characters. The rest of the card number must be replaced by ************.

function cardHide(num) {
    let res = "";
    for (let i = 0; i < num.length - 4; i++) {
        res += "*"
    }

    return res + num.slice(-4, num.length)
}

function cardHide(num) {
    let hiddenPart = "*".repeat(num.length - 4);
    let visiblePart = num.slice(-4);
    return hiddenPart + visiblePart;

}

// console.log(cardHide("1234123456785678")); // "************5678"
// console.log(cardHide("8754456321113213")); // "************3213"
// console.log(cardHide("35123413355523")); // "**********5523"

//  31  => Spelling it Out
// Create a function which takes in a word and spells it out, by consecutively adding letters until the full word is completed.

function spelling(str) {
    let res = [];
    for (let i = 1; i <= str.length; i++) {
        res.push(str.slice(0, i));
    }
    return res
}

// console.log(spelling("bee")); // ["b", "be", "bee"]
// console.log(spelling("happy")); // ["h", "ha", "hap", "happ", "happy"]
// console.log(spelling("eagerly")); // ["e", "ea", "eag", "eage", "eager", "eagerl", "eagerly"]

// 32 => Join Two Portions of a Path
// Write a function that receives two portions of a path and joins them. The portions will be joined with the "/" separator. There could be only one separator and if it is not present it should be added.

function joinPath(s1, s2) {
   if(s1.endsWith("/")){
    s1 = s1.slice(0,-1);
   }

   if(s2.startsWith("/")){
    s2 = s2.slice(1);
   }

   return s1 + "/" + s2
}

// console.log(joinPath("portion1", "portion2")); // "portion1/portion2"
// console.log(joinPath("portion1/", "portion2")); // "portion1/portion2"
// console.log(joinPath("portion1", "/portion2")); // "portion1/portion2"
// console.log(joinPath("portion1/", "/portion2")); // "portion1/portion2"


// 33 => Which Generation Are You?
// Try finding your ancestors and offspring with code.

// Create a function that takes a number x and a character y ("m" for male, "f" for female), and returns the name of an ancestor (m/f) or descendant (m/f).

// If the number is negative, return the related ancestor.
// If positive, return the related descendant.
// You are generation 0. In the case of 0 (male or female), return "me!".

function generation(x, y) {
    const generations = {
        "-3": { "m": "great grandfather", "f": "great grandmother" },
        "-2": { "m": "grandfather", "f": "grandmother" },
        "-1": { "m": "father", "f": "mother" },
         "0": { "m": "me!", "f": "me!" },
         "1": { "m": "son", "f": "daughter" },
         "2": { "m": "grandson", "f": "granddaughter" },
         "3": { "m": "great grandson", "f": "great granddaughter" }
    };

    return generations[x][y];
}

// console.log(generation(2, "f")); // "granddaughter"
// console.log(generation(-3, "m")); // "great grandfather"
// console.log(generation(1, "f")); // "daughter"


