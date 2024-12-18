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

function mul(a: number, b: number) {
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
let a: string;
let b: number;

a = "anis";
b = 25;

let names: string[] = [];
names.push("anis", "shakil");

let ages: number[] = [];
ages.push(25, 30);

let test: string | number;

test = "abc";
test = 25;
// union
let info: (string | number)[] = [];

info.push("anis", 25);

let data: {
  name: string;
  age: number;
};

data = {
  name: "anis",
  age: 25,
};

console.log(data);

// dynamic type or any type---------------
let x: any;
let m: any[] = [];

x = 6;
x = "bangladesh";

m.push(34);
m.push("anis");

// function type
let myFunc: Function;

myFunc = () => {
  console.log("Hello world!");
};
myFunc();

const func = (a: number, b: number, c?: string, d: number = 10): number => {
  console.log("hello " + a + " " + b + " " + c + " " + d);
  return a + b;
};
// here c i s optional and d is default value
console.log(func(20, 25));

// type aliases--------

type stringOrNumber = string | number;
type userType = {
  name: string;
  age: number;
};

const userDetails = (id: stringOrNumber, user: userType) => {
  console.log(
    `user id is ${id} and user name is ${user.name} and user age is ${user.age}`
  );
};

const sayHello = (user: userType) => {
  console.log(`hello ${user.name} you are ${user.age} years old`);
};

userDetails(1, { name: "anis", age: 25 });

// function signature----------

let add: (x: number, y: number) => number;

add = (a: number, b: number) => {
  return a + b;
};
console.log(add(2, 3));

let calculate: (x: number, y: number, z: string) => number;

calculate = (a: number, b: number, c: string) => {
  if (c === "add") {
    return a + b;
  } else {
    return a - b;
  }
};

console.log(calculate(10, 3, "add"));

let userInfo: (
  id: stringOrNumber,
  userDetails: {
    name: string;
    age: number;
  }
) => void;

userInfo = (id: stringOrNumber, user: userType) => {
  console.log(
    `user id is ${id} and user name is ${user.name} and user age is ${user.age}`
  );
};

userInfo(1, { name: "anis", age: 25 });

import { Player } from "./classes/player.js";
import { isPlayer } from "./interfaces/isPlayer.js";
// class-----------------------
const sakib = new Player("Shakib", 23, "Banglades");

sakib.play();

const players: Player[] = [];

players.push(sakib);
console.log(players);

console.log(sakib);
console.log(sakib.country);

interface RectangleOptions {
  width: number;
  length: number;
}

function drawRectangle(options: RectangleOptions) {
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

let mosfik: isPlayer;
mosfik = new Player("Mosfik", 23, "Bangladesh");

console.log(mosfik);
console.log(mosfik.getProperty());

// Enum
enum RType {
  success,
  failuer,
  unauthorized,
  forbidden,
}

interface APIResponse<T> {
  status: number;
  type: RType;
  data: T;
}

const response1: APIResponse<string> = {
  status: 200,
  type: RType.failuer,
  data: "test",
};

console.log(response1);

// tuples

let p = [3, "hello", { p: 4 }];

p[2] = 3;
console.log(p);

let q: [number, string, object] = [3, "hello", {}];
q[2] = { p: 4 };
q.push(989);
console.log(q);
