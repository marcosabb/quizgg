import styled from 'styled-components'
import media from 'styled-media-query'
import { rem, rgba } from 'polished'

import { color } from '../../styles/variables'

export const Container = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
  height: 60px;
  background-color: ${color.white};
  border-bottom: 1px solid ${rgba(color.blue, 0.06)};
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;

  ${media.greaterThan('small')`
    padding-left: 26px;
    padding-right: 16px;
  `}
`

export const Title = styled.h1`
  font-size: ${rem(22)};
  font-weight: 700;
  text-transform: uppercase;
  color: ${color.blue};
`
