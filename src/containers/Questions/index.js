import React from 'react'
import t from 'prop-types'

import Question from '../../components/Question'

import { Container } from './styles'

const Questions = ({ questions }) => {
  console.log(questions)

  return (
    <Container>
      {questions.map(question => (
        <Question key={question.id} {...question} />
      ))}
    </Container>
  )
}

Questions.propTypes = {
  questions: t.arrayOf(t.shape({
    id: t.string,
    title: t.string,
    options: t.arrayOf(t.shape({
      id: t.string,
      key: t.string,
      text: t.string,
      correct: t.oneOfType([t.bool, t.string])
    }))
  })).isRequired
}

export default Questions
