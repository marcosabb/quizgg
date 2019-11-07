import React from 'react'
import t from 'prop-types'

import { Container, Counter, Title, Options, Option, Key } from './styles'

const Question = ({ title, options }) => (
  <Container>
    <Counter>1/10</Counter>
    <Title>{title}</Title>
    <Options>
      {options && options.map((option) => (
        <Option
          key={option.id}
          state=''
          onClick={() => {}}
        >
          <Key>{option.key}</Key>
          {option.text}
        </Option>
      ))}
    </Options>
  </Container>
)

Question.propTypes = {
  title: t.string.isRequired,
  options: t.arrayOf(t.shape({
    id: t.string,
    key: t.string,
    text: t.string,
    correct: t.oneOfType([t.bool, t.string])
  })).isRequired
}

export default Question
