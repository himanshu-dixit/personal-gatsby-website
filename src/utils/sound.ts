let currentlyPlaying = null;
export const playSound = (soundURI: string, canInterrupt = true)=>{
  if(!canInterrupt && currentlyPlaying !== null) return;
  currentlyPlaying = soundURI;
  const audioObject = new Audio(soundURI);
  audioObject.play();
  audioObject.onended = ()=>{currentlyPlaying = null}
}