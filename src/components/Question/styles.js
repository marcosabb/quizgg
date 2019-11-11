import styled, { css, keyframes } from 'styled-components'
import media from 'styled-media-query'
import { switchProp } from 'styled-tools'
import { rem, rgba } from 'polished'

import { color } from '../../styles/variables'

const animate = (status) => {
  const right = keyframes`
    0% {
      background-color: ${rgba(color.green, 0.2)};
    }

    100% {
      background-color: ${rgba(color.green, 0.6)};
    }
  `

  const wrong = keyframes`
    0% {
      background-color: ${rgba(color.red, 0.2)};
    }

    100% {
      background-color: ${rgba(color.red, 0.6)};
    }
  `
  const select = keyframes`
      0% {
        background-color: ${rgba(color.blue, 0.2)};
      }

      100% {
        background-color: ${rgba(color.blue, 0.6)};
      }
    `

  const states = {
    right: css`
      animation-name: ${right};
      animation-duration: .5s;
      animation-delay: 0s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    `,
    wrong: css`
      animation-name: ${wrong};
      animation-duration: .5s;
      animation-delay: 0s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    `,
    select: css`
      animation-name: ${select};
      animation-duration: .5s;
      animation-delay: 0s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    `
  }

  return states[status]
}

export const Container = styled.div`
  width: 500px;
  padding: 20px;
  background-color: ${color.white};
  border-radius: 6px;
  box-shadow: 0 20px 20px -20px ${rgba(color.blue, 0.1)};

  ${media.lessThan('medium')`
    padding: 10px;
  `}
`

export const Counter = styled.p`
  margin-bottom: 30px;
  font-size: ${rem(22)};
  font-weight: 700;
  text-align: center;
  color: ${color.blue};

  ${media.lessThan('small')`
    margin-bottom: 20px;
    font-size: ${rem(20)};
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

export const Options = styled.div`
`

export const Option = styled.p`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  font-size: ${rem(14)};
  background-color: ${rgba(color.blue, 0.01)};
  border: 1px solid ${rgba(color.blue, 0.1)};
  border-radius: 6px;
  cursor: pointer;

  ${switchProp('state', {
    right: animate('right'),
    wrong: animate('wrong'),
    select: animate('select')
  })};

  &:not(:last-child) {
    margin-bottom: 16px;

    ${media.lessThan('small')` 
      margin-bottom: 12px;
    `}
  }

  background-color: ${switchProp('state', {
    right: rgba(color.green, 0.2),
    wrong: rgba(color.red, 0.2),
    select: rgba(color.blue, 0.2)
  })};

  border-color: ${switchProp('state', {
    right: color.green,
    wrong: color.red,
    select: color.blue
  })};

  ${media.lessThan('small')`
    font-size: ${rem(12)};
    padding: 12px;
  `}
`

export const Key = styled.div`
  width: 26px;
  height: 26px;
  margin-right: 16px;
  padding: 8px 10px;
  font-size: ${rem(10)};
  font-weight: 600;
  color: ${color.white};
  background-color: ${color.blue};
  border-radius: 6px;

  ${media.lessThan('small')` 
    margin-right: 12px;
  `}
`
