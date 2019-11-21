import React, { memo } from 'react'
import t from 'prop-types'
import { Link } from 'gatsby'
import { v4 } from 'uuid'

import { copyright, menu, trademarks } from './content'

import {
  Container,
  Wrapper,
  Content,
  Copyright,
  Nav,
  List,
  Item,
  Marks,
  Mark
} from './styles'

const Footer = memo(({ title, year }) => (
  <Container>
    <Wrapper>
      <Content>
        <Copyright>{copyright(title, year)}</Copyright>

        <Marks>
          {trademarks.map(item => (
            <Mark key={v4()}>{item}</Mark>
          ))}
        </Marks>

        <Nav>
          <List>
            {menu.map(({ to, label, normal }) => normal ? (
              <Item key={v4()}>
                <a href={to}>{label}</a>
              </Item>
            ) : (
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
