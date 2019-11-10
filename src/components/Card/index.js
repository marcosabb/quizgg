import React from 'react'
import t from 'prop-types'
import { Link } from 'gatsby'

import { Container, Image, Wrapper, Content, Title, Game } from './styles'

const Card = ({ image, title, slug, game, size }) => {
  console.log('Card', image)
  return (
    <Container size={size}>
      <Image
        Tag='div'
        fluid={image}
        className='background'
        backgroundColor='#040e18'
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
}

Card.propTypes = {
  image: t.object.isRequired,
  title: t.string.isRequired,
  slug: t.string.isRequired,
  game: t.string.isRequired,
  size: t.string
}

export default Card
