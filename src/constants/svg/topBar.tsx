import * as React from "react"
import { css } from "@emotion/react"
import { Theme, useTheme } from "../../context/Theme"
import { getSoundInstance, playSound } from "../../utils/sound"
import { Sound, useSound } from "../../context/Sound"

const bookmark = css`
  path {
    fill: var(--bookmarkIdealColor);
  }
`
const speaker = css`
  path {
    fill: var(--bookmarkIdealColor);
  }
`

const toggle = css`
  #toogle-circle {
    fill: var(--themeSwitchButton);
  }

  .sun-icon {
    stroke: var(--themeSwitchSun);
  }
`

const toggleButton = css`
  height: 19rem;
  width: 46rem;
  background: var(--themeSwitchContainer);
  border-radius: 100px;
  display: flex;
  align-items: center;
  padding: 0 3rem;
  cursor: pointer;
  svg {
    transition: all ease 0.35s;
  }
`

const lightModeButton = css`
  svg {
    margin-left: 23px;
  }
`

export function BookMark(props) {
  return (
    <svg
      width={15}
      height={17}
      viewBox="0 0 15 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      css={bookmark}
    >
      <g clipPath="url(#prefix__clip0)">
        <path
          d="M11.875 0H3.172c-.709 0-1.331.66-1.331 1.443v14.591c0 .262.064.48.168.649a.632.632 0 00.537.317c.203 0 .418-.102.617-.295l3.894-3.746a.683.683 0 01.472-.184c.18 0 .352.067.473.184l3.88 3.746c.2.193.4.295.603.295.341 0 .674-.299.674-.966V1.444C13.16.66 12.584 0 11.875 0z"
          fill="#00C4EB"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path fill="#fff" d="M0 0h15v17H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export function Speaker(props) {


  const { sound, toggleSound } = useSound();

  const soundInstance = getSoundInstance(sound == Sound.Off ? "/sound/speaker_on.m4a" : "/sound/speaker_off.m4a")
  const handleClick = ()=>{
    playSound(soundInstance);
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
      {sound == Sound.On &&
      <path d="M290.7 158c3.34-45.736-16.508-89.592-53.097-117.318-5.841-4.433-14.146-3.27-18.568 2.556-4.428 5.838-3.283 14.151 2.558 18.568 29.401 22.281 45.355 57.521 42.668 94.252-2.02 27.636-14.375 53.159-34.787 71.867-5.396 4.95-5.758 13.339-.808 18.729a13.2 13.2 0 009.771 4.298c3.194 0 6.41-1.154 8.953-3.484 25.415-23.293 40.794-55.06 43.31-89.468z" />}
    </svg>
  )
}

export function ThemeToggle(props) {
  const { theme, toggleTheme } = useTheme();

  const soundObject = getSoundInstance(theme == Theme.Dark ? "/sound/theme_light.m4a" : "/sound/theme_dark.m4a")

  const handleClick = ()=>{
    playSound(soundObject);
    toggleTheme()
  }
  return (
    <div
      css={[toggleButton, theme === Theme.Light && lightModeButton]}
      onClick={handleClick}
    >
      <svg
        width={16}
        height={16}
        viewBox="0 0 20 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        css={toggle}
        {...props}
      >
        <g filter="url(#prefix__filter0_d)">
          <ellipse
            cx={10}
            cy={8.5}
            rx={8}
            ry={7.5}
            fill="#0C1115"
            id="toogle-circle"
          />
        </g>
        <g
          clipPath="url(#prefix__clip0)"
          stroke="#F2F2F2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="sun-icon"
        >
          <path d="M9.942 10.48a1.98 1.98 0 100-3.96 1.98 1.98 0 000 3.96zM9.942 4.145v.792M9.942 12.063v.791M6.863 5.42l.562.563M12.46 11.017l.562.562M5.588 8.5h.792M13.505 8.5h.791M6.863 11.58l.562-.563M12.46 5.983l.562-.563" />
        </g>
        <defs className="sun-icon">
          <clipPath id="prefix__clip0">
            <path
              fill="#fff"
              transform="translate(5.192 3.75)"
              d="M0 0h9.5v9.5H0z"
            />
          </clipPath>
          <filter
            id="prefix__filter0_d"
            x={0}
            y={0}
            width={20}
            height={19}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy={1} />
            <feGaussianBlur stdDeviation={1} />
            <feColorMatrix values="0 0 0 0 0.329412 0 0 0 0 0.329412 0 0 0 0 0.329412 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  )
}
