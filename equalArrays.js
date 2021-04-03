function equalArrays(arrOne, arrTwo){
    let equals = true;
    let sum = 0;
    for(let i = 0; i < arrOne.length; i++ ){
        arrOne[i] = Number(arrOne[i]);
    } 
    for(let i= 0; i < arrTwo.length; i++){
        arrTwo[i] = Number(arrTwo[i]);    }

        for(let i = 0; i < arrOne.length; i++){
            sum += arrOne[i];
            if(arrOne[i] !== arrTwo[i]){
                equals = false;
                console.log(`Arrays are not identical. Found difference at ${i} index`);
                break;
            }
        }

        if(equals){
            console.log(`Arrays are identical. Sum: ${sum}`);
        }
}

equalArrays(['10','20','30'], ['10','20','30'])