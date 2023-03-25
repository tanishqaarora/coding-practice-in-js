// Array 
let arr = [2, -1, -5, 3, 5, 1, -2, 4];

// Initially, set the maximum number to be the smallest possible number
let max = Number.MIN_SAFE_INTEGER;
let maxIndex = -1;

// Now, compare the max number with each element of an array
// And set the max variable with the new maximum number if found
for(let i = 0; i < arr.length; i ++){
    if(max < arr[i]){
        max = arr[i];
        maxIndex = i;
    }
}

console.log('Maximum element is: ', max);
console.log('Found At index: ', maxIndex); 