import styled, {createGlobalStyle} from 'styled-components'

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1440px',
}

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
};

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    font-family: Jost, sans-serif;
    color: ${({ theme }) => theme.text};
    transition: all 0.2s linear;
  }
`

export const lightTheme = {
  body: '#FAFAFA',
  text: '#121212',
  secondary: "#006de9"
  // toggleBorder: '#FFF',
  // gradient: 'linear-gradient(#39598A, #79D7ED)',
}

export const darkTheme = {
  body: '#121212',
  text: '#FAFAFA',
  secondary: "#006de9"
  // toggleBorder: '#6B8096',
  // gradient: 'linear-gradient(#091236, #1E215D)',
}

export const MainContainer = styled.div`
  margin: 80px auto 10px auto;
  padding: 0 20px;
  max-width: 1000px;

  @media ${device.mobileM} { 
    padding: 0 50px;
  }
`

export const PageOpenerText = styled.div`
  font-size: 48px;
  font-weight: 600;

  @media ${device.mobileL} { 
    font-size: 68px;
  }

  @media ${device.laptop} { 
    font-size: 88px;
  }
`

export const SubHeadText = styled.div`
  color: ${({ theme }) => theme.secondary};
  font-size: 30px;
  font-weight: 600;

  @media ${device.mobileL} { 
    font-size: 40px;
  }
`

export const PageOpenerSubText = styled.div`
  font-size: 30px;
  font-weight: 500;

  @media ${device.mobileL} { 
    font-size: 40px;
  }

  @media ${device.laptop} { 
    font-size: 50px;
  }
`

export const SecondaryText = styled.p`
  padding-top: 100px;
  font-size: 20px;
  font-weight: 500;
`

export const SocialMediaContainer = styled.div`
  padding-top: 5px;
  display: grid;
  grid-template-columns: 30px 1fr;
  align-items: center;
  grid-gap: 20px;

  @media ${device.mobileL} {
    padding-top: 10px;
    grid-template-columns: 50px 1fr;
  }
`

export const SocialMediaIcon = styled.div`
  fill: ${({ theme }) => theme.text}
`

export const SocialMediaLink = styled.a`
  color: ${({ theme }) => theme.text};
  font-size: 18px;
  font-weight: 500;

  &:hover {
    color: ${({ theme }) => theme.secondary};
  }

  @media ${device.mobileL} { 
    font-size: 28px;
  }
`
