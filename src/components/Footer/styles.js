import styled from 'styled-components'
import { rem } from 'polished'

export const Container = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
`

export const Copyright = styled.p`
  font-size: ${rem(10)};
  text-transform: uppercase;
  color: rgba(16, 16, 16, .5);
`
