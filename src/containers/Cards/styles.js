import styled from 'styled-components'

export const Container = styled.section``

export const Featured = styled.div`
  display: flex;
`

export const Content = styled.div`
  width: 50%;

  &:not(:last-child) {
    margin-right: 20px;
  }
`
