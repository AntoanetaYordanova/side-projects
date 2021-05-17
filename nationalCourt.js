function nationalCourt(inputArr) {
    let peoplePerHour = Number(inputArr[0]) + Number(inputArr[1]) + Number(inputArr[2]);
    let peopleCount = Number(inputArr[3]);
    let hours = 0;

    while(peopleCount > 0){
        hours++;
        if(hours % 4 !== 0 || hours === 0){
            peopleCount -= peoplePerHour;
        } 
    }

    console.log(`Time needed: ${hours}h.`);
}

// nationalCourt([ '5', '6', '4', '20' ])
// nationalCourt([ '1', '2', '3', '45' ])
nationalCourt([ '3', '2', '5', '40' ])