import React from "react"
import styled from "styled-components"

import Layout from "../components/layouts/layout"
import SEO from "../components/seo"
import {PageOpenerText, PageOpenerSubText} from "@styled"


const urls = {
  resume: "https://drive.google.com/file/d/1nZ4RL2F9QnA09fi8IKnDxUYXKsFj4EzC/view",
  cu: "https://www.colorado.edu/",
  pom: "https://www.pocketoutdoormedia.com/",
  helix: "https://www.helix.com/",
  apptio: "https://www.apptio.com/",
  hpe: "https://www.hpe.com/",
  hp: "https://www.hp.com/",
  pedode: "https://petrode.com/",
}

const ResumeDownload = styled.a`
  color: ${({ theme }) => theme.text}
`

const ResumeContainer = styled.div`
  margin: 30px 100px;
  max-width: 800px;
`

const Category = styled.div`
  padding: 60px 0 5px 0;
  font-size: 18px;
  font-weight: 500;
  opacity: 0.7;
`

const ContentGrid = styled.div`
  display: grid;
  grid-row-gap: 50px;
`

const ExternalLink = styled.a`
  color: ${props => props.color ? props.color : "inherit"};
  font-size: 35px;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    opacity: 0.7;
  } 
`

const Info = styled.div`
  font-size: 35px;
  font-weight: 600;
`

const TitleTimeline = styled.div`
  font-size: 23px;
  font-weight: 500;
`

const Content = styled.div`
  margin-top: 10px;
  font-size: 20px;
  font-weight: 400;
  max-width: 600px;
`

const InfoLink = (props) => {
  const {url, color, copy} = props;
  return(
    <ExternalLink
    color={color}
    href={url}
    target="_blank"
    rel="noopener noreferrer">
      {copy}
    </ExternalLink>
  )
}

const ResumePage = () => {

  return(
    <Layout>
      <SEO title="Resume" />
      <PageOpenerText>Resume.</PageOpenerText>
      <PageOpenerSubText>
        Or download it <ResumeDownload
        href={urls.resume}
        target="_blank"
        rel="noopener noreferrer">here</ResumeDownload> if you'd like.
      </PageOpenerSubText>
      <ResumeContainer>

        <Category>EDUCATION</Category>
        <ContentGrid>
          <div>
            <InfoLink url={urls.cu} color="#CFB87C" copy="University of Colorado, Boulder"/>
            <TitleTimeline>B.S. Computer Science · 2012 - 2016</TitleTimeline>
            <Content>
            <div>GPA 3.79</div>
            </Content>
          </div>
        </ContentGrid>


        <Category>WORK</Category>
        <ContentGrid>
          <div>
            <InfoLink url={urls.pom} color="#ed1c23" copy="Pocket Outdoor Media"/>
            <TitleTimeline>Software Engineer · Aug 2016 - Present</TitleTimeline>
            <Content>
              <div>Primarily Frontend. React, Typescript, Python/Django, GCP</div>
            </Content>
          </div>

          <div>
            <InfoLink url={urls.helix} color="#3e4c77" copy="Helix"/>
            <TitleTimeline>Software Engineer · Aug 2019 - Present</TitleTimeline>
            <Content>
              <div>Primarily Frontend. React, Typescript, Python/Django, GCP</div>
            </Content>
          </div>

          <div>
            <InfoLink url={urls.apptio} color="#f3700c" copy="Apptio"/>
            <TitleTimeline>Software Development Engineer · Nov 2016 - Feb 2019</TitleTimeline>
            <Content>
              <div>Primarily Frontend. React, Typescript, Python/Django, GCP</div>
            </Content>
          </div>

          <div>
            <InfoLink url={urls.hpe} color="#3dac85" copy="HPE"/>
            <TitleTimeline>Software Development Engineer · Nov 2016 - Feb 2019</TitleTimeline>
            <Content>
              <div>Primarily Frontend. React, Typescript, Python/Django, GCP</div>
            </Content>
          </div>

          <div>
            <InfoLink url={urls.hp} color="#3992d1" copy="Hewlett Packard"/>
            <TitleTimeline>Software Development Engineer · Nov 2016 - Feb 2019</TitleTimeline>
            <Content>
              <div>Primarily Frontend. React, Typescript, Python/Django, GCP</div>
            </Content>
          </div>

          <div>
            <InfoLink url={urls.pedode} color="#3583dd" copy="PetroDE"/>
            <TitleTimeline>Software Development Engineer · Nov 2016 - Feb 2019</TitleTimeline>
            <Content>
              <div>Primarily Frontend. React, Typescript, Python/Django, GCP</div>
            </Content>
          </div>
        </ContentGrid>

        <Category>MORE</Category>
        <ContentGrid>
          <div>
            <Info>SKILLS</Info>
            {/* <TitleTimeline>B.S. Computer Science · 2012 - 2016</TitleTimeline> */}
            <Content>
            <div>Javascript, Typescript, Python, Java</div>
            <div>React, Node, Spring</div>
            <div>Git, Mercurial</div>
            <div>GCP, Docker</div>
            <div>Agile, Scrum</div>
            </Content>
          </div>

          <div>
            <Info>Interests</Info>
            {/* <TitleTimeline>B.S. Computer Science · 2012 - 2016</TitleTimeline> */}
            <Content>
            <div>Longboard freestyle, Brazilian jiu-jitsu, skateboarding, whacky socks, and FOOOOOOOD!</div>
            </Content>
          </div>
        </ContentGrid>
      </ResumeContainer>
    </Layout>
  )
}

export default ResumePage
