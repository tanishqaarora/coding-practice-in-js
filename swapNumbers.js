// Program to swap two numbers

// 1) without using third variable
// using + and -

let a = 10;
let b = 20;

console.log(`Before Swapping: a = ${a} and b = ${b}`);

a = a + b;         // 30
b = a - b;         // 10
a = a - b;         // 20

console.log(`After Swapping: a = ${a} and b = ${b}`);

console.log("============================");


// using * and /

let x = 5; 
let y = 7;

console.log(`Before Swapping: x = ${x} and y = ${y}`);

x = x * y;         // 200
y = x / y;         // 200/20 = 10
x = x / y;         // 200/10 = 20

console.log(`After Swapping: x = ${x} and y = ${y}`);

// 2) using third variable

let temp = a;
a = b; 
b = temp;

console.log(`After Swapping: a = ${a} and b = ${b}`);

