import styled from 'styled-components'
import { rem, rgba } from 'polished'
import media from 'styled-media-query'
import { Link as GatsbyLink } from 'gatsby'

import { color } from '../../styles/variables'

export const Container = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`

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
  align-items: center;
  justify-content: space-between;
  height: 60px;

  ${media.lessThan('small')`
    flex-direction: column;
    height: 80px;
    padding-top: 16px;
    padding-bottom: 16px;
  `}
`

export const Copyright = styled.p`
  font-size: ${rem(10)};
  font-weight: 700;
  text-transform: uppercase;
  color: ${rgba(color.text, 0.4)};
  
  ${media.lessThan('small')`
    margin-bottom: 16px;
  `}
`

export const Nav = styled.nav``

export const List = styled.ul`
  display: flex;
`

export const Item = styled.li`
  &:not(:last-child) {
    margin-right: 16px;
  }
`

export const Link = styled(GatsbyLink)`
  font-size: ${rem(10)};
  font-weight: 700;
  text-transform: uppercase;
  color: ${rgba(color.blue, 0.6)};
  transition: all .2s linear;

  &:hover {
    color: ${rgba(color.blue, 0.8)};
  }
`
