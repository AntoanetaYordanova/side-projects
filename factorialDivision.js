function factorialDivision(firstNum, secondNum){
    let firstFactorial = findFactorial(firstNum);
    let secondFactorial = findFactorial(secondNum);

    function findFactorial(a){
        let factorial = 1;
        for(let i = 1; i <= a; i++){
            factorial *= i;
        }

        return factorial;
    }

    let result = firstFactorial / secondFactorial;

    return result.toFixed(2);
    
}

console.log(factorialDivision(5, 2))