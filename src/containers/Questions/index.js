import React, { useState } from 'react'
import t from 'prop-types'

import Question from '../../components/Question'

import { Container } from './styles'

const Questions = ({ type, questions: q }) => {
  const [questions, setQuestions] = useState(q)
  const [currentQuestion, setCurrentQuestion] = useState(0)

  function check (question, option) {
    const correctOption = question.options.find(q => q.correct)
    const isRight = correctOption.key === option.key
    const isWrong = !isRight

    if (isRight) {
      const rightQuestion = {
        ...question,
        options: question.options.map(
          o => o.key === correctOption.key
            ? { ...o, right: true }
            : o
        )
      }

      setQuestions(questions.map(q =>
        q.id === rightQuestion.id
          ? rightQuestion
          : q
      ))
    }

    if (isWrong) {
      const wrongQuestion = {
        ...question,
        options: question.options.map(o => {
          if (o.key === correctOption.key) {
            return { ...o, right: true }
          }

          if (o.key === option.key) {
            return { ...o, wrong: true }
          }

          return o
        })

      }

      setQuestions(questions.map(q =>
        q.id === wrongQuestion.id
          ? wrongQuestion
          : q
      ))
    }
  }

  function select (question, option) {
    const selectedQuestion = {
      ...question,
      options: question.options.map(
        o => o.key === option.key
          ? { ...o, right: true }
          : o
      )
    }

    setQuestions(questions.map(q =>
      q.id === question.id
        ? selectedQuestion
        : q
    ))
  }

  function updateQuestions (question, option) {
    console.log(type)
    if (type === 'quiz') {
      check(question, option)
    }

    if (type === 'test') {
      select(question, option)
    }
  }

  function handleCheck (question, option) {
    if (!(questions.length === currentQuestion + 1)) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1)
      }, 1000)
    }

    updateQuestions(question, option)
  }

  function handleState (option) {
    if (option.right) return 'right'
    if (option.wrong) return 'wrong'
  }

  return (
    <Container>
      <Question
        question={questions[currentQuestion]}
        counterQuestion={currentQuestion + 1}
        totalQuestions={questions.length}
        handleCheck={handleCheck}
        handleState={handleState}
      />
    </Container>
  )
}

Questions.propTypes = {
  type: t.string.isRequired,
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