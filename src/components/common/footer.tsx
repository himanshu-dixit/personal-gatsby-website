import { Center } from "./center"
import { css } from "@emotion/react"
import React from "react"
import { Link } from "gatsby"
import {SITE_CONFIG} from "../../../metaData"

const Footer = () : JSX.Element=> {
  return (
    <div css={footerContainerCSS}>
      <Center customCSS={footerMainContainerCSS}>
        <div id="footer-logo">
          <div>
            <div css={authorNameCSS}>Himanshu Dixit</div>
            <div css={authorThanksCSS}>
              Thanks for <span>reading.</span>
            </div>
          </div>
          <div css={authorCopyRightCSS}>
            <span> Designed & Built by <a href={"https://himanshud.com"}> Himanshu</a>  & <a href={"https://utkarsh.work"}> Utkarsh</a> </span><br />
            Source code at <a href="https://github.com/himanshu-dixit/personal-gatsby-website"/>Github</a>
          </div>
        </div>
        <div css={footerLinksSectionCSS}>
          <div css={tutorialsLinksListCSS}>
            <div css={tutorialsLinksHeadingCSS}>Categories</div>
            <div css={tutorialsLinksCSS}>
              <Link to={"/tags/devops"} css={normalLink}>
                <div>Devops</div>
              </Link>
              <Link to={"/tags/aws"} css={normalLink}>
                <div>AWS</div>
              </Link>

            </div>
          </div>
          <div css={quickLinksListCSS}>
            <div css={quickLinksHeadingCSS}>Quick Links</div>
            <div css={quickLinksCSS}>
              <a href={SITE_CONFIG.socialMediaURLs.github} target={"_blank"}><div>Github</div></a>
              <a href={SITE_CONFIG.socialMediaURLs.twitter} target={"_blank"}><div>Twitter</div></a>
            </div>
          </div>
        </div>
      </Center>
    </div>
  )
}

const normalLink = css`
  color: var(--mainTextColor);
  text-decoration: none;
`

const authorNameCSS = css`
  font-weight: 900;
  font-size: 20rem;
  color: var(--mainTextColor);
`
const authorThanksCSS = css`
  margin-top: 2rem;
  span {
    color: var(--primaryPink);
  }
`
const authorCopyRightCSS = css`
  margin-top: 52rem;
  color: #6e7377;
  font-size: 13rem;
  font-weight: 400;
  color: var(--mainTextColor01);
`
const footerMainContainerCSS = css`
  display: flex;
  font-family: Cera Pro;
  font-style: normal;
  flex-wrap: wrap-reverse;
  > div {
    flex: 0.5;
  }

  @media (max-width: 600px) {
    > div {
      flex: 1;
    }
    #footer-logo {
      min-width: 100%;
    }
  }
`
const footerLinksSectionCSS = css`
  display: flex;
  justify-content: flex-end;
  @media (max-width: 600px) {
    margin-bottom: 40rem;
    justify-content: space-between;
  }
`
const tutorialsLinksListCSS = css``
const tutorialsLinksHeadingCSS = css`
  font-weight: bold;
`
const tutorialsLinksCSS = css`
  margin-top: 20rem;
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 12rem 44rem;
`
const quickLinksListCSS = css`
  margin-left: 92rem;
  @media (max-width: 600px) {
    margin-left: 42rem;
  }
`
const quickLinksHeadingCSS = css`
  font-weight: bold;
`
const quickLinksCSS = css`
  margin-top: 20rem;
  a{
      color: var(--mainTextColor);
  }
  > div {
    &:not(:first-child) {
      margin-top: 12rem;
    }
  }
`
const footerContainerCSS = css`
  display: flex;
  width: 100%;
  margin-top: -36rem;
  padding-top: 48rem;
  padding-bottom: 104rem;
  position: relative;
  background: var(--heroBackground);
  color: var(--mainTextColor);
`

export { Footer }
