//Problem Statement : Flatten the nested array to single array
// Ex: [1, 2, 3, [[[4]]], 5, [6, 7]] to [1, 2, 3, 4, 5, 6, 7]
var arr = [1, [2, 3], [[[4]]], 5, [6, 7]];

function flatten(arr){
    var flatArray = [];

    //do some stuffs
    arr.forEach(element => {
        if(Array.isArray(element)){
            flatArray = flatArray.concat(flatten(element));
        }
        else {
            flatArray.push(element)
        }
    });

    return flatArray;
}

var flatArray = flatten(arr);
console.log(flatArray);