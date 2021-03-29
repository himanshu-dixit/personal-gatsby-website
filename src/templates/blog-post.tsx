import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import { withSound } from "../hoc/sound"
import { withTheme } from "../hoc/theme"
import BlogFeaturedSection from "../components/blog/featuredSection"
import { Center } from "../components/center"
import { css } from "@emotion/react"
import { Curvy } from "../components/homepage/curvy"
import { Footer } from "../components/common/footer"
import { HappySvg } from "../constants/icons"
import { SubscribeForm } from "../components/common/subsribeForm"
import { UpvoteIndicatorVertical } from "../components/atoms/upvoteIndicator"

const FireSVG = (props: any) => {
  return (
    <svg
      width={28}
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

const NewsLetterCard = () => {
  const [email, setEmail] = useState("")
  const [joinNewsletter, setJoinNewsLetter] = useState(false);
  const [emailSent, setEmailSent] = useState(false)
  const onSubmit = () => {
    setEmailSent(true)
  }
  return (
    <div css={newsLetterCardContainerCSS}>
      <div css={newsLetterHeaderCSS}>
        <HappySvg width={68} />
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
          <Link to={"https://twitter.com/1x_engineer"}><div css={buttonCSS}>Follow</div></Link>
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
          {!emailSent && <div css={newsLetterInputParentCSS}>
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
          </div>}
          {
            emailSent && (<div css={emailSentCSS}>
              Email sent to your inbox. Please confirm it.
            </div>)
          }
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
  margin-left: 20rem;
  background: var(--newsLetterJoinBackground);
  border: 2rem solid var(--newsLetterJoinBorder);
  padding: 6rem 20rem;
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
const joinButtonCSS = css`
  background: var(--playerIcon1);
`

const buttonCSS = css`
  border: 1rem solid #134e59;
  border-radius: 8rem;
  cursor: pointer;
  background: var(--makeText);
  color: var(--heroPrimaryTextColor);
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

  color: var(--heroPrimaryTextColor);
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
  color: var(--heroPrimaryTextColor);

  @media (max-width: 600px) {
    font-size: 20rem !important;
  }
`

const newsLetterCardContainerCSS = css`
  border: 2rem solid var(--articleNewsLetterBorderColor);
  border-radius: 12rem;
  padding: 12rem 20rem 22rem 20rem;
  //max-width: 650rem;
  font-family: Cera Pro;
  margin-top: 64rem;
  font-style: normal;
`

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <>
      <BlogFeaturedSection data={data} />
      {/*<MainContainer data={data}/>*/}
      <div css={mainContentCSS}>
        <Center customCSS={{ display: "flex", justifyContent: "center" }}>
          <div css={mainContentArticleCSS}>
            <article
              className="blog-post"
              itemScope
              itemType="http://schema.org/Article"
            >
              <section
                dangerouslySetInnerHTML={{ __html: post.html }}
                itemProp="articleBody"
              />
            </article>
            <div css={upvoteMobile}>
              <UpvoteIndicatorVertical upvotes={post.frontmatter.rating} />
            </div>
            <NewsLetterCard />
          </div>
         <div css={upvoteDesktop}>
           <UpvoteIndicatorVertical upvotes={post.frontmatter.rating} />
         </div>
        </Center>
      </div>

      <Curvy isHeroBackground={true} />
      <Footer />
    </>
  )
}

const upvoteDesktop = css`
  margin: 0rem 72rem;
  position: absolute;
  right: -40px;
  @media (max-width: 600px) {
    display: none;
  }
`
const upvoteMobile = css`
  position: relative;
  display: flex;
  justify-content: center;
  margin: 32rem 0;
  @media (min-width: 600px) {
    font-size: 14rem;
    display: none;
  }
`
const mainContentArticleCSS = css`
  flex: 1;
  font-family: Cera Pro;
  font-style: normal;
  max-width: 720rem;
  font-size: 16px;
  line-height: 32px;
  color: var(--desc1Text);
`
const mainContentCSS = css`
  background: var(--primaryBackground);
  color: var(--heroPrimaryTextColor);
  padding-top: 64rem;
  padding-bottom: 108rem;
`
export default withSound(withTheme(BlogPostTemplate))

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        type
        rating
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
