import React, { memo, useState } from 'react'
import t from 'prop-types'
import { debounce } from 'lodash'

import Question from '../../components/Question'
import Result from '../../components/Result'

import { Container } from './styles'

const Questions = memo(({ type, image, questions: q, result, url }) => {
  const [questions, setQuestions] = useState(q)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answeredQuestion, setAnsweredQuestion] = useState(false)
  const [score, setScore] = useState(0)
  const [showFinish, setShowFinish] = useState(false)

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

      setScore(score + 1)

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
          ? { ...o, select: true }
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
    if (type === 'quiz') {
      check(question, option)
    }

    if (type === 'teste') {
      select(question, option)
    }
  }

  const goToNextQuestion = debounce(() => {
    setAnsweredQuestion(false)
    setCurrentQuestion(currentQuestion + 1)
  }, 1000)

  const goToResult = debounce(() => {
    setShowFinish(true)
  }, 1000)

  function handleCheck (question, option) {
    if (!(questions.length === currentQuestion + 1)) {
      goToNextQuestion()
    } else {
      goToResult()
    }

    setAnsweredQuestion(true)
    updateQuestions(question, option)
  }

  function handleState (option) {
    if (option.right) return 'right'
    if (option.wrong) return 'wrong'
    if (option.select) return 'select'
  }

  function generateResult () {
    const item = type === 'teste'
      ? result.items[Math.floor(Math.random() * result.items.length)]
      : result.items.find(item => item.title === String(score))

    const title = type === 'teste'
      ? item.title
      : `${score} pergunta${(score <= 0 || score > 1) ? 's' : ''}!`

    return {
      statement: {
        final: result.statement.final,
        share: result.statement.share
      },
      title,
      id: item.id,
      image: type === 'teste' ? item.image : image,
      quote: type === 'teste' && item.quote,
      tags: result.statement.tags
    }
  }

  function renderQuestions () {
    return questions.map((question, index) => {
      const isVisible = currentQuestion + 1 === index + 1

      return (
        isVisible && (
          <Question
            key={question.id}
            question={question}
            counterQuestion={index + 1}
            totalQuestions={questions.length}
            answeredQuestion={answeredQuestion}
            handleCheck={handleCheck}
            handleState={handleState}
            inline={question.options.length >= 5 || question.options.length <= 3}
          />
        )
      )
    })
  }

  return (
    <Container>
      {showFinish && <Result result={generateResult()} url={url} />}
      {!showFinish && renderQuestions()}
    </Container>
  )
})

Questions.propTypes = {
  type: t.string.isRequired,
  image: t.object.isRequired,
  questions: t.arrayOf(t.shape({
    id: t.string,
    title: t.string,
    options: t.arrayOf(t.shape({
      id: t.string,
      key: t.string,
      text: t.string,
      correct: t.oneOfType([t.bool, t.string])
    }))
  })).isRequired,
  result: t.shape({
    statement: t.shape({
      final: t.string,
      share: t.string,
      tags: t.shape(t.string)
    }),
    items: t.arrayOf(t.shape({
      id: t.string,
      title: t.string,
      image: t.object,
      quote: t.string
    }))
  }).isRequired,
  url: t.string.isRequired
}

export default Questions
