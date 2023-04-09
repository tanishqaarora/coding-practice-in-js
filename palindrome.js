// check if the string is palindrome or not

// check using loop

let str = 'Abcba';


function checkPalindrome(string) {
    // firstly convert string to lower case 
    let newStr = string.toLowerCase();
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

// check using built-in functions
let newStr = str.toLowerCase();
let reverseStr = newStr.split('').reverse().join('');
if( newStr === reverseStr ){
    console.log('It is a Palindrome');
}
else{
    console.log('It is not a Palindrome');
}