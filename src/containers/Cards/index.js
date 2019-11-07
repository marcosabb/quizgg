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
              badge
              fields {
                slug
              }
              image {
                name
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

  console.log(quizzes)

  return (
    <Container>
      <Featured>
        {/* <Content>
          <Card featured='left' />
        </Content>

        <Content>
          <Card featured='right' />
          <Card featured='right' />
        </Content> */}

        {quizzes.map((
          {
            node: {
              id,
              title,
              badge,
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
          <Content key={id}>
            <Card image={fluid} title={title} slug={slug} badge={badge} featured='right' />
          </Content>
        ))}
      </Featured>
    </Container>
  )
}

export default Cards
