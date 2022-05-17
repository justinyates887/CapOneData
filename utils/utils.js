const { pdfData } = require("@vtfk/pdf-text-reader")

const readPDF = async (path) => {
    try {
        const pdfData = await pdfReader(path)
        console.log(pdfData)
      } catch (error) {
        console.log(error)
      }
}

module.exports = readPDF()

