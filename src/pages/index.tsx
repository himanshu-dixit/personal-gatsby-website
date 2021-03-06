import React, { useContext } from "react"
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

const ARTICLES = [{
  title: "Full-stack and creating user-friendly products",
  meta: "Writing to create value",
  desc: "An in-depth tutorial that teaches how to create one of the most adorable interactions I've ever created.",
  link: "http://google.com",
  rating: 320
}];

for(let i = 0; i < 4; i++){
  ARTICLES.push(ARTICLES[0]);
}

const ArticleItem = (props: any) => {
  const {item} = props;
  const {title, meta, desc, link, rating} = item;

  return (
    <div>
      <div>{title}</div>
      <div>
        <div>
          <div>{meta}</div>
          <div>{rating}</div>
        </div>
        <div>
          {desc}
        </div>
        <div>
          <a href={link}>Read More</a>
        </div>
      </div>
    </div>
  )
};

const TAGS = [{title: "Next", link: "#"}, {title: "Devops", link: "#"}, {title: "Frontend", link: "#"}, {title: "Next", link: "#"}, {title: "Devops", link: "#"}, {title: "Frontend", link: "#"}]

const TagsSection = () => {
  const tagsOut = TAGS.map(tag => {
    return (<div css={tagItemCSS}><a href={tag.link}>{tag.title}</a></div>)
  })
  return (
    <div css={tagsContainerCSS}>
      <div>Tags</div>
      <div css={tagsListCSS}>
        {tagsOut}
      </div>
    </div>
  )
}

const tagsContainerCSS = css`
`;
const tagsListCSS = css`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 5rem 7.5rem;
`;

const tagItemCSS = css`
`;

const POPULAR_ARTICLES = [{title: "Writing to create value", link: "#"},{title: "Writing to create value", link: "#"},{title: "Writing to create value", link: "#"},{title: "Writing to create value", link: "#"},{title: "Writing to create value", link: "#"}];

const PopularContentSection = () => {
  const contentOut = POPULAR_ARTICLES.map((article, index) => {
    return (<li key={index}><a href={article.link}>{article.title}</a></li>)
  });
  return (
    <div css={popularContentContainerCSS}>
      <div>Popular Content</div>
      <ul>
        {contentOut}
      </ul>
    </div>
  )
};

const popularContentContainerCSS = css`
  margin-top: 26rem;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

const HappySvg = (props: any) => {
  return (
    <svg
      width={92}
      height={91}
      viewBox="0 0 92 91"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M62.056 36.747c-1.334-2.543-3.182-4.883-4.926-7.222-4.824-6.103-13.753-9.358-21.553-8.34-22.272 3.152-29.97 35.906-9.545 46.891 4.823 2.645 10.366 3.052 15.805 2.645 10.263-.814 20.014-9.257 22.169-19.327 1.026-4.882.308-10.172-1.95-14.647z"
        fill="#F0D05B"
      />
      <path
        d="M47.071 49.767c-1.026 12.308-16.01 9.866-15.6 0 2.976 2.95 11.393 2.543 15.6 0z"
        fill="#F8FAFB"
      />
      <path
        d="M63.8 41.528c0 1.322 0 2.644-.102 3.967-.41 4.17-1.437 8.34-4.105 11.596-2.258 2.848-5.44 4.882-8.724 6.306-6.98 3.052-15.498 3.662-22.785 1.017-3.386-1.22-6.363-3.255-8.518-6.103-2.36-3.153-3.592-7.12-4.208-10.884-.308-1.932-.513-3.865-.513-5.696-2.258 9.765.923 20.852 11.187 26.345 4.823 2.645 10.366 3.052 15.805 2.645 10.263-.814 20.014-9.257 22.169-19.327.718-3.255.616-6.713-.205-9.866z"
        fill="#ECB03B"
      />
      <path
        d="M34.242 35.425c-.308-3.357-2.874-3.357-3.797-2.442-1.54 1.425-1.335 2.137-1.95 2.137-.513 0-.41-.712-1.95-2.137-.924-.915-3.49-.915-3.798 2.442-.308 3.255 4.106 7.323 5.748 7.323 1.642 0 6.055-4.068 5.747-7.323zM55.795 35.425c-.308-3.357-2.874-3.357-3.797-2.442-1.54 1.425-1.334 2.137-1.95 2.137-.616 0-.41-.712-1.95-2.137-.924-.915-3.49-.915-3.798 2.442-.308 3.255 4.106 7.323 5.748 7.323 1.642 0 6.055-4.068 5.747-7.323z"
        fill="#FF3D6B"
      />
      <path
        d="M39.374 59.023h-.513c-4.106-.305-8.416-3.56-8.21-9.256 0-.305.204-.61.512-.814.308-.102.719 0 .924.203 2.36 2.442 10.366 2.34 14.471-.101.308-.204.616-.204.924 0 .308.203.41.508.41.813-.41 6.409-4.515 9.155-8.518 9.155zm-6.877-7.527c.616 3.56 3.593 5.594 6.466 5.798 2.771.203 6.056-1.322 6.98-6.001-4.003 1.729-9.956 1.932-13.445.203z"
        fill="#DD8F28"
      />
    </svg>
  )
};

const NewsLetterCard = () => {
  return (
    <div>
      <div css={newsLetterInfoCSS}>
        <div>
          <div>Follow my journey of building tech products</div>
          <div>30+ community of engineers, developers, product makers</div>
          <div>Content for nerds on engineering and product</div>
          <div>In-depth resources from <span>idea, tech and building product</span></div>
        </div>
        <div>
          <HappySvg/>
        </div>
      </div>
      <div css={newsLetterInputContainerCSS}>
        <div>
          <input placeholder={"Your Email"}/>
        </div>
        <div>Join</div>
      </div>
      <div>And join whatsapp group to communicate</div>
    </div>
  )
}
const newsLetterInfoCSS = css`
  display: flex;
`;
const newsLetterInputContainerCSS = css`
  display: flex;
`;
const MainContainer = () => {
  const articlesOut = ARTICLES.map(item => {
    return (<ArticleItem item={item}/>);
  });

  return (
    <div css={mainContainerCSS}>
      <div css={contentCSS}>
        <div css={articlesContainerCSS}>
          <div css={articlesContentHeadingCSS}>Recently published</div>
          <div>
            {articlesOut}
          </div>
        </div>
        <NewsLetterCard/>
      </div>
      <div css={sidebarContainerCSS}>
        <TagsSection/>
        <PopularContentSection/>
      </div>
    </div>
  );
}

const mainContainerCSS = css`
  background: var(--primaryBackground);
  margin-top: -36rem;
  padding-bottom: 36rem;
  position: relative;
  display: flex;
  color: var(--heroPrimaryTextColor);
`
const contentCSS = css``;
const articlesContainerCSS = css`

`;
const articlesContentHeadingCSS = css`
`;
const sidebarContainerCSS = css``;

const Footer = () => {
  return (
    <div css={footerContainerCSS}>

    </div>
  )
};
const footerContainerCSS = css`
  width: 100%;
  height: 452rem;
  margin-top: -36rem;
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
`;
const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  const { theme, toggleTheme } = useTheme()
  console.log(theme)

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
      <MainContainer/>
      <Curvy isHeroBackground={true}/>
      <Footer/>
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
        }
      }
    }
  }
`
