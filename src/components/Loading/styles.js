import styled, { keyframes } from 'styled-components'
import { rgba } from 'polished'

import { color } from '../../styles/variables'

const spin = keyframes`
  0% {
    transform: rotate(0deg)
  }

  100% {
    transform: rotate(360deg)
  }
`

export const Container = styled.div`
  width: 40px;
  height: 40px;
  border: 2px solid ${rgba(color.text, 0.1)};
  border-left-color: ${color.blue};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite; 
`
