import { HTMLTemplate } from './constants'
const archiver = require('archiver')

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

export async function zipCarpeta(pathName) {
  return new Promise((resolve, reject) => {
    const sourcePath = `./entregables/${pathName}`
    const destinationPath = `./entregables/${pathName}.zip`
    const output = fs.createWriteStream(destinationPath)
    const archive = archiver('zip', { zlib: { level: 9 } })

    output.on('close', () => {
      console.log('Carpeta comprimida exitosamente.')
      const fileContent = fs.readFileSync(destinationPath)
      resolve(fileContent)
    })

    archive.on('error', (err) => {
      reject(err)
    })

    archive.directory(sourcePath, false)
    archive.pipe(output)
    archive.finalize()
  })
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
