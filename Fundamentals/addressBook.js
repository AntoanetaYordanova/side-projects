function addressBook(inputArr) {
  let addBook ={};
  
  for(let string of inputArr){
      let [name, address] = string.split(':');
      addBook[name] = address;
  }

  let entries = Object.entries(addBook);
  entries.sort((a, b) => a[0].localeCompare(b[0]))
  
  for(let array of entries){
      let [name, address] = array;
      console.log(`${name} -> ${address}`);
  }

}

addressBook(['Tim:Doe Crossing','Bill:Nelson Place','Peter:Carlyle Ave','Bill:Ornery Rd'])