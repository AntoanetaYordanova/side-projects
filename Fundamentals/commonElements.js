function commonElements(inputArrOne, inputArrTwo){
    for(let firstElement of inputArrOne){
        for(let secondElement of inputArrTwo){
            if(firstElement === secondElement){
                console.log(firstElement);
            }
        }
    }
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']
)