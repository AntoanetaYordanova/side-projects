function arrayManipulation(numsArr, tasksArr){
   let newArr =  numsArr;

   for(let i = 0; i < tasksArr.length; i++){
        let currentArr = tasksArr[i];
        currentArr = currentArr.split(' ');

       function isAdd(arr) {
        if(arr.indexOf('add') !== -1){
            return true;
        } else {
            return false;
        }
       }
       
       function	isAddMany(arr) {
        if(arr.indexOf('addMany') !== -1){
            return true;
        } else {
            return false;
        }
       } 

       function isContains(arr){
        if(arr.indexOf('contains') !== -1){
            return true;
        } else {
            return false;
        }
       }

       function isRemove(arr){
        if(arr.indexOf('remove') !== -1){
            return true;
        } else {
            return false;
        }
       }

       function isShift(arr){
        if(arr.indexOf('shift') !== -1){
            return true;
        } else {
            return false;
        }
       }

       function isSumPairs(arr) {
        if(arr.indexOf('sumPairs') !== -1){
            return true;
        } else {
            return false;
        }
       }

       function isPrint(arr){
           if(arr.indexOf('print') !== -1){
               return true;
           } else {
               return false;
           }
       }

       function shift(positions, arr){
           for(let i = 0; i < positions; i++){

               let tempValue = arr.shift();
               arr.push(tempValue);
           }
       }

       if(isAdd(currentArr)){
           let index = currentArr[1];
           let element = Number(currentArr[2]);

           newArr.splice(index, 0, element);
       }

       if(isAddMany(currentArr)){
           let index = currentArr[1];

           for(let i = currentArr.length - 1; i > 1; i--){
               newArr.splice(index, 0, Number(currentArr[i]));
           }
       }

       if(isContains(currentArr)){
           let element = Number(currentArr[1]);
           let index = newArr.indexOf(element);
           console.log(index);
       }

       if(isRemove(currentArr)){
           let index = currentArr[1];
           newArr.splice(index, 1);
       }

       if(isShift(currentArr)){
           let positions = currentArr[1];
        shift(positions, newArr);
       }

       if(isSumPairs(currentArr)){

        let index = 0;
        let tempArr = [];
        while(index < newArr.length){
            if(index !== newArr.length - 1){
                tempArr.push(newArr[index++] + newArr[index++]);
            } else {
                tempArr.push(newArr[index++])
            }
        
        }
        newArr = tempArr;
       }

       if(isPrint(currentArr)){
        console.log(newArr);
    }
   }


}


// arrayManipulation([1, 2, 4, 5, 6, 7],
//     ['add 1 8', 'contains 1', 'contains 3', 'print']);

// arrayManipulation([1, 2, 3, 4, 5],
//     ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'sumPairs', 'print'])
arrayManipulation([1, 2, 4, 5, 6, 7],
    ["add 1 8", "contains 1", "contains -3", "print"])