function catalogue(inputArr) {
    let printCatalogue = {};

    for(let currentArr of inputArr){
        let letter = currentArr[0];
        if(!Object.keys(printCatalogue).includes(letter)){
            printCatalogue[letter] = [currentArr];
        } else {
            printCatalogue[letter].push(currentArr);
        }
    }

    let keysOfCatalogue = Object.keys(printCatalogue) 
    keysOfCatalogue = keysOfCatalogue.sort((a, b) => a.localeCompare(b));
    for(let prop of keysOfCatalogue){
        console.log(prop);
        let printArr = printCatalogue[prop].sort((a, b) => a.localeCompare(b));
        for(let currnetPrint of printArr){
            let [name, price] = currnetPrint.split(' : ');
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