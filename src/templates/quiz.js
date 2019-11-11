import React from 'react'
import t from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Questions from '../containers/Questions'

const Quiz = ({
  data: { quizzesYaml: { type, image, questions, result } }
}) => (
  <Layout>
    <Questions
      type={type}
      image={image}
      questions={questions}
      result={result}
    />
  </Layout>
)

Quiz.propTypes = {
  data: t.shape({
    quizzesYaml: t.shape({
      type: t.string,
      image: t.object,
      questions: t.array,
      result: t.object
    })
  }).isRequired
}

export default Quiz

export const quizzQuery = graphql`
  query($slug: String!) {
    quizzesYaml(fields: { slug: { eq: $slug } }) {
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
