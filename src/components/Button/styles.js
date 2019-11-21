import styled from 'styled-components'
import { ifProp } from 'styled-tools'
import { rem, darken, rgba } from 'polished'

import { color } from '../../styles/variables'

export const Container = styled.button`
  position: ${ifProp('tooltip', 'relative', null)};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 34px;
  padding: 10px 16px;
  font-size: ${rem(12)};
  text-transform: uppercase;
  color: ${color.white};
  background-color: ${color.blue};
  border: 1px solid ${color.blue};
  border-radius: 3px;
  transition: all .2s linear;
  cursor: pointer;
  
  &:hover {
    background-color: ${darken(0.2, color.blue)};
    border-color: ${darken(0.2, color.blue)};
  }

  &:focus {
    outline: none;
  }
`

export const Tooltip = styled.span`
  position: absolute;
  bottom: -30px;
  padding: 6px;
  font-size: ${rem(10)};
  color: ${color.white};
  background-color: ${rgba(color.text, 0.8)};
  border-radius: 3px;
  transition: all .2s linear;
  cursor: default;

  &::before {
    content: '';
    position: absolute;
    top: -4px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 4px solid ${rgba(color.text, 0.8)};
  }
`
