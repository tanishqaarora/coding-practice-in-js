// Program to check whether a number is prime or not

function isPrime(num) {
    if(num <=1 ) {
        return false;
    }
    else if(num > 1) {
        for(let i = 2; i <= Math.sqrt(num); i++) {
            if(num % i === 0) {
                return false;
            }
        }
    }
    return true;
}

const result = isPrime(111);

if(result) {
    console.log("It is a prime number.");
}
else {
    console.log("It is not a prime number.")
}


// Find all the prime factors of the given number

function factors(num) {
    let factors = [];
    let factor = 2;
    while(num > 1) {
        if(num % factor === 0) {
            factors.push(factor);
            num = num/factor;
        } else {
            factor++;
        }
    }
    return factors;
}
factors(100);

// to get unique factors;
console.log([... new Set(factors(100))]);
