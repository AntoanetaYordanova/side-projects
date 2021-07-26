function arrayManipulations(inputArr){
    let numsArr = inputArr.shift()
                         .split(' ')
                        .map(Number);
                            
    let taskArr = inputArr;

    for(let i = 0; i < taskArr.length; i++){
        let [command, firstNum, secondNum] = taskArr[i].split(' ');
        firstNum = Number(firstNum);   

        switch (command){
            case 'Add':
                numsArr.push(firstNum);
                break;
            case 'Remove':
                numsArr = numsArr.filter(x => x !== firstNum);
                break;
            case 'RemoveAt':
                numsArr.splice(firstNum, 1)
                break;
            case 'Insert'  :
                 secondNum = Number(secondNum);
                 numsArr.splice(secondNum, 0, firstNum);
                break;      
        }

    }

    console.log(numsArr.join(' '));
}

arrayManipulations(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']
)

