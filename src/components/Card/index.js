import React from 'react'
import t from 'prop-types'
import { Link } from 'gatsby'

import { Container, Image, Content, Title, Badge } from './styles'

const Card = ({ image, title, slug, badge, featured }) => {
  return (
    <Link to={slug}>
      <Container featured={featured}>
        <Image fluid={image} />

        <Content>
          <Title>{title}</Title>
          <Badge>{badge}</Badge>
        </Content>
      </Container>
    </Link>
  )
}

Card.defaultProps = {
  featured: ''
}

Card.propTypes = {
  image: t.object,
  title: t.string.isRequired,
  slug: t.string.isRequired,
  badge: t.string.isRequired,
  featured: t.string
}

export default Card
