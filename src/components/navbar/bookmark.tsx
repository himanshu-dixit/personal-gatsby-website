import { css } from "@emotion/react"
import * as React from "react"
import { ReactElement } from "react"

const bookmark = css`
  path {
    fill: var(--headerIconColor);
  }
`

export function BookMark(props): ReactElement {
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
