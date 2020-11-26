// BAsic promise method

var coronaEnds = new Promise((resolve, reject) => {
    const random = Math.random();

    if(random < 0.5){
        resolve();
    }
    else {
        reject();
    }
});

coronaEnds.then(() => {
    console.log('Finally Corona Ends in Dec!!');
}).catch(() => {
    console.log('Not ended yet');
})


// Returning promise from function

function coronaFun(){
   return new Promise((resolve, reject) => {
        const random = Math.random();
    
        if(random < 0.5){
            resolve();
        }
        else {
            reject();
        }
    });
}


coronaFun()
.then(() => {
    console.log('Finally Corona Ends in Dec!!');
}).catch(() => {
    console.log('Not ended yet');
});