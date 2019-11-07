import React from 'react'
import t from 'prop-types'
import { Link } from 'gatsby'

import { Container, Image, Content, Title } from './styles'

const Card = ({ image, title, slug, featured }) => {
  return (
    <Container featured={featured}>
      <Image
        Tag='div'
        fluid={image}
        backgroundColor='#040e18'
      >
        <Link to={slug}>
          <Content>
            <Title>{title}</Title>
          </Content>
        </Link>
      </Image>
    </Container>
  )
}

Card.defaultProps = {
  featured: ''
}

Card.propTypes = {
  image: t.object.isRequired,
  title: t.string.isRequired,
  slug: t.string.isRequired,
  featured: t.string
}

export default Card
