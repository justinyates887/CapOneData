const { ipcRenderer } = require('electron')

const buttonCreated = document.getElementById('upload')

buttonCreated.addEventListener('click', function(event){
  ipcRenderer.send('open-file-dialog')
  console.log('IPC Sent!')
})


