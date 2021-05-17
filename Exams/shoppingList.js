function shoppingList(inputArr) {
  let list = [];
  let addItems = inputArr.shift().split("!");

  for (let item of addItems) {
    list.push(item);
  }

  for (let string of inputArr) {
    while (string !== "Go Shopping!") {
      let [action, itemOne, itemTwo] = string.split(" ");
      if (action === "Urgent") {
          if(!list.includes(itemOne)){
            list.unshift(itemOne);
          }
        break;
      } else if (action === "Unnecessary") {
        let index = list.indexOf(itemOne);
        if (index !== -1) {
          list.splice(index, 1);
        }
        break;
      } else if (action === "Correct") {
        let index = list.indexOf(itemOne);
        if (index !== -1) {
          list.splice(index, 1, itemTwo);
        }
        break;
      } else if (action === "Rearrange") {
        if (list.includes(itemOne)) {
          let index = list.indexOf(itemOne);
          let tempValue = list.splice(index, 1);
          list.push(tempValue);
        }
        break;
      }
    }
  }
  console.log(list.join(', '));
}

// shoppingList([
//   "Tomatoes!Potatoes!Bread",
//   "Unnecessary Milk",
//   "Urgent Tomatoes",
//   "Go Shopping!",
// ]);

shoppingList(['Milk!Pepper!Salt!Water!Banana','Urgent Salt','Unnecessary Grapes ','Correct Pepper Onion','Rearrange Grapes','Correct Tomatoes Potatoes','Go Shopping!'])
