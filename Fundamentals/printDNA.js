function printDna(num){
    for(let i = 1; i <= num; i++){
        if(i % 10 === 0){
            console.log('*G--G*');
        } else if(i % 9 === 0){
            console.log('**AG**');
        } else if(i % 8 === 0){
            console.log('*T--T*');
        } else if(i % 7 === 0){
            console.log('C----G');
        } else if(i % 6 === 0){
            console.log('*A--T*');
        } else if(i % 5 === 0){
            console.log('**GG**');
        } else if(i % 4 === 0){
            console.log('*A--G*');
        } else if(i % 3 === 0){
            console.log('T----T');
        } else if(i % 2 === 0){
            console.log('*C--G*');
        } else {
            console.log('**AT**');
        }
    }
}

printDna(20);