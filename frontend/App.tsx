import React, { useState } from 'react'

import { paletteList } from '../palettes'
import { Palette } from './Palette'
import { PaletteConfig } from './types'

export function App() {
  const [currentPaletteName, setCurrentPaletteName] = useState('scorebook')

  const shownPalette = paletteList.find((p) => p.name === currentPaletteName)
  const availablePalettes = paletteList.map((p) => p.name)

  function generatePalette(palette: PaletteConfig) {
    return fetch(`http://localhost:9001/generate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(palette)
    })
      .then((res) => null)
      .catch((e) => console.log(e.message))
  }

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
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <h1>{shownPalette.name}</h1>
              <button
                style={{ marginLeft: '1rem' }}
                onClick={() => generatePalette(shownPalette)}
              >
                generate
              </button>
            </div>
            <div>
              <Palette palette={shownPalette.palette} />
            </div>
          </>
        )}
      </div>
    </div>
  )
}
