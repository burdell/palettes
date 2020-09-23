import { resolve } from 'path'
import { writeFileSync } from 'fs'

import { paletteList } from '../palettes'
import { PaletteConfig, Palette } from '../frontend/types'

function writeToFile(data: unknown, dir: string, filename: string) {
  writeFileSync(resolve(dir, `${filename}`), `${data}`)
}

function generateCss(palette: Palette) {
  const colorGroups = Object.values(palette)

  const cssBuilder: string[] = [':root { ']
  colorGroups.forEach((group) => {
    Object.keys(group).forEach((variableName) => {
      const variableValue = group[variableName]
      if (variableValue) {
        cssBuilder.push(`  --${variableName}: ${variableValue};`)
      }
    })
  })
  cssBuilder.push(' }\n')

  return cssBuilder
}

export function generateCssFile(paletteConfig: PaletteConfig) {
  const css = generateCss(paletteConfig.palette)
  const folder = resolve(__dirname, `../output`)

  writeToFile(css.join('\n'), folder, `${paletteConfig.name}.css`)
}

export async function generate(palette: PaletteConfig) {
  generateCssFile(palette)
  console.log(`✨ generated ${palette.name}`)
}
