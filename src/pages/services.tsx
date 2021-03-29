import React, { useEffect, useState } from "react"
import { graphql, Link } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Herocomponent, ServicesHeroComponent, WorkHeroComponent } from "../components/homepage/hero"
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


  return (
    <div css={mainContainerCSS}>
      <Center>
        {/*<PastWork />*/}
        <div
          css={{
            marginTop: "72rem",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >

          <h2>
            What do I do?
          </h2>

          <h2>
            Some traits
          </h2>


          <h2>
            Why we should work together?
          </h2>
        </div>
      </Center>
    </div>
  )
}

const mainContainerCSS = css`
  background: var(--primaryBackground);
  margin-top: -36rem;
  padding-bottom: 136rem;
  padding-top: 28rem;
  position: relative;
  color: var(--heroPrimaryTextColor);
  flex-wrap: wrap;
`


const BlogIndex = ({ data, location }) => {

  return (
    <>
      <ServicesHeroComponent />
      <MainContainer data={data} />
      <Curvy isHeroBackground={true} />
      <Footer />
    </>
  )
}

export default withSound(withTheme(BlogIndex))

export const pageQuery = null
