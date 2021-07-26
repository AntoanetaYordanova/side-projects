function phoneBook(inputArr) {
    let phBook = {};
    for(let currentString of inputArr){
        let [name, phone] = currentString.split(' ');
        phBook[name] = phone;
    }

    for(let key in phBook){
        console.log(`${key} -> ${phBook[key]}`);
    }
}

phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)