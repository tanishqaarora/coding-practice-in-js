// Program to remove duplicates from given array
// 1) without using method

let array = [1,1,2,3,3,3,4,4,5,6,6,7,7,8];
let uniqueArr = [];

// Traverse through the array
for(let i = 0; i < array.length; i++) {
    let isDuplicate = false;
    for(let j = 0; j < uniqueArr.length; j++) {
        if(array[i] === uniqueArr[j]) {
            isDuplicate = true;
            break;
        }
    }
    if(!isDuplicate) {
        uniqueArr.push(array[i]);
    }
}

console.log("unique values from array: ", uniqueArr);

// 2) using method - set()

let uniqueArr1 = [...new Set(array)];
// or Array.from(new Set(array));

console.log(uniqueArr1);

// 3) using method - filter()

const uniqueArr2 = array.filter((value, index, arr) => {
  return arr.indexOf(value) === index;
});

console.log(uniqueArr2); 


