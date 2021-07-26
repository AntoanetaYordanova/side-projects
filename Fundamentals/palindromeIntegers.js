function palindromeIntegers(arrInput){

    for(let i = 0; i < arrInput.length; i++){
        let currentNum = String(arrInput[i]);
        currentNum = currentNum.split('');
        let tempNum = '';
        for(let j = currentNum.length - 1; j >= 0; j--){
            tempNum = tempNum + currentNum[j]
        }
        tempNum = Number(tempNum);
        
        function areEqual(a, b){
            if(a === b){
                console.log(true);
            } else{
                console.log(false);
            }
        }
        currentNum = Number(currentNum.join(''));
        areEqual(currentNum, tempNum);

    }
}
 palindromeIntegers([123,323,421,121])