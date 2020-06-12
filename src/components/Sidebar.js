import React from "react"
import { Card, CardTitle, CardBody, Form, FormGroup, Input } from "reactstrap"
import { graphql, StaticQuery, Link  } from "gatsby"
import Img from "gatsby-image"

const Sidebar = () => {
    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle className="text-center text-uppercase mb-3">Newsletter</CardTitle>
                    <Form className="text-center">
                        <FormGroup>
                            <Input type="email" name="email" placeholder="Your email address..." />
                        </FormGroup>
                        <button className="btn btn-outline-success text-uppercase">
                            Subscribe
                        </button>
                    </Form>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <CardTitle className="text-center text-uppercase">
                        Advertisement
                    </CardTitle>
                    <img src="https://picsum.photos/320/200" alt="advert" style={{width: `100%`}}/>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <CardTitle className="text-center text-uppercase mb-3">Recent Posts</CardTitle>
                </CardBody>
                <StaticQuery query={sidebarQuery} render={(data) => (
                    <div style={{marginRight: '1em', marginLeft: '1em'}}>
                        {data.allMarkdownRemark.edges.map(({node}) =>
                            <Card key={node.id}>
                                <CardBody>
                                    <Link to={node.frontmatter.slug}>
                                        <Img className="card-image-top" fluid={node.frontmatter.image.childImageSharp.fluid}/>
                                    </Link>
                                    <CardTitle>
                                        <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
                                    </CardTitle>
                                </CardBody>
                            </Card>
                        )}
                    </div>
                )}/>
            </Card>
        </div>
    )
}

const sidebarQuery = graphql`
    query sidebarQuery {
        allMarkdownRemark (sort: { fields: [frontmatter___date], order: DESC} limit: 3) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        image {
                            childImageSharp {
                                fluid(maxWidth: 300) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }
`

export default Sidebar