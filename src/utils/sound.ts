let currentlyPlaying = null

// Always create sound instance and then play. Otherwise, due to data binding value will change at time of invocation
// This can cause buffer
export const getSoundInstance = (soundURI: string) => {
  return new Audio(soundURI)
}
export const playSound = (soundInstance: any, canInterrupt = true) => {
  if (!canInterrupt && currentlyPlaying !== null) return
  soundInstance.play()
  soundInstance.onended = () => {
    currentlyPlaying = null
  }
}
