const { ipcRenderer } = require('electron');

let linkSobre = document.querySelector('#link-sobre');

linkSobre.addEventListener('click', function(){
    console.log('teste');
    ipcRenderer.send('abrir-janela-sobre');
});