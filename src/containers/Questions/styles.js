import styled from 'styled-components'
import media from 'styled-media-query'
import { rgba, rem } from 'polished'

import { color } from '../../styles/variables'

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
  padding-bottom: 80px;
  min-height: 100vh;

  ${media.lessThan('small')`
    padding-bottom: 20px;
  `}
`

export const Wrapper = styled.div`
  width: 500px;
  padding: 30px 20px;
  background-color: ${color.white};
  border-radius: 4px;
  border: 1px solid ${rgba(color.blue, 0.04)};
  box-shadow: 0 20px 20px -20px ${rgba(color.blue, 0.2)};

  ${media.lessThan('small')`
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
  `}
`

export const Start = styled.div``

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
