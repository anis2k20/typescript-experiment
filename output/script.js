"use strict";
console.log("Hello world!");
// type----------------------------
const country = "Bangladesh";
console.log(country);
let playerName = "Anis";
let age = 34;
console.log(playerName);
playerName = "sumon";
age = 23;
let player;
player = "anis";
player = 25;
console.log(player);
function mul(a, b) {
    return a * b;
}
console.log(mul(4, 3));
let fruits = ["apple", 3, true, {}];
fruits.push(2);
fruits.push({
    name: "mango",
});
console.log(fruits);
let person = {
    name: "anis",
    age: 30,
    isMale: true,
};
person.name = "shakil";
// explicit and union type
let a;
let b;
a = "anis";
b = 25;
let names = [];
names.push("anis", "shakil");
let ages = [];
ages.push(25, 30);
let test;
test = "abc";
test = 25;
// union
let info = [];
info.push("anis", 25);
let data;
data = {
    name: "anis",
    age: 25,
};
console.log(data);
