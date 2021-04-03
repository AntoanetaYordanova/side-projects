function addOrSubstract(inputArr){
    let newArray = [];
    let arrOneSum = 0;
    let arrTwoSum = 0;
    
    for(let i = 0; i < inputArr.length; i++){
        let currenNum = inputArr[i];
        arrOneSum += currenNum;
        let newNum = 0;
        if(currenNum % 2 === 0){
            newNum = currenNum + i;
            newArray.push(newNum);
            arrTwoSum += newNum;
        } else{
            newNum = currenNum - i;
            newArray.push(newNum);
            arrTwoSum += newNum;
        }
    }

    console.log(newArray);
    console.log(arrOneSum);
    console.log(arrTwoSum);
}

addOrSubstract([-5, 11, 3, 0, 2])