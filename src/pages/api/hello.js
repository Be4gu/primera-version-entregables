// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const yaml = require('js-yaml')
import fs from 'fs'
import {
  createTextFileKeys,
  generateHTMLFile,
  getFinalJSON,
  crearCarpeta
} from '../../../utils/create-json-file.js'

export default function handler(req, res) {
  // Obtener el objeto que se va a escribir en el archivo JSON
  const data = JSON.parse(req.body)
  const newArr = data.apisList.map((item) => item.name)
  const finalJson = getFinalJSON(newArr, data.entorno)
  crearCarpeta('AAApruebas2')

  const archivoYAML = yaml.dump(finalJson) // Convierte el objeto JSON a YAML
  fs.writeFileSync('archivo.yaml', archivoYAML)
  generateHTMLFile(JSON.stringify(finalJson), './miArchivo.html')

  createTextFileKeys('keys.txt', {
    clientID: data.clientID,
    clientSecret: data.clientSecret
  })
  res.status(200).json({ message: 'Datos escritos en el archivo JSON.' })
}
