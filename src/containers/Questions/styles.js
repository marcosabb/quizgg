import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
  padding-bottom: 80px;
  min-height: calc(100vh - 60px);

  ${media.lessThan('small')`
    padding-bottom: 20px;
  `}

  .question-enter {
    opacity: 0;
  }

  .question-enter-active {
    opacity: 1;
    transition: opacity 800ms;
  }

  .question-exit {
    opacity: 1;
  }

  .question-exit-active {
    opacity: 0;
    transition: opacity 800ms;
  }
`
