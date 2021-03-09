/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

// @ts-ignore
import React, { useEffect, useState } from "react"
import { css } from "@emotion/react"
import { LogoComponent } from "../atoms/logo"
import { Speaker } from "../atoms/navbar/speaker"
import { ThemeToggle } from "../atoms/navbar/themetoggle"
import { BookMark } from "../atoms/navbar/bookmark"
import { Curvy } from "../homepage/curvy"

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

export const BlogFeaturedSection = ({data}): JSX.Element => {
  const {markdownRemark: post} = data;
  const postTitle = post.frontmatter.title;
  const postDate = post.frontmatter.date;
  const postType = post.frontmatter.type;

  return (
    <>
      <section css={heroSection}>
        <Navbar />

        <div css={heroMainContentCSS}>
          <div css={postTypeCSS}>{postType}</div>
          <div css={postTitleCSS}>{postTitle}</div>
          <div css={postDateCSS}>{postDate}</div>
        </div>
      </section>

    </>
  )
}

const postTypeCSS = css`
  font-family: Cera Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 16rem;

  color: var(--playerIcon1);
`;

const heroMainContentCSS = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
`;
const postTitleCSS = css`
  font-family: Cera Pro;
  font-style: normal;
  font-weight: 900;
  font-size: 24rem;
  color: var(--heroPrimaryTextColor);
  margin-top: 14rem;
`;
const postDateCSS = css`
  margin-top: 12rem;
  font-family: Cera Pro;
  font-style: normal;
  font-weight: 500;
  font-size: 14rem;
  color: var(--descText);
`;

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
  display: flex; 
  align-items:center;
  svg{
    margin: 0 12rem;
    path{
      animation: 10.2s playerAnimation step-end infinite;
       animation-fill-mode: forwards;
    }
  }
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
  height: 372rem;
  padding-top: 38rem;
  padding-bottom: 38rem;
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

export default BlogFeaturedSection
