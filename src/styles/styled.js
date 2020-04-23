import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    font: 16px "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: ${({ theme }) => theme.text};
  }
`

export const lightTheme = {
  body: '#FAFAFA',
  text: '#121212',
  toggleBorder: '#FFF',
  // gradient: 'linear-gradient(#39598A, #79D7ED)',
}

export const darkTheme = {
  body: '#121212',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  // gradient: 'linear-gradient(#091236, #1E215D)',
}