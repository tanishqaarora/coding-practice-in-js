// check if the string is palindrome or not, considering spaces also like str = 'ab cd'

// replace(/\s/g, "") will use to remove any white spaces from string 
// The \s meta character in js regex matches any whitespace character: spaces, tabs, newlines and Unicode spaces.
// and the g flag tells js to replace it multiple times. If you miss g, it will only replace the first occurrence of the white space.

// 1) using loop - matching start and end index

let str = 'Abc b a';

function checkPalindrome(string) {
    // firstly remove spaces from string and convert it to lower case 
    let newStr = string.replace(/\s/g, "").toLowerCase();
    let start = 0;
    let end = newStr.length-1;

    while(start<=end) {
        if(newStr[start] !== newStr[end]) {
            return 'It is not a Palindrome';
        }
        else {
            start++;
            end--;
        }
    
    }
    return 'It is a Palindrome';
}

console.log(checkPalindrome(str));

// 2) using loop - comparing string with its reverse

let newStr = str.replace(/\s/g, "").toLowerCase();
let revStr = '';
for(let i = newStr.length - 1; i >= 0; i--) {
    revStr += newStr[i];
}

if(newStr === revStr) {
    console.log("It is a Palindrome");
} else {
    console.log("It is not a Palindrome");
}

// 3) using built-in functions

let reverseStr = str.replace(/\s/g, "").toLowerCase().split('').reverse().join('');

if( str === reverseStr ){
    console.log('It is a Palindrome');
}
else{
    console.log('It is not a Palindrome');
}