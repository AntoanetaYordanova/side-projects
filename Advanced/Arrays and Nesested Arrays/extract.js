function extract(input) {

    for(let i = 0; i < input.length; i++) {
        let currentNum = input[i];

        for(let j = i + 1; j < input.length; j++) {

            if(input[j] <= currentNum) {
                input.splice(j, 1);
                break;
            }
        }
    }

    console.log(input.join('\n'));
}

extract([1, 3, 8, 4, 10, 12, 3, 2, 24]);
console.log('--------');
extract([1, 2, 3,4]);
console.log('--------');
extract([20, 3, 2, 15, 6, 1]);
