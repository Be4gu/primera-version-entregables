// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const yaml = require('js-yaml')
const archiver = require('archiver')
import fs from 'fs'
import {
  getFinalJSON,
  copyPdfToDirectory,
  createPostmanJson
} from '@/utils/createJSON'
import {
  crearCarpeta,
  createTextFileKeys,
  generateHTMLFile,
  zipCarpeta
  // zipCarpeta
} from '@/utils/createFile'
import { getPathName } from '@/utils/stringUtils'

export default async function handler(req, res) {
  try {
    // Obtener el objeto que se va a escribir en el archivo JSON
    const data = JSON.parse(req.body)

    //Formatea el nombre de la carpeta en funcion de lo que se ha rellenado en el
    const pathName = getPathName(data.name, data.entorno)

    //Obtiene una lista de APIS
    const newArr = data.apisList.map((item) => item.name)

    //Crea obtiene el JSON final necesario para la creacion de todos los ficheros salvo para el postman ya que tiene una estructura diferente.
    const finalJson = getFinalJSON(newArr, data.entorno)

    //Crea el dir de las carpetas necesarias para almacenar los fichero. El nombre de la carpeta lo recibe por parametro
    crearCarpeta(pathName)

    const archivoYAML = yaml.dump(finalJson) // Convierte el objeto JSON a YAML
    //Crea el fichero .yaml
    fs.writeFileSync(
      `./entregables/${pathName}/01 - Yaml/APIs_Iberinform.yaml`,
      archivoYAML
    )

    //Crea el fichero .html
    generateHTMLFile(
      JSON.stringify(finalJson),
      `./entregables/${pathName}/02 - Swagger/APIs_Iberinform.html`
    )

    //Crea el fichero .txt
    createTextFileKeys(`./entregables/${pathName}/keys.txt`, {
      clientID: data.clientID,
      clientSecret: data.clientSecret
    })

    //Copia el pdf de su ruta orgen y lo deja en la ruta especificada.
    copyPdfToDirectory(
      `./entregables/${pathName}/04 - Documentacion/Iberinform_Ayuda_APIs_v1.0.pdf`
    )

    //Obtiene el objeto JSON necesario para la creacion del fichero postman
    const postmanResult = createPostmanJson(
      newArr,
      data.clientSecret,
      data.clientID
    )

    //Crea el fichero .json (El fichero para el postman)
    fs.writeFileSync(
      `./entregables/${pathName}/03 - Postman/IberinformApis.postman_collection.json`,
      JSON.stringify(postmanResult, null, 2)
    )
    // require modules
    zipCarpeta(pathName)
      .then((fileContent) => {
        // Aquí puedes hacer lo que necesites con el contenido del archivo ZIP
        res.setHeader('Content-Type', 'application/zip')
        res.setHeader('Content-Disposition', 'attachment; filename=archivo.zip')
        res.setHeader('Content-Length', fileContent.length)
        res.status(200).send(fileContent)
      })
      .catch((error) => {
        console.error('Error al comprimir la carpeta:', error)
      })
  } catch (err) {
    console.log(err)
    res.status(500).json('Algo ha salido mal!')
  }
}

// export async function GET() {
//   const zip = new JSZip()
//   zip.file('Hello.txt', 'Hola')
//   const archive = await zip.generateAsync({ type: 'blob' })

//   return new Response(archive, {
//     status: 200,
//     headers: {
//       'Content-Type': 'application/zip'
//     }
//   })
// }

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
