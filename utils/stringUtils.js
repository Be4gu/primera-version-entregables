import { TAGS_LIST } from './constants'
//la lista que ha sacado de los ficheros PATH
export function getTags(str) {
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

export function removeDuplicateElements(arr) {
  //Elimina los elementos duplicados de un array. Devuelve un array ya "limpio"
  return [...new Set(arr)]
}

export function modifyStringsBySubstring(arr) {
  if (!arr) return
  return arr.map((e) => {
    return e.substring(e.lastIndexOf('/') + 1, e.lastIndexOf('"'))
  })
}

export function getAPIHost(enviroment) {
  console.log(enviroment)
  if (enviroment === 'pro') return 'api.iberinform.es'
  if (enviroment === 'pre') return 'apipre.iberinform.es'
}

export function getPathName(name, enviroment) {
  return `ApisIberinform - ${name} - ${enviroment.toUpperCase()}`
}

function extraerTags(str) {
  const regex = /"tags":\[(.*?)\]/g
  const matches = str.match(regex)
  const tags = matches.map((match) =>
    match.match(/\["(.*?)"\]/)[1].replace(/\s+/g, '')
  )
  return removeDuplicateElements(tags)
}

function findMatches(str, regex) {
  //Busca las coinidencias dentro de un string. Devuelve un array con todas las coincidencias.
  return str.match(regex)
}

export function getDefinitionsList(data, regex) {
  const dataClear = modifyStringsBySubstring(
    findMatches(JSON.stringify(data), regex)
  )
  if (!dataClear) return null
  const clearDuplicated = removeDuplicateElements(dataClear)
  return clearDuplicated
}
