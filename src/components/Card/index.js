import React from 'react'
import t from 'prop-types'
import { Link } from 'gatsby'

import { color } from '../../styles/variables'

import { Container, Image, Wrapper, Content, Title, Game } from './styles'

const Card = ({ image, title, slug, game, featured }) => (
  <Container featured={featured}>
    <Image
      Tag='div'
      fluid={image}
      className='background'
      backgroundColor={color.blue}
    />

    <Wrapper>
      <Link to={slug}>
        <Game>{game}</Game>

        <Content>
          <Title>{title}</Title>
        </Content>
      </Link>
    </Wrapper>
  </Container>
)

Card.propTypes = {
  image: t.object.isRequired,
  title: t.string.isRequired,
  slug: t.string.isRequired,
  game: t.string.isRequired,
  featured: t.bool
}

export default Card
