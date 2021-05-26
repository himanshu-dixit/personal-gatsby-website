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

const NewsLetterCard = () => {
  const [email, setEmail] = useState("")
  const [joinNewsletter, setJoinNewsLetter] = useState(false)
  const [emailSent, setEmailSent] = useState(false)
  const onSubmit = () => {
    setEmailSent(true)
  }
  return (
    <div css={newsLetterCardContainerCSS}>
      <div css={newsLetterHeaderCSS}>
        <HappyEmojiSvg width={68} />
        <div>
          <span css={newsLetterHeaderLikedThisArticleCSS}>
            Liked the article?
          </span>
          <span css={newsLetterHeaderFollowTextCSS}>
            {/*Consider following me on*/}
          </span>
        </div>
      </div>
      <span css={newsLetterFollowMobile}>Consider following me on</span>
      <div css={newsLetterContentContainerCSS}>
        <div css={newsLetterContentCSS}>
          <div>Get interesting bits, I share them regulary</div>
          <div>
            Join community of 40+ product builder
            <br />
            sharing insights and session regularly
          </div>
        </div>
        <div css={newsLetterActionsCSS}>
          <a href={"https://twitter.com/1x_engineer"} target="__blank">
            <div css={buttonCSS}>Follow</div>
          </a>
          {!joinNewsletter && (
            <div
              css={[buttonCSS, joinButtonCSS]}
              onClick={setJoinNewsLetter.bind(this, true)}
            >
              Join
            </div>
          )}
        </div>
      </div>

      {joinNewsletter && (
        <div>
          {!emailSent && (
            <div css={newsLetterInputParentCSS}>
              <input
                css={newsLetterInputCSS}
                placeholder={"Your Email"}
                value={email}
                onChange={e => {
                  setEmail(e.target.value)
                }}
              />
              <div css={newsLetterJoinButtonCSS} onClick={onSubmit}>
                Join
              </div>
            </div>
          )}
          {emailSent && (
            <div css={emailSentCSS}>
              Email sent to your inbox. Please confirm it.
            </div>
          )}
        </div>
      )}
    </div>
  )
}

const emailSentCSS = css`
  margin-left: 72px;
  display: flex;
  margin-top: 24px;
`

const newsLetterInputParentCSS = css`
  margin-left: 72px;
  display: flex;
  @media (max-width: 600px) {
    display: block;
    margin-left: 0;
  } ;
`
const newsLetterJoinButtonCSS = css`
  font-family: "Cera Pro";
  margin-left: 12rem;
  background: var(--newsLetterJoinBackground);
  border: 2rem solid var(--newsLetterJoinBorder);
  padding: 6rem 20rem;
  min-width: 206rem;
  text-align: center;
  border-radius: 8rem;
  font-style: normal;
  font-weight: 900;
  font-size: 18rem;
  color: #fff;

  @media (max-width: 600px) {
    margin-left: 0rem;
    margin-top: 20rem;
  }
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
  color: var(--contrastColor);
  &:focus {
    outline: none;
  }
`
const joinButtonCSS = css`
  border: 1px solid var(--blogJoinBorder);
  background: var(--primaryPink);
`

const buttonCSS = css`
  border-radius: 8rem;
  cursor: pointer;
  border: 1px solid var(--blogFollowBorder);
  background: var(--primaryBlue);
  color: var(--contrastColor);
  min-width: 136rem;
  padding: 3rem;
  text-align: center;
  font-weight: bold;
  font-size: 15rem;
`

const newsLetterContentContainerCSS = css`
  display: flex;
  margin-top: 16rem;

  @media (min-width: 600px) {
    margin-top: 8rem;
    margin-bottom: 26rem;
  }
  @media (max-width: 600px) {
    min-width: 100%;
    flex-wrap: wrap;
  }
`
const newsLetterContentCSS = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 20rem;
  font-size: 15rem;
  @media (max-width: 600px) {
    min-width: 100%;
  }
  @media (min-width: 600px) {
    margin-left: 80rem;
  }

  color: var(--mainTextColor);
`
const newsLetterActionsCSS = css`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  @media (min-width: 600px) {
    margin-top: 0rem;
    flex-direction: column;
    align-items: flex-end;
    div {
      margin-right: 16rem;
      min-width: 200px;
      :first-child {
        margin-bottom: 20px;
      }
    }
  }
  @media (max-width: 600px) {
    min-width: 100%;
    display: block;
    margin-top: 32rem;
    div {
      min-width: 100%;
      padding: 10rem;
      margin-bottom: 16rem;
    }
  }

  a {
    text-decoration: none;
  }
`
const newsLetterHeaderFollowTextCSS = css`
  color: var(--newsLetterText);
  margin-left: 20rem;
  @media (max-width: 600px) {
    display: none;
  }
`

const newsLetterFollowMobile = css`
  color: var(--newsLetterText);
  @media (min-width: 600px) {
    display: none;
  }
`

const newsLetterHeaderCSS = css`
  display: flex;
  align-items: center;
  font-weight: bold;
  @media (max-width: 600px) {
    flex-direction: row-reverse;
  }
  > div {
    flex-grow: 1;
    align-items: center;
    margin-left: 2rem;
    @media (min-width: 600px) {
      margin-left: 12rem;
    }
    display: flex;
  }
`

const newsLetterHeaderLikedThisArticleCSS = css`
  font-size: 22rem;
  color: var(--mainTextColor);

  @media (max-width: 600px) {
    font-size: 20rem !important;
  }
`

const newsLetterCardContainerCSS = css`
  border: 2rem solid var(--mainTextColor01);
  border-radius: 12rem;
  padding: 12rem 20rem 22rem 20rem;
  //max-width: 650rem;
  font-family: Cera Pro;
  margin-top: 64rem;
  font-style: normal;
`

const MainContainer = ({ data }) => {
  const [posts, setPosts] = useState([])
  const [postData, setPostData] = useState({})

  useEffect(() => {
    getPostData().then(res => {
      setPostData(res.data)
    })
  }, [])

  useEffect(() => {
    const { allMarkdownRemark: _posts } = data
    const postsArr = []
    for (let i = 0; i < _posts.edges.length; i++) {
      const post = _posts.edges[i].node
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

  return (
    <>
      <SEO title={`${tag} | Himanshu Dixit`} />
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
    allMarkdownRemark(
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
            rating
          }
        }
      }
    }
  }
`
