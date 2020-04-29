import React from "react"
import { Link } from "gatsby"
import Typed from 'react-typed';

import Layout from "../components/layouts/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  
  return (
    <Layout>
      <SEO title="edward" />
      <h1>edward zhu</h1>
      <p>this is a site about edward</p>
      <p>hell yeah <Typed
        strings={["brother", "mi amigos", "brethren", "skating"]}
        typeSpeed={50}
        backSpeed={20}
        backDelay={1250}
        loop/>
      </p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
