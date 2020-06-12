import React from 'react'
import { Badge, Card, CardBody, CardSubtitle } from "reactstrap"
import Img from "gatsby-image"
import { graphql, Link } from "gatsby"
import { slugify } from "../util/utilityFunctions"
import authors from "../util/authors"
import { DiscussionEmbed } from "disqus-react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SinglePost = ({data, pageContext}) => {
    const post = data.markdownRemark.frontmatter
    const author = authors.find(x => x.name === post.author)
    const baseUrl = "https://gatsby-dev-blog.now.sh/"
    const disqusShortname = "https-gatsby-dev-blog-now-sh"
    const disqusConfig = {
        identifier: data.markdownRemark.id,
        title: post.title,
        url: baseUrl + pageContext.slug
    }

    return (
        <Layout pageTitle={post.title} postAuthor={author} authorImageFluid={data.file.childImageSharp.fluid}>
            <SEO title={post.title} />
            <Card>
                <Img className="card-image-top" fluid={post.image.childImageSharp.fluid}/>
                <CardBody>
                    <CardSubtitle>
                        <span className="text-info">{post.date}</span> by{" "}
                        <span className="text-info">{post.author}</span>
                    </CardSubtitle>
                    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}/>
                    <ul className="post-tags">
                        {post.tags.map(tag => {
                            return(
                                <li key={tag}>
                                    <Link to={`/tag/${slugify(tag)}`}>
                                        <Badge color="primary">{tag}</Badge>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </CardBody>
            </Card>
            <h3 className="text-center">Share this post</h3>
            <div className="text-center social-share-links">
                <ul>
                    <li>
                        <a href={'https://www.facebook.com/sharer.php?u=' + baseUrl + pageContext.slug} 
                            className="facebook" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="facebook">
                                <i class="fab fa-facebook-square fa-2x"></i>
                        </a>
                    </li>
                    <li>
                        <a href={'https://www.twitter.com/share?url' + baseUrl + pageContext.slug + '&text=' + post.title + '&viatwitterHandle'} 
                            className="twitter" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="twitter">
                                <i class="fab fa-twitter-square fa-2x"></i>
                        </a>
                    </li>
                    <li>
                        <a href={'https://www.linkedin.com/shareArticle?url=' + baseUrl + pageContext.slug} 
                            className="linkedin" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="twitter">
                                <i class="fab fa-linkedin fa-2x"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <DiscussionEmbed shortname={disqusShortname} config={disqusConfig}/>
        </Layout>
    )
}

export const postQuery = graphql`
    query blogPostBySlug($slug: String!, $imageUrl: String!){
        markdownRemark(fields: { slug: { eq: $slug }}) {
             id
             html
             frontmatter {
                 title
                 author
                 date(formatString: "MMM Do YYYY")
                 tags
                 image {
                     childImageSharp {
                         fluid (maxWidth: 700) {
                             ...GatsbyImageSharpFluid
                         }
                     }
                 }
             }
        }
        file(relativePath: { eq: $imageUrl}) {
            childImageSharp {
                fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
` 

export default SinglePost