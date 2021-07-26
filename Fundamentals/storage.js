function storage(inputArr) {
    let storageMap = new Map();

    for(let string of inputArr){
        let [item, amount] = string.split(' ');
        amount = Number(amount);
        if(!storageMap.has(item)){
            storageMap.set(item, amount);
        } else {
            let tempValue = storageMap.get(item);
    
            storageMap.set(item, tempValue + amount);
    
        }
    }
    
    for(let [key, value] of storageMap){
        console.log(`${key} -> ${value}`);
    }
}

storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
)