import React, { memo } from 'react'
import t from 'prop-types'
import { Link } from 'gatsby'

import { Container, Wrapper, Title } from './styles'

const Header = memo(({ title }) => (
  <Container>
    <Wrapper>
      <Title>
        <Link to='/'>{title}</Link>
      </Title>
    </Wrapper>
  </Container>
))

Header.propTypes = {
  title: t.string.isRequired
}

export default Header
