// @ts-ignore
import React, { useEffect, useState } from "react"
import {Link} from "gatsby"
import { css } from "@emotion/react"
import { Curvy } from "./curvy"
import { AppNavbar } from "../common/appNavbar"
import { BookSVG, EmailSVG, Github, InstaSVG, MusicalSVG, TwitterSVG } from "../../constants/icons"

export const Herocomponent = (): JSX.Element => {
  return (
    <>
      <section css={heroSection}>
        <AppNavbar />

        <div id={"hero-content"}>
          <div>
            <h1 css={heroTagline}>I bring impact by creating products</h1>
            <h1 css={heroTaglineSecondary}>using my full-stack skills</h1>
            <div css={knowLink}>
              <Link to={"about_me"}>Know about me</Link>  <Link to={"about_me"}>Contact</Link>
            </div>
          </div>
          <div css={jammingText}>
            Last jammed to{" "}
            <div>
              <MusicSVG />
              <span>Mera man lage - 3:00</span>
            </div>
          </div>
          <div css={personalStatusContainer}>
            <div id="twitter">
              <a href="https://twitter.com/1x_engineer" target="_blank">
              <TwitterSVG/>     </a></div>
            <div id="book">
              <a href="https://twitter.com/1x_engineer" target="_blank">
              <BookSVG/>     </a></div>
            <div id="github">
              <a href="https://github.com/himanshu-dixit" target="_blank">
              <Github/>     </a></div>
            <div id="insta">

              <a href="https://instagram.com/1xengineer" target="_blank">
              <InstaSVG/>
              </a>
            </div>
            <div id="music">
              <a href="https://twitter.com/1x_engineer" target="_blank">
              <MusicalSVG/>
              </a></div>
            <div id="email">
              <a href="mailto:hello@himanshudixit.me" target="_blank">
              <EmailSVG/>
              </a>
              </div>
            <img src={"/images/standing_person.png"} css={personalIllustration} />
          </div>
        </div>
      </section>

      <Curvy />
    </>
  )
}

function MusicSVG(props) {
  return (
    <svg
      width={25}
      height={25}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.803 9.23c.459 0 .831.372.831.831v4.878a.831.831 0 11-1.663 0v-4.878c0-.46.372-.832.832-.832zM16.38 6.652c.46 0 .832.372.832.831v10.034a.831.831 0 11-1.663 0V7.483c0-.459.372-.831.831-.831zM18.986 4.24c.459 0 .831.373.831.832v14.856a.831.831 0 11-1.663 0V5.072c0-.46.372-.831.832-.831zM21.563 6.652c.46 0 .832.372.832.831v10.034a.831.831 0 11-1.663 0V7.483c0-.459.372-.831.831-.831zM24.169 9.063c.459 0 .831.372.831.832v5.21a.831.831 0 11-1.663 0v-5.21c0-.46.372-.832.832-.832zM6.014 4.24c.46 0 .832.373.832.832v14.856a.831.831 0 11-1.663 0V5.072c0-.46.372-.831.831-.831zM8.62 6.652c.459 0 .831.372.831.831v10.034a.831.831 0 11-1.663 0V7.483c0-.459.373-.831.832-.831zM11.197 7.955c.46 0 .832.372.832.831v7.428a.831.831 0 11-1.663 0V8.786c0-.46.372-.831.831-.831zM3.437 6.652c.46 0 .831.372.831.831v10.034a.831.831 0 11-1.663 0V7.483c0-.459.373-.831.832-.831zM.831 9.063c.46 0 .832.372.832.832v5.21a.831.831 0 11-1.663 0v-5.21c0-.46.372-.832.831-.832z"
        fill="#FF46B5"
      />
    </svg>
  )
}

const heroTagline = css`
  font-family: Cera Pro;
  font-style: normal;
  font-weight: bold;
  font-size: 22rem;
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
  a:last-child{
    margin-left: 16rem;
  }
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
  display: flex;
  align-items: center;
  svg {
    margin: 0 12rem;
    path {
      animation: 10.2s playerAnimation step-end infinite;
      animation-fill-mode: forwards;
    }
    @media (max-width: 600px) {
      margin: 0 12rem 0 0;
    }
  }

  @media (max-width: 600px) {
    display: block;
    > div {
      margin-top: 20px;
    }
  }

  > div {
    display: flex;
  }
`

const personalStatusContainer = css`
  position: absolute;
  bottom: 32rem;
  height: 400px;
  right: -96rem;
  z-index: 0;
  div{
    position: absolute;
    z-index: 100;
    cursor: pointer;
    @media (max-width: 600px) {
      display: none;
    }
  }
  div:hover path{
    fill: var(--pinkColor);
  }
  div:hover svg{
    transform: translateY(-4px);
    
  }
  #twitter{
    top: 32%;
  }
  #email{
    top: 32%;
    right: 20%;
  }
  
  #book{
    top: 14%;
    right: 22%;
  }
  
  #music{
    top: -2%;
    right: 38%;
  }

  #insta{
    top: 14%;
    left: 2%;
  }

  #github{
    top: -3%;
    left: 20%;
  }
  

  @media (max-width: 600px) {
    bottom: 50rem;
    right: -100rem;
    height: 271px;
  }
`

const personalIllustration = css`
  pointer-events: none;
  user-select: none;
  height: 372px;
  @media (max-width: 600px) {
    height: 271px;
    right: -90rem;
  }
`

const heroSection = css`
  width: 100%;
  height: 452rem;

  @media (max-width: 600px) {
    height: 572rem;
  }
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
