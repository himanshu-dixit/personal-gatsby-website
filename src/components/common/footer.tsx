import { Center } from "./center"
import { css } from "@emotion/react"
import React from "react"
import { Link } from "gatsby"

const Footer = () => {
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
            <span>© 2020-21. Himanshu Dixit. All rights reserved.</span>
          </div>
        </div>
        <div css={footerLinksSectionCSS}>
          <div css={tutorialsLinksListCSS}>
            <div css={tutorialsLinksHeadingCSS}>Categories</div>
            <div css={tutorialsLinksCSS}>
              <Link to={"/tag/backend"} css={normalLink}>
                <div>Backend</div>
              </Link>
              <Link to={"/tag/frontend"} css={normalLink}>
                <div>Frontend</div>
              </Link>
              <Link to={"/tag/career"} css={normalLink}>
                <div>Career</div>
              </Link>
              <Link to={"/tag/backend"} css={normalLink}>
                <div>Backend</div>
              </Link>
              <Link to={"/tag/frontend"} css={normalLink}>
                <div>Frontend</div>
              </Link>
              <Link to={"/tag/career"} css={normalLink}>
                <div>Career</div>
              </Link>
            </div>
          </div>
          <div css={quickLinksListCSS}>
            <div css={quickLinksHeadingCSS}>Quick Links</div>
            <div css={quickLinksCSS}>
              <div>Github</div>
              <div>Twitter</div>
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
  font-size: 15rem;
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
