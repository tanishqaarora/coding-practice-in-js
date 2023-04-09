// creating a 2-Dim array 
// FIRST METHOD

const rows = 3;
const columns = 3;

const myArray1 = [];

// outer loop for rows
// innder loop for colums

for (let i = 0; i < rows; i++) {
    myArray1[i] = [];
    for (let j = 0; j < columns; j++) {
        myArray1[i][j] = j;
    }
 }

console.log(myArray1);        //[ [ 0, 1, 2 ], [ 0, 1, 2 ], [ 0, 1, 2 ] ]

// SECOND METHOD

const myArray2 = new Array(rows);

for( let i = 0; i < rows; i++) {
    myArray2[i] = new Array(columns);
}

console.log(myArray2);

// THIRD METHOD

const myArray4 = [[1,2], [3,4], [4,5], [6,7]];

console.log(myArray4);

// FOURTH METHOD

const myArray3 = Array.from(Array(rows), () => new Array(columns));

console.log(myArray3);