import React from 'react'
import t from 'prop-types'

import { Container, Copyright } from './styles'

const Footer = ({ title, year }) => (
  <Container>
    <Copyright>Copyright &copy; {year} {title}</Copyright>
  </Container>
)

Footer.propTypes = {
  title: t.string.isRequired,
  year: t.number.isRequired
}

export default Footer
