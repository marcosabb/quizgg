import styled from 'styled-components'
import media from 'styled-media-query'
import { rem } from 'polished'

import { color } from '../../styles/variables'

export const Statement = styled.p`
  margin-bottom: 12px;
  font-size: ${rem(22)};
  font-weight: 700;
  text-align: center;
  color: ${color.blue};

  ${media.lessThan('small')`
    font-size: ${rem(20)};
  `}
`

export const Title = styled.p`
  margin-bottom: 30px;
  font-size: ${rem(20)};
  font-weight: 600;
  text-align: center;

  ${media.lessThan('small')`
    margin-bottom: 20px;
    font-size: ${rem(16)};
  `}
`

export const Image = styled.div`
  width: 350px;
  margin: 0 auto 30px;

  img {
    border-radius: 6px;
  }

  ${media.lessThan('small')`
    width: 250px;
    margin-bottom: 20px;
  `}
`

export const Share = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Call = styled.p`
  margin-bottom: 20px;
  font-size: ${rem(14)};
`

export const Social = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .button {
    cursor: pointer;
    
    &:not(:last-child) {
      margin-right: 16px;
    }
  }
`
