import styled from 'styled-components'
import { rem, rgba } from 'polished'

import { color } from '../../styles/variables'

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
  color: ${rgba(color.text, 0.5)};
`
