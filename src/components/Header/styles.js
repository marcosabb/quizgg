import styled from 'styled-components'
import { rem, rgba } from 'polished'

import { color } from '../../styles/variables'

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: ${color.white};
  border-bottom: 1px solid ${rgba(color.blue, 0.06)};
`

export const Title = styled.h1`
  font-size: ${rem(24)};
  font-weight: 300;
  text-transform: uppercase;
  color: ${color.blue};
`
