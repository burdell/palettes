import React from 'react'
import { Palette as PaletteType } from '../types'
import { ColorRow } from './ColorRow'
import { createColorGroup } from './createColorGroup'

export function Palette({ palette }: { palette: PaletteType }) {
  const colorGroups = createColorGroup(palette)

  return (
    <div>
      {colorGroups.map((group) => {
        return (
          <div>
            <div>
              <h2>{group.name}</h2>
            </div>
            <ColorRow group={group} />
          </div>
        )
      })}
    </div>
  )
}
