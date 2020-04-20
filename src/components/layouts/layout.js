/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import { GlobalStyle } from "../../styles/styled"

const MainContainer = styled.div`
  margin: 125px auto 10px auto;
  max-width: 560px;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle/>
      <MainContainer>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()} All rights reserved.
        </footer>
      </MainContainer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
