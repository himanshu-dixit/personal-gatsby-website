/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

// @ts-ignore
import React, { useEffect, useState } from "react"
import { css } from "@emotion/react"
import { Navbar } from "../common/navbar"

export const BlogFeaturedSection = ({ data }): JSX.Element => {
  const { mdx: post } = data
  const postTitle = post.frontmatter.title
  const postDate = post.frontmatter.date
  const  postType= post.frontmatter.type

  return (
    <>
      <section css={heroSection}>
        <Navbar />

        <div css={heroMainContentCSS}>
          <div css={postTypeCSS}>{postType.toLowerCase()}</div>
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
  text-transform: capitalize;

  color: var(--primaryPink);
`

const heroMainContentCSS = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
`
const postTitleCSS = css`
  font-family: Cera Pro;
  font-style: normal;
  font-weight: 900;
  font-size: 24rem;
  color: var(--mainTextColor);
  margin-top: 14rem;
  max-width: 700px;
`
const postDateCSS = css`
  margin-top: 12rem;
  font-family: Cera Pro;
  font-style: normal;
  font-weight: 500;
  font-size: 14rem;
  color: var(--mainTextColor);
`

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

const heroSection = css`
  width: 100%;
  height: 472rem;
  padding-top: 38rem;
  padding-bottom: 108rem;
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
    height: 398px;
    position: relative;
  }
`

export default BlogFeaturedSection
