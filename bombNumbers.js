function bombNumbers(numArr, taskArr){
        let numTarget = taskArr[0];
        let bombNum = taskArr[1];
        let resultArr = numArr;
        let finalNum = 0;

        for(let i = 0; i < numArr.length; i++){
            if(numArr[i] === numTarget) {
                resultArr.splice(i - bombNum, bombNum + 1);
                resultArr.splice(i - bombNum, bombNum);
            }
        }

        for(let number of resultArr){
            finalNum += number;
        }
        
        console.log(finalNum);
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2])