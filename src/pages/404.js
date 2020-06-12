import React from "react"
import { Button } from "reactstrap"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout pageTitle="Oops. The page doesn't exist.">
    <SEO title="404: Not found" />
    <Button><Link to="/">Main page.</Link></Button>
  </Layout>
)

export default NotFoundPage
