import { resolve } from 'path'

import { generateCssFile } from './files'
import { paletteList } from '../palettes'

async function generate() {
  const paletteName = process.argv[2]

  if (!paletteName) {
    throw new Error('No palette specified')
  }

  const palette = paletteList.find((p) => p.name === paletteName)

  if (!palette) {
    throw new Error(`No palette named ${paletteName} found`)
  }

  generateCssFile(palette)
  console.log('✨')
}

generate()
