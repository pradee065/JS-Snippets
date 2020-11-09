var arr1 = [1, 2, 3, 4, 5];
var arr2 = [2, 3, 4, 5, 6, 7, 8, 9, 10];
var arr3 = [...arr1, ...arr2];
var arr4 = [];
console.log(arr3);

arr2.forEach((value) => {
    if(arr3.indexOf(value) === -1){
        arr3.push(value);
    }
});

console.log(arr3);

// arr3.forEach((value) => {
//     if(arr4.indexOf(value) === -1){
//         arr4.push(value);
//     }
// });

// console.log(arr4);


