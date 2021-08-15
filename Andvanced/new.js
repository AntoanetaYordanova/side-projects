function inventory(input) {
    let journal = input.shift().split(', ');
 
    while (input[0] !== 'Craft!') {
        let tokens = input.shift().split(' - ');
        let command = tokens[0];
        let item = tokens[1];
 
        if (command == 'Collect') {
            if (!journal.includes(item)) {
                journal.push(item);
            }
 
        } else if (command == 'Drop') {
            if (journal.includes(item)) {
                let index = journal.indexOf(item);
                journal.splice(index, 1);
            }
 
        } else if (command == 'Combine Items') {
            let items = item.split(':');
            let oldItem = items[0];
            let newItem = items[1];
            index = journal.indexOf(oldItem);
 
            if (journal.includes(oldItem)) {
                journal.splice(index + 1, 0, newItem);
            }
 
        } else if (command == 'Renew') {
            if (journal.includes(item)) {
                let index = journal.indexOf(item)
                journal.splice(index, 1);
                journal.push(item);
            }
        }
    }

    console.log(journal.join(', '));
}

// inventory(['Iron, Wood, Sword', 'Collect - Gold', 'Drop - Wood', 'Craft!']);
inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
]);