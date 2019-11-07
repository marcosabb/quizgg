import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Card from '../../components/Card'

import { Container, Featured } from './styles'

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

  console.log(quizzes)

  return (
    <Container>
      <Featured>
        {quizzes.map((
          {
            node: {
              id,
              title,
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
            featured='right'
          />
        ))}
      </Featured>
    </Container>
  )
}

export default Cards
