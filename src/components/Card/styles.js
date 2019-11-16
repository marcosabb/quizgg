import styled from 'styled-components'
import Background from 'gatsby-background-image'
import media from 'styled-media-query'
import { ifProp } from 'styled-tools'
import { rem, rgba } from 'polished'

import { color } from '../../styles/variables'

export const Container = styled.div`
  position: relative;
  flex: ${ifProp('featured', null, '0 0 calc(50% - 20px)')};
  width: ${ifProp('featured', 'calc(50% - 20px)', null)};
  height: ${ifProp('featured', 'calc(50% - 10px)', '250px')};
  margin-bottom: ${ifProp('featured', null, '20px')};
  border-radius: 4px;
  overflow: hidden;

  .background {
    transition: all .2s linear;
  }

  &:hover {
    .background {
      transform: scale(1.1)
    }
  }

  ${media.greaterThan('medium')`
    margin-right: ${ifProp('featured', null, '10px')};
    margin-left: ${ifProp('featured', null, '10px')};

    &:nth-child(1) {
      height: ${ifProp('featured', '100%', '250px')};
    }
  `}

  ${media.lessThan('medium')`
    width: 100%;
    height: ${ifProp('featured', '350px', '250px')};

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  `}
`

export const Image = styled(Background)`
  height: 100%;
  width: 100%;
`

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`

export const Content = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  
  padding: 20px;
`

export const Title = styled.h2`
  font-weight: 400;
  font-size: ${rem(22)};
  text-transform: uppercase;
  text-shadow: 2px 2px ${rgba(color.text, 0.6)};
  line-height: 1.4;
  color: ${color.white};
`

export const Badges = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const Badge = styled.span`
  padding: 4px 6px;
  font-size: ${rem(10)};
  font-weight: 700;
  text-transform: uppercase;
  color: ${color.white};
  background-color: ${color.blue};
  border-radius: 3px;

  &:not(:last-child) {
    margin-right: 4px;
  }
`
