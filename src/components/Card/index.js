import React from 'react'
import t from 'prop-types'
import { Link } from 'gatsby'

import { Container, Image, Content, Title, Game } from './styles'

const Card = ({ image, title, slug, game, size }) => {
  return (
    <Container size={size}>
      <Image
        Tag='div'
        fluid={image}
        backgroundColor='#040e18'
      >
        <Link to={slug}>
          <Game>{game}</Game>

          <Content>
            <Title>{title}</Title>
          </Content>
        </Link>
      </Image>
    </Container>
  )
}

Card.propTypes = {
  image: t.object.isRequired,
  title: t.string.isRequired,
  slug: t.string.isRequired,
  game: t.string.isRequired,
  size: t.string
}

export default Card
