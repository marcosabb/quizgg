import React, { memo } from 'react'
import t from 'prop-types'
import { v4 } from 'uuid'

import { copyright, menu } from './content'

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
        <Copyright>{copyright(title, year)}</Copyright>
        <Nav>
          <List>
            {menu.map(({ to, label }) => (
              <Item key={v4()}>
                <Link to={to}>{label}</Link>
              </Item>
            ))}
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
