import { createGlobalStyle } from 'styled-components'
import normalize from 'styled-normalize'
import { rem } from 'polished'

export default createGlobalStyle`
  ${normalize}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
  }

  html,
  body,
  #___gatsby,
  #gatsby-focus-wrapper {
    height: 100%;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 16px;
    letter-spacing: ${rem(2)};
    color: #101010;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    background-color: rgba(0, 57, 160, .02);
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`
