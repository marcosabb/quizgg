import styled from 'styled-components'
import { rem, darken } from 'polished'

import { color } from '../../styles/variables'

export const Container = styled.button`
  padding: 8px 16px;
  font-size: ${rem(14)};
  color: ${color.white};
  letter-spacing: ${rem(2)};
  text-transform: uppercase;
  background-color: ${color.blue};
  border: 1px solid ${darken(0.02, color.blue)};
  border-radius: 3px;
  transition: all .2s linear;
  cursor: pointer;

  &:hover {
    background-color: ${darken(0.02, color.blue)};
  }

  &:focus {
    outline: none;
  }
`
