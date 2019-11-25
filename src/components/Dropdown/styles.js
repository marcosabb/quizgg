import styled, { css } from 'styled-components'
import { ifProp } from 'styled-tools'
import { rem, rgba } from 'polished'

import { color } from '../../styles/variables'

export const Container = styled.div`
  height: 40px;
  user-select: none;

  &:not(:last-child) {
    margin-right: 16px;
  }
  
`

export const Label = styled.span`
  display: block;
  margin-left: 6px;
  margin-bottom: 6px;
  font-size: ${rem(12)};
  font-weight: 700;
  color: ${color.text};
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  height: 40px;
  background-color: ${color.white};
  border: 1px solid ${rgba(color.blue, 0.1)};
  border-radius: 3px;
  cursor: pointer;
`

export const Value = styled.span`
  font-size: ${rem(12)};
  color: ${color.text};
`

export const Arrow = styled.span`
  width: 0;
  height: 0;
  margin-left: 26px;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid ${color.text};
  transition: all .2s linear;

  ${ifProp('isOpen', css`
    transform: rotate(-180deg);
  `, null)}
`

export const Options = styled.ul`
  margin-top: 2px;
  background-color: ${color.white};
  border: 1px solid ${rgba(color.blue, 0.1)};
  border-radius: 3px;
`

export const Option = styled.li`
  display: flex;
  align-items: center;
  padding: 16px;
  height: 40px;
  font-size: ${rem(12)};
  color: ${color.text};
  background-color: ${color.white};
  cursor: pointer;

  &:hover {
    color: ${color.white};
    background-color: ${color.blue};
  }

  &:first-child {
    border-radius: 3px 3px 0 0;
  }

  &:last-child {
    border-radius: 0 0 3px 3px;
  }
`
