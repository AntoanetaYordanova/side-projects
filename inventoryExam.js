function inventory(inputArr) {
  let inventoryArr = [];
  let items = inputArr.shift() .split(', ');

  for(let item of items){
      inventoryArr.push(item);
  }
  
  for(let action of inputArr){
      while(action !== 'Craft!'){
          let [currAction, item] = action.split(' - ');
          if(currAction === 'Collect'){
              inventoryArr.push(item);
              break;
          } else if(currAction === 'Drop'){
              let index = inventoryArr.indexOf(item);
              if(index !== -1){
                  inventoryArr.splice(index, 1);
              }
              break;
          } else if(currAction === 'Combine Items'){
              let [oldItem, newItem] = item.split(':');
              let index = inventoryArr.indexOf(oldItem);
              if(index !== -1){
                inventoryArr.splice(index + 1, 0, newItem);
              }
              break;
          } else if(currAction === 'Renew'){
              let index = inventoryArr.indexOf(item);

              if(index !== -1){
                  let tempValue = inventoryArr.splice(index, 1) .join();
                  inventoryArr.push(tempValue);
              }
              break;
          }
      }
  }

  console.log(inventoryArr.join(', '));
}

// inventory([ 'Iron, Wood, Sword', 'Collect - Gold', 'Drop - Wood', 'Craft!' ]);

inventory(['Iron, Sword','Drop - Bronze','Combine Items - Sword:Bow','Renew - Iron','Craft!']);