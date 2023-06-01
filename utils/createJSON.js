const fs = require('fs')

import {
  DB_PATHS,
  FILE_TEMPLATE,
  REF_REGEX,
  TAGS_LIST,
  formatJSONForPostman
} from './constants'

import {
  readFilesAndConvertToJson,
  readJSONFilesToObject
} from './readFileUtils'
import { getTags, getAPIHost, getDefinitionsList } from './stringUtils'

export function getFinalJSON(arr, enviroment) {
  //Devuelve un json con todos los endpoint correspondientes a la lista de apis que ha recibido
  const endPoints = readFilesAndConvertToJson(arr, DB_PATHS.endPoints)

  const tags = getTags(JSON.stringify(endPoints))

  let defAux = endPoints
  let condition = true
  let definitions = {}

  while (condition) {
    //Devuelve un array con las definiciones correspondientes a las definiciones necesarias para los endpoints
    const listOfDefinitions = getDefinitionsList(defAux, REF_REGEX)
    if (listOfDefinitions) {
      //Devuelve un json con la segunda parte de definiciones
      const definitionsToDefs = readFilesAndConvertToJson(
        listOfDefinitions,
        DB_PATHS.definitions
      )
      defAux = definitionsToDefs
      Object.assign(definitions, definitionsToDefs)
    } else {
      condition = false
    }
  }

  //Comprueba si hay más definiciones
  const finalJson = FILE_TEMPLATE
  finalJson.paths = endPoints
  finalJson.definitions = definitions
  finalJson.tags = tags
  finalJson.host = getAPIHost(enviroment)

  return finalJson
}

export function copyPdfToDirectory(destinationPath) {
  fs.copyFile(
    './public/files/Iberinform_Ayuda_APIs_v1.0.pdf',
    destinationPath,
    (err) => {
      if (err) {
        console.log('Error Found:', err)
      }
    }
  )
}

export function createPostmanJson(params, secret, apiKey) {
  const auxObject = readJSONFilesToObject(params)
  const items = []
  for (const key in auxObject) {
    const newKeyTag = key.replace(/\s/g, '')
    items.push({
      name: key,
      items: auxObject[key],
      description: TAGS_LIST[newKeyTag].description
    })
  }
  const aux = formatJSONForPostman(items, secret, apiKey)
  return aux
}
