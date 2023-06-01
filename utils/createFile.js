import { HTMLTemplate } from './constants'

const fs = require('fs')

export function crearCarpeta(nombreCarpeta) {
  let path = `./entregables/${nombreCarpeta}`
  if (fs.existsSync(path)) return
  fs.mkdirSync(path)
  fs.mkdirSync(`${path}/01 - Yaml`)
  fs.mkdirSync(`${path}/02 - Swagger`)
  fs.mkdirSync(`${path}/03 - Postman`)
  fs.mkdirSync(`${path}/04 - Documentacion`)
}

export function generateHTMLFile(str, path) {
  fs.writeFile(path, HTMLTemplate(str), function (err) {
    if (err) throw err
    console.log('Saved!')
  })
}

export function createTextFileKeys(filePath, keys) {
  const fileContent = `X-IBM-CLIENT-ID ---------- ${keys.clientID} 
  X-IBM-CLIENT-SECRET ---------- ${keys.clientSecret}`
  fs.writeFile(filePath, fileContent, (err) => {
    if (err) throw err
    console.log(`Text file has been created at ${filePath}`)
  })
}
