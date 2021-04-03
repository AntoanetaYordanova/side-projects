function equalSums(inputArr){
    let isNo = true;
    for(let i = 0; i < inputArr.length; i++){
        let leftSum = 0;
        let rightSum = 0;
       
            for(let j = 0; j < inputArr.length; j++){
                if(j < i){
                    leftSum += inputArr[j];
                } else if(j > i){
                    rightSum += inputArr[j];
                }
            }

        if(leftSum === rightSum){
            console.log(i);
            isNo = false;
        }
    }

    if(isNo){
        console.log('no');
    }
}

equalSums([1]);