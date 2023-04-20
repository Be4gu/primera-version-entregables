// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import fs from 'fs'
import path from 'path'

export default function handler(req, res) {
  // Obtener el objeto que se va a escribir en el archivo JSON
  const data = req.body

  // Escribir el arreglo actualizado en el archivo JSON
  fs.writeFile('datos.json', data, (err) => {
    if (err) {
      console.error(err)
      res.status(500).send('Error al escribir en el archivo')
    } else {
      res.send('Datos guardados exitosamente')
    }
  })

  // Enviar respuesta
  res.status(200).json({ message: 'Datos escritos en el archivo JSON.' })
}
