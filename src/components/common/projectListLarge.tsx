import React from "react"
import { css } from "@emotion/react"

export const ProjectItem = (props: any) => {
  const { item } = props
  const { name, desc, isNew } = item

  return (
    <div css={projectsItemContainerCSS}>
      <div css={projectsItemHeaderCSS}>
        <div css={projectItemTitleCSS}>{name}</div>
        <div css={projectItemNewLabelCSS}>{isNew ? "| New" : ""}</div>
      </div>
      <div css={projectItemDescCSS}>{desc}</div>
    </div>
  )
}

const projectItemDescCSS = css`
  margin-top: 3rem;
  color: var(--mainTextColor);
`
const projectItemTitleCSS = css`
  font-weight: bold;
`
const projectItemNewLabelCSS = css`
  margin-left: auto;
  color: var(--proectNewLabel);
`
const projectsItemContainerCSS = css`
  background: var(--tagsBackground);
  padding: 12rem 14rem;
  border-radius: 8rem;
  min-width: 30%;
  color: var(--mainTextColor);
  font-family: Cera Pro;
  font-style: normal;
  font-weight: 500;
  height: 200rem;
  font-size: 15rem;
`
const projectsItemHeaderCSS = css`
  display: flex;
`
