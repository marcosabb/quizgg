import React, { memo } from 'react'
import t from 'prop-types'

import { Container, Copyright } from './styles'

const Footer = memo(({ title, year }) => (
  <Container>
    <Copyright>Copyright &copy; {year} {title}</Copyright>
  </Container>
))

Footer.propTypes = {
  title: t.string.isRequired,
  year: t.number.isRequired
}

export default Footer
