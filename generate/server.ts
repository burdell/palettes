import express from 'express'
import cors from 'cors'

import { generate } from './index'
import { PaletteConfig } from '../frontend/types'

const app = express()
const port = 9001

app.use(cors())
app.use(express.json())

app.post('/generate', async (req, res, next) => {
  try {
    const palette = req.body as PaletteConfig
    if (!palette) next(new Error('No palette provided'))

    await generate(palette)
  } catch (e) {
    next(new Error(e.message))
  }

  return res.status(200).send()
})

app.listen(port, () =>
  console.log(`🏭 Palette Generator listening on port ${port}!`)
)
