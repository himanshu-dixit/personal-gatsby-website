import { createContext, useContext } from "react"

export enum Sound {
  On = "on",
  Off = "off",
}

export type SoundContextType = {
  value: { sound: Sound; toggleSound: (Theme: Sound) => void }
}

export const SoundContext = createContext<SoundContextType>({
  sound: Sound.On,
  toggleSound: (theme: Sound) => {},
})

export const useSound = () => useContext(SoundContext)
