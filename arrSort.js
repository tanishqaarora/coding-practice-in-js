let arr = [10, 5, 3, 4, 9, 2, 2, 4, -1];
let temp;

console.log(`The original array is: ${arr}`);

for(let i=0; i<arr.length; i++) {
    for(let j=i+1; j<arr.length; j++) {
        if(arr[i]>arr[j]) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
       }
    }  
}
console.log(`The Sorted array is: ${arr}`);