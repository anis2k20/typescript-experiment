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
// dynamic type or any type---------------
let x;
let m = [];
x = 6;
x = "bangladesh";
m.push(34);
m.push("anis");
// function type
let myFunc;
myFunc = () => {
    console.log("Hello world!");
};
myFunc();
const func = (a, b, c, d = 10) => {
    console.log("hello " + a + " " + b + " " + c + " " + d);
    return a + b;
};
// here c i s optional and d is default value
console.log(func(20, 25));
const userDetails = (id, user) => {
    console.log(`user id is ${id} and user name is ${user.name} and user age is ${user.age}`);
};
const sayHello = (user) => {
    console.log(`hello ${user.name} you are ${user.age} years old`);
};
userDetails(1, { name: "anis", age: 25 });
// function signature----------
let add;
add = (a, b) => {
    return a + b;
};
console.log(add(2, 3));
let calculate;
calculate = (a, b, c) => {
    if (c === "add") {
        return a + b;
    }
    else {
        return a - b;
    }
};
console.log(calculate(10, 3, "add"));
let userInfo;
userInfo = (id, user) => {
    console.log(`user id is ${id} and user name is ${user.name} and user age is ${user.age}`);
};
userInfo(1, { name: "anis", age: 25 });
import { Player } from "./classes/player.js";
// class-----------------------
const sakib = new Player("Shakib", 23, "Banglades");
sakib.play();
const players = [];
players.push(sakib);
console.log(players);
console.log(sakib);
console.log(sakib.country);
function drawRectangle(options) {
    let width = options.width;
    let length = options.length;
    console.log(width, length);
}
let options = {
    width: 20,
    length: 10,
    height: 20,
};
drawRectangle(options);
let mosfik;
mosfik = new Player("Mosfik", 23, "Bangladesh");
console.log(mosfik);
console.log(mosfik.getProperty());
// Enum
var RType;
(function (RType) {
    RType[RType["success"] = 0] = "success";
    RType[RType["failuer"] = 1] = "failuer";
    RType[RType["unauthorized"] = 2] = "unauthorized";
    RType[RType["forbidden"] = 3] = "forbidden";
})(RType || (RType = {}));
const response1 = {
    status: 200,
    type: RType.failuer,
    data: "test",
};
console.log(response1);
// tuples
let p = [3, "hello", { p: 4 }];
p[2] = 3;
console.log(p);
let q = [3, "hello", {}];
q[2] = { p: 4 };
q.push(989);
console.log(q);
