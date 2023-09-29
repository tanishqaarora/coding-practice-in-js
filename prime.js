// Program to check whether a number is prime or not

let number = 11;

function checkPrime(num) {
    if(num <= 1) {
        return false;
    }
    else if(num === 2) {
        return true;
    }
    else {
        for(let i = 2; i <= Math.sqrt(num); i++) {
            if(num % i === 0) {
                return false;
            } 
        }
        return true;
    }
}

const result = checkPrime(number);

if(result) {
    console.log("It is a prime number.");
}
else {
    console.log("It is not a prime number.")
}
