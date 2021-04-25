import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/react"

import { AboutMeHero, ServicesHeroComponent } from "../components/common/hero"
import { withTheme } from "../hoc/theme"
import { withSound } from "../hoc/sound"

import { Curvy } from "../components/homepage/curvy"
import { Center } from "../components/common/center"
import { Footer } from "../components/common/footer"

const Content = ({}) => {
  return (
    <div css={mainContainerCSS}>
      <Center>
        <div
          css={{
            marginTop: "72rem",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <h2 css={headingCss}>What do I do?</h2>

          <div css={sectionText}>
            <span id={"highlight"}>Build MVP</span>Track your team's workload
            and velocity.
            <br />
            <span id={"highlight"}>Scale system/Layout foundation.</span> Cycles
            run on an automated schedule,so you can focus on your work.
            <br />
            <span id={"highlight"}>Ship E2E Product.</span>
          </div>

          <h2 css={headingCss}>Some traits</h2>

          <div css={sectionText}>
            <strong id={"highlight-normal"}>Performance/UI Obsessed</strong>
            Track your team's workload and velocity.
            <br />
            <strong id={"highlight-normal"}>Polyglot</strong> Cycles run on an
            automated schedule,so you can focus on your work.
            <br />
            <strong id={"highlight-normal"}>Code quality</strong>Created E2E
            Product.
          </div>

          <h2 css={headingCss}>Why we should work together?</h2>

          <div css={sectionText}>
            <strong id={"highlight-normal"}>You're startup</strong>Track your
            team's workload and velocity.
            <br />
            <strong id={"highlight-normal"}>You're blazing fast</strong>Track
            your team's workload and velocity.
            <br />
            <strong id={"highlight-normal"}>You're building a team</strong>Track
            your team's workload and velocity.
            <br />
            Scale system/Layout foundation. Cycles run on an automated
            schedule,so you can focus on your work.
            <br />
            Created E2E Product.
          </div>

          <Center>
            <div css={interestedInWorking}>Interested in working?</div>
            <div css={buttonContainer}>
              <Link to={"/work"}>
                <div css={[pinkButton, normalButton]}>My Work</div>
              </Link>

              <a href={"mailto:hello@himanshudixit.me"}>
                <div css={pinkButton}>Contact</div>
              </a>
            </div>
          </Center>
        </div>
      </Center>
    </div>
  )
}

const ServicePage = () => {
  return (
    <>
      <AboutMeHero />
      <Content />
      <Curvy isHeroBackground={true} />
      <Footer />
    </>
  )
}

const headingCss = css`
  font-weight: 900;
`

const sectionText = css`
  font-size: 16.5rem;
  line-height: 32rem;
  margin: 16rem 0 60rem 0;
`

const interestedInWorking = css`
  font-weight: 800;
  font-size: 22rem;
  margin: 32rem 0 24rem 0;
`

const buttonContainer = css`
  display: flex;
  margin: 0rem 0 20rem 0;
  a {
    text-decoration: none;
    color: var(--workNormalCOLOR);
  }
`

const normalButton = css`
  background: var(--workNormalBG);
  color: var(--workNormalCOLOR);
  border: 1px solid var(--workNormalBORDER);
`

const pinkButton = css`
  font-family: "Cera Pro";
  margin-right: 20rem;
  background: var(--newsLetterJoinBackground);
  border: 2rem solid var(--newsLetterJoinBorder);
  color: #fff;
  padding: 6rem 20rem;
  min-width: 236rem;
  text-align: center;
  border-radius: 8rem;
  font-style: normal;
  font-weight: 900;
  font-size: 18rem;
`

const mainContainerCSS = css`
  background: var(--primaryBackground);
  margin-top: -36rem;
  padding-bottom: 136rem;
  padding-top: 28rem;
  position: relative;
  color: var(--mainTextColor);
  flex-wrap: wrap;

  #highlight {
    color: var(--primaryPink);
    text-decoration: underline;
    margin-right: 12px;
    font-weight: 600;
  }

  #highlight-normal {
    text-decoration: underline;
    margin-right: 12px;
    font-weight: 600;
  }
`

export default withSound(withTheme(ServicePage))

export const pageQuery = null
