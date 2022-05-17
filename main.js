const { app, BrowserWindow, dialog, ipcMain } = require('electron')
const path = require('path')
const os = require('os')
const pdfLib = require('pdf-lib')
const fetch = import('node-fetch')

const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
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

ipcMain.on('open-file-dialog', (e) => {
  const properties = os.platform() === 'linux' || os.platform() === 'win32' ? ['openFile'] : ['openFile', 'openDirectory'];
  dialog.showOpenDialog({ properties }).then(async(data) => {
      if (data.filePaths.length > 0) { 
          console.log(`Path: ${data.filePaths[0]}`); 
          try {
            const pdfPath = data.filePaths[0]
            const pdfData = {
                textContent: [],
              }

              const existingPdfBytes = await fetch(pdfPath).then(res => res.arrayBuffer())
                console.log(existingPdfBytes)
              const loadingTask = await pdfLib.PDFDocument.load(existingPdfBytes)
              const doc = await loadingTask.promise

              const numPages = doc.numPages
              for (let i = 1; i <= numPages; i++) {
                const page = await doc.getPage(i)
                const txtContent = await page.getTextContent()
                pdfData.textContent = pdfData.textContent.concat(txtContent.items.map(itm => ({ ...itm, page: i })))
                for (const [key, value] of Object.entries(txtContent.styles)) {
                  pdfData.styles[key] = value
                }
              }
            
              if (options && options.inferLines) {
                pdfData.lines = inferLines(pdfData, options.inferLines.normalizeY)
              }



            console.log(pdfData)
          } catch (error) {
            console.log(error)
          }
        }
  })
})

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })