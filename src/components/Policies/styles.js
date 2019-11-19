import styled from 'styled-components'
import { rem, rgba } from 'polished'

import { color } from '../../styles/variables'

export const Container = styled.article`
  min-height: 100vh;
  padding-top: 120px;
  padding-bottom: 60px;

  h2 {
    margin-bottom: 22px;
    font-size: ${rem(28)};
    color: ${color.text};
  }

  p {
    margin-bottom: 14px;
    font-size: ${rem(18)};
    line-height: 1.4;
    color: ${rgba(color.text, 0.6)};
  }
`

export const Wrapper = styled.div`
  max-width: 1200px;
  margin : 0 auto;
  padding: 0 16px;
`
