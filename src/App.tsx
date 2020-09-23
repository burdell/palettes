import React, { useState } from 'react'

import { paletteList } from '../palettes'
import { Palette } from './Palette'

export function App() {
  const [currentPaletteName, setCurrentPaletteName] = useState('scorebook')

  const shownPalette = paletteList.find((p) => p.name === currentPaletteName)
  const availablePalettes = paletteList.map((p) => p.name)
  return (
    <div>
      {availablePalettes.map((paletteName) => (
        <button onClick={() => setCurrentPaletteName(paletteName)}>
          {paletteName}
        </button>
      ))}
      <hr />
      <div>
        {shownPalette && (
          <>
            <h1>{shownPalette.name}</h1>
            <div>
              <Palette palette={shownPalette.palette} />
            </div>
          </>
        )}
      </div>
    </div>
  )
}
