import * as React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const BlogPost = ({data}) => {
  const readTime = data.mdx.timeToRead;
  const readTimeDisplay = readTime > 1 ? `${readTime} mins` : '1 min';
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
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