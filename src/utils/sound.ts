let currentlyPlaying = null

// Always create sound instance and then play. Otherwise, due to data binding value will change at time of invocation
// This can cause delay sometimes.
export const getSoundInstance = (soundURI: string) => {
  if (typeof window !== "undefined") {
    return new Audio(soundURI)
  }
  return null
}

export const playSound = (soundInstance: any, canInterrupt = true) => {
  if (!canInterrupt && currentlyPlaying !== null) return
  soundInstance.play()
  soundInstance.onended = () => {
    currentlyPlaying = null
  }
}
