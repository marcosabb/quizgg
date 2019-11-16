import React, { memo } from 'react'
import t from 'prop-types'
import { Link } from 'gatsby'

import { Container, Title } from './styles'

const Header = memo(({ title }) => (
  <Container>
    <Title>
      <Link to='/'>{title}</Link>
    </Title>
  </Container>
))

Header.propTypes = {
  title: t.string.isRequired
}

export default Header
