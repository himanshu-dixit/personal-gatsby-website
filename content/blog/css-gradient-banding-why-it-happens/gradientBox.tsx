import { css } from "@emotion/react"

export const GradientBanding = ()=>{
  return (
    <div css={gradientBox}>
      df
    </div>
  )
}

const gradientBox = css`
  height: 500px;
  background: linear-gradient(
          180deg
          ,#151619 10.44%,#0e0b0b 100%)
`