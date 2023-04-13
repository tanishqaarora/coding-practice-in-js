// Program to search a specific element in an array

let arr = [1, 2, 6, 9, 33, 67];
let toSearch = 33;

for(let i = 0; i < arr.length; i++) {
    if(arr[i] === toSearch) {
        console.log(`The search item ${toSearch} is present at position ${i+1}`);
    }
}

