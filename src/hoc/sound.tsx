import React, { ReactElement, ReactPropTypes, useEffect, useState } from "react"
import { Sound, SoundContext } from "../context/Sound"
import { getSoundInstance, playSound } from "../utils/sound"

export const withSound = (
  Component: ReactElement
): ((props: ReactPropTypes) => ReactElement) => {
  return props => {
    const [sound, setSound] = useState(
      typeof localStorage !== "undefined"
        ? localStorage.getItem("sound")
        : Sound.On
    )
    const toggleSound = () => {
      const nextSound = sound === Sound.On ? Sound.Off : Sound.On
      setSound(nextSound)
      localStorage.setItem("sound", nextSound)
    }

    const contextValue = { sound, toggleSound }

    const soundObject = getSoundInstance("/sound/theme_dark.m4a")
    useEffect(function soundEventListener() {
      const soundEventListener = document.addEventListener("click", e => {
        e.stopPropagation()
        let element: any = e.target
        while (element && element.tagName !== "BODY") {
          element = element.parentElement
          if (element && element.tagName === "A") {
            if (sound === Sound.On) {
              playSound(soundObject)
              break
            }
          }
        }
      })
      return () => {
        document.removeEventListener("click", soundEventListener)
      }
    }, [])
    return (
      <SoundContext.Provider value={contextValue}>
        <Component {...props} />
      </SoundContext.Provider>
    )
  }
}
