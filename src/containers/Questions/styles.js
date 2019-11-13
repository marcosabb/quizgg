import styled from 'styled-components'
import media from 'styled-media-query'
import posed from 'react-pose'

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
`

export const Item = styled(posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
}))`
  width: 500px;
`
