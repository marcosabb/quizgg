import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.section`
  padding-top: 120px;
  padding-bottom: 60px;
`

export const Featured = styled.div`
  ${media.greaterThan('medium')`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    height: 500px;
  `}
`

export const Content = styled.div`
  padding-top: 80px;

  ${media.greaterThan('medium')`
    display: flex;
    flex-wrap: wrap;
  `}
`

export const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`
