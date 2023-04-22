const yaml = require('js-yaml')
const fs = require('fs')

export function createJson(listadoApis) {
  let jsonObj = {}
  listadoApis.forEach((item) => {
    const obj = yaml.load(
      fs.readFileSync(`src/pages/api/db/paths/${item.name}.yaml`, {
        encoding: 'utf-8'
      })
    )
    const prueba = {
      ...jsonObj,
      ...obj
    }
    jsonObj = prueba
  })
  fs.writeFileSync('./datos.json', JSON.stringify(jsonObj), null, 2)
  extractDefinitionsList(jsonObj)
  //   return jsonObj
}

function extractDefinitionsList(pathsList) {
  let list = []
  for (const key in pathsList) {
    let c = {}
    for (const statusCode in pathsList[key]) {
      if (
        statusCode === 'get' ||
        statusCode === 'post' ||
        statusCode === 'delete'
      ) {
        let x = pathsList[key][statusCode]

        for (const j in x['responses']) {
          if (x['responses'][j]['schema'] !== undefined) {
            if (x['responses'][j]['schema']['$ref']) {
              list.push(x['responses'][j]['schema']['$ref'])
            }
          }
        }
      }
    }
  }
  fs.writeFileSync('./datos2.json', JSON.stringify(list), null, 2)
  const newList = [...new Set(list)]
  console.log(newList.length)
}
