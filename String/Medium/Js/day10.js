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
    let res =  words[words.length - 1];


   return res.join(" ")
}

console.log(grabCity("[Last Day!] Beer Festival [Munich]")); // "Munich"
console.log(grabCity("Cheese Factory Tour [Portland]")); // "Portland"
console.log(grabCity("[50% Off!][Group Tours Included] 5-Day Trip to Onsen [Kyoto]")); // "Kyoto"