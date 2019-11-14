import React, { memo } from 'react'
import t from 'prop-types'

import { Container } from './styles'

const Box = memo(({ children }) => (
  <Container>
    {children}
  </Container>
))

Box.propTypes = {
  children: t.node.isRequired
}

export default Box
