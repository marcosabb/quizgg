import React from 'react'
import t from 'prop-types'
import { graphql } from 'gatsby'

import { shuffle } from '../utils'

import Layout from '../components/Layout'
import Questions from '../containers/Questions'

const Document = ({
  data: { documentsYaml: { type, image, questions, result } }
  // location: { href }
}) => (
  <Layout>
    <Questions
      type={type}
      image={image}
      questions={shuffle(questions)}
      result={result}
      url='https://mystifying-engelbart-a15508.netlify.com/qual-pro-player-de-fortnite-voce-seria/'
    />
  </Layout>
)

Document.propTypes = {
  data: t.shape({
    documentsYaml: t.shape({
      type: t.string,
      image: t.object,
      questions: t.array,
      result: t.object
    })
  }).isRequired,
  location: t.shape({
    href: t.string
  }).isRequired
}

export default Document

export const documentQuery = graphql`
  query($slug: String!) {
    documentsYaml(fields: { slug: { eq: $slug } }) {
      type
      title
      image {
        name
        src {
          childImageSharp {
            fluid(maxWidth: 250) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      questions {
        id
        title
        image {
          name
          src {
            childImageSharp {
              fluid(maxWidth: 250) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        options {
          key
          text
          correct
        }
      }
      result {
        statement
        items {
          title
          image {
            name
            src {
              childImageSharp {
                fluid(maxWidth: 250) {
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
