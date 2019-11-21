import styled from 'styled-components'
import { rem } from 'polished'

import { color } from '../../styles/variables'

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 130px);
`

export const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
`

export const Message = styled.p`
  font-size: ${rem(24)};

  a {
    color: ${color.blue};
  }
`
