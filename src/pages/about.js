import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layouts/layout"
import SEO from "../components/seo"
import {PageOpenerText, PageOpenerSubText} from "@styled"

const SecondPage = () => (
  <Layout>
    <SEO title="About" />
    <PageOpenerText>Hey there,</PageOpenerText>
    <PageOpenerSubText>it's nice to meet you!</PageOpenerSubText>
  </Layout>
)

export default SecondPage
