// @ts-ignore
import React from "react"
import { css } from "@emotion/react"
import { LogoComponent } from "../atoms/logo"
import { BookMark, ThemeToggle, Speaker } from "../../constants/svg/topBar"

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

export const Herocomponent = (): JSX.Element => {
  return (
    <>
      <section css={heroSection}>
        <div css={topBar}>
          <div>
            <LogoComponent />
          </div>
          <MenuComponent />
          <RightSection />
        </div>
      </section>
      <Curvy />
    </>
  )
}

const topBar = css`
  display: flex;
  justify-content: space-between;
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
`

const heroSection = css`
  width: 100%;
  height: 480rem;
  padding-top: 36rem;
  background: var(--heroBackground);
  color: var(--heroPrimaryTextColor);
  > div {
    max-width: var(--contentContainerWidth);
    width: 100%;
    margin: 0 auto;
    @media screen and (max-width: 1080px) {
      padding: 0 26rem;
    }
  }
`

const waveContainer = css`
  margin-top: -32rem;
  width: 100%;
  height: 66rem;
  overflow: hidden;
`

const curve = css`
  min-width: 1440px;
  width: 100vw;
  path {
    fill: var(--waveBackground);
  }
`
