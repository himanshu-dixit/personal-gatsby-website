import React, { useEffect, useState } from "react"
import { graphql, Link } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  ServicesHeroComponent,
  WorkHeroComponent,
} from "../components/common/hero"
import { withTheme } from "../hoc/theme"
import { withSound } from "../hoc/sound"
import { css } from "@emotion/react"
import { Curvy } from "../components/homepage/curvy"
import { Center } from "../components/center"
import { Footer } from "../components/common/footer"
import { HappySvg } from "../constants/icons"
import { SubscribeForm } from "../components/common/subsribeForm"
import { UpvoteIndicator } from "../components/atoms/upvoteIndicator"
import { PastWork } from "../components/common/projectList"

const MainContainer = ({}) => {
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
            <strong>MVP</strong>Track your team's workload and velocity.
            <br />
            Scale system/Layout foundation. Cycles run on an automated
            schedule,so you can focus on your work.
            <br />
            Created E2E Product.
          </div>

          <h2 css={headingCss}>Some traits</h2>

          <div css={sectionText}>
            <strong>MVP</strong>Track your team's workload and velocity.
            <br />
            Scale system/Layout foundation. Cycles run on an automated
            schedule,so you can focus on your work.
            <br />
            Created E2E Product.
          </div>

          <h2 css={headingCss}>Why we should work together?</h2>

          <div css={sectionText}>
            <strong>MVP</strong>Track your team's workload and velocity.
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

const headingCss = css`
  font-weight: 900;
`

const sectionText = css`
  font-size: 15rem;
  line-height: 32rem;
  margin: 16rem 0 60rem 0;
`

const interestedInWorking = css`
  font-weight: 800;
  font-size: 20rem;
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
  color: var(--pinkButtonText);
  padding: 6rem 18rem;
  min-width: 206rem;
  text-align: center;
  border-radius: 8rem;
  font-style: normal;
  font-weight: 900;
  font-size: 16rem;
`

const mainContainerCSS = css`
  background: var(--primaryBackground);
  margin-top: -36rem;
  padding-bottom: 136rem;
  padding-top: 28rem;
  position: relative;
  color: var(--heroPrimaryTextColor);
  flex-wrap: wrap;
`

const ServicePage = ( ) => {
  return (
    <>
      <ServicesHeroComponent />
      <MainContainer/>
      <Curvy isHeroBackground={true} />
      <Footer />
    </>
  )
}

export default withSound(withTheme(ServicePage))

export const pageQuery = null
