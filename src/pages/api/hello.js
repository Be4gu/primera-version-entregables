// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const yaml = require('js-yaml')
import fs from 'fs'
import path from 'path'

import {
  readFilesAndConvertToJson,
  getDefinitionsList,
  generateHTMLFile
} from '../../../utils/create-json-file.js'

export default function handler(req, res) {
  // Obtener el objeto que se va a escribir en el archivo JSON
  const data = JSON.parse(req.body)
  const newArr = data.apisList.map((item) => item.name)
  const jsonEndPoints = readFilesAndConvertToJson(newArr, 'paths')
  const c = getDefinitionsList(
    jsonEndPoints,
    /"\$ref":"#\/definitions\/[\w]*"/gm
  )
  console.log('EndPointDefsList --- ' + c)
  let jsonDefinitions = readFilesAndConvertToJson(c, 'definitions')
  const x = getDefinitionsList(
    jsonDefinitions,
    /"\$ref":"#\/definitions\/[\w]*"/gm
  )
  console.log('DefinitionsList --- ' + x)
  const jsonDefinitionsToDef = readFilesAndConvertToJson(x, 'definitions')
  Object.assign(jsonDefinitions, jsonDefinitionsToDef)
  const finalJson = {
    swagger: '2.0',
    info: {
      'x-ibm-name': 'iberinformapis',
      title: 'IberinformApis',
      version: '1.0.0',
      contact: {
        name: 'Iberinform',
        url: 'https://www.iberinform.es/',
        email: 'api.support@iberinform.es'
      }
    },
    schemes: ['https'],
    host: 'apipre.iberinform.es',
    consumes: ['application/json'],
    produces: ['application/json'],
    securityDefinitions: {
      APIKeyHeader: {
        type: 'apiKey',
        in: 'header',
        name: 'X-IBM-Client-Id'
      },
      ClientSecretHeader: {
        type: 'apiKey',
        in: 'header',
        name: 'X-IBM-Client-Secret',
        description: 'Unique token directly related to the client contract'
      }
    },
    security: [
      {
        APIKeyHeader: [],
        ClientSecretHeader: []
      }
    ],
    tags: [
      {
        name: 'Identification',
        description: 'Identification data about the organisations'
      },
      {
        name: 'Company Data',
        description: 'Company data about the organisations'
      },
      {
        name: 'Trading Data',
        description: 'Trading data about organisations'
      },
      {
        name: 'Financial Data',
        description: 'Financial data about the organisations'
      },
      {
        name: 'Incidents',
        description: 'Incidents data about the organisations'
      },
      {
        name: 'Risk Analysis',
        description: 'Risk Analysis data about the organisations'
      },
      {
        name: 'Product Reports',
        description: 'Product Reports'
      },
      {
        name: 'Companies',
        description: 'methods for search organisations'
      },
      {
        name: 'Rankings',
        description: 'Rankings data about the organisations'
      },
      {
        name: 'Tenders',
        description: 'Information about Tenders'
      },
      {
        name: 'Alerts',
        description: 'Methods for alerts'
      }
    ],
    paths: jsonEndPoints,
    definitions: jsonDefinitions,
    basePath: '/',
    'x-ibm-configuration': {
      enforced: true,
      testable: true,
      phase: 'realized',
      cors: {
        enabled: true
      }
    }
  }
  const archivoYAML = yaml.dump(finalJson) // Convierte el objeto JSON a YAML
  fs.writeFileSync('archivo.yaml', archivoYAML)
  generateHTMLFile(JSON.stringify(finalJson), './miArchivo.html')
  res.status(200).json({ message: 'Datos escritos en el archivo JSON.' })
}
