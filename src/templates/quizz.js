import React from 'react'
import t from 'prop-types'
import { graphql } from 'gatsby'

// import { Container } from './styles';

const Quizz = ({ data: { quizzesJson: quizz } }) => {
  console.log(quizz)

  return (
    <div>
      <h1>{quizz.title}</h1>
    </div>
  )
}

Quizz.propTypes = {
  data: t.shape({
    quizzesJson: t.shape({
      id: t.string,
      title: t.string,
      badge: t.string
    })
  }).isRequired
}

export default Quizz

export const quizzQuery = graphql`
  query($slug: String!) {
    quizzesJson(fields: { slug: { eq: $slug } }) {
      id
      title
    }
  }
`
