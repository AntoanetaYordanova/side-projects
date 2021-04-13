function distinctArray(inputArr){
    for(let i = inputArr.length - 1; i >= 0 ; i--){
        for(let j = 0; j <= inputArr.length; j++){
            if(inputArr[i] === inputArr[j] && i !== j){
                inputArr.splice(i, 1);
            }
        }
    }

    console.log(inputArr.join(' '));
}

distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);