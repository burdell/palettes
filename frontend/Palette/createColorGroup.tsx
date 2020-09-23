import { PaletteGroup, ColorGroup, Color, Palette } from '../types'

export function createColorGroup(pallet: Palette): ColorGroup[] {
  return Object.keys(pallet).reduce<ColorGroup[]>((acc, colorGroupName) => {
    const colorGroup = pallet[colorGroupName]
    const group: ColorGroup = {
      name: colorGroupName,
      colors: Object.keys(colorGroup).reduce<Color[]>((acc, colorName) => {
        const color = colorGroup[colorName as any]
        acc.push({ name: colorName, color })
        return acc
      }, [])
    }
    acc.push(group)
    return acc
  }, [])
}
