var str = "aabc";
var str1 = str.split('');
console.log(str1);
function removeduplicatestring(str1){
    
for(var i=0; i<str1.length; i++){
    if(str1[i]=== str1[i+1]){
        str1.splice(i, 1);
        removeduplicatestring(str1)
    }
}
}

console.log(removeduplicatestring(str1));
console.log(str1);
