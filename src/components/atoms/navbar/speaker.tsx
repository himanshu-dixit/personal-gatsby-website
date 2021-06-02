import { css } from "@emotion/react"
import { Sound, useSound } from "../../../context/sound.ts"
import { getSoundInstance, playSound } from "../../../utils/sound"
import * as React from "react"
import { ReactElement } from "react"

const speaker = css`
  cursor: pointer;
  margin-top: 1rem;
  path {
    fill: var(--headerIconColor);
  }
`

export function Speaker(props): ReactElement {
  const { sound, toggleSound } = useSound()

  const soundInstance = getSoundInstance(
    sound == Sound.Off ? "/sound/speaker_on.m4a" : "/sound/speaker_off.m4a"
  )
  const handleClick = () => {
    playSound(soundInstance)
    toggleSound()
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={17}
      height={17}
      css={speaker}
      onClick={handleClick}
      viewBox="0 0 291.063 291.064"
      {...props}
    >
      <path d="M26.512 204.255h18.292l106.48 67.761c12.354 7.855 22.369 2.361 22.369-12.282v-69.397c16.933-8.854 28.501-26.559 28.501-46.983 0-20.425-11.568-38.129-28.501-46.986V31.645c0-14.639-10.18-20.401-22.731-12.873L44.804 82.443H26.512C11.866 82.443 0 94.311 0 108.955v68.789c0 14.643 11.866 26.511 26.512 26.511zM219.791 152.899c-.818 11.185-4.039 21.758-9.569 31.426-3.635 6.354-1.43 14.452 4.919 18.087a13.227 13.227 0 006.576 1.751 13.25 13.25 0 0011.517-6.675c7.508-13.138 11.889-27.491 12.986-42.663 1.714-23.397-4.836-46.781-18.455-65.845-4.256-5.96-12.536-7.332-18.491-3.081-5.959 4.259-7.337 12.531-3.08 18.491 10.024 14.035 14.861 31.263 13.597 48.509z" />
      {sound == Sound.On && (
        <path d="M290.7 158c3.34-45.736-16.508-89.592-53.097-117.318-5.841-4.433-14.146-3.27-18.568 2.556-4.428 5.838-3.283 14.151 2.558 18.568 29.401 22.281 45.355 57.521 42.668 94.252-2.02 27.636-14.375 53.159-34.787 71.867-5.396 4.95-5.758 13.339-.808 18.729a13.2 13.2 0 009.771 4.298c3.194 0 6.41-1.154 8.953-3.484 25.415-23.293 40.794-55.06 43.31-89.468z" />
      )}
    </svg>
  )
}
