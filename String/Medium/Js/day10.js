// 116 => Counting Adverbs
// Create a function that counts the number of adverbs in a sentence. An adverb is a word that ends with ly.

function countAdverbs(str) {
    let count = 0;
    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
        if (words[i].includes("ly")) {
            count++;
        }
    }
    return count;
}

// console.log(countAdverbs("She ran hurriedly towards the stadium.")); //  1
// console.log(countAdverbs("She ate the lasagna heartily and noisily.")); //  2
// console.log(countAdverbs("He hates potatoes.")); //  0
// console.log(countAdverbs("He was happily, crazily, foolishly over the moon.")); //  3

// 117 => Grab the City
// Write a function to return the city from each of these vacation spots.

function grabCity(str) {

    let words = str.split(" ");
    let res = words[words.length - 1];


    return res.join(" ")
}

// console.log(grabCity("[Last Day!] Beer Festival [Munich]")); // "Munich"
// console.log(grabCity("Cheese Factory Tour [Portland]")); // "Portland"
// console.log(grabCity("[50% Off!][Group Tours Included] 5-Day Trip to Onsen [Kyoto]")); // "Kyoto"


// 118 => Verbed Nouns
// Create a function that ends the first word of a phrase with "ed", essentially verbifying a noun.

function verbify(str) {
    let res = "";
    let words = str.split(" ");
    if (!words[0].includes("e")) {
        res += words[0] + "e"
    } else if (!words[0].includes("d")) {
        res += words[0] + "d"
    } else {
        res += words
    }

    return res.split(",").join(" ")
}

// console.log(verbify("cheese burger")); // "cheesed burger"
// console.log(verbify("salt water")); // "salted water"
// console.log(verbify("orange juice")); // "oranged juice"
// console.log(verbify("shredded cheese")); // "shredded cheese"


// 119 => Letters Shared between Two Words
// Create a function that returns the number of characters shared between two words.

function sharedLetters(str1, str2) {
    let count = 0;
    for (let i = 0; i < str1.length; i++) {
        if (str2.includes(str1[i])) {
            count++;
        }
    }

    return count;
}

// console.log(sharedLetters("apple", "meaty"));  // 2
// // Since "ea" is shared between "apple" and "meaty".
// console.log(sharedLetters("fan", "forsook"));  // 1
// console.log(sharedLetters("spout", "shout"));  // 4


// 120 => Mumbling Challenge
// Create a function that takes a string str and modifies the given string as per the below examples:

function mumbling(str) {
    let res = [];
    for (let i = 0; i < str.length; i++) {
        let repeatedChar = str[i].toUpperCase() + str[i].toLowerCase().repeat(i);
        res.push(repeatedChar)
    }
    return res.join("-")
}

function mumbling(str) {
    let res = [];
    for (let i = 0; i < str.length; i++) {
        let word = str[i].toUpperCase();
        for (let j = 0; j < i; j++) {
            word += str[i].toLowerCase();
        }
        res.push(word);
    }
    return res.join("-");
}

// console.log(mumbling("MubAshIr")); // "M-Uu-Bbb-Aaaa-Sssss-Hhhhhh-Iiiiiii-Rrrrrrrr"
// console.log(mumbling("maTT")); // "M-Aa-Ttt-Tttt"
// console.log(mumbling("EdaBit")); // "E-Dd-Aaa-Bbbb-Iiiii-Tttttt"