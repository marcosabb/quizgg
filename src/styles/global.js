import { createGlobalStyle } from 'styled-components'
import normalize from 'styled-normalize'
import { rem, rgba } from 'polished'

import { color } from './variables'

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
    color: ${color.text};
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    background-color: ${rgba(color.blue, 0.024)};
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

  ul {
    list-style: none;
  }
`
