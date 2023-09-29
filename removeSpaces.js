// program to remove the spaces from the given string
// 1) using method

let str = 'This is me';

// split() method splits the string into sub strings on the basis of separator and form an array
let newStr = str.split(' ');

// join() method is used to join an array of strings using a separator
let getStr = newStr.join('');

// or can be written as in one line
// let newStr = str.split(' ').join('');

// 2) without using method

// traverse through the string
let strr = '';
for(let i = 0; i < str.length; i++) {
    if(str[i] !== ' ') {
        strr += str[i];
    }
}
console.log("strr", strr);