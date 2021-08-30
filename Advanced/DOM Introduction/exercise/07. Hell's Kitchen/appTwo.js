function solve (){
    document.querySelector("#btnSend").addEventListener("click", onClick);

    function onClick(){
        let textAreaElement = document.querySelector('#inputs textarea');

        let text = textAreaElement.value;
        let inputArray = JSON.parse(text);
      
    }
}