import { Theme, useTheme } from "../../../context/theme"
import { getSoundInstance, playSound } from "../../../utils/sound"
import * as React from "react"
import { css } from "@emotion/react"
import { ReactElement } from "react"

const toggle = css`
  #toogle-circle {
    fill: var(--themeSwitchButton);
  }

  .sun-icon {
    stroke: var(--mainTextColor);
  }
`
const toggleButton = css`
  height: 19rem;
  width: 46rem;
  background: var(--themeSwitchContainer);
  border-radius: 100px;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  cursor: pointer;

  svg {
    margin-top: 1rem;
    transition: all ease 0.35s;
  }
`
const lightModeButton = css`
  svg {
    margin-left: 23px;
    opacity: 1;
  }
`

export function ThemeToggle(props): ReactElement {
  const { theme, toggleTheme } = useTheme()

  const soundObject = getSoundInstance(
    theme == Theme.Dark ? "/sound/theme_light.m4a" : "/sound/theme_dark.m4a"
  )

  const handleClick = () => {
    playSound(soundObject)
    toggleTheme()
  }

  return (
    <div
      css={[toggleButton, theme == Theme.Light ? lightModeButton : null]}
      onClick={handleClick}
    >
      <svg
        width={19}
        height={19}
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

export default ThemeToggle