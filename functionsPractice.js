let arrOne = [1,2,3,4,5,6];
let arrTwo = [1,2,3];

function isIndexCorrect(arr, index){
    if(index < 0 || index > arr.length - 1){
        return false;
    } else{
        return true;
    }
}

let isCorrect = isIndexCorrect(arrTwo, 5);

console.log(isCorrect);
console.log(isIndexCorrect(arrOne, 4));