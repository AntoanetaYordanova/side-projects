function muOnline(input) {
    let roomCounter = 0;
    let bitcoins = 0;
    let health = 100;
    let inputArr = input.split('|');

    for(let room of inputArr){
        roomCounter++;
        let [type, points] = room.split(' ');
        points = Number(points);
        if(type === 'potion'){
            let heal = health + points;
            let difference = 0;
            if(heal < 100){
                health = heal;
                difference = points;
            } else {
                health = 100;
                difference = points - (heal - 100);
            }
            console.log(`You healed for ${difference} hp.`); 
            console.log(`Current health: ${health} hp.`) 
        } else if(type === 'chest'){
            bitcoins += points;
            console.log(`You found ${points} bitcoins.`)
        } else {
    
            health -= points;
            if(health <= 0){
                console.log(`You died! Killed by ${type}.`);
                console.log(`Best room: ${roomCounter}`);
                break;
            } else {
                console.log(`You slayed ${type}.`)
            }
        }
    }

    if(roomCounter === inputArr.length){
        console.log('You\'ve made it!')
        console.log(`Bitcoins: ${bitcoins}`)
        console.log(`Health: ${health}`);
    }
}

muOnline('rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000')