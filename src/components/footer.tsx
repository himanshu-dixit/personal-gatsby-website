import { Center } from "./center"
import { css } from "@emotion/react"
import React from "react"

const Footer = () => {
  return (
    <div css={footerContainerCSS}>
      <Center customCSS={footerMainContainerCSS}>
        <div>
          <div>
            <div css={authorNameCSS}>Himanshu Dixit</div>
            <div css={authorThanksCSS}>Thanks for <span>reading.</span></div>
          </div>
          <div css={authorCopyRightCSS}>
            <span>© 2020-21. Himanshu Dixit. All rights reserved.</span>
          </div>
        </div>
        <div css={footerLinksSectionCSS}>
          <div css={tutorialsLinksListCSS}>
            <div css={tutorialsLinksHeadingCSS}>Tutorials</div>
            <div css={tutorialsLinksCSS}>
              <div>Backend</div>
              <div>Frontend</div>
              <div>Career</div>
              <div>Frontend</div>
              <div>Devops</div>
              <div>Product</div>
            </div>
          </div>
          <div css={quickLinksListCSS}>
            <div css={quickLinksHeadingCSS}>Quick Links</div>
            <div css={quickLinksCSS}>
              <div>RSS</div>
              <div>Twitter</div>
              <div>Email</div>
            </div>
          </div>
        </div>
      </Center>
    </div>
  )
};

const authorNameCSS = css`
  font-weight: 900;
  font-size: 20rem;
  color: var(--heroPrimaryTextColor);
`;
const authorThanksCSS = css`
  margin-top: 2rem;
  span {
    color: var(--playerIcon1)
  }
`;
const authorCopyRightCSS = css`
  margin-top: 52rem;
  color: #6E7377;
  font-size: 15rem;
  color: var(--footerCopyrightTextColor)
`;
const footerMainContainerCSS = css`
  display: flex;
  font-family: Cera Pro;
  font-style: normal;
  > div {
    flex: 0.5;
  }
`;
const footerLinksSectionCSS = css`
  display: flex;
`;
const tutorialsLinksListCSS = css`
`;
const tutorialsLinksHeadingCSS = css`
  font-weight: bold;
`;
const tutorialsLinksCSS = css`
  margin-top: 20rem;
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 12rem 44rem;
`;
const quickLinksListCSS  =css`
  margin-left: 92rem;
`;
const quickLinksHeadingCSS = css`
  font-weight: bold;
`;
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
  color: var(--heroPrimaryTextColor);
`;

export {Footer}