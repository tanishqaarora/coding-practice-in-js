let word = 'AaBbCc';
let vowels = ['a', 'e', 'i', 'o', 'u'];

function countVowel(word) {
    // converting to lower case first
    let wordVal = word.toLowerCase();
    // initializing count
    let count = 0;
    // loop through the word to check if the current letter is a vowel or not
    // if vowel, increase count by 1
    for(let i = 0; i < wordVal.length; i++) {
        let letter = wordVal[i];
        if(vowels.includes(letter)) {
            count++;
        }
    }
    console.log(`${word} has ${count} vowels.`);
}

countVowel(word);