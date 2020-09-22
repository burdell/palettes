export type Color = {
  name?: string
  color: string
}

export type ColorGroup = {
  name: string
  colors: Color[]
}

export type PaletteGroup = {
  [colorName: string]: string
}

export type Palette = {
  [groupName: string]: PaletteGroup
}

export type PaletteConfig = {
  name: string
  palette: Palette
}
