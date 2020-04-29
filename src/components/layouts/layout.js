/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from "styled-components"

import { GlobalStyle, lightTheme, darkTheme } from "../../styles/styled"
import Header from "../header"

const MainContainer = styled.div`
  margin: 80px auto 10px auto;
  padding: 0 50px;
  max-width: 1000px;
`

const Layout = ({ children }) => {
  const [isLightTheme, setIsLightTheme] = useState(true);

  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme);
  }

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
    <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
      <>
        <GlobalStyle/>
        <MainContainer>
          <Header toggleTheme={toggleTheme} isLightTheme={isLightTheme}/>
          <main>
            {children}
          </main>
          <footer>
            © {new Date().getFullYear()} All rights reserved.
          </footer>
        </MainContainer>
      </>
    </ThemeProvider>
  )
}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout
