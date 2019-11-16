import React, { memo } from 'react'
import t from 'prop-types'
import Link from 'gatsby-link'

import { color } from '../../styles/variables'

import {
  Container,
  Image,
  Wrapper,
  Content,
  Title,
  Badges,
  Badge
} from './styles'

const Card = memo(({ image, title, slug, type, game, featured }) => (
  <Container featured={featured}>
    <Image
      Tag='div'
      fluid={image}
      className='background'
      backgroundColor={color.blue}
    />

    <Link
      to={slug}
    >
      <Wrapper>
        <Badges>
          <Badge>{type}</Badge>
          <Badge>{game}</Badge>
        </Badges>

        <Content>
          <Title>{title}</Title>
        </Content>
      </Wrapper>
    </Link>
  </Container>
))

Card.propTypes = {
  image: t.object.isRequired,
  title: t.string.isRequired,
  slug: t.string.isRequired,
  type: t.string.isRequired,
  game: t.string.isRequired,
  featured: t.bool
}

export default Card
