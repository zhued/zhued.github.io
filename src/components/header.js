import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import Sun from "@icons/Sun";
import Moon from "@icons/Moon";

const HeaderContainer = styled.div`
  max-width: 1200px;
  height: 20px;
`

const ToggleTheme = styled.div`
  float: right;
  opacity: 0.3;

  &:hover {
    opacity: 1;
  }
`

const Header = ({ toggleTheme, isLightTheme }) => (
  <HeaderContainer>

    {/* <Link to="/">
      {siteTitle}
    </Link> */}
    <ToggleTheme onClick={toggleTheme}>
      {isLightTheme ? <Sun/> : <Moon/>}
    </ToggleTheme>

  </HeaderContainer>
)

// uhh idk exactly what to do with these
// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
