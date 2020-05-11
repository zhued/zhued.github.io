import React from "react"
import { Link } from "gatsby"
import Typed from 'react-typed';

import Layout from "../components/layouts/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import {PageOpenerText, PageOpenerSubText} from "@styled"

const IndexPage = () => {
  const IAmAList = ["a software engineer.",
                    "a skater.",
                    "a brazilian jiu-jitsu student.",
                    "a whacky socks enthusiast.",
                    "a food lover."];

  return (
    <Layout>
      <SEO title="edward" />
      <PageOpenerText>Hello, I'm Edward!</PageOpenerText>
      <PageOpenerSubText>I am <Typed
        strings={IAmAList}
        typeSpeed={30}
        backSpeed={10}
        backDelay={1500}
        loop/>
      </PageOpenerSubText>
      {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div> */}
    </Layout>
  )
}

export default IndexPage
