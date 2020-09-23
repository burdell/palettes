import express from 'express'
import cors from 'cors'

import { generate } from './index'

const app = express()
const port = 9001

app.use(cors())

app.post('/generate-from-file/:paletteName', async (req, res, next) => {
  const paletteName = req.params.paletteName
  if (!paletteName) next(new Error('No palette name given'))

  try {
    await generate(paletteName)
  } catch (e) {
    next(new Error(e.message))
  }

  return res.status(200).send()
})

app.listen(port, () =>
  console.log(`🏭 Palette Generator listening on port ${port}!`)
)
