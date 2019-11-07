import styled from 'styled-components'
import { rem } from 'polished'

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 57, 160, .06);
`

export const Title = styled.h1`
  font-size: ${rem(24)};
  font-weight: 300;
  text-transform: uppercase;
  color: #0039a0;
`
