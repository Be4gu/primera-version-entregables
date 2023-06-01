const yaml = require('js-yaml')
const fs = require('fs')
import { LIST } from './fileStructure'
export function readJSONFilesToObject(params) {
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

export function readFilesAndConvertToJson(fileNames, path) {
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
