import { css } from "@emotion/react"
import { useState } from "react"

export const GradientBanding = () => {
  const [isFullMode, setFullMode] = useState(false)
  return (
    <div
      css={[gradientBox, isFullMode && fullPage]}
      onClick={() => {
        setFullMode(!isFullMode)
      }}
    >
      <span>{isFullMode ? "Zoom out" : "Switch to full screen"}</span>
    </div>
  )
}

const fullPage = css`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  top: 0;
  left: 0;
`

const gradientBox = css`
  display: flex;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  padding: 20rem;
  height: 500px;
  color: var(--primaryPink);
  text-decoration: underline;
  background: linear-gradient(180deg, #151619 10.44%, #0e0b0b 100%);
`
