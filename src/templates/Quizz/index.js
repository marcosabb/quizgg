import React from 'react'
import t from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../../components/Layout'
import Questions from '../../containers/Questions'

const Quizz = ({ data: { quizzesJson: { title, questions } } }) => {
  return (
    <Layout>
      <Questions questions={questions} />
    </Layout>
  )
}

Quizz.propTypes = {
  data: t.shape({
    quizzesJson: t.shape({
      title: t.string,
      questions: t.array
    })
  }).isRequired
}

export default Quizz

export const quizzQuery = graphql`
  query($slug: String!) {
    quizzesJson(fields: { slug: { eq: $slug } }) {
      title
      questions {
        id
        title
        options {
          id
          key
          text
          correct
        }
      }
    }
  }
`
