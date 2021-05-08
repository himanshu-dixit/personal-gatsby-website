import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { BookMark } from "../atoms/navbar/bookmark"
import { Speaker } from "../atoms/navbar/speaker"
import { ThemeToggle } from "../atoms/navbar/themetoggle"
import { LogoComponent } from "../atoms/logo"
import { css } from "@emotion/react"

function MenuComponent({ isMobile }) {
  return (
    <div css={[menu, isMobile ? mobileMenu : desktopMenu]}>
      <Link to={"/work"}>Work</Link>
      <Link to={"/about_me"}>Services</Link>
      <a href={"mailto:hello@himanshud.com"}>Contact</a>
    </div>
  )
}

function RightSection() {
  return (
    <div css={rightSection}>

      <div>
        <Link to={"https://airtable.com/shrZenNAupoKW07uj"} target={"_blank"}>
        <BookMark />
        </Link>
      </div>

      <div>
        <Speaker />
      </div>
      <ThemeToggle />
    </div>
  )
}

const tagline = css`
  font-size: 16rem;
  height: 20rem;
  font-family: "Cera Pro";
  margin-top: -22rem;
  font-weight: 600;
  span {
  }
  #make-text {
    color: var(--primaryBlue);
  }
  #break-text {
    color: var(--primaryPink);
  }
`

function Tagline() {
  const textToShowInOrder = "I make stuff & break"
  const [span1, setSpan1] = useState("")
  const [span2, setSpan2] = useState("")
  const [span3, setSpan3] = useState("")
  const [span4, setSpan4] = useState("")

  // Handle Animation
  useEffect(() => {
    // Can be made clean with. Text to show and text shown
    const currentCursor1 = span1.length
    const currentCursor2 = currentCursor1 + span2.length
    const currentCursor3 = currentCursor2 + span3.length
    const currentCursor4 = currentCursor3 + span4.length

    const keyStokeTime = 500
    if (currentCursor1 < 2) {
      setTimeout(() => {
        setSpan1(span1 + textToShowInOrder[currentCursor1])
      }, 500)
    }

    if (currentCursor1 >= 2 && currentCursor2 < 7) {
      setTimeout(() => {
        setSpan2(span2 + textToShowInOrder[currentCursor2])
      }, 150)
    }

    if (currentCursor2 >= 7 && currentCursor3 < 12) {
      setTimeout(() => {
        setSpan3(span3 + textToShowInOrder[currentCursor3])
      }, 200)
    }

    if (currentCursor4 >= 12 && currentCursor4 < 20) {
      setTimeout(() => {
        setSpan4(span4 + textToShowInOrder[currentCursor4])
      }, 200)
    }
  })

  return (
    <div>
      <div css={tagline} style={{ width: "200rem" }}>
        <span>{span1}</span>
        <span id={"make-text"}>{span2}</span>
        <span id={"break-text"}>{span4}</span>
        {span4.length > 0 && <span className="blinking-cursor">|</span>}
        <span>{span3}</span>
        {span4.length < 1 && <span className="blinking-cursor">|</span>}
      </div>
    </div>
  )
}

export function Navbar() {
  return (
    <>
      <div css={topBar}>
        <div>
          <Link to={"/"}>
            <LogoComponent />
          </Link>
        </div>
        <MenuComponent isMobile={false} />
        <RightSection />
      </div>
      <Tagline />
      <MenuComponent isMobile={true} />
    </>
  )
}

const topBar = css`
  display: flex;
  justify-content: space-between;
  height: 53rem;
`
const menu = css`
  display: flex;
  font-family: "Cera Pro";
  font-weight: 500;
  font-size: 16rem;
  @media (max-width: 600px) {
    font-size: 14rem;
  }
  > a {
    margin-left: 25rem;
    text-decoration: none;
    margin-right: 25rem;
    @media (max-width: 600px) {
      margin-right: 12rem;
    }
    color: var(--mainTextColor);
  }
  > :first-child {
    margin-left: 0rem;
  }
  > :last-child {
    margin-right: 0rem;
  }
`
const mobileMenu = css`
  @media (max-width: 600px) {
    display: block;
    margin-top: 24px !important;
  }
  display: none;
`
const desktopMenu = css`
  @media (max-width: 600px) {
    display: none;
  }
  display: block;
`
const rightSection = css`
  @media (max-width: 600px) {
  }
  display: flex;

  > div {
    margin-left: 20rem;
    margin-right: 20rem;

    @media (max-width: 600px) {
      margin-left: 15rem;
      margin-right: 15rem;
    }
  }
  > :first-child {
    margin-left: 0rem;
  }
  > :last-child {
    margin-right: 0rem;
  }

  #hero-content {
    position: relative;
    height: 300px;
  }
`
