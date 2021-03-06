import React from "react"
import { css } from "@emotion/react"

export const Curvy = (props: any) => {
  const {isHeroBackground} = props;
return (
  <div css={waveContainer}>
    <svg viewBox="0 0 1440 50" xmlns="http://www.w3.org/2000/svg" css={curve(isHeroBackground)}>
      <g clip-path="url(#clip0)">
        <path
          d="M448.585 0.0242549C267.66 -0.732128 -12 21.6332 -12 21.6332V32.0055H1441V21.6332C1441 21.6332 1320.32 13.4941 1242.31 11.6931C1097.25 8.34348 1016.28 23.0101 871.039 21.6332C704.941 20.0586 614.715 0.718786 448.585 0.0242549Z"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect
            width="1453"
            height="32"
            fill="white"
            transform="translate(-12 0.00549316)"
          />
        </clipPath>
      </defs>
    </svg>
  </div>
)
}


const waveContainer = css`
  margin-top: -42rem;
  width: 100%;
  height: 66rem;
  overflow: hidden;
  position: relative;
`

const curve = (isHeroBackground) => (css`
  min-width: 1440px;
  width: 100vw;
  path {
    fill: ${isHeroBackground ? `var(--heroBackground)`: `var(--waveBackground)`};
  }
`);
