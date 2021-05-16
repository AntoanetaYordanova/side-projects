function meetings(inputArr) {
    let schedule = {};
    
    for(let input of inputArr){
        let [day, person] = input.split(' ');
        if(!schedule.hasOwnProperty(day)){
            schedule[day] = person;
            console.log(`Scheduled for ${day}`);
        } else {
            console.log(`Conflict on ${day}!`);
        } 
    }

    for(let [day, person] of Object.entries(schedule)){
        console.log(`${day} -> ${person}`);
    }
}

meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
)