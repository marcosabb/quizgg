import React, { memo } from 'react'
import t from 'prop-types'
import { Link } from 'gatsby'

import { Container, Wrapper, Title, Button } from './styles'

const Header = memo(({ title, isHome }) => (
  <Container>
    <Wrapper>
      <Title>
        <Link to='/'>{title}</Link>
      </Title>

      <Button to='/'>Quizzes</Button>
    </Wrapper>
  </Container>
))

Header.propTypes = {
  title: t.string.isRequired,
  isHome: t.bool.isRequired
}

export default Header
