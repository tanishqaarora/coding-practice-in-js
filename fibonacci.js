// Program to generate a fibonacci series up to certain terms

let num = 8;

let n1 = 0, n2 = 1;

for(let i = 0; i < num; i ++){
    console.log(n1);
    let nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}