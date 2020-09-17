import styled, {createGlobalStyle} from 'styled-components'

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

export const PageOpenerText = styled.div`
  font-size: 88px;
  font-weight: 600;
`

export const SubHeadText = styled.div`
  color: ${({ theme }) => theme.secondary};
  font-size: 40px;
  font-weight: 600;
`

export const PageOpenerSubText = styled.div`
  font-size: 50px;
  font-weight: 500;
`

export const SecondaryText = styled.div`
  padding-top: 100px;
  font-size: 20px;
  font-weight: 500;
`

export const SocialMediaContainer = styled.div`
  padding-top: 20px;
  display: grid;
  grid-template-columns: 50px 1fr;
  align-items: center;
  grid-gap: 20px;
`

export const SocialMediaIcon = styled.div`
  fill: ${({ theme }) => theme.text}
`

export const SocialMediaLink = styled.a`
  color: ${({ theme }) => theme.text};
  font-size: 28px;
  font-weight: 500;

  &:hover {
    color: ${({ theme }) => theme.secondary};
  }
`

export const EmojiContainer = styled.div`
  font-size: 50px;
`
