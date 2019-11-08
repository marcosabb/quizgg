import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Card from '../../components/Card'

import { Container, Featured, Content } from './styles'

const Cards = () => {
  const {
    allQuizzesJson: {
      edges: quizzes
    }
  } = useStaticQuery(
    graphql`
      query {
        allQuizzesJson {
          edges {
            node {
              id
              title
              game
              featured
              fields {
                slug
              }
              image {
                name
                src {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid_withWebp
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
  const all = quizzes.filter(q => !q.node.featured)

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
        {renderCards(all, 'small')}
      </Content>
    </Container>
  )
}

export default Cards
