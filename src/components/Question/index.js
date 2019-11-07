import React from 'react'
import t from 'prop-types'

import { Container, Counter, Title, Options, Option, Key } from './styles'

const Question = ({
  question,
  counterQuestion,
  totalQuestions,
  handleCheck,
  handleState
}) => (
  <Container>
    <Counter>{counterQuestion}/{totalQuestions}</Counter>
    <Title>{question.title}</Title>
    <Options>
      {question.options && question.options.map((option) => (
        <Option
          key={option.id}
          state={handleState(option)}
          onClick={() => handleCheck(question, option)}
        >
          <Key>{option.key}</Key>
          {option.text}
        </Option>
      ))}
    </Options>
  </Container>
)

Question.propTypes = {
  question: t.shape({
    title: t.string,
    options: t.arrayOf(t.shape({
      id: t.string,
      key: t.string,
      text: t.string,
      correct: t.oneOfType([t.bool, t.string])
    }))
  }).isRequired,
  counterQuestion: t.number.isRequired,
  totalQuestions: t.number.isRequired,
  handleCheck: t.func.isRequired,
  handleState: t.func.isRequired
}

export default Question
