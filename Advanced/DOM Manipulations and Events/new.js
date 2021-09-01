function solve (){
  document.getElementById('click').addEventListener('click', onClick);
  document.getElementById('clean').addEventListener('click', clean)
}


function onClick() {
  let removeItems = document.querySelectorAll('#items li.red');
  removeItems.forEach(el => {
    el.parentElement.removeChild(el);
  })

}

function clean() {
  newElement.textContent = ''
}

