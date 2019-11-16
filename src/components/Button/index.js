import React, { memo } from 'react'
import t from 'prop-types'

import { Container } from './styles'

const Button = memo(({ handleClick, children }) => (
  <Container onClick={handleClick}>{children}</Container>
))

Button.propTypes = {
  handleClick: t.func.isRequired,
  children: t.node.isRequired
}

export default Button
