// Program to find the factorial of any number n

// 1) using loop

function factorial(n) {
    let fact = 1;
    for(let i = 1; i <= n; i ++) {
        fact = fact * i;
    }
    return fact;
}

console.log(factorial(5));

// 2) using recursion

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n-1);
}

const result = factorial(5);
console.log(`Factorial is ${result}`);
