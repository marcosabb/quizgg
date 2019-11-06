import { createGlobalStyle } from 'styled-components'
import normalize from 'styled-normalize'

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
    letter-spacing: .0625rem;
    color: #000;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    background-color: rgba(12, 36, 97, .02);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`
