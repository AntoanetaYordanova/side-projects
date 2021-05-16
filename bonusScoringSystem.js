function bonusScoringSystem(inputArr){
    let studentsNum = inputArr.shift();
    let lectures = Number(inputArr.shift());
    let bonus = Number(inputArr.shift());
    let highest = Number(inputArr[0]) / lectures * (5 + bonus);
    let maxAtended = Number(inputArr[0]);
    
    for(let atendences of inputArr){
        let currentMaxBonus = Number(atendences) / lectures * (5 + bonus)
        if(currentMaxBonus > highest){
            highest = currentMaxBonus;
            maxAtended = Number(atendences);
        }
    }

    console.log(`Max Bonus: ${highest.toFixed()}.`);
    console.log(`The student has attended ${maxAtended} lectures.`);
} 


bonusScoringSystem([
    '5',  '25', '30',
    '12', '19', '24',
    '16', '20'
  ]
  )