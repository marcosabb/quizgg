import React, { memo } from 'react'
import t from 'prop-types'
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
  Link,
  Marks,
  Mark
} from './styles'

const Footer = memo(({ url, year }) => (
  <Container>
    <Wrapper>
      <Content>
        <Copyright>{copyright(url.replace('https://', ''), year)}</Copyright>

        <Marks>
          {trademarks.map(item => (
            <Mark key={v4}>{item}</Mark>
          ))}
        </Marks>

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
  url: t.string.isRequired,
  year: t.number.isRequired
}

export default Footer
