// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial. Yeehaa! 2022</p>
      <StaticImage
        alt="Thomas the dog"
        src="../images/thomas.jpg"
      />
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage
