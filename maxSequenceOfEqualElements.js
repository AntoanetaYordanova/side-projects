function maxSequenceOfEqualElements(inputArr){
    let maxSequenceNum = 0;
    let compareNum = 0;
    let maxSequence = 1;
    let compareSequence = 1;

    for(let i = inputArr.length - 1; i >= 0; i--){
        let currentValue = inputArr[i];
        let nextValue = inputArr[i - 1];
        if(currentValue === nextValue){
            compareNum = inputArr[i];
            compareSequence++;
        } else{
            compareSequence = 1;        
        }
        if(maxSequence <= compareSequence){
            maxSequenceNum = compareNum;
            maxSequence = compareSequence;
        }
    }   

    let finalArray = [];
    for(let i = 0; i < maxSequence; i++){
        finalArray.push(maxSequenceNum);
    }
    
    console.log(finalArray.join(' '));
}

maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3])