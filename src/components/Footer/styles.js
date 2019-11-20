import styled from 'styled-components'
import { rem, rgba } from 'polished'
import media from 'styled-media-query'

import { color } from '../../styles/variables'

export const Container = styled.footer``

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;

  ${media.greaterThan('small')`
    padding-left: 26px;
    padding-right: 16px;
  `}
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 16px;
  padding-bottom: 16px;
`

export const Copyright = styled.p`
  margin-bottom: 12px;

  font-size: ${rem(10)};
  font-weight: 400;
  text-transform: uppercase;
  color: ${rgba(color.text, 0.8)};
`

export const Marks = styled.div`
  margin-bottom: 12px;
`

export const Mark = styled.p`
  font-size: ${rem(10)};
  font-weight: 400;
  text-transform: uppercase;
  color: ${rgba(color.text, 0.4)};
  
  &:not(:last-child) {
    margin-bottom: 6px;
  }
`

export const Nav = styled.nav``

export const List = styled.ul`
  display: flex;
`

export const Item = styled.li`
  &:not(:last-child) {
    margin-right: 16px;
  }

  a {
    font-size: ${rem(10)};
    font-weight: 400;
    text-transform: uppercase;
    color: ${rgba(color.blue, 0.6)};
    transition: all .2s linear;

    &:hover {
      color: ${rgba(color.blue, 0.8)};
    }
  }
`
