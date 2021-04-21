function convertToObject(inputText){
    let obj = JSON.parse(inputText);
    let arr = Object.keys(obj)

    for(let prop of arr){
        let value = obj[prop];

        console.log(`${prop}: ${value}`);
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')