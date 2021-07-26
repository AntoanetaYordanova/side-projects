function sortAnArray(inputArr){
    let resultArr = inputArr.sort(function compare(a, b) {
        if(a.length === b.length){
            return a.localCompare(b);
        } else {
            return a - b;
        }
    });
    
    console.log(resultArr.join('\n'));
}

sortAnArray(['Deny',
    'omen',
    'test',
    'Default'])