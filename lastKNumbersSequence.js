function lastKNumbersSequence(n, k){
    let resultArr = [1];

    for(let i = 1; i < n; i++){
        let nextNum = 0;
        let tempArr = resultArr.slice(-k);

            for(let number of tempArr){
            nextNum += number;
        }

        resultArr.push(nextNum);

}
    console.log(resultArr.join(' '));

}

lastKNumbersSequence(6, 3);