import React, { useEffect, useState } from "react"
import { graphql, Link } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Herocomponent } from "../components/common/hero"
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

const ArticleItem = (props: any) => {
  const { item } = props
  const { title, meta, desc, link, rating } = item

  return (
    <div css={articleItemContainerCSS}>
      <Link to={link}>
        <div css={articleItemTitleCSS()} id={"article-title"}>
          {title}
        </div>
        <div css={articleInfoContainerCSS}>
          <div css={articleInfoMetaContainerCSS}>
            <div>{meta}</div>
            <UpvoteIndicator upvotes={rating} />
          </div>
          <div css={articleDescCSS}>{desc}</div>
          <div css={articleItemReadMoreCSS}>
            <a href={link} id={"article-read-more"}>
              Read More{" "}
              <ArrowSVG
                color={"var(--heroPrimaryTextColor)"}
                id={"article-arrow"}
              />
            </a>
          </div>
        </div>
      </Link>
    </div>
  )
}

const articleItemReadMoreCSS = css`
  margin-top: 4rem;
  a {
    color: inherit;
  }
  #article-arrow {
    display: none;
  }
`
const articleInfoContainerCSS = css`
  margin-top: 10rem;
`
const articleInfoMetaContainerCSS = css`
  display: flex;
  color: var(--descText);
  font-family: Cera Pro;
  font-style: normal;
  font-weight: 500;
  font-size: 16rem;
`

const articleDescCSS = css`
  margin-top: 12rem;
  font-family: Gilroy;
  font-size: 16px;
`
const articleItemContainerCSS = css`
  :hover #article-title,
  :hover #article-read-more {
    color: var(--playerIcon1);
  }
  :hover #article-title {
    color: var(--playerIcon1);
  }
  :hover #article-arrow {
    display: initial;
  }

  &:not(:first-child) {
    margin-top: 54rem;
  }
`
const articleItemTitleCSS = () => css`
  color: var(--heroPrimaryTextColor);
  font-family: Cera Pro;
  font-style: normal;
  font-weight: 900;
  font-size: 18rem;
`

const TAGS = [
  { title: "Next", link: "#" },
  { title: "Devops", link: "#" },
  { title: "Frontend", link: "#" },
  { title: "Next", link: "#" },
  { title: "Devops", link: "#" },
  { title: "Frontend", link: "#" },
]

const TagsSection = () => {
  const tagsOut = TAGS.map(tag => {
    return (
      <div css={tagItemCSS}>
        <a href={tag.link}>{tag.title}</a>
      </div>
    )
  })
  return (
    <div css={tagsContainerCSS}>
      <div css={tagsHeadingCSS}>Tags</div>
      <div css={tagsListCSS}>{tagsOut}</div>
    </div>
  )
}

const tagsHeadingCSS = css`
  color: var(--linkText);
  font-family: Cera Pro;
  font-weight: bold;
  font-size: 18px;
`
const tagsContainerCSS = css`
  a {
    text-decoration: none;
    color: inherit;
  }
`
const tagsListCSS = css`
  margin-top: 24rem;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 14.5rem 10rem;
`

const tagItemCSS = css`
  background: var(--tagsBackground);
  color: var(--heroPrimaryTextColor);
  border-radius: 4px;
  padding: 4px;
  min-width: 74px;
  font-size: 14px;
  font-weight: 500;
  font-family: Cera Pro;
  text-align: center;
  cursor: pointer;
`

const POPULAR_ARTICLES = [
  { title: "Writing to create value", link: "#" },
  { title: "Writing to create value", link: "#" },
  { title: "Writing to create value", link: "#" },
  { title: "Writing to create value", link: "#" },
  { title: "Writing to create value", link: "#" },
]

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
const PopularContentSection = () => {
  const contentOut = POPULAR_ARTICLES.map((article, index) => {
    return (
      <li key={index} css={popularContentItemCSS}>
        <ArrowSVG />
        <a href={article.link}>{article.title}</a>
      </li>
    )
  })
  return (
    <div css={popularContentContainerCSS}>
      <div css={popularContentHeadingCSS}>Popular Content</div>
      <ul css={popularContentListCSS}>{contentOut}</ul>
    </div>
  )
}
const popularContentListCSS = css`
  margin: 0;
  margin-top: 24rem;
`
const popularContentItemCSS = css`
  display: flex;
  align-items: center;
  color: var(--heroPrimaryTextColor);
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
const popularContentHeadingCSS = css`
  color: var(--linkText);
  font-family: Cera Pro;
  font-weight: bold;
  font-size: 18px;
`

const popularContentContainerCSS = css`
  margin-top: 48rem;
  ul {
    list-style: none;
    padding: 0;
  }
`

const NewsLetterCard = () => {
  return (
    <div css={newsLetterContainerCSS}>
      <div css={newsLetterInfoCSS}>
        <div css={newsLetterInfoTextCSS}>
          <div css={newsLetterHeadingCSS}>
            Follow my journey of building tech products
          </div>
          <div css={newsLetterFollowInfoCSS}>
            <div>30+ community of engineers, developers, product makers</div>
            <div>Content for nerds on engineering and product</div>
            <div>
              In-depth resources from{" "}
              <span css={newsLetterHighlightedInfoCSS}>
                idea, tech and building product
              </span>
            </div>
          </div>
        </div>
        <div css={newsLetterEmojiCSS}>
          <HappySvg />
        </div>
      </div>
      {SubscribeForm()}
    </div>
  )
}

const newsLetterContainerCSS = css`
  margin-top: 56rem;
  margin-bottom: 20rem;
`
const newsLetterInfoCSS = css`
  display: flex;
  @media (max-width: 600px) {
    flex-wrap: wrap-reverse;
  }
`
const newsLetterInfoTextCSS = css`
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
const newsLetterEmojiCSS = css`
  margin-left: 80rem;
  margin-top: -8rem;

  @media (max-width: 600px) {
    margin-left: 0rem;
    margin-top: 20rem;
  }
`
const newsLetterHeadingCSS = css`
  font-size: 20rem;
  font-weight: 900;
  color: var(--heroPrimaryTextColor);
`
const newsLetterFollowInfoCSS = css`
  margin-top: 12rem;
  > div {
    &:not(:first-child) {
      margin-top: 1rem;
    }
  }
`
const newsLetterHighlightedInfoCSS = css`
  color: var(--heroPrimaryTextColor);
  border-bottom-color: #fa2f90;
  border-bottom-width: 2rem;
  border-bottom-style: solid;
  padding-bottom: 8rem;
`
const newsLetterFooterCSS = css`
  font-family: Cera Pro;
  font-style: normal;
  font-weight: normal;
  margin-top: 18rem;
  font-size: 16rem;
  color: var(--newsLetterInputText);
`

const MainContainer = ({ data }) => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const { allMarkdownRemark: _posts } = data
    console.log()
    const postsArr = []
    for (let i = 0; i < _posts.nodes.length; i++) {
      const post = _posts.nodes[i]
      const title = post.frontmatter.title
      const meta = post.frontmatter.description
      const desc = post.excerpt
      const rating = post.frontmatter.rating
      const slug = post.fields.slug

      postsArr.push({
        title: title,
        meta: meta,
        desc: desc,
        link: slug,
        rating: rating,
      })
    }
    setPosts([...postsArr])
  }, [data])

  const articlesOut = posts.map(item => {
    return <ArticleItem item={item} />
  })

  return (
    <div css={mainContainerCSS}>
      <Center>
        <PastWork />
        <div
          css={{
            display: "flex",
            marginTop: "72rem",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <div css={contentCSS}>
            <div css={articlesContainerCSS}>
              <div css={articlesContentHeadingCSS}>Recently published</div>
              <div css={articlesListCSS}>{articlesOut}</div>
            </div>
            <NewsLetterCard />
          </div>
          <div css={sidebarContainerCSS}>
            <TagsSection />
            <PopularContentSection />
          </div>
        </div>
      </Center>
    </div>
  )
}

const articlesListCSS = css`
  margin-top: 44rem;
  a {
    text-decoration: none;
    color: inherit;
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
const contentCSS = css``
const articlesContainerCSS = css`
  max-width: 712rem;
`
const articlesContentHeadingCSS = css`
  font-family: Cera Pro;
  color: var(--playerIcon1);
  font-size: 19rem;
  font-weight: bold;
`
const sidebarContainerCSS = css`
  @media (max-width: 600px) {
    margin-top: 48rem;
  }
`

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />
        <Bio />
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
  }
`
