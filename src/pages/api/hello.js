// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const yaml = require('js-yaml')
import fs from 'fs'
import {
  createTextFileKeys,
  generateHTMLFile,
  getFinalJSON,
  crearCarpeta,
  getPathName,
  copyPdfToDirectory
} from '../../../utils/create-json-file.js'

export default function handler(req, res) {
  // Obtener el objeto que se va a escribir en el archivo JSON
  const data = JSON.parse(req.body)
  const pathName = getPathName(data.name, data.entorno)
  console.log(pathName)
  const newArr = data.apisList.map((item) => item.name)
  const finalJson = getFinalJSON(newArr, data.entorno)
  crearCarpeta(pathName)

  const archivoYAML = yaml.dump(finalJson) // Convierte el objeto JSON a YAML
  fs.writeFileSync(
    `./entregables/${pathName}/01 - Yaml/APIs_Iberinform.yaml`,
    archivoYAML
  )
  generateHTMLFile(
    JSON.stringify(finalJson),
    `./entregables/${pathName}/02 - Swagger/APIs_Iberinform.html`
  )

  createTextFileKeys(`./entregables/${pathName}/keys.txt`, {
    clientID: data.clientID,
    clientSecret: data.clientSecret
  })
  copyPdfToDirectory(`./entregables/${pathName}/04 - Documentacion`)
  res.status(200).json({ message: 'Datos escritos en el archivo JSON.' })
}

// Iberinform/
//     ├── 01 - Yaml/
//     │   └── APIs_Iberinform.yaml
//     ├── 02 - Swagger/
//     │   └── APIs_Iberinform.html
//     ├── 03 - Postman/
//     │   └── IberinfomrApis.postman_collection.json
//     ├── 04 - Documentacion/
//     │   └── Iberinform_Ayuda_APIs_v1.0.pdf
//     └── keys.txt
