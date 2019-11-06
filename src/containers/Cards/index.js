import React from 'react'

import Card from '../../components/Card'

import { Container, Featured, Content } from './styles'

const Cards = () => {
  return (
    <Container>
      <Featured>
        <Content>
          <Card featured='left' />
        </Content>

        <Content>
          <Card featured='right' />
          <Card featured='right' />
        </Content>
      </Featured>
    </Container>
  )
}

export default Cards
