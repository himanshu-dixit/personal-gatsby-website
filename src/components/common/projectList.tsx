import React, { useEffect, useState } from "react"
import { css } from "@emotion/react"
import { NextSVG } from "../../constants/icons"

const arrowIcon = css`
  width: 28px;
  height: 28px;

  border: 2px solid var(--scrollBorder);
  background: var(--scrollBG);

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
`

const previousIcon = css`
  transform: rotate(0.5turn);
`

const hidden = css`
  visibility: hidden;
`

export function PastWork() {
  const [marginOffset, setMarginOffset] = useState(-80)
  const [scrollIndex, setScrollIndex] = useState(0)
  const [maxOffset, setMaxOffset] = useState(0)
  const projectsOut = PAST_PROJECTS.map(item => {
    return <ProjectItem item={item} />
  })

  useEffect(() => {
    const projectItemWidth = document.querySelector(".project-item").clientWidth
    setMarginOffset(-1 * projectItemWidth)

    const containerWidth = document.querySelector(".project-containers")
      .clientWidth

    const elementsInContainer = Math.round(containerWidth / projectItemWidth)

    const maxOffset = PAST_PROJECTS.length - elementsInContainer

    setMaxOffset(maxOffset)
  }, [])

  return (
    <div>
      <div>
        <div css={pastWorkHeadingCSS}>
          Past work <a href={"#"}>View my projects</a>
          <div className={"scroll-container"}>
            <div
              css={[arrowIcon, previousIcon, scrollIndex === 0 && hidden]}
              onClick={() => {
                setScrollIndex(scrollIndex - 1)
              }}
            >
              <NextSVG />
            </div>

            <div
              css={[arrowIcon, scrollIndex > maxOffset && hidden]}
              onClick={() => {
                setScrollIndex(scrollIndex + 1)
              }}
            >
              <NextSVG />
            </div>
          </div>
        </div>
        <div style={{ position: "relative" }} className={"project-containers"}>
          <div style={{ marginTop: 20 }}>
            <div
              css={projectsItemListCSS}
              style={{ marginLeft: `${scrollIndex * marginOffset}px` }}
            >
              {projectsOut}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const PAST_PROJECTS = [
  {
    name: "Cofounder",
    desc: "Crusher.dev",
    isNew: false,
  },
  ,
  {
    name: "Consultant",
    desc: "YC & Stealth Startups",
    isNew: false,
  },
  {
    name: "Full stack engineer",
    desc: "Headout",
    isNew: false,
  },
  {
    name: "Full stack engineer",
    desc: "Rizort.com",
    isNew: false,
  },
  {
    name: "Sveet.io",
    desc: "Cofounder",
    isNew: false,
  },
  {
    name: "Open source contributor",
    desc: "Social API",
    isNew: false,
  },

]
export const ProjectItem = (props: any) => {
  const { item } = props
  const { name, desc, isNew } = item

  return (
    <div css={projectsItemContainerCSS} className={"project-item"}>
      <div css={projectsItemHeaderCSS}>
        <div css={projectItemTitleCSS}>{name}</div>
        <div css={projectItemNewLabelCSS}>{isNew ? "| New" : ""}</div>
      </div>
      <div css={projectItemDescCSS}>{desc}</div>
    </div>
  )
}

const pastWorkHeadingCSS = css`
  position: relative;
  color: var(--primaryBlue);
  font-family: Cera Pro;
  font-style: normal;
  font-weight: bold;
  font-size: 18rem;
  display: flex;
  align-items: center;
  a {
    margin-left: 14rem;
    color: var(--primaryBlue);
    text-decoration-line: underline;
    font-weight: 500;
    font-size: 14rem;
  }

  .scroll-container {
    position: absolute;
    right: 0px;

    display: flex;
    > div {
      margin-left: 20px;
    }
  }
`
const projectsItemListCSS = css`
  position: relative;
  display: flex;
  transition: all 0.3s ease-out;

  // For Scroll via button
  // Other way to insist on using vertical and horizontal zoom together
  // Native scroll, not reliable on mac. Scroll bar appears, also ufl
  // Build custom scroll with mousePress and mousePointermove

  > div {
    &:not(:first-child) {
      margin-left: 42rem;
    }
  }
`

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
  min-width: 270rem;
  color: var(--mainTextColor);
  font-family: Cera Pro;
  font-style: normal;
  font-weight: 500;
  font-size: 15rem;
`
const projectsItemHeaderCSS = css`
  display: flex;
`
