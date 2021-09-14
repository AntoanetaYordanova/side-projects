function solve() {
  const [inputTextArea, outputTextArea] = [...document.querySelectorAll('textarea')];
  const [generateButton, buyButton] = [...document.querySelectorAll('button')];

  generateButton.addEventListener('click', addData);

  function addData() {
    let datas = JSON.parse(inputTextArea.value);
    datas.forEach(data => {
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
      
      document.querySelector('tbody').appendChild(row)
    });
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
  console.log();
}