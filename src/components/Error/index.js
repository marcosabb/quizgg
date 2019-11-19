import React from 'react'
import { Link } from 'gatsby'

import { Container, Wrapper, Message } from './styles'

const Error = () => (
  <Container>
    <Wrapper>
      <Message>
        Ops! Essa página não foi encontrada, deseja voltar para a <Link to='/'>página inicial</Link>?
      </Message>
    </Wrapper>
  </Container>
)

export default Error
