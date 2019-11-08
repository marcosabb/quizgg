import styled from 'styled-components'
import Background from 'gatsby-background-image'
import { ifProp } from 'styled-tools'
import { rem } from 'polished'

const small = { size: 'small' }

export const Container = styled.div`
  position: relative;
  flex: ${ifProp(small, '0 0 calc(33.3333% - 20px)', null)};
  width: ${ifProp(small, null, 'calc(50% - 20px)')};
  height: ${ifProp(small, '250px', 'calc(50% - 10px)')};
  margin-right: ${ifProp(small, '10px', null)};
  margin-left: ${ifProp(small, '10px', null)};
  margin-bottom: ${ifProp(small, '20px', null)};
  border-radius: 6px;
  overflow: hidden;

  &:nth-child(1) {
    height: ${ifProp(small, '250px', '100%')};
  }

  a {
    display: block;
    width: 100%;
    height: 100%;
  }
`

export const Image = styled(Background)`
  height: 100%;
  width: 100%;
`

export const Content = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  
  padding: 20px;
`

export const Title = styled.h2`
  font-size: ${rem(24)};
  text-transform: uppercase;
  text-shadow: 1px 1px rgba(16, 16, 16, .8);
  color: #fff;
`

export const Game = styled.span`
  position: absolute;
  top: 16px;
  right: 16px;

  padding: 4px 6px;
  font-size: ${rem(10)};
  font-weight: 700;
  text-transform: uppercase;
  color: #fff;
  background-color: #0039a0;
  border-radius: 3px;
`
