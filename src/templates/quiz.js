import React from 'react'
import t from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Questions from '../containers/Questions'

const Quiz = ({ data: { quizzesYaml: { type, questions } } }) => {
  return (
    <Layout>
      <Questions type={type} questions={questions} />
    </Layout>
  )
}

Quiz.propTypes = {
  data: t.shape({
    quizzesYaml: t.shape({
      type: t.string.isRequired,
      questions: t.array
    })
  }).isRequired
}

export default Quiz

export const quizzQuery = graphql`
  query($slug: String!) {
    quizzesYaml(fields: { slug: { eq: $slug } }) {
      type
      title
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
    }
  }
`
