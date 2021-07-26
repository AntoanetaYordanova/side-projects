function numberModification(num){
    let myArr = String(num).split('');
    let isHigher = false;

    while(true) {
        let tempNum = 0;
        let counter = 0;
        for(let number of myArr){
        counter++;
        tempNum += Number(number);
        }
        if(tempNum / counter >= 5){
            isHigher = true;
            break;
        }
        myArr.push('9');
       
    }
    
    let finalNum = Number(myArr.join(''));
    console.log(finalNum);
}

numberModification(5835)