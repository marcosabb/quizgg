import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Card from '../../components/Card'

import { Container, Featured, Content } from './styles'

const Cards = () => {
  const {
    allQuizzesYaml: {
      edges: quizzes
    }
  } = useStaticQuery(
    graphql`
      query {
        allQuizzesYaml {
          edges {
            node {
              title
              game
              featured
              fields {
                slug
              }
              image {
                src {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )

  const featured = quizzes.filter(q => q.node.featured)
  const normal = quizzes.filter(q => !q.node.featured)

  function renderCards (items, size) {
    return items.map((
      {
        node: {
          id,
          title,
          game,
          fields: { slug },
          image: {
            src: {
              childImageSharp: {
                fluid
              }
            }
          }
        }
      }
    ) => (
      <Card
        key={id}
        image={fluid}
        title={title}
        slug={slug}
        game={game}
        size={size}
      />
    ))
  }

  return (
    <Container>
      <Featured>
        {renderCards(featured)}
      </Featured>
      <Content>
        {renderCards(normal, 'small')}
      </Content>
    </Container>
  )
}

export default Cards
