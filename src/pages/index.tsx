import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Herocomponent } from "../components/common/hero"
import { withTheme } from "../hoc/theme"
import { withSound } from "../hoc/sound"
import { Curvy } from "../components/homepage/curvy"
import { Center } from "../components/common/center"
import { Footer } from "../components/common/footer"
import { HappyEmojiSvg } from "../constants/icons"
import { SubscribeForm } from "../components/common/subsribeForm"
import { PastWork } from "../components/common/projectList"
import { SITE_CONFIG } from "../../metaData"
import { getPostData } from "../utils/api"
import { ArticlesList } from "../components/blog/articleList"

const PopularContentSection = (): JSX.Element => {
  const contentOut = SITE_CONFIG.homepage.popular.map((article, index) => {
    return (
      <li key={index} css={popularContentItem}>
        <ArrowSVG />
        <a href={article.link}>{article.title}</a>
      </li>
    )
  })
  return (
    <div css={popularContentContainer}>
      <div css={popularContentHeading}>Popular Content</div>
      <ul css={popularContentList}>{contentOut}</ul>
    </div>
  )
}
const TagsSection = () => {
  const tagsOut = SITE_CONFIG.homepage.tags.map(tag => {
    return (
      <div css={tagItem}>
        <a href={`/tags/${tag.title.toLowerCase()}`}>{tag.title}</a>
      </div>
    )
  })
  return (
    <div css={tagsContainer}>
      <div css={tagsHeading}>Tags</div>
      <div css={tagsList}>{tagsOut}</div>
    </div>
  )
}
const NewsLetterCard = () => {
  return (
    <div css={newsLetterContainer}>
      <div css={newsLetterInfo}>
        <div css={newsLetterInfoText}>
          <div css={newsLetterHeading}>
            Newsletter that dives in know how of product building
          </div>
          <div css={newsLetterFollowInfo}>
            <div>
              I know what it takes to build scalable products which are
              beautiful
            </div>
            <div>
              I share my learnings & tinkering in{" "}
              <span css={newsLetterHighlightedInfo}>
                design, dev and everything @ product
              </span>
            </div>
            <div>You can expect quality article every week.</div>
          </div>
        </div>
        <div css={newsLetterEmoji}>
          <HappyEmojiSvg />
        </div>
      </div>
      {SubscribeForm()}
    </div>
  )
}

const MainContainer = ({ data }) => {
  const [posts, setPosts] = useState([])
  const [postData, setPostData] = useState({})

  useEffect(() => {
    getPostData().then(res => {
      setPostData(res.data)
    })
  }, [])

  useEffect(() => {
    const { allMdx: _posts } = data
    const postsArr = []
    for (let i = 0; i < _posts.nodes.length; i++) {
      const post = _posts.nodes[i]
      const title = post.frontmatter.title
      const meta = post.frontmatter.description
      const desc = post.excerpt
      const slug = post.fields.slug

      postsArr.push({
        title: title,
        meta: meta,
        desc: desc,
        link: slug,
        rating: postData[slug.substr(1, Infinity)]?.upvote || 0,
      })
    }
    setPosts([...postsArr])
  }, [data, postData])

  return (
    <>
      <SEO title={"Himanshu Dixit | Fullstack polyglot and builder"} />
      <div css={mainContainer}>
        <Center>
          <PastWork />
          <div
            css={{
              display: "flex",
              marginTop: "112rem",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <div css={content}>
              {ArticlesList(posts)}
              <NewsLetterCard />
            </div>
            <div css={sidebarContainer}>
              <TagsSection />
              <PopularContentSection />
            </div>
          </div>
        </Center>
      </div>
    </>
  )
}

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMdx.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <>
      <Herocomponent />
      <MainContainer data={data} />
      <Curvy isHeroBackground={true} />
      <Footer />
    </>
  )
}

export default withSound(withTheme(BlogIndex))

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          rating
        }
      }
    }
    tagsGroup: allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
      }
    }
  }
`

const tagsHeading = css`
  color: var(--primaryBlue);
  font-family: Cera Pro;
  font-weight: bold;
  font-size: 18px;
`
const tagsContainer = css`
  a {
    text-decoration: none;
    color: inherit;
  }
`
const tagsList = css`
  margin-top: 24rem;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 14.5rem 10rem;
`

const tagItem = css`
  background: var(--tagsBackground);
  color: var(--mainTextColor);
  border-radius: 4px;
  padding: 4px;
  min-width: 74px;
  font-size: 14px;
  font-weight: 500;
  font-family: Cera Pro;
  text-align: center;
  cursor: pointer;
`

const ArrowSVG = (props: any) => {
  const { color } = props
  return (
    <svg
      height={6}
      viewBox="0 0 11 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.936 2.335L8.492.107a.204.204 0 00-.223-.032.185.185 0 00-.12.185v1.426H.203c-.06 0-.109.019-.147.057A.198.198 0 000 1.889v1.223c0 .059.02.108.057.146a.199.199 0 00.147.057h7.944v1.426c0 .085.04.147.121.185.08.034.155.02.223-.038l2.444-2.254a.208.208 0 000-.299z"
        fill={color ? color : "#FF46B5"}
      />
    </svg>
  )
}

const popularContentList = css`
  margin: 0;
  margin-top: 24rem;
`
const popularContentItem = css`
  display: flex;
  align-items: center;
  color: var(--mainTextColor);
  font-family: Cera Pro;
  font-size: 16px;
  font-weight: 500;
  a {
    text-decoration: none;
    color: inherit;
    margin-left: 14rem;
  }
  &:not(:first-child) {
    margin-top: 18rem;
  }
`
const popularContentHeading = css`
  color: var(--primaryBlue);
  font-family: Cera Pro;
  font-weight: bold;
  font-size: 18px;
`

const popularContentContainer = css`
  margin-top: 64rem;
  ul {
    list-style: none;
    padding: 0;
  }
`

const newsLetterContainer = css`
  margin-top: 96rem;
  margin-bottom: 20rem;
`
const newsLetterInfo = css`
  display: flex;
  @media (max-width: 600px) {
    flex-wrap: wrap-reverse;
  }
`
const newsLetterInfoText = css`
  font-family: Cera Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 16rem;
  line-height: 21px;
  @media (max-width: 600px) {
    min-width: 100%;
    padding-right: 20rem;
  }

  color: var(--newsLetterText);
`
const newsLetterEmoji = css`
  margin-left: 80rem;
  margin-top: -8rem;

  @media (max-width: 600px) {
    margin-left: 0rem;
    margin-top: 20rem;
  }
`
const newsLetterHeading = css`
  font-size: 20rem;
  font-weight: 900;
  color: var(--mainTextColor);
`
const newsLetterFollowInfo = css`
  margin-top: 12rem;
  > div {
    &:not(:first-child) {
      margin-top: 1rem;
    }
  }
`
const newsLetterHighlightedInfo = css`
  color: var(--mainTextColor);
  border-bottom-color: #fa2f90;
  border-bottom-width: 2rem;
  border-bottom-style: solid;
  padding-bottom: 8rem;
`

const mainContainer = css`
  background: var(--primaryBackground);
  margin-top: -36rem;
  padding-bottom: 216rem;
  padding-top: 96rem;
  position: relative;
  color: var(--mainTextColor);
  flex-wrap: wrap;
`
const content = css``

const sidebarContainer = css`
  @media (max-width: 600px) {
    margin-top: 48rem;
  }
`
