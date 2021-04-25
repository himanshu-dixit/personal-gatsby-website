import React from "react"
import { css } from "@emotion/react"

const Center = (props: any) => {
  const { children, customCSS } = props

  return <div css={[containerCSS, customCSS]}>{children}</div>
}

const containerCSS = css`
  max-width: var(--contentContainerWidth);
  width: 100%;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  @media screen and (max-width: 1080px) {
    padding: 0 25rem;
  }
`

export { Center }
