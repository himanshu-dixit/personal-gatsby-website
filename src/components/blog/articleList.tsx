import { css } from "@emotion/react"
import { Link } from "gatsby"
import { UpvoteIndicator } from "../atoms/upvoteIndicator"
import React from "react"

const ArticleItem = (props: {
  item: {
    title: string
    meta: string
    desc: string
    link: string
    rating: string
  }
}) => {
  const { item } = props
  const { title, meta, desc, link, rating } = item

  return (
    <div css={articleItemContainer}>
      <Link to={link}>
        <div css={articleItemTitle()} id={"article-title"}>
          {title}
        </div>
        <div css={articleInfoContainer}>
          <div css={articleInfoMetaContainer}>
            <div>{meta}</div>
            <UpvoteIndicator upvotes={rating} />
          </div>
          <div css={articleDesc}>{desc}</div>
          <div css={articleItemReadMore}>
            <a href={link} id={"article-read-more"}>
              Read More{" "}
              <ArrowSVG color={"var(--mainTextColor)"} id={"article-arrow"} />
            </a>
          </div>
        </div>
      </Link>
    </div>
  )
}
const articleItemTitle = () => css`
  color: var(--mainTextColor);
  font-family: Cera Pro;
  font-style: normal;
  font-weight: 900;
  font-size: 18rem;
`

export function ArticlesList(posts: any[]) {
  return (
    <div css={articlesContainer}>
      <div css={articlesContentHeading}>Recently published</div>
      <div css={articlesList}>
        {posts.map(post => {
          return <ArticleItem item={post} />
        })}
      </div>
    </div>
  )
}

const articlesList = css`
  margin-top: 44rem;
  a {
    text-decoration: none;
    color: inherit;
  }
`

const articleItemReadMore = css`
  margin-top: 4rem;
  a {
    color: inherit;
  }
  #article-arrow {
    display: none;
  }
`
const articleInfoContainer = css`
  margin-top: 10rem;
`
const articleInfoMetaContainer = css`
  display: flex;
  color: var(--mainTextColor);
  font-family: Cera Pro;
  font-style: normal;
  font-weight: 500;
  font-size: 16rem;
`

const articleDesc = css`
  margin-top: 12rem;
  font-family: Gilroy;
  font-size: 16px;
`
const articleItemContainer = css`
  :hover #article-title,
  :hover #article-read-more {
    color: var(--primaryPink);
  }
  :hover #article-title {
    color: var(--primaryPink);
  }
  :hover #article-arrow {
    display: initial;
  }

  &:not(:first-child) {
    margin-top: 64rem;
  }
`
const articlesContainer = css`
  max-width: 712rem;
`
const articlesContentHeading = css`
  font-family: Cera Pro;
  color: var(--primaryBlue);
  font-size: 19rem;
  font-weight: bold;
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
