import React from 'react'
import t from 'prop-types'
import Img from 'gatsby-image'
import v4 from 'uuid/v4'

import {
  Container,
  Counter,
  Image,
  Title,
  Options,
  Option
} from './styles'

const Question = ({
  question,
  counterQuestion,
  totalQuestions,
  answeredQuestion,
  handleCheck,
  handleState
}) => (
  <Container>
    <Counter>{counterQuestion}/{totalQuestions}</Counter>
    {question.image && (
      <Image>
        <Img fluid={question.image.src.childImageSharp.fluid} />
      </Image>
    )}
    {!question.image && <Title>{question.title}</Title>}
    <Options>
      {question.options && question.options.map((option) => (
        <Option
          key={v4()}
          state={handleState(option)}
          onClick={
            !answeredQuestion
              ? () => { handleCheck(question, option) }
              : () => {}
          }
        >
          {option.text}
        </Option>
      ))}
    </Options>
  </Container>
)

Question.propTypes = {
  question: t.shape({
    title: t.string,
    image: t.object,
    options: t.arrayOf(t.shape({
      id: t.string,
      key: t.string,
      text: t.string,
      correct: t.oneOfType([t.bool, t.string])
    }))
  }).isRequired,
  counterQuestion: t.number.isRequired,
  totalQuestions: t.number.isRequired,
  answeredQuestion: t.bool.isRequired,
  handleCheck: t.func.isRequired,
  handleState: t.func.isRequired
}

export default Question
