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
  // toggleBorder: '#FFF',
  // gradient: 'linear-gradient(#39598A, #79D7ED)',
}

export const darkTheme = {
  body: '#121212',
  text: '#FAFAFA',
  // toggleBorder: '#6B8096',
  // gradient: 'linear-gradient(#091236, #1E215D)',
}

export const PageOpenerText = styled.div`
  padding-top: 30px;
  font-size: 50px;
  font-weight: 600;
`

export const PageOpenerSubText = styled.div`
  font-size: 50px;
  font-weight: 500;
`