// 1
let arr = [1, 2, 3, 4, 10, 9, 14, 100, 5];

for (let i = 0; arr.length > i; i++) {
    if (arr[i] > 3 && arr[i] < 10) {
        console.log(arr[i]);
    }
}

// 2
let arr1 = [1, 2, 5, 9, 4, 13, 4, 10];

for (let i = 0; arr1.length > i; i++) {
    if (arr1[i] === 4) {
        console.log("Наявний!");
        break;
    }
}

// 3
function avg(mass) {
    let sum = mass.reduce((a, b) => a + b, 0);
    return sum / mass.length;
}

let mass = [42, 2, 33, 11, 12, 10, 0];

console.log(avg(mass));

// 4
function symbolCount(arr) {
    let sumWords = arr.reduce((a, b) => a + b);
    return sumWords.length;
}

let animals = ["parrot", "bull", "bear", "monkey"];

console.log(symbolCount(animals));

// 5
function stringFilter(nofiltered) {
    let filtered = nofiltered.filter((arr) => typeof arr === "string");

    return filtered;
}

let someArr = ["parrot", 140, "bull", true, 0, "bear", 47, "monkey"];

console.log(stringFilter(someArr));
