// check if the string is palindrome or not

// check using loop

let str = 'abcba';

function checkPalindrome(string) {
    let start = 0;
    let end = string.length-1;

    while(start<=end) {
        if(string[start] !== string[end]) {
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

let reverseStr = str.split('').reverse().join('');
if( str === reverseStr ){
    console.log('It is a Palindrome');
}
else{
    console.log('It is not a Palindrome');
}