import React from "react"
import { Card, CardText, CardTitle, CardBody, Form, FormGroup, Input } from "reactstrap"
import { graphql, StaticQuery, Link  } from "gatsby"
import Img from "gatsby-image"

const Sidebar = ({ author, authorFluid }) => {
    return (
        <div>
            {author && (
                <Card>
                    <Img className="card-image-top" fluid={authorFluid} style={{margin: '4em 4em 0'}}/>
                    <CardBody>
                        <CardTitle className="text-center text-uppercase mb-3">{author.name}</CardTitle>
                        <CardText>
                            {author.bio}
                        </CardText>
                        <div className="author-social-links text-center">
                            <ul>
                                <li><a href={author.github} target="_blank" rel="noopener noreferrer" className="github" aria-label="github"><i class="fab fa-github-square fa-lg"></i></a></li>
                                <li><a href={author.twitter} target="_blank" rel="noopener noreferrer" className="twitter" aria-label="twitter"><i class="fab fa-twitter-square fa-lg"></i></a></li>
                            </ul>
                        </div>
                    </CardBody>
                </Card>
            )}
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
                                    <Link to={node.fields.slug}>
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