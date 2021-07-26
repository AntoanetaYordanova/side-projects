function listOfProducts(inputArr){
    let resultArr = [];
    let tempArr = inputArr.sort();

    for(let i = 0; i < tempArr.length; i++){
        resultArr.push(`${i + 1}.${tempArr[i]}`);
    }

    console.log(resultArr.join('\n'));
}

listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"])