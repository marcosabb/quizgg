import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import v4 from 'uuid/v4'

import Card from '../../components/Card'

import { Container, Featured, Content } from './styles'

const Cards = () => {
  const {
    allDocumentsYaml: {
      edges: documents
    }
  } = useStaticQuery(
    graphql`
      query {
        allDocumentsYaml {
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

  const featured = documents.filter(q => q.node.featured)
  const normal = documents.filter(q => !q.node.featured)

  function renderCards (items, size) {
    return items.map((
      {
        node: {
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
        key={v4()}
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
