import { Link as GatsbyLink } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import Sun from "@icons/Sun";
import Moon from "@icons/Moon";

const HeaderContainer = styled.div`
  max-width: 1200px;
  height: 24px;
  display: flex;  
  justify-content: flex-end;
  align-items: center;
`

const NavLink = styled(GatsbyLink)`
  opacity: 0.7;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  margin-left: 30px;
  font-size: 20px;

  &:hover {
    opacity: 1;
  }
`

const ToggleTheme = styled.div`
  opacity: 0.5;
  margin-left: 30px;

  &:hover {
    opacity: 1;
  }
`

const Header = ({ toggleTheme, isLightTheme }) => (
  <HeaderContainer>
    <NavLink to="/">
      Home
    </NavLink>
    <NavLink to="/about">
      About
    </NavLink>
    <NavLink to="/resume">
      Resume
    </NavLink>
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
