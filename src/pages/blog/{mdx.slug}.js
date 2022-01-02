import * as React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const BlogPost = ({data}) => {
  const readTime = data.mdx.timeToRead;
  const readTimeDisplay = readTime > 1 ? `${readTime} mins` : '1 min';
  const image = getImage(data.mdx.frontmatter.hero_image)
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} />
      <p>Credit <a href={data.mdx.frontmatter.hero_image_credit_link}>{data.mdx.frontmatter.hero_image_credit_text}</a></p>
      <p>Time to read {readTimeDisplay}</p>
      <p>WordCount</p>
      <ul>
        <li>Paragraph {data.mdx.wordCount.paragraphs}</li>
        <li>Sentences {data.mdx.wordCount.sentences}</li>
        <li>Words {data.mdx.wordCount.words}</li>
      </ul>
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
      timeToRead
      wordCount{
        paragraphs
        sentences
        words
      }
    }
  }
`

export default BlogPost