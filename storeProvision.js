function storeProvision(firstArr, secondArr){
    let productsObj = {};
    let index = 0;
    
    while(index < firstArr.length){
        productsObj[firstArr[index++]] = Number(firstArr[index++]);
    }
    index = 0;

    let keysArr = Object.keys(productsObj);
    
    while(index < secondArr.length){
        if(keysArr.indexOf(secondArr[index]) !== -1){
            let tempValue = productsObj[secondArr[index]];
            productsObj[secondArr[index++]] = tempValue + Number(secondArr[index++]);
        } else {
            productsObj[secondArr[index++]] = Number(secondArr[index++]);
        }

    }

    let finalKeysArr = Object.keys(productsObj);

    for(let prop of finalKeysArr){
        let value = productsObj[prop];
        console.log(`${prop} -> ${value}`);
    }
}

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    )