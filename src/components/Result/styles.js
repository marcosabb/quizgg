import styled from 'styled-components'
import media from 'styled-media-query'
import { rem, rgba } from 'polished'

import { color } from '../../styles/variables'

export const Container = styled.div`
  width: 500px;
  padding: 20px;
  background-color: ${color.white};
  border-radius: 6px;
  border: 1px solid ${rgba(color.blue, 0.04)};
  box-shadow: 0 20px 20px -20px ${rgba(color.blue, 0.2)};

  ${media.lessThan('medium')`
    padding-left: 10px;
    padding-right: 10px;
  `}
`

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
