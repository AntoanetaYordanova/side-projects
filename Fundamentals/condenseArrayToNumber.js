function condenseArrayToNumber(num){

    while(num.length > 1){
        let condensed = [];
        let index = 0;
        while(index < num.length - 1){
            condensed.push(num[index++] + num[index]);
        }

        num = condensed;
    }
    let finalNum = num[0];
   console.log(finalNum);
}

condenseArrayToNumber([5,0,4,1,2])