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

// 164 => Substituting the The
// Create a function that replaces "the" in the sentence with "an" or "a". Remember that if the next word begins with a vowel, use "an". In the case of a consonant, use "a".

function replaceThe(str) {
    let res = '';
    const vowels = 'aeiou';
    let words = str.split(" "); // Split the string into words

    for (let i = 0; i < words.length; i++) {
        if (words[i] === "the") {
            // Check if there's a next word
            if (i + 1 < words.length) {
                let nextWord = words[i + 1].toLowerCase(); // Get the next word
                // Decide whether to use "an" or "a"
                res += vowels.includes(nextWord.charAt(0)) ? "an " : "a ";
            } else {
                res += "the "; // Keep "the" if it's the last word
            }
        } else {
            res += words[i] + " "; 
        }
    }

    return res.trim(); 
}
console.log(replaceThe("the dog and the envelope")); // "a dog and an envelope"
console.log(replaceThe("the boy ran at the wall")); // "a boy ran at a wall"
console.log(replaceThe("the egg, the spoon and the espionage")); // "an egg, a spoon and an espionage"