// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import fs from 'fs'
import path from 'path'

import { createJson } from '../../../utils/create-json-file.js'

export default function handler(req, res) {
  // Obtener el objeto que se va a escribir en el archivo JSON
  const data = JSON.parse(req.body)
  // console.log(JSON.parse(data))
  const jsonObj = createJson(data.apisList)

  // Enviar respuesta
  res.status(200).json({ message: 'Datos escritos en el archivo JSON.' })
}
