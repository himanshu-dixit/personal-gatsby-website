import React, { ReactElement, useState } from "react"
import { SoundContext } from "../context/Sound"
import { Sound } from "../context/Sound"
export const withSound = (Component: ReactElement): ReactElement => {
  return props => {
    const [sound, setSound] = useState(Sound.On)
    const toggleSound = () => {
      sound === Sound.On? setSound(Sound.Off) : setSound(Sound.On)
    }
    const contextValue = { sound, toggleSound }
    return (

      <SoundContext.Provider value={contextValue}>
        <Component {...props} />
      </SoundContext.Provider>
    )
  }
}
