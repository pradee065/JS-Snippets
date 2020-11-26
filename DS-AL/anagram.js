// given two stings viz: abcdedfgj abcdedfg 
//sc.1 : we are sending one encrypted value and recieving same encrypted value in other end 
//but some character is missing write a algorthim to solve this problem.

function missingChar(stringA, stringB){
    var stringA = stringA.toLowerCase().trim();
    var stringB = stringB.toLowerCase().trim();
    const charMapA = charMap(stringA);
    const charMapB = charMap(stringB);
    for(let char in charMapA){
        if(charMapA[char] !== charMapB[char]){
           console.log(char);
        }
    }
    
}

function charMap(string){
    let charMap = {}
    for(let char of string){
        charMap[char] = charMap[char] + 1 || 1
    } 
    
    return charMap;

}

missingChar('abcdedfgjada', 'abcdedfg');