function solve() {
  const [inputTextArea, outputTextArea] = [...document.querySelectorAll('textarea')];
  const [generateButton, buyButton] = [...document.querySelectorAll('button')];
  let furniture = [];


  generateButton.addEventListener('click', () => {
    let datas = JSON.parse(inputTextArea.value);
    datas.forEach(data => {
      let item =  addData(data);
      furniture.push(item);
      document.querySelector('tbody').appendChild(item.row); 
    }); 
  });

  function addData(data) {
   
      const img = document.createElement('img');
      img.setAttribute('src', data.img);
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');

      const row = createEl('tr', createEl('td', img),
      createEl('td', createEl('p', data.name)),
      createEl('td', createEl('p', data.price)),
      createEl('td', createEl('p', data.decFactor)),
      createEl('td', checkbox)
      )
      
      return {
        row,
        isChecked,
        returnData
      }

      function isChecked() {
        return checkbox.checked;
      }

      function returnData(){
        return data;
      }
  }

  function createEl(type, ...content) {
      const result = document.createElement(type);

      if(typeof content[0] === 'string') {
        result.textContent = content[0];
      } else {
        content.forEach(element => result.appendChild(element));
      }

      return result;
  }

  buyButton.addEventListener('click', () => {
    let averageDecFactor = [];
    let sum = 0;
    let boughtItems = [];

    furniture.forEach(f => {
      if(f.isChecked()) {
        let data = f.returnData();
        averageDecFactor.push(data.decFactor);
        sum += Number(data.price);
        boughtItems.push(data.name);
      }
    })

    averageDecFactor = averageDecFactor.map(Number) .reduce((a, b) => a + b, 0) / averageDecFactor.length;

    outputTextArea.textContent = `Bought furniture: ${boughtItems.join(', ')} \nTotal price: ${sum.toFixed(2)} \nAverage decoration factor: ${averageDecFactor}`
  })
}