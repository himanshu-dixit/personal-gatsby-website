// @ts-ignore
import React, { useEffect, useState } from "react"
import { css } from "@emotion/react"
import { LogoComponent } from "../atoms/logo"
import { Speaker } from "../atoms/navbar/speaker"
import { ThemeToggle } from "../atoms/navbar/themetoggle"
import { BookMark } from "../atoms/navbar/bookmark"

export const Curvy = () => (
  <div css={waveContainer}>
    <svg viewBox="0 0 1440 50" xmlns="http://www.w3.org/2000/svg" css={curve}>
      <g clip-path="url(#clip0)">
        <path
          d="M448.585 0.0242549C267.66 -0.732128 -12 21.6332 -12 21.6332V32.0055H1441V21.6332C1441 21.6332 1320.32 13.4941 1242.31 11.6931C1097.25 8.34348 1016.28 23.0101 871.039 21.6332C704.941 20.0586 614.715 0.718786 448.585 0.0242549Z"
          fill="#090C0F"
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

function MenuComponent() {
  return (
    <div css={menu}>
      <a href={"google.com"}>Blog</a>
      <a>Career</a>
      <a>Essays</a>
    </div>
  )
}

function RightSection() {
  return (
    <div css={rightSection}>
      <div>
        <BookMark />
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
    color: var(--makeText);
  }
  #break-text {
    color: var(--breakText);
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

function Navbar() {
  return (
    <>
      <div css={topBar}>
        <div>
          <LogoComponent />
        </div>
        <MenuComponent />
        <RightSection />
      </div>
      <Tagline />
    </>
  )
}

export const Herocomponent = (): JSX.Element => {
  return (
    <>
      <section css={heroSection}>
        <Navbar />

        <div id={"hero-content"}>
          <div>
            <h1 css={heroTagline}>I bring impact by creating products</h1>
            <h1 css={heroTaglineSecondary}>using my full-stack skills</h1>
            <div css={knowLink}>
              <a href={"http://gogole.com"}>Know about me</a>
            </div>
          </div>
          <div css={jammingText}>
            Jamming to <span>Mera man lage - 3:00</span>
          </div>
          <img src={"/images/standing_person.png"} css={personalIllustration} />
        </div>
      </section>

      <Curvy />
    </>
  )
}


const heroTagline = css`
  font-family: Cera Pro;
  font-style: normal;
  font-weight: bold;
  font-size: 22re;
  line-height: 28rem;
  margin: 0;
  margin-left: -3rem;
  margin-top: 64rem;
`
const heroTaglineSecondary = css`
  font-family: Cera Pro;
  font-style: normal;
  font-weight: 900;
  font-size: 22px;
  line-height: 28px;
  margin: 0;
  margin-left: -3rem;
  margin-top: 11rem;
`

const knowLink = css`
  font-family: Cera Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 19px;
  /* identical to box height */
  margin-top: 19rem;
  margin-bottom: 56rem;
  text-decoration-line: underline;
  a {
    color: var(--linkText);
  }
`

const jammingText = css`
  font-family: Cera Pro;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
`


const personalIllustration = css`
  position: absolute;
  bottom: 32rem;
  height: 400px;
  right: -96rem;
  pointer-events: none;
  user-select: none;
`

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
  > a {
    margin-left: 25rem;
    text-decoration: none;
    margin-right: 25rem;
    color: var(--heroPrimaryTextColor);
  }
  > :first-child {
    margin-left: 0rem;
  }
  > :last-child {
    margin-right: 0rem;
  }
`
const rightSection = css`
  display: flex;

  > div {
    margin-left: 20rem;
    margin-right: 20rem;
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

const heroSection = css`
  width: 100%;
  height: 452rem;
  padding-top: 38rem;
  position: relative;
  background: var(--heroBackground);
  color: var(--heroPrimaryTextColor);
  > div {
    max-width: var(--contentContainerWidth);
    width: 100%;
    margin: 0 auto;
    @media screen and (max-width: 1080px) {
      padding: 0 25rem;
    }
  }

  #hero-content {
    height: 428px;
    position: relative;
  }
`

const waveContainer = css`
  margin-top: -42rem;
  width: 100%;
  height: 66rem;
  overflow: hidden;
  position: relative;
`

const curve = css`
  min-width: 1440px;
  width: 100vw;
  path {
    fill: var(--waveBackground);
  }
`
