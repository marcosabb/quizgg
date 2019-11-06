import styled from 'styled-components'
import { ifProp } from 'styled-tools'
import Img from 'gatsby-image'

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: ${ifProp({ featured: 'left' }, '500px', 'calc(250px - 10px)')};
  margin-bottom: ${ifProp({ featured: 'left' }, '0', '20px')};;
  background-color: red;
`

export const Image = styled(Img)``

export const Content = styled.div`
  position: absolute;
  bottom: 0;
`

export const Title = styled.h2``

export const Badge = styled.span``
