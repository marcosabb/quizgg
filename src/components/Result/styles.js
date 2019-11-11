import styled from 'styled-components'
import media from 'styled-media-query'
import { rem } from 'polished'

export const Container = styled.div`
  width: 500px;
  padding: 20px;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 20px 20px -20px rgba(0, 57, 160, .1);
`

export const Statement = styled.p`
  margin-bottom: 12px;
  font-size: ${rem(22)};
  font-weight: 700;
  text-align: center;
  color: #0039a0;

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
  width: 250px;
  margin: 0 auto 30px;

  img {
    border-radius: 6px;
  }

  ${media.lessThan('small')`
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
