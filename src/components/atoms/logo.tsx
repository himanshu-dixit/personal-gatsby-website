import React, { ReactElement } from "react"
import { css } from "@emotion/react"
const logoSVG = css`
  height: 20rem;
  path {
    fill: var(--mainTextColor);
  }
  @media screen and (max-width: 1080px) {
    width: 140rem;
  }
`

export function LogoComponent(props): ReactElement {
  return (
    <svg
      viewBox="0 0 172 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      css={logoSVG}
    >
      <path
        d="M.584 19h4.128v-6.336h5.784V19h4.128V3.16h-4.128v5.784H4.712V3.16H.584V19zm16.846 0h4.128V7H17.43v12zm-.48-16.248c0 1.368 1.104 2.424 2.52 2.424s2.544-1.08 2.544-2.424c0-1.368-1.128-2.448-2.544-2.448-1.416 0-2.52 1.08-2.52 2.448zm26.404 8.856c0-2.976-1.776-4.896-4.632-4.896-1.56 0-2.976.576-3.936 1.536-.84-1.032-1.992-1.536-3.48-1.536-1.32 0-2.424.408-3.288 1.224V7H24.25v12h4.128v-6.792c0-1.128.672-1.776 1.656-1.776 1.032 0 1.704.648 1.704 1.776V19h4.128v-6.792c0-1.128.672-1.776 1.656-1.776 1.032 0 1.704.648 1.704 1.776V19h4.128v-7.392zm13.327.432c0-3.456-2.088-5.328-5.448-5.328-2.184 0-3.816.768-5.424 2.4l1.92 2.616c1.152-1.032 1.92-1.464 3-1.464 1.248 0 1.824.6 1.824 1.536v.192h-2.52c-2.904 0-4.704 1.344-4.704 3.576 0 2.016 1.512 3.72 4.128 3.72 1.416 0 2.568-.432 3.456-1.272V19h3.768v-6.96zm-4.128 2.568c0 1.08-.768 1.752-1.824 1.752-.768 0-1.224-.36-1.224-.936 0-.576.408-.912 1.104-.912h1.944v.096zm18.449-3c0-2.976-1.8-4.896-4.584-4.896-1.368 0-2.496.432-3.384 1.272V7h-3.768v12h4.128v-6.792c0-1.056.696-1.776 1.728-1.776s1.752.72 1.752 1.776V19h4.128v-7.392zm1.504 5.376c1.128 1.464 3.024 2.304 5.16 2.304 1.464 0 2.64-.36 3.576-1.056.936-.72 1.392-1.704 1.392-2.928 0-1.896-1.104-2.808-3.504-3.768l-1.2-.48c-.576-.216-.816-.384-.816-.648 0-.312.288-.456.84-.456.888 0 1.728.336 2.544 1.032l1.944-2.52c-1.128-1.176-2.616-1.752-4.512-1.752-2.808 0-4.656 1.392-4.656 3.768 0 1.896 1.104 2.904 3.48 3.864l1.344.552c.504.216.696.336.696.6 0 .36-.36.528-1.056.528-1.176 0-2.28-.504-3.312-1.488l-1.92 2.448zm23.761-5.376c0-2.928-1.823-4.896-4.487-4.896-1.225 0-2.28.384-3.12 1.128V1H84.53v18h4.128v-6.792c0-1.056.697-1.776 1.728-1.776 1.032 0 1.752.72 1.752 1.776V19h4.129v-7.392zm2.489 1.8c0 3.528 2.496 5.88 5.88 5.88s5.856-2.352 5.856-5.88V7h-4.128v6.744c0 1.032-.744 1.752-1.728 1.752-1.032 0-1.752-.72-1.752-1.752V7h-4.128v6.408zM120.045 19h5.52c4.848.072 8.712-3.288 8.64-7.968.072-4.752-3.792-7.92-8.64-7.872h-5.52V19zm4.128-3.72V6.904h1.368c2.616 0 4.44 1.44 4.44 4.128 0 2.616-1.848 4.248-4.44 4.248h-1.368zM136.328 19h4.128V7h-4.128v12zm-.48-16.248c0 1.368 1.104 2.424 2.52 2.424s2.544-1.08 2.544-2.424c0-1.368-1.128-2.448-2.544-2.448-1.416 0-2.52 1.08-2.52 2.448zM155.077 19l-4.344-6.168L154.837 7h-4.584l-1.824 2.832-1.8-2.832h-4.584l4.104 5.832L141.805 19h4.584l2.04-3.144L150.493 19h4.584zm1.337 0h4.128V7h-4.128v12zm-.48-16.248c0 1.368 1.104 2.424 2.52 2.424s2.544-1.08 2.544-2.424c0-1.368-1.128-2.448-2.544-2.448-1.416 0-2.52 1.08-2.52 2.448zm14.213 12.84c-1.512 0-2.064-.432-2.064-1.584v-3.552h3.216V7h-3.216V4.12h-4.128V7h-1.824v3.456h1.824v3.96c0 3.24 1.896 4.872 5.28 4.872.816 0 1.632-.096 2.424-.288v-3.456l-1.512.048z"
        fill="#1D2022"
      />
    </svg>
  )
}
