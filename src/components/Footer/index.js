import React, { memo } from 'react'
import t from 'prop-types'

import {
  Container,
  Wrapper,
  Content,
  Copyright,
  Nav,
  List,
  Item,
  Link
} from './styles'

const Footer = memo(({ title, year }) => (
  <Container>
    <Wrapper>
      <Content>
        <Copyright>Copyright &copy; {year} {title}</Copyright>
        <Nav>
          <List>
            <Item>
              <Link to='/'>Política de privacidade</Link>
            </Item>

            <Item>
              <Link to='/'>Contato</Link>
            </Item>
          </List>
        </Nav>
      </Content>
    </Wrapper>
  </Container>
))

Footer.propTypes = {
  title: t.string.isRequired,
  year: t.number.isRequired
}

export default Footer
