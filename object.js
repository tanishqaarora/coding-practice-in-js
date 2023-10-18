// Solve this:
// Given: [1,2,3,1,2]
// Show output: {
    //           1: 2,
    //           2:2,
    //           3:1
//              }

let arr = [1,2,3,1,2];
let obj = {};

for(let i = 0; i < arr.length; i++) {
    let ele = arr[i];
    if(obj[ele]){
        obj[ele]++;
    } else {
        obj[ele] = 1;
    }
}

console.log(obj);