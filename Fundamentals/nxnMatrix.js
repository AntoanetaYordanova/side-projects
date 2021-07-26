function nxnMatrix(num){
    for(let i = 0; i < num; i++){
        let printString = '';
        for(let j = 0; j < num; j++){
            printString += num + ' ';
        }

        console.log(printString);
    }
}

nxnMatrix(3);