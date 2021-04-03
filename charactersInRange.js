function charactersInRange(a, b){
    let firstChart = a.charCodeAt();
    let secondChart = b.charCodeAt();
    let start = firstChart < secondChart ? firstChart : secondChart;
    let finish = firstChart < secondChart ? secondChart : firstChart;

    let printString = '';

    for(let i = start + 1; i < finish; i++){
        printString += String.fromCharCode(i) + ' ';
    }

    return printString;
}

console.log(charactersInRange('#',':'));