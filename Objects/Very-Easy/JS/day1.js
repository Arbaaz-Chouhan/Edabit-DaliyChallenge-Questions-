// 1 => Upvotes vs Downvotes
// Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.

function getVoteCount(vote) {
    return vote.upvotes - vote.downvotes; ``
}

// console.log(getVoteCount({ upvotes: 13, downvotes: 0 })); // 13
// console.log(getVoteCount({ upvotes: 2, downvotes: 33 })); // -31
// console.log(getVoteCount({ upvotes: 132, downvotes: 132 })); // 0

// 2 => Volume of a Box
// Create a function that takes an object argument sizes (contains width, length, height keys) and returns the volume of the box.

function volumeOfBox(obj) {
    let keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        return obj[keys[0]] * obj[keys[1]] * obj[keys[2]]
    }
}

// console.log(volumeOfBox({ width: 2, length: 5, height: 1 })); // 10
// console.log(volumeOfBox({ width: 4, length: 2, height: 2 })); // 16
// console.log(volumeOfBox({ width: 2, length: 3, height: 5 })); // 30


// 3 => 50-30-20 Strategy
// The 50-30-20 strategy is a simple way to budget, which involves spending 50% of after-tax income on needs, 30% after tax income on wants, and 20% after-tax income on savings or paying off debt.

// Given the after-tax income as ati, what you are supposed to do is to make a function that will return an object that shows how much a person needs to spend on needs, wants, and savings.

function fiftyThirtyTwenty(ati) {
    let obj = {
        needs: ati * 0.5,
        wants: ati * 0.2,
        savings: ati * 0.2,
    }
    return { "Needs": obj.needs, "Wants": obj.wants, "Savings": obj.savings }

}

// console.log(fiftyThirtyTwenty(10000)); // { "Needs": 5000, "Wants": 3000, "Savings": 2000 }

// console.log(fiftyThirtyTwenty(50000)); // { "Needs": 25000, "Wants": 15000, "Savings": 10000 }

// console.log(fiftyThirtyTwenty(13450)); // { "Needs": 6725, "Wants": 4035, "Savings": 2690 }

// 4 => Luke, I Am Your ...
// Luke Skywalker has family and friends. Help him remind them who is who. Given a string with a name, return the relation of that person to Luke.

// Person	Relation
// Darth Vader	father
// Leia	sister
// Han	brother in law
// R2D2	droid

function relationToLuke(str) {

    if (str === "Darth Vader") {
        return "Luck I am your father";
    } else if (str === "Leia") {
        return "Luck I am your sister";
    } else if (str === "Han") {
        return "Luck I am your brother in law"
    }
}

function relationToLuke(str) {

    switch (str) {
        case "Darth Vader":
            return "Luck I am your father";

        case "Leia":
            return "Luck I am your sister";

        case "Han":
            return "Luck I am your brother in law"
    }
}

// console.log(relationToLuke("Darth Vader")); // "Luke, I am your father"
// console.log(relationToLuke("Leia")); // "Luke, I am your sister."
// console.log(relationToLuke("Han")); // "Luke, I am your brother in law."


// 5 => Extract City Facts
// Create a function that takes an object as an argument and returns a string with facts about the city. The city facts will need to be extracted from the object's three properties:

// name
// population
// continent
// The string should have the following format: X has a population of Y and is situated in Z (where X is the city name, Y is the population and Z is the continent the city is situated in).

function cityFacts(obj) {
    let keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        let currentValues = obj[keys[i]]
        return `${currentValues[0]} has a population of ${currentValues[1]} and is situated in ${currentValues[2]}`
    }
}


console.log(cityFacts({
    name: "Paris",
    population: "2,140,526",
    continent: "Europe"
})); // "Paris has a population of 2,140,526 and is situated in Europe"

console.log(cityFacts({
    name: "Tokyo",
    population: "13,929,286",
    continent: "Asia"
})); // "Tokyo has a population of 13,929,286 and is situated in Asia"


// 6 Classes For Fetching Information on a Sports Player
// Create a class that takes the following four arguments for a particular football player:

// name
// age
// height
// weight
// Also, create three functions for the class that returns the following strings:

// getAge() returns "name is age age"
// getHeight() returns "name is heightcm"
// getWeight() returns "name weighs weightkg"


class Player {
    constructor(name, age, height, weight) {
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
    }

    getAge() {
        return `${this.name} is age ${this.age}`;
    }

    getHeight() {
        return `${this.name} is ${this.height}cm`;
    }

    getWeight() {
        return `${this.name} weighs ${this.weight}kg`;
    }
}

// Example usage:
let p1 = new Player("David Jones", 25, 175, 75);

// console.log(p1.getAge());    // "David Jones is age 25"
// console.log(p1.getHeight()); // "David Jones is 175cm"
// console.log(p1.getWeight()); // "David Jones weighs 75kg"



// 7  Check if Number is within a Given Range
// Given a number and an object with min and max properties, return true if the number lies within the given range (inclusive).

function isInRange(num, range) {
    return num >= range.min && num <= range.max;
}

console.log(isInRange(4, { min: 0, max: 5 })); /// true
console.log(isInRange(4, { min: 4, max: 5 })); /// true
console.log(isInRange(4, { min: 6, max: 10 })); /// false
console.log(isInRange(5, { min: 5, max: 5 })); /// true 