// Counting the number of factors of a number
// Creating a function which will take a any number and counts its factors

function countFactors(N) {
    count = 0;
    for(let i = 2; i <= Math.sqrt(N); i ++) {
        if(N % i == 0) {
            if(N/i == i) {
                count ++ ;
            } else {
                count = count + 2;
            }
        }
    }
    return count;
}

console.log(countFactors(100));