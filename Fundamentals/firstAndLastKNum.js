function firstAndLastKNum(inputArr){
    let k = inputArr.shift();

    let first = inputArr.slice(0, k);
    let second = inputArr.slice(-k)
    console.log(first.join(' '));
    console.log(second.join(' '));
}

firstAndLastKNum([2, 7, 8, 9])