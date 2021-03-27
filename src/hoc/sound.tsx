import React, { ReactElement, useState } from "react"
import { Sound, SoundContext } from "../context/Sound"

export const withSound = (Component: ReactElement): ReactElement => {
  return props => {
    const [sound, setSound] = useState( localStorage.getItem('sound') || Sound.On)
    const toggleSound = () => {
      const nextSound = sound === Sound.On ? Sound.Off : Sound.On;
      setSound(nextSound);
      localStorage.setItem('sound',nextSound)
    }
    const contextValue = { sound, toggleSound }
    return (
      <SoundContext.Provider value={contextValue}>
        <Component {...props} />
      </SoundContext.Provider>
    )
  }
}
