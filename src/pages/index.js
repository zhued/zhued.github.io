import React from "react"
import { Link } from "gatsby"
import Typed from 'react-typed';

import GithubLogo from "../assets/icons/logos/GithubLogo"
import LinkedInLogo from "../assets/icons/logos/LinkedInLogo"
import ResumeLogo from "../assets/icons/logos/ResumeLogo"
import Layout from "../components/layouts/layout"
import Image from "../components/image"
import Emoji from "../components/emoji"
import SEO from "../components/seo"
import {PageOpenerText,
  PageOpenerSubText, SecondaryText,
  SocialMediaContainer, SubHeadText,
  SocialMediaIcon, SocialMediaLink } from "@styled"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="edward" />
      <SubHeadText><Emoji symbol={`👋`} /> OH HELLO!</SubHeadText>
      <PageOpenerText>I'm Edward!</PageOpenerText>
      <PageOpenerSubText>
        <Typed
          strings={["I like building things for the web"]}
          typeSpeed={30}/>
      </PageOpenerSubText>

      <SecondaryText >
        Find me online:
      </SecondaryText>

      <SocialMediaContainer>
        <SocialMediaIcon><GithubLogo /></SocialMediaIcon>
        <div><SocialMediaLink href="https://github.com/zhued" target="_blank">github</SocialMediaLink></div>

        <SocialMediaIcon><LinkedInLogo /></SocialMediaIcon>
        <div><SocialMediaLink href="http://linkedin.com/in/edwardrzhu" target="_blank">linkedin</SocialMediaLink></div>

        <SocialMediaIcon><ResumeLogo /></SocialMediaIcon>
        <div><SocialMediaLink href="https://drive.google.com/file/d/1NeaEepoEnfgS-usDwuwcraK2HGClgzIy/view" target="_blank">resume</SocialMediaLink></div>
      </SocialMediaContainer>

      {/* <SocialMediaIcon>
        <LinkedInLogo />
      </SocialMediaIcon> */}


      {/* <BlurbText>
        I'm a software engineer based out of Denver, Colorado.
        I thrive at the intersection of design and strategy.
      </BlurbText> */}
      {/* <PageOpenerSubText>I'm a software engineer based in Denver, Colorado.</PageOpenerSubText> */}
      {/* <PageOpenerSubText>I love <Typed
        strings={ILoveList}
        typeSpeed={30}
        backSpeed={10}
        backDelay={1750}
        loop/>
      </PageOpenerSubText> */}
      {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div> */}
    </Layout>
  )
}

export default IndexPage
