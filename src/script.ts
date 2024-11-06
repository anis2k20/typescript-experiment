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
