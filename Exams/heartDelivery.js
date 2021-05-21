function heartDelivery(inputArr) {
    let houses = inputArr.shift() .split('@') .map(Number);
    let index = 0;

    for(let action of inputArr){
        while(action !== 'Love!'){
            let [jump, num] = action.split(' ');
        
            for(let i = 1; i <= Number(num); i++){
                index++;
                if(index > houses.length - 1){
                    index = 0;
                }
            }

            let tempValue = houses.splice(index, 1);

            if(tempValue > 0){
                tempValue -= 2;
                houses.splice(index, 0, tempValue);
                if(tempValue === 0){
                    console.log(`Place ${index} has Valentine's day.`);
                }
            } else {
                console.log(`Place ${index} already had Valentine's day.`);
            }
           
            break;
            
        }
    }

    let isSuccessfull = true;
    let failedCount = 0;

    for(let num of houses){
        if(num !== 0){
            isSuccessfull = false;
            failedCount++;
        }
    }
    
    console.log(`Cupid's last position was ${index}.`);
    if(isSuccessfull){
        console.log("Mission was successful.");
    } else {
        console.log(`Cupid has failed ${failedCount} places.`);
    }
} 

// heartDelivery([ '10@10@10@2', 'Jump 1', 'Jump 2', 'Love!' ]);

heartDelivery(['2@4@2',  'Jump 2','Jump 2', 'Jump 8','Jump 3', 'Jump 1','Love!'])