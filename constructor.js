function add(x){
    return function (y){
        return x + y;
    }
}


console.log(add(3)(4)); // 1st method to call constructor function.

// Here in constructor function function returns another function and it won't clear memory fully
//untill it get's clear so we need to attache the reference to some other variable and we need to invoke that

var constructorTest = add(4);
constructorTest(3); // Second method to invoke this
