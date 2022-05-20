const { app, BrowserWindow, dialog, ipcMain } = require('electron')
const path = require('path')
const os = require('os')
const { PdfReader } = require("pdfreader");
const fs = require('fs');
const { filter } = require('./utils/filter');
const ObjectsToCsv = require('objects-to-csv');

const createWindow = () => {
    const win = new BrowserWindow({
      width: 1400,
      height: 1000,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
        nodeIntegration: true,
        contextIsolation: false
      }
    })
  
    win.loadFile('style/index.html')
  }

  app.whenReady().then(() => {
    createWindow()
  })

let transactions = []
let update;

// This next bit parses the PDF and seperates into only the transactions

ipcMain.on('open-file-dialog', (e) => {
  const properties = os.platform() === 'linux' || os.platform() === 'win32' ? ['openFile'] : ['openFile', 'openDirectory'];
  dialog.showOpenDialog({ properties }).then(async(data) => {
      if (data.filePaths.length > 0) { 
          try {
            const pdfPath = data.filePaths[0]

            let rows = {}; // indexed by y-position


              function flushRows() {
                Object.keys(rows) // => array of y-positions (type: float)
                  .sort((y1, y2) => parseFloat(y1) - parseFloat(y2)) // sort float positions
                  .forEach((y) => {
                      if(
                          (rows[y] || []).join("").toUpperCase().startsWith('JAN') || 
                          (rows[y] || []).join("").toUpperCase().startsWith('FEB') ||
                          (rows[y] || []).join("").toUpperCase().startsWith('MAR') ||
                          (rows[y] || []).join("").toUpperCase().startsWith('APR') ||
                          (rows[y] || []).join("").toUpperCase().startsWith('MAY') ||
                          (rows[y] || []).join("").toUpperCase().startsWith('JUN') ||
                          (rows[y] || []).join("").toUpperCase().startsWith('JUL') ||
                          (rows[y] || []).join("").toUpperCase().startsWith('AUG') ||
                          (rows[y] || []).join("").toUpperCase().startsWith('SEP') ||
                          (rows[y] || []).join("").toUpperCase().startsWith('OCT') ||
                          (rows[y] || []).join("").toUpperCase().startsWith('NOV') ||
                          (rows[y] || []).join("").toUpperCase().startsWith('DEC')
                        ) {
                            let r = (rows[y] || [])
                            let obj = {
                                transactionDate: r[0],
                                postDate: r[1],
                                vendor: r[2],
                                amount: r[3]
                            }
                            if(obj.vendor !== undefined) transactions.push(obj)
                        }
                    });
                rows = {}; // clear rows for next page
              }
              
              await fs.readFile(pdfPath, (err, pdfBuffer) => {
                // pdfBuffer contains the file content
                new PdfReader().parseBuffer(pdfBuffer, (err, item) => {
                  if (err) console.error("error:", err);
                  else if (!item) {
                      flushRows()
                      console.warn("end of buffer");                  
                      update = filter(transactions)
                    } else if (item.page) {
                        flushRows(); // print the rows of the previous page
                    } else if (item.text) {
                    (rows[item.y] = rows[item.y] || []).push(item.text);
                    }
                })
              })

          } catch (error) {
            console.log(error)
          }
        }
  }).then(() => {
    e.reply('great-success')
  })
})

ipcMain.on('populate-data', (e, arg) => {
    e.reply('data-sent', update)
})

ipcMain.on('save-csv', async (e , arg) => {
  const csv = new ObjectsToCsv(arg)

  dialog.showSaveDialog({
    title: 'Statement.csv',
    buttonLabel: 'Save',
    filters: [
        {
            name: 'CSV',
            extensions: ['csv', 'xlsx']
        }, ],
    properties: []
}).then(async(data) => {

        try {
          const path = data.filePath
          await csv.toDisk(path)
        } catch(err){
          console.error(err)
        }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
