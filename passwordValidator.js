function passwordValidator(passInput){
    let isSixChar = false;
    let charCount = 0;
    let numCount = 0;
    let isTwoNum = false;
    let isSymbol = false;


    for(let i = 0; i < passInput.length; i++){
        charCount++;
        if(charCount >= 6){
            if(charCount > 10){
                isSixChar = false;
            }
            isSixChar = true;
        }
        let currentSymbol = passInput[i];
        if(currentSymbol >= 'a' && currentSymbol <= 'z' || currentSymbol >= 'A' && currentSymbol <= 'Z'){
          
        } else {
            if(Number(currentSymbol) >= 0 && Number(currentSymbol) <= 9){
                numCount++;
                if(numCount >=2){
                    isTwoNum = true;
                }
            } else {
                isSymbol = true;
            }
        }

    }

    if(!isSixChar) {
        console.log('Password must be between 6 and 10 characters');
    } 
    if(isSymbol) {
        console.log('Password must consist only of letters and digits');
    } 
    if(!isTwoNum){
        console.log('Password must have at least 2 digits');
    }
    if(isSixChar && isTwoNum && !isSymbol){
        console.log('Password is valid');
    }
    
}

passwordValidator('logIn')
// passwordValidator('MyPass123')
// passwordValidator('Pa$s$s')
