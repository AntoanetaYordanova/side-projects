function houseParty(inputArr){
    let theList = [];

    for(let i = 0; i < inputArr.length; i++){
        let tempValue = inputArr[i];
        let newArr = tempValue.split(' ');
        let name = newArr[0];
        
        function isGoing(){
            if(newArr.indexOf('not') === -1){
                return true;
            } else {
                return false;
            }
        }
        
        function isInTheList(a){
            if(theList.indexOf(a) === -1){
                return false;
            } else {
                return true;
            }
        }

        if(isGoing()){
            if(isInTheList(name)){
                console.log(`${name} is already in the list!`);
            } else {
                theList.push(name);
            }
        } else {
            if(isInTheList(name)){
                theList.splice(theList.indexOf(name), 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        }

    }

    console.log(theList.join('\n'));
}

// houseParty(['Allie is going!',
// 'George is going!',
// 'John is not going!',
// 'George is not going!'])

houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']
)