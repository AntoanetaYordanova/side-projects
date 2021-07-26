function makeADictionary(inputArr) {
    let dictioanryObj = {};

    for(let term of inputArr){
        term = JSON.parse(term);
        let key = Object.keys(term) .join();
        let value = Object.values(term) .join();
        let dictionaryKeys = Object.keys(dictioanryObj); 

        dictioanryObj[key] = value;
 
    }

    let dictioanryKeys = Object.keys(dictioanryObj) .sort();

    for(let prop of dictioanryKeys){
        let value = dictioanryObj[prop];

        console.log(`Term: ${prop} => Definition: ${value}`);
    }
}

makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
    );