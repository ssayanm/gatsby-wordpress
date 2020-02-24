import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Page extends Component {
  render() {
    const StaticPage = this.props.data.wordpressPage

    return (
      <div>
        <Layout>
          <SEO title="Home" />
          <Link to="/page-2/">Go to page 2</Link>
          <h1>{StaticPage.title}</h1>
          <div>{StaticPage.content}</div>
        </Layout>
      </div>
    )
  }
}

export default Page

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
    }
    site {
      id
      siteMetadata {
        title
        description
      }
    }
  }
`
