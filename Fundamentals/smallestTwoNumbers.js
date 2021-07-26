function smallestTwoNumbers(inputArr){
    let resultArr = inputArr.sort((a, b) => a - b);

    console.log(resultArr.splice(0, 2)
    .join(' '));
}

smallestTwoNumbers([30, 15, 50, 5])