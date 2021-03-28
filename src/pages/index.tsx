import React, { useContext, useEffect, useState } from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Herocomponent } from "../components/homepage/hero"
import { useTheme } from "../context/Theme"
import { withTheme } from "../hoc/theme"
import { withSound } from "../hoc/sound"
import { css } from "@emotion/react"
import { Curvy } from "../components/homepage/curvy"
import { Center } from "../components/center"
import { Footer } from "../components/common/footer"
import { HappySvg } from "../constants/icons"

const FireSVG = (props: any) => {
  return (
    <svg
      height={16}
      viewBox="0 0 16 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.99.073c1.49 1.056 5.172 4.332 4.313 10.44 0 0 .96-.513 1.813-1.461.197-.22.593-.135.66.14.148.61.328 1.588.357 2.826.09 3.738-3.202 6.946-7.378 6.952-4.05.007-7.356-2.957-7.356-6.597 0-3.153 1.706-4.8 2.362-7.512.054-.224.341-.33.56-.214.499.265 1.287.762 1.802 1.468 0 0 2.096-2.377 2.26-5.787.013-.276.366-.427.608-.255z"
        fill="#35414E"
      />
      <path
        d="M11.746 12.342c-.588.79-1.333.97-1.333.97a9.94 9.94 0 00-1.654-6.448c-.08-.117-.281-.086-.314.048-.521 2.166-1.921 3.369-1.921 3.369-.456-.476-.89-.67-1.115-.746a.174.174 0 00-.216.093c-.575 1.381-1.662 2.447-1.91 4.035-.363 2.336 1.532 4.55 4.16 4.713 2.652.165 4.86-1.712 4.86-4.05 0-.94-.14-1.586-.247-1.942-.039-.129-.227-.153-.31-.042z"
        fill="#18222D"
      />
      <path
        d="M7.876 11.982c-.054-.123-.229-.157-.328-.06-.594.585-2.192 2.295-2.192 3.801 0 1.192 1.08 2.158 2.411 2.158 1.332 0 2.412-.966 2.412-2.158 0-1.133-1.557-2.063-2.303-3.741z"
        fill="#090C0F"
      />
      <path
        d="M7.69 18.967c-.785-.053-7.544-1.18-5.213-8.793a26.02 26.02 0 001.022-5.428 7.692 7.692 0 00-.178-.099c-.22-.117-.507-.01-.56.214C2.103 7.573.397 9.22.397 12.373c0 3.62 3.259 6.557 7.293 6.594z"
        fill="#182431"
      />
    </svg>
  )
}

const ARTICLES = [
  {
    title: "Full-stack and creating user-friendly products",
    meta: "Writing to create value",
    desc:
      "An in-depth tutorial that teaches how to create one of the most adorable interactions I've ever created.",
    link: "http://google.com",
    rating: 320,
  },
]

for (let i = 0; i < 4; i++) {
  ARTICLES.push({ ...ARTICLES[0] })
}

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
            <div css={articleRatingCSS}>
              <FireSVG height={24} />
              <span>{rating}</span>
            </div>
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
const articleRatingCSS = css`
  margin-left: auto;
  span {
    margin-left: 8rem;
  }
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
      <div css={newsLetterInputContainerCSS}>
        <div css={newsLetterInputParentCSS}>
          <input css={newsLetterInputCSS} placeholder={"Your Email"} />
        </div>
        <div css={newsLetterJoinButtonCSS}>Join</div>
      </div>
      <div css={newsLetterFooterCSS}>
        And join whatsapp group to communicate
      </div>
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
const newsLetterInputContainerCSS = css`
  display: flex;
  margin-top: 52rem;
  align-items: center;
  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
`
const newsLetterInputParentCSS = css`
   ;
`
const newsLetterJoinButtonCSS = css`
  font-family: "Cera Pro";
  margin-left: 20rem;
  background: var(--newsLetterJoinBackground);
  border: 2rem solid var(--newsLetterJoinBorder);
  padding: 8rem 20rem;
  min-width: 236rem;
  text-align: center;
  border-radius: 8rem;
  font-style: normal;
  font-weight: 900;
  font-size: 18rem;

  @media (max-width: 600px) {
    margin-left: 0rem;
    margin-top: 20rem;
  }
`
const newsLetterFooterCSS = css`
  font-family: Cera Pro;
  font-style: normal;
  font-weight: normal;
  margin-top: 18rem;
  font-size: 16rem;
  color: var(--newsLetterInputText);
`
const newsLetterInputCSS = css`
  background: var(--newsLetterInputBackground);
  border: 2px solid var(--newsLetterInputBorder);
  border-radius: 8rem;
  padding: 8rem 20rem;
  min-width: 340rem;
  font-family: Cera Pro;
  font-style: normal;
  font-size: 15rem;
  font-weight: 500;
  color: var(--newsLetterInputText);
  &:focus {
    outline: none;
  }
`

const PAST_PROJECTS = [
  {
    name: "Cofounder",
    desc: "Crusher",
    isNew: true,
  },
  ,
  {
    name: "Consultant",
    desc: "Signoz | YC S21",
    isNew: true,
  },
  {
    name: "Full stack engineer",
    desc: "Headout",
    isNew: true,
  },
  {
    name: "FS Engineer",
    desc: "Rizort",
    isNew: true,
  },
  {
    name: "Writing to create value",
    desc: "Frontend | Headout",
    isNew: true,
  },
  {
    name: "Cofounder",
    desc: "Crusher",
    isNew: true,
  },
]

const ProjectItem = (props: any) => {
  const { item } = props
  const { name, desc, isNew } = item

  return (
    <div css={projectsItemContainerCSS}>
      <div css={projectsItemHeaderCSS}>
        <div css={projectItemTitleCSS}>{name}</div>
        <div css={projectItemNewLabelCSS}>{isNew ? "| New" : ""}</div>
      </div>
      <div css={projectItemDescCSS}>{desc}</div>
    </div>
  )
}

const projectItemDescCSS = css`
  margin-top: 3rem;
  color: var(--descText);
`
const projectItemTitleCSS = css`
  font-weight: bold;
`
const projectItemNewLabelCSS = css`
  margin-left: auto;
  color: var(--newLabelTextColor);
`
const projectsItemContainerCSS = css`
  background: var(--tagsBackground);
  padding: 12rem 14rem;
  border-radius: 8rem;
  min-width: 270rem;
  color: var(--heroPrimaryTextColor);
  font-family: Cera Pro;
  font-style: normal;
  font-weight: 500;
  font-size: 15rem;
`
const projectsItemHeaderCSS = css`
  display: flex;
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

  const projectsOut = PAST_PROJECTS.map(item => {
    return <ProjectItem item={item} />
  })

  return (
    <div css={mainContainerCSS}>
      <Center>
        <div>
          <div css={pastWorkHeadingCSS}>
            Past work <a href={"#"}>View my projects</a>
          </div>
          <div css={projectsItemListCSS}>{projectsOut}</div>
        </div>
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

const pastWorkHeadingCSS = css`
  color: var(--makeText);
  font-family: Cera Pro;
  font-style: normal;
  font-weight: bold;
  font-size: 18rem;
  display: flex;
  align-items: center;
  a {
    margin-left: 14rem;
    color: #bfbfbf;
    text-decoration-line: underline;
    font-weight: 500;
    font-size: 14rem;
  }
`

const projectsItemListCSS = css`
  display: flex;
  margin-top: 20rem;
  > div {
    &:not(:first-child) {
      margin-left: 42rem;
    }
  }
`
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
