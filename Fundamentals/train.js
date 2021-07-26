function train(inputArr){
    let wagon = inputArr.shift();
    let capacity = inputArr.shift();
    let wagonArr = wagon.split(' ')
                        .map(Number);

    for(let value of inputArr){
        let [firstValue, secondValue] = value.split(' ')
        
        if(firstValue === 'Add'){
            wagonArr.push(Number(secondValue));
        } else {
            firstValue = Number(firstValue);
           
            for(let i = 0; i < wagonArr.length; i++){
               if(wagonArr[i] + firstValue <= capacity){
                   wagonArr[i] += firstValue;
                   break;
               } 
            }
        }

        
    }

    console.log(wagonArr.join(' '));
}


train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
)