function perfectNumber(numInput){
    let divNums = [];

   for(let i = 1; i < numInput; i++){
    if(numInput % i === 0){
        divNums.push(i);
    }
   } 

   let sum = 0;

   for(let i of divNums){
       sum += i;
   }

   function areEqual(a, b){
       let isTrue = true;
       if(a === b){
           isTrue = true;
       } else {
           isTrue = false;
       }
       return isTrue;
   }

   areEqual(sum, numInput) ? console.log('We have a perfect number!') : console.log('It\'s not so perfect.');
}

perfectNumber(1236498);