import styled from 'styled-components'
import media from 'styled-media-query'

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
