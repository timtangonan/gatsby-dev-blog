import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { Row, Col } from "reactstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/Post"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Home page</h1>
    <Row>
      <Col md="8">
        <StaticQuery query={ indexQuery } render={data => {
          return(
            <div>
              {data.allMarkdownRemark.edges.map(({node}) => (
                <Post 
                  title={node.frontmatter.title} 
                  author={node.frontmatter.author} 
                  path={node.frontmatter.path} 
                  date={node.frontmatter.date} 
                  body={node.excerpt}
                  fluid={node.frontmatter.image.childImageSharp.fluid}
                  tags={node.frontmatter.tags}/>
              ))}
            </div>
          )
        }}/>
      </Col>
      <Col md="4">
        <div style={{ height: '100%', width: '100%', backgroundColor: 'snow'}}></div>
      </Col>
    </Row>
  </Layout>
)

const indexQuery = graphql`
  query {
    allMarkdownRemark( sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMM Do YYYY")
            author
            path
            tags
            image {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage
