import * as React from "react"
import { css } from "@emotion/react"
import { Theme, useTheme } from "../../context/Theme"
import { playSound } from "../../utils/sound"

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
  return (
    <svg
      width={17}
      height={17}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      css={speaker}
      {...props}
    >
      <g clipPath="url(#prefix__clip0)" fill="#3A434B">
        <path d="M1.548 11.93h1.069l6.219 3.957c.722.46 1.306.138 1.306-.717v-4.053a3.094 3.094 0 000-5.488v-3.78c0-.856-.594-1.192-1.327-.753l-6.198 3.72H1.548C.693 4.815 0 5.507 0 6.363v4.017c0 .856.693 1.549 1.548 1.549z" />
        <path d="M12.837 8.93a4.3 4.3 0 01-.559 1.836.774.774 0 001.344.769 5.888 5.888 0 00-.32-6.338.774.774 0 00-1.259.9 4.34 4.34 0 01.794 2.833z" />
        <path d="M16.979 9.228a7.85 7.85 0 00-3.101-6.852.774.774 0 10-.935 1.234 6.307 6.307 0 012.492 5.505 6.295 6.295 0 01-2.032 4.197.774.774 0 001.046 1.142 7.835 7.835 0 002.53-5.226z" />
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path fill="#fff" d="M0 0h17v17H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export function ThemeToggle(props) {
  const { theme, toggleTheme } = useTheme();

  const handleClick = ()=>{
    // new Audio("http://localhost:8000/test.mp3").play();
    theme == Theme.Dark && playSound("/sound/sound_on.m4a");
    theme == Theme.Light && playSound("/sound/sound_off.m4a");
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
