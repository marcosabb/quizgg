import React from 'react'
import t from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import { Container, Image, Content, Title, Badge } from './styles'

const Card = ({ featured }) => {
  const { file: { childImageSharp: { fixed } } } = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "test.jpg" }) {
          childImageSharp {
            fixed(width: 600, height: 600) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  console.log(fixed)

  return (
    <Container featured={featured}>
      <Image fixed={fixed} objectFit='cover' objectPosition='50% 50%' />

      <Content>
        <Title>Lorem ipsum dolor sit amet.</Title>
        <Badge>Teste</Badge>
      </Content>
    </Container>
  )
}

Card.defaultProps = {
  featured: ''
}

Card.propTypes = {
  featured: t.string
}

export default Card
