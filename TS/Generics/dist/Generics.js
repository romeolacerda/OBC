"use strict";
function first(array) {
    return array[0];
}
function last(array) {
    return array[array.length - 1];
}
const pilots = ["Luke", "Biggs", "Wedge", "Han", "Lando"];
const firstPilot = first(pilots);
const lastPilot = last(pilots);
console.log(firstPilot);
console.log(lastPilot);
