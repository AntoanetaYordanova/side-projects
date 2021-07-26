function oddAndEvenSum(n){
    let arr = String(n).split('');
    let oddSum = 0;
    let evenSum = 0;

    for(let i = 0; i < arr.length; i++){
       let num = Number(arr[i]);
       num % 2 === 0 ? evenSum += num : oddSum += num;
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

}

oddAndEvenSum(1000435)