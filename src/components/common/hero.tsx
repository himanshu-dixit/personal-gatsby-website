// @ts-ignore
import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { css } from "@emotion/react"
import { Curvy } from "../homepage/curvy"
import { Navbar } from "./Navbar"
import {
  BookSVG,
  EmailSVG,
  Github,
  InstaSVG,
  MusicalSVG,
  MusicSVG,
  TwitterSVG,
} from "../../constants/icons"

export const Herocomponent = (): JSX.Element => {
  return (
    <>
      <section css={heroSection}>
        <Navbar />

        <div id={"hero-content"}>
          <div>
            <h1 css={heroTagline}>Engineer, Entrepreneur, Designer</h1>
            <h1 css={heroTaglineSecondary}>building next-gen products</h1>
            <div css={knowLink}>
              <Link to={"about_me"}>About me</Link>
              <a href={"mailto:hello@himanshudixit.me"}>Contact</a>
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
                <TwitterSVG />{" "}
              </a>
            </div>
            <div id="book">
              <a href="https://twitter.com/1x_engineer" target="_blank">
                <BookSVG />{" "}
              </a>
            </div>
            <div id="github">
              <a href="https://github.com/himanshu-dixit" target="_blank">
                <Github />{" "}
              </a>
            </div>
            <div id="insta">
              <a href="https://instagram.com/1xengineer" target="_blank">
                <InstaSVG />
              </a>
            </div>
            <div id="music">
              <a href="https://twitter.com/1x_engineer" target="_blank">
                <MusicalSVG />
              </a>
            </div>
            <div id="email">
              <a href="mailto:hello@himanshudixit.me" target="_blank">
                <EmailSVG />
              </a>
            </div>
            <img
              src={"/images/standing_person.png"}
              css={personalIllustration}
            />
          </div>
        </div>
      </section>

      <Curvy />
    </>
  )
}

export const WorkHeroComponent = (): JSX.Element => {
  return (
    <>
      <section css={[heroSection, workHeroSection]}>
        <Navbar />

        <div id={"hero-content"}>
          <div>
            <h1 css={[worHeroTagline]}>My Work</h1>
            <div css={knowLink}>
              <Link to={"/services"}>Services</Link>
              <Link to={"/"}>Blog</Link>
            </div>
          </div>
        </div>
      </section>

      <Curvy />
    </>
  )
}

export const ServicesHeroComponent = (): JSX.Element => {
  return (
    <>
      <section css={[heroSection, serviceHeroSection]}>
        <Navbar />

        <div id={"hero-content"}>
          <div>
            <h1 css={[worHeroTagline]}>About Me</h1>
            <div css={serviceDesc}>
              I’m Himanshu.I’m full stack engineer, 2 times founder.
              <br />
              <br />  I build scalable and user centric product by creating well
              layed out architecture.  I have worked with High growth companies
              and YC stratups. These were across consumer and SAAS space.
              <br />
              <br />
              The BE systems/FE I have built have handled 10+ billions of
              request.
            </div>
          </div>
        </div>
      </section>

      <Curvy />
    </>
  )
}

export const AboutMeHero = (): JSX.Element => {
  return (
    <>
      <section css={[heroSection, serviceHeroSection]}>
        <Navbar />

        <div id={"hero-content"}>
          <div>
            <h1 css={[worHeroTagline]}>About Me</h1>
            <div css={serviceDesc}>
              I’m creator at heart. Love to build stuff and break them.<br/>
              The power of creation, or improving drives me to work. I love doing it every single day<br/>
              Most of the time I dwelve into multiple tasks, Product, Design, Trading but deep specialization inv FE.
            </div>
          </div>
        </div>
      </section>

      <Curvy />
    </>
  )
}


const worHeroTagline = css`
  font-family: Cera Pro;
  font-style: normal;
  font-weight: 900;
  font-size: 22px;
  line-height: 28px;
  margin-left: -3rem;
  margin-top: 80rem;
`

const workHeroSection = css`
  width: 100%;
  height: 382rem;

  @media (max-width: 600px) {
    height: 572rem;
  }
  padding-top: 38rem;
  position: relative;
  background: var(--heroBackground);
  color: var(--mainTextColor);
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

const serviceHeroSection = css`
  width: 100%;
  height: 502rem;

  @media (max-width: 600px) {
    height: 572rem;
  }
  padding-top: 38rem;
  position: relative;
  background: var(--heroBackground);
  color: var(--mainTextColor);
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

const heroTagline = css`
  font-family: Cera Pro;
  font-style: normal;
  font-weight: bold;
  font-size: 22rem;
  line-height: 28rem;
  margin: 0;
  margin-left: -3rem;
  margin-top: 84rem;
`
const heroTaglineSecondary = css`
  font-family: Cera Pro;
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 28px;
  margin-left: -3rem;
  margin-top: 8rem;
`

const knowLink = css`
  font-family: Cera Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  /* identical to box height */
  margin-top: 0rem;
  margin-bottom: 56rem;
  text-decoration-line: underline;
  a:last-child {
    margin-left: 16rem;
  }
  a {
    color: var(--primaryBlue);
  }
`

const serviceDesc = css`
  font-family: Cera Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 15.5px;
  line-height: 23px;
  /* identical to box height */
  margin-top: 19rem;
  margin-bottom: 56rem;
  a:last-child {
    margin-left: 16rem;
  }
  a {
    color: var(--primaryBlue);
  }
`

const jammingText = css`
  font-family: Cera Pro;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
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
  div {
    position: absolute;
    z-index: 100;
    cursor: pointer;
    @media (max-width: 600px) {
      display: none;
    }
  }
  div:hover path {
    fill: var(--primaryPink);
  }
  div:hover svg {
    transform: translateY(-2px);
  }
  #twitter {
    top: 32%;
  }
  #email {
    top: 32%;
    right: 20%;
  }

  #book {
    top: 14%;
    right: 22%;
  }

  #music {
    top: -2%;
    right: 38%;
  }

  #insta {
    top: 14%;
    left: 2%;
  }

  #github {
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
  height: 482rem;

  @media (max-width: 600px) {
    height: 572rem;
  }
  padding-top: 38rem;
  position: relative;
  background: var(--heroBackground);
  color: var(--mainTextColor);
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
