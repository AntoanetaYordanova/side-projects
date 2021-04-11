function negativeOrPositiveNum(arrayInput){
    let newArray = [];
    for(let number of arrayInput){
        if(number < 0){
            newArray.unshift(number);
        } else {
            newArray.push(number);
        }
    }

    for(let outputNum of newArray){
        console.log(outputNum);
    }
}

negativeOrPositiveNum([7, -2, 8, 9])