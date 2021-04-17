function searchForANumber(numsArr, tasksArr){
    let newArr = numsArr.splice(0, tasksArr[0]);
        newArr.splice(0, tasksArr[1]);
    let counter = 0;

    for(let number of newArr){
        if(number === tasksArr[2]){
            counter++;
        }
    }

    console.log(`Number ${tasksArr[2]} occurs ${counter} times.`);
}

searchForANumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
    )