import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/react"

import { withSound } from "../hoc/sound"
import { withTheme } from "../hoc/theme"
import BlogFeaturedSection from "../components/blog/featuredSection"
import { Center } from "../components/common/center"
import { Curvy } from "../components/homepage/curvy"
import { Footer } from "../components/common/footer"
import { HappyEmojiSvg } from "../constants/icons"

import { UpvoteIndicatorVertical } from "../components/atoms/upvoteIndicator"
import { doPostAction, getPostData } from "../utils/api"
import { Herocomponent, TagHero } from "../components/common/hero"
import { PastWork } from "../components/common/projectList"
import { ArticlesList } from "../components/blog/articleList"
import SEO from "../components/seo"

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
    for (let i = 0; i < _posts.edges.length; i++) {
      const post = _posts.edges[i].node
      const title = post.frontmatter.title
      const meta = post.frontmatter.description
      const desc = ""
      const slug = post.fields.slug

      postsArr.push({
        title: title,
        meta: meta,
        desc: desc,
        link: slug,
      })
    }
    setPosts([...postsArr])
  }, [data, postData])

  return (
    <div css={mainContainer}>
      <Center>
        <div
          css={{
            display: "flex",
            paddingTop: "72rem",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <div css={content}>{ArticlesList(posts)}</div>
        </div>
      </Center>
    </div>
  )
}

const TagTemplate = pageProps => {
  const {
    data,
    pageContext: { tag },
  } = pageProps
  const slug = "Tags"
  useEffect(() => {
    doPostAction(slug, "views")
  }, [])

  const title = tag.substr(0, 1).toUpperCase() + tag.substr(1, Infinity)

  return (
    <>
      <SEO title={title} />
      <TagHero tagName={tag.toLowerCase()} />
      <MainContainer data={data} />
      <Curvy isHeroBackground={true} />
      <Footer />
    </>
  )
}

const content = css``
const mainContainer = css`
  background: var(--primaryBackground);
  margin-top: -36rem;
  @media (max-width: 600px) {
    margin-top: -46rem;
  }
  padding-bottom: 216rem;
  padding-top: 0rem;
  position: relative;
  color: var(--mainTextColor);
  flex-wrap: wrap;
`

export default withSound(withTheme(TagTemplate))

export const pageQuery = graphql`
  query($tag: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
