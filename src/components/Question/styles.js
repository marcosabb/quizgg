import styled, { css, keyframes } from 'styled-components'
import { switchProp } from 'styled-tools'
import { rem } from 'polished'

const animate = (status) => {
  const right = keyframes`
    0% {
      background-color: rgba(46, 204, 113, .2);
    }

    100% {
      background-color: rgba(46, 204, 113, .6);
    }
  `

  const wrong = keyframes`
    0% {
      background-color: rgba(192, 57, 43, .2);
    }

    100% {
      background-color: rgba(192, 57, 43, .6);
    }
  `

  const states = {
    right: css`${right} .5s 0s infinite linear`,
    wrong: css`${wrong} .5s 0s infinite linear`
  }

  return states[status]
}

export const Container = styled.div`
  width: 500px;
  padding: 20px;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 20px 20px -20px rgba(0, 57, 160, .1);
`

export const Counter = styled.p`
  margin-bottom: 30px;
  font-size: ${rem(22)};
  font-weight: 700;
  text-align: center;
  color: #0039a0;
`

export const Image = styled.div`
  width: 250px;
  margin: 0 auto 30px;

  img {
    border-radius: 6px;
  }
`

export const Title = styled.p`
  margin-bottom: 30px;
  font-size: ${rem(20)};
  font-weight: 600;
  text-align: center;
`

export const Options = styled.div`
`

export const Option = styled.p`
  padding: 12px 16px;
  font-size: ${rem(14)};
  background-color: rgba(0, 57, 160, .01);
  border: 1px solid rgba(0, 57, 160, .1);
  border-radius: 6px;
  cursor: pointer;

  animation: ${switchProp('state', {
    right: animate('right'),
    wrong: animate('wrong')
  })};

  &:not(:last-child) {
    margin-bottom: 16px;
  }

  background-color: ${switchProp('state', {
    right: 'rgba(46, 204, 113, .2)',
    wrong: 'rgba(192, 57, 43, .2)'
  })};

  border-color: ${switchProp('state', {
    right: '#2ecc71',
    wrong: '#c0392b'
  })};
`

export const Key = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  margin-right: 16px;
  padding: 6px;
  font-size: ${rem(12)};
  font-weight: 600;
  color: #fff;
  background-color: #0039a0;
  border-radius: 6px;
`
