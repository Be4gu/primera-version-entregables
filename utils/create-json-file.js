const yaml = require('js-yaml')
const fs = require('fs')
import { HTMLTemplate } from './constants'

export function readFilesAndConvertToJson(fileNames, path) {
  const result = {}

  // if (!fileNames) return

  fileNames.forEach((item) => {
    const fileData = fs.readFileSync(`src/pages/api/db/${path}/${item}.yaml`, {
      encoding: 'utf-8'
    })
    const yamlData = yaml.load(fileData)
    Object.assign(result, yamlData)
  })
  return result
}

export function removeDuplicateElements(arr) {
  //Elimina los elementos duplicados de un array. Devuelve un array ya "limpio"
  return [...new Set(arr)]
}

export function findMatches(str, regex) {
  //Busca las coinidencias dentro de un string. Devuelve un array con todas las coincidencias.
  const c = str.match(regex)
  return c
}

export function modifyStringsBySubstring(arr) {
  if (!arr) return

  return arr.map((e) => {
    return e.substring(e.lastIndexOf('/') + 1, e.lastIndexOf('"'))
  })
}

export function generateHTMLFile(str, path) {
  fs.writeFile(path, HTMLTemplate(str), function (err) {
    if (err) throw err
    console.log('Saved!')
  })
}

export function getDefinitionsList(data, regex) {
  const listDataDefinitions = findMatches(JSON.stringify(data), regex)
  // console.log(listDataDefinitions)
  const dataClear = modifyStringsBySubstring(listDataDefinitions)
  const clearDuplicated = removeDuplicateElements(dataClear)
  return clearDuplicated
  // Enviar respuesta
}
