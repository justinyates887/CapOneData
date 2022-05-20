const { ipcRenderer } = require('electron');
window.$ = window.jQuery = require('jquery');

let csvData = []

const upload = document.getElementById('upload')

upload.addEventListener('click', function(event){
  ipcRenderer.send('open-file-dialog')
})

const populate = document.getElementById('get')

populate.addEventListener('click', async function(event){
  await ipcRenderer.sendSync('populate-data')
})

ipcRenderer.on('great-success', () => {
  document.getElementById('get').style.backgroundColor = "green"
})

ipcRenderer.on('data-sent', (event, arg) => {
  createTable(arg)
})

function formatDate(date){
//This function takes date format: Month DD and makes it mm/dd/yyyy format
const arr = date.split(' ')

//using else if because switches are slow
if(arr[0].toUpperCase() === 'JAN') arr[0] = '01'
else if(arr[0].toUpperCase() === 'FEB') arr[0] = '02'
else if(arr[0].toUpperCase() === 'MAR') arr[0] = '03'
else if(arr[0].toUpperCase() === 'APR') arr[0] = '04'
else if(arr[0].toUpperCase() === 'MAY') arr[0] = '05'
else if(arr[0].toUpperCase() === 'JUN') arr[0] = '06'
else if(arr[0].toUpperCase() === 'JUL') arr[0] = '07'
else if(arr[0].toUpperCase() === 'AUG') arr[0] = '08'
else if(arr[0].toUpperCase() === 'SEP') arr[0] = '09'
else if(arr[0].toUpperCase() === 'OCT') arr[0] = '10'
else if(arr[0].toUpperCase() === 'NOV') arr[0] = '11'
else if(arr[0].toUpperCase() === 'DEC') arr[0] = '12'
else console.log('ERROR')

let year = new Date().getFullYear()

let final = arr.join('/') + year
return final

}

function createTable(data){
  let k = '<tbody>'
  for(let i = 0; i < data.length; i++){
    let newDate = formatDate(data[i].transactionDate)
    k+= '<tr>';
    k+= '<td contenteditable="true">' + data[i].vendor + '</td>';
    k+= '<td>212- Capital One</td>'
    k+= '<td>' + newDate + '</td>';
    k+= '<td contenteditable="true">' + data[i].account + '</td>';
    k+= '<td contenteditable="true">' + data[i].amount + '</td>';
    if(data[i].customer) k+= '<td contenteditable="true">'+ data[i].customer + '</td>'
    else {
      k+= '<td contenteditable="true"></td>'
      data[i].customer = ''
    }

    csvData.push({
      "Ref no.": data[i].transactionDate.replace('/', '') + '-' + i,
      "Payee": data[i].vendor,
      "Payment Account": '212 Capital One',
      "Date": newDate,
      "Category/Account": data[i].account,
      "Amount": data[i].amount.replace('$', ''),
      "Customer/Project": data[i].customer
    })
  } k+='</tbody>';
  document.getElementById('tableData').innerHTML = k;
}

const download = document.getElementById('download')

download.addEventListener('click', async function(){
  await ipcRenderer.send('save-csv', csvData)
})