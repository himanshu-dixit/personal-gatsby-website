import React, { useEffect, useState } from "react"
import { graphql, Link } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Herocomponent, WorkHeroComponent } from "../components/common/hero"
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

const work = [
  {
    name: "Crusher",
    date: "2020",
    backgroundImage: "/images/background/pinkred1.png",
    image: "/images/work/1.png",
    desc: `   Velocity and estimates.<br/>
                    Track your team's workload and velocity.

                    Automated. Cycles run on an automated schedule,<br/>
                    so you can focus on your work.`,
    tags: "Frontend,Backend",
    rightAligned: false,
  },
  {
    name: "Crusher",
    date: "2020",
    backgroundImage: "/images/background/pinkred1.png",
    image: "/images/work/1.png",
    desc: `   Velocity and estimates.\n
                    Track your team's workload and velocity.

                    Automated. Cycles run on an automated schedule,<br/>
                    so you can focus on your work.`,
    tags: "Frontend,Backend",
    rightAligned: true,
  },
]

function WorkList() {
  return (
    <div
      css={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      {work.map(item => (
        <div css={[workItem, item.rightAligned && workItemReverse]}>
          <div
            css={[workItemImage, item.rightAligned && workItemImageReverse]}
            style={{ backgroundImage: `url('${item.backgroundImage}')` }}
          >
            <img src={item.image} />
          </div>
          <div css={workItemDesc}>
            <div id={"top-section"}>
              <div id={"name"}>{item.name}</div>
              <div id={"date"}>{item.date}</div>
            </div>

            <div id={"content-section"}>{item.desc}</div>

            <div id={"tags-section"}>
              {item.tags.split(",").map(tag => (
                <div id={"tag"}>{tag}</div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

const MainContainer = ({}) => {
  return (
    <div css={mainContainerCSS}>
      {WorkList()}
      <Center>
        <div css={interestedInWorking}>Interested in working?</div>
        <div css={buttonContainer}>
          <Link to={"/services"}>
            <div css={[pinkButton, normalButton]}>My Services</div>
          </Link>

          <Link to={"mailto:hello@himanshudixit.me"}>
            <div css={pinkButton}>Contact</div>
          </Link>
        </div>
      </Center>
      <Center>
        <div css={pastWorkCss}>
          <PastWork />
        </div>
      </Center>
    </div>
  )
}

const interestedInWorking = css`
  font-weight: 800;
  font-size: 22rem;
  margin: 60rem 0 24rem 0;
`

const buttonContainer = css`
  display: flex;
  margin: 0rem 0 20rem 0;
  a {
    text-decoration: none;
  }
`

const normalButton = css`
  background: var(--workNormalBG);
  color: var(--workNormalCOLOR);
  border: 1px solid var(--workNormalBORDER);
`

const pinkButton = css`
  text-decoration: none;
  font-family: "Cera Pro";
  margin-right: 20rem;
  background: var(--newsLetterJoinBackground);
  border: 2rem solid var(--newsLetterJoinBorder);
  color: var(--pinkButtonText);
  padding: 6rem 20rem;
  min-width: 236rem;
  text-align: center;
  border-radius: 8rem;
  font-style: normal;
  font-weight: 900;
  font-size: 18rem;
`

const pastWorkCss = css`
  margin-top: 48rem;
`

const workItemReverse = css`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  margin-top: 56rem;
  @media (max-width: 600px) {
    display: block;
  }
`

const workItem = css`
  display: flex;
  width: 100%;
  margin-top: 56rem;
  @media (max-width: 600px) {
    display: block;
  }
`
const workItemImageReverse = css`
  border-top-left-radius: 32rem;
  border-bottom-left-radius: 32rem;
  border-top-right-radius: 0rem;
  border-bottom-right-radius: 0rem;
`

const workItemImage = css`
  flex: 1;
  height: 510rem;
  border-top-right-radius: 32rem;
  border-bottom-right-radius: 32rem;
  background-size: cover;
  max-width: 660px;
  display: flex;
  align-items: center;
`

const workItemDesc = css`
  flex: 1;
  margin-left: 56rem;
  margin-right: 56rem;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 600px) {
    margin-left: 24rem;
    margin-right: 24rem;
    margin-bottom: 48rem;
  }

  #top-section {
    display: flex;
    @media (max-width: 600px) {
      margin-top: 30px;
    }
    margin-top: -100px;
    justify-content: space-between;

    #name {
      font-size: 28px;
      line-height: 63px;
      font-weight: 900;
      letter-spacing: -0.02em;
    }
  }

  #tags-section {
    margin-top: 24rem;
    display: flex;
    #tag {
      background: var(--tagBackground);
      color: var(tagColor);
      border: 1px solid var(--tagBackground);
      box-sizing: border-box;
      border-radius: 4px;
      display: flex;
      padding: 3px 12px;
      margin-right: 16px;
    }
  }

  #content-section {
    margin-top: 24rem;
  }
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

const BlogIndex = ({}) => {
  return (
    <>
      <WorkHeroComponent />
      <MainContainer />
      <Curvy isHeroBackground={true} />
      <Footer />
    </>
  )
}

export default withSound(withTheme(BlogIndex))

export const pageQuery = null
