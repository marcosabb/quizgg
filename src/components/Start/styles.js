import styled from 'styled-components'
import media from 'styled-media-query'
import { rem, rgba } from 'polished'

import { color } from '../../styles/variables'

export const Container = styled.div``

export const Image = styled.div`
  width: 100%;
  margin: 0 auto 30px;

  img {
    border-radius: 4px;
  }

  ${media.lessThan('small')`
    margin-bottom: 20px;
  `}
`

export const Title = styled.h2`
  margin-bottom: 30px;
  font-size: ${rem(24)};
  font-weight: 600;
  text-align: center;

  ${media.lessThan('small')`
    margin-bottom: 20px;
    font-size: ${rem(18)};
  `}
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`

export const Label = styled.label`
  margin-left: 6px;
  margin-bottom: 6px;
  font-size: ${rem(14)};
  color: ${color.text};
`

export const Input = styled.input`
  margin-right: 4px;
  padding: 10px 16px;
  height: 44px;
  font-size: ${rem(12)};
  color: ${color.text};
  background-color: ${color.white};
  border: 1px solid ${rgba(color.blue, 0.1)};
  border-radius: 3px;
`
