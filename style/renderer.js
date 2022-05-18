const { ipcRenderer } = require('electron')

const upload = document.getElementById('upload')

upload.addEventListener('click', function(event){
  ipcRenderer.send('open-file-dialog')
  console.log('IPC Sent!')
})

const populate = document.getElementById('get')

populate.addEventListener('click', async function(event){
  ipcRenderer.sendSync('populate-data')
})

ipcRenderer.on('data-sent', (event, arg) => {
  createTable(arg)
})

let table = document.getElementById('tableData')

function createTable(data){
  let k = '<tbody>'
  for(let i = 0; i < data.length; i++){
    k+= '<tr>';
    k+= '<td>' + data[i].vendor + '</td>';
    k+= '<td>212- Capital One</td>'
    k+= '<td>' + data[i].transactionDate + '</td>';
    k+= '<td>' + data[i].account + '</td>';
    k+= '<td>' + data[i].amount + '</td>';
    if(data[i].customer) k+= '<td>'+ data[i].customer + '</td>'
    else k+= '<td></td>'
  } k+='</tbody>';
  document.getElementById('tableData').innerHTML = k;
}


