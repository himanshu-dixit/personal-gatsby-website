import React from "react"
import { css } from "@emotion/react"

export function PastWork() {
  const projectsOut = PAST_PROJECTS.map(item => {
    return <ProjectItem item={item} />
  })

  return (
    <div>
      <div css={pastWorkHeadingCSS}>
        Past work <a href={"#"}>View my projects</a>
      </div>
      <div css={projectsItemListCSS}>{projectsOut}</div>
    </div>
  )
}

export const PAST_PROJECTS = [
  {
    name: "Cofounder",
    desc: "Crusher",
    isNew: true,
  },
  ,
  {
    name: "Consultant",
    desc: "Signoz | YC S21",
    isNew: true,
  },
  {
    name: "Full stack engineer",
    desc: "Headout",
    isNew: true,
  },
  {
    name: "FS Engineer",
    desc: "Rizort",
    isNew: true,
  },
  {
    name: "Writing to create value",
    desc: "Frontend | Headout",
    isNew: true,
  },
  {
    name: "Cofounder",
    desc: "Crusher",
    isNew: true,
  },
]
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

const pastWorkHeadingCSS = css`
  color: var(--makeText);
  font-family: Cera Pro;
  font-style: normal;
  font-weight: bold;
  font-size: 18rem;
  display: flex;
  align-items: center;
  a {
    margin-left: 14rem;
    color: var(--makeText);
    text-decoration-line: underline;
    font-weight: 500;
    font-size: 14rem;
  }
`
const projectsItemListCSS = css`
  display: flex;
  margin-top: 20rem;
  > div {
    &:not(:first-child) {
      margin-left: 42rem;
    }
  }
`

const projectItemDescCSS = css`
  margin-top: 3rem;
  color: var(--descText);
`
const projectItemTitleCSS = css`
  font-weight: bold;
`
const projectItemNewLabelCSS = css`
  margin-left: auto;
  color: var(--newLabelTextColor);
`
const projectsItemContainerCSS = css`
  background: var(--tagsBackground);
  padding: 12rem 14rem;
  border-radius: 8rem;
  min-width: 270rem;
  color: var(--heroPrimaryTextColor);
  font-family: Cera Pro;
  font-style: normal;
  font-weight: 500;
  font-size: 15rem;
`
const projectsItemHeaderCSS = css`
  display: flex;
`
