function arrayRotation(inputArr, inputNum){
    let counter = 0;
    let tempArr = [];

    while(counter < inputNum){
        tempArr = Number(inputArr[0]);
        inputArr.shift();
        inputArr.push(tempArr);
        counter++;
    }

    console.log(inputArr.join(' '));
}

arrayRotation([32, 21, 61, 1], 4)