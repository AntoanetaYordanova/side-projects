function catalogue(inputArr) {
    let productsObj = {};
    
    for(let product of inputArr){
        let [name, price] = product.split(' : ');
        let letter = name[0];
        let keys = Object.keys(productsObj);

        if(!keys.includes(letter)){
            productsObj[name[0]] = [product];
        }  else{
            productsObj[name[0]].push(product);
        }
    }

    let propOfProducts = Object.keys(productsObj) .sort();

    for(prop of propOfProducts){
        let currentArr = productsObj[prop];
        currentArr.sort();
        console.log(prop);
        for(let product of currentArr){
            let [name, price] = product.split(' : ');
            console.log(`  ${name}: ${price}`);
        }
    }

}


catalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
    ])