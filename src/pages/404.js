import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout pageTitle="Oops. The page doesn't exist.">
    <SEO title="404: Not found" />
    <Link to="/" className="btn btn-primary text-uppercase">Home</Link>
  </Layout>
)

export default NotFoundPage
