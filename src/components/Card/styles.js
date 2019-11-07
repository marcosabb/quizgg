import styled from 'styled-components'
import Background from 'gatsby-background-image'

export const Container = styled.div`
  position: relative;
  width: calc(50% - 10px);
  height: calc(50% - 5px);
  border-radius: 6px;
  overflow: hidden;

  &:nth-child(1) {
    height: 100%;
  }

  a {
    display: block;
    width: 100%;
    height: 100%;
  }
`

export const Image = styled(Background)`
  height: 100%;
  width: 100%;
`

export const Content = styled.div`
  position: absolute;
  bottom: 0;
`

export const Title = styled.h2``
