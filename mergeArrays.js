function mergeArrays(arrOne, arrTwo){
    let resultArr = [];
    for(let i = 0; i < arrOne.length; i++){
        if(i % 2 === 0){
            resultArr.push(Number(arrOne[i]) + Number(arrTwo[i]));
        } else{
            resultArr.push(arrOne[i] + arrTwo[i]);
        }
    }

    console.log(resultArr.join('-'));
}

mergeArrays(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']
)