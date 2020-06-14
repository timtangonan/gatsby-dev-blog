import React from "react"
import { Button, Card, CardBody, CardText, CardTitle, Row } from "reactstrap"
import TimImg from "../images/tim-t.png"
import RenfredImg from "../images/ren-t.png"
import { slugify } from "../util/utilityFunctions"

import Layout from "../components/layout"
import SEO from "../components/seo"
import authors from "../util/authors"

const TeamPage = () => (
  <Layout pageTitle="The Dev Team">
    <SEO title="The Dev Team" />
    <Row className="mb-4">
      <div className="col-md-3">
        <img src={TimImg} alt="author tim" style={{maxWidth: `100%`}}/>
      </div>
      <div className="col-md-8">
        <Card style={{minHeight: `100%`}}>
          <CardBody>
            <CardTitle>
              {authors[0].name}
            </CardTitle>
            <CardText>
              {authors[0].bio}
            </CardText>
            <Button className="text-uppercase" color="primary" href={`/author/${slugify(authors[0].name)}`}>View posts</Button>
          </CardBody>
        </Card>
      </div>
    </Row>
    <Row className="mb-4">
      <div className="col-md-3">
        <img src={RenfredImg} alt="author renfred" style={{maxWidth: `100%`}}/>
      </div>
      <div className="col-md-8">
        <Card style={{minHeight: `100%`}}>
          <CardBody>
            <CardTitle>
              {authors[1].name}
            </CardTitle>
            <CardText>
              {authors[1].bio}
            </CardText>
            <Button className="text-uppercase" color="primary" href={`/author/${slugify(authors[1].name)}`}>View posts</Button>
          </CardBody>
        </Card>
      </div>
    </Row>
  </Layout>
)

export default TeamPage
