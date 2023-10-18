// Program to generate a fibonacci series up to certain terms

let terms = 8;

// initialize first two terms
let n1 = 0, n2 = 1;

for(let i = 0; i < terms; i ++){
    console.log(n1);
    let nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}