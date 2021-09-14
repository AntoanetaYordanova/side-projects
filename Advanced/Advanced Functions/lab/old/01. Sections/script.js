function create(words) {

   let contentDiv = document.getElementById('content');
   words.forEach(word => {
      let div = createEl('div', createEl('p', word));
      div.addEventListener('click', (ev) => ev.target.querySelector('p').style.display = '');
      
      contentDiv.appendChild(div);
   });

   function createEl(type, content) {
      let result = document.createElement(type);

      if(typeof content === 'string') {
         result.textContent = content;
         result.style.display = 'none';
      } else {
         result.appendChild(content);
      }

      return result;
   }
}
