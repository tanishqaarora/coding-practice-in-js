// program to remove the spaces from the given string

let str = 'This is me';

// split() method splits the string on the basis of separator and form an array
let newStr = str.split(' ');

// join() method is used to join an array of strings using a separator
let getStr = newStr.join('');

// or can be written as
// let newStr = str.split(' ').join('');

console.log(str);
console.log(newStr);
console.log(getStr);