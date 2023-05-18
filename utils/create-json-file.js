const yaml = require('js-yaml')
const fs = require('fs')
const path = require('path')

import {
  DB_PATHS,
  FILE_TEMPLATE,
  HTMLTemplate,
  REF_REGEX,
  TAGS_LIST,
  formatJSONForPostman
} from './constants'
import { LIST } from './fileStructure'

export function getFinalJSON(arr, enviroment) {
  //Devuelve un json con todos los endpoint correspondientes a la lista de apis que ha recibido
  const endPoints = readFilesAndConvertToJson(arr, DB_PATHS.endPoints)

  const tags = getTags(JSON.stringify(endPoints))
  //Recibe un array con la definiciones correspondientes al json de endpoints
  const listOfDefinitions = getDefinitionsList(endPoints, REF_REGEX)

  //Devuelve un json con las definiciones que ha recibido por parámetro como array
  const definitions = readFilesAndConvertToJson(
    listOfDefinitions,
    DB_PATHS.definitions
  )
  //Devuelve un array con las definiciones correspondientes a las definiciones necesarias para los endpoints
  const listOfDefinitionsOfDefinitions = getDefinitionsList(
    definitions,
    REF_REGEX
  )
  //Comprueba si hay más definiciones
  if (listOfDefinitionsOfDefinitions) {
    //Devuelve un json con la segunda parte de definiciones
    const definitionsToDefs = readFilesAndConvertToJson(
      listOfDefinitionsOfDefinitions,
      DB_PATHS.definitions
    )
    Object.assign(definitions, definitionsToDefs)
  }

  const finalJson = FILE_TEMPLATE
  finalJson.paths = endPoints
  finalJson.definitions = definitions
  finalJson.tags = tags
  finalJson.host = getAPIHost(enviroment)

  return finalJson
}

export function generateHTMLFile(str, path) {
  fs.writeFile(path, HTMLTemplate(str), function (err) {
    if (err) throw err
    console.log('Saved!')
  })
}
export function generatePostmanFile(str, path) {
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

function readFilesAndConvertToJson(fileNames, path) {
  const result = {}
  if (!fileNames) return
  fileNames.forEach((item) => {
    const fileData = fs.readFileSync(`src/pages/api/db/${path}/${item}.yaml`, {
      encoding: 'utf-8'
    })
    const yamlData = yaml.load(fileData)
    Object.assign(result, yamlData)
  })
  return result
}

function removeDuplicateElements(arr) {
  //Elimina los elementos duplicados de un array. Devuelve un array ya "limpio"
  return [...new Set(arr)]
}

function findMatches(str, regex) {
  //Busca las coinidencias dentro de un string. Devuelve un array con todas las coincidencias.
  return str.match(regex)
}

function modifyStringsBySubstring(arr) {
  if (!arr) return
  return arr.map((e) => {
    return e.substring(e.lastIndexOf('/') + 1, e.lastIndexOf('"'))
  })
}

function extraerTags(str) {
  const regex = /"tags":\[(.*?)\]/g
  const matches = str.match(regex)
  const tags = matches.map((match) =>
    match.match(/\["(.*?)"\]/)[1].replace(/\s+/g, '')
  )
  return removeDuplicateElements(tags)
}

function getTags(str) {
  const tagsList = extraerTags(str)
  const JSONTagsList = []
  tagsList.forEach((key) => {
    JSONTagsList.push({
      name: TAGS_LIST[key].name,
      description: TAGS_LIST[key].description
    })
  })
  return JSONTagsList
}

function getDefinitionsList(data, regex) {
  const dataClear = modifyStringsBySubstring(
    findMatches(JSON.stringify(data), regex)
  )
  if (!dataClear) return null
  const clearDuplicated = removeDuplicateElements(dataClear)
  return clearDuplicated
}

function getAPIHost(enviroment) {
  if (enviroment === 'pro') return 'api.iberinform.es'
  if (enviroment === 'pre') return 'apipre.iberinform.es'
}

export function crearCarpeta(nombreCarpeta) {
  let path = `./entregables/${nombreCarpeta}`
  if (fs.existsSync(path)) return
  fs.mkdirSync(path)
  fs.mkdirSync(`${path}/01 - Yaml`)
  fs.mkdirSync(`${path}/02 - Swagger`)
  fs.mkdirSync(`${path}/03 - Postman`)
  fs.mkdirSync(`${path}/04 - Documentacion`)
}

export function getPathName(name, enviroment) {
  return `ApisIberinform - ${name} - ${enviroment.toUpperCase()}`
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

function readJSONFilesToObject(params) {
  let aux = {}
  params.forEach((api) => {
    const data = fs.readFileSync(
      `src/pages/api/db/postman/${api}.json`,
      'utf8',
      (err) => {
        if (err) {
          console.error(err)
          return
        }
      }
    )
    const jsonData = JSON.parse(data)
    if (!aux[LIST[api].folderName]) aux[LIST[api].folderName] = []

    if (Array.isArray(jsonData)) {
      const newArray = [...aux[LIST[api].folderName], ...jsonData]
      aux[LIST[api].folderName] = newArray
    } else {
      aux[LIST[api].folderName].push(jsonData)
    }
  })
  return aux
}
