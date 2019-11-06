import React from 'react'
import t from 'prop-types'
import { Link } from 'gatsby'

import { Container, Title } from './styles'

const Header = ({ title }) => {
  return (
    <Container>
      <Title>
        <Link to='/'>{title}</Link>
      </Title>
    </Container>
  )
}

Header.propTypes = {
  title: t.string.isRequired
}

export default Header
