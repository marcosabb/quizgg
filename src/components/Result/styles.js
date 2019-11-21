import styled from 'styled-components'
import media from 'styled-media-query'
import { rem, rgba } from 'polished'

import { color } from '../../styles/variables'

export const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 300px;
`

export const Loader = styled.p`
  margin-top: 30px;
  font-size: ${rem(14)};
  text-transform: uppercase;
  color: ${color.blue};
`

export const Wrapper = styled.div`
  max-width: 350px;
  margin: 0 auto;
`

export const Statement = styled.p`
  margin-bottom: 12px;
  font-size: ${rem(20)};
  font-weight: 700;
  text-align: center;
  color: ${color.blue};

  ${media.lessThan('small')`
    font-size: ${rem(16)};
  `}
`

export const Title = styled.p`
  margin-bottom: 30px;
  font-size: ${rem(22)};
  font-weight: 600;
  text-align: center;

  ${media.lessThan('small')`
    margin-bottom: 20px;
    font-size: ${rem(16)};
  `}
`

export const Image = styled.div`
  position: relative;
  width: 350px;
  margin: 0 auto 30px;

  img {
    border-radius: 4px;
  }

  ${media.lessThan('small')`
    width: 100%;
    margin-bottom: 20px;
  `}
`

export const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 16px;
  left: 16px;
`

export const Share = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Call = styled.p`
  margin-bottom: 20px;
  font-size: ${rem(12)};
  text-transform: uppercase;
  color: ${rgba(color.text, 0.8)};
`

export const Social = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .social-button {
    cursor: pointer;
    
    &:not(:last-child) {
      margin-right: 16px;
    }
  }
`

export const Url = styled.div`
  display: flex;
  width: 350px;
  margin-bottom: 20px;

  ${media.lessThan('small')`
    width: 100%;
  `}
`

export const Input = styled.input`
  flex: 1;
  margin-right: 4px;
  padding: 10px 8px;
  height: 34px;
  font-size: ${rem(12)};
  color: ${color.text};
  background-color: ${color.white};
  border: 1px solid ${rgba(color.blue, 0.1)};
  border-radius: 3px;
`
