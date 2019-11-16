import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.main`
  position: relative;
  min-height: 100vh;
`

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  
  ${media.lessThan('small')`
    padding-bottom: 80px;
  `}
`
