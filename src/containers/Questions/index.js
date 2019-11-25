import React, { memo, useState } from 'react'
import t from 'prop-types'
import { debounce } from 'lodash'

import Start from '../../components/Start'
import Question from '../../components/Question'
import Result from '../../components/Result'

import { Container, Wrapper } from './styles'

const Questions = memo(({ type, image, title, questions: q, result, url }) => {
  const [questions, setQuestions] = useState(q)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answeredQuestion, setAnsweredQuestion] = useState(false)
  const [score, setScore] = useState(0)
  const [start, setStart] = useState(false)
  const [finish, setFinish] = useState(false)
  // const [responses, setResponses] = useState([])

  // useEffect(() => {
  //   const fetchResponses = async () => {
  //     const response = await fetch('http://localhost:3000/responses')
  //     const data = await response.json()

  //     setResponses(data)
  //     console.log(responses)
  //   }

  //   fetchResponses()
  // }, [])

  // async function handleCreate () {
  //   const response = await fetch('http://localhost:3000/responses', {
  //     method: 'post',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       name: 'Joaquim',
  //       score: Math.floor(Math.random() * 10)
  //     })
  //   })
  //   const data = await response.json()
  //   setResponses([...responses, data])
  //   console.log(data)
  // }

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
    if (type === 'quiz' || type === 'personalidade') {
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
    setFinish(true)
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

  function handleStart () {
    setStart(true)
  }

  function generateResult () {
    const item = type === 'teste'
      ? result.items[Math.floor(Math.random() * result.items.length)]
      : result.items.find(item => item.title === String(score))

    console.log(item)

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
      <Wrapper>
        {!start && (
          <Start
            type={type}
            title={title}
            image={image}
            handleStart={handleStart}
          />
        )}
        {finish && <Result result={generateResult()} url={url} />}
        {!finish && start && renderQuestions()}
        {/* {responses.map((response) => (
          <div key={response.id}>
            <span>{response.name}</span>
            <span>{response.score}</span>
          </div>
        ))}
        <button onClick={handleCreate}>add</button> */}
      </Wrapper>
    </Container>
  )
})

Questions.propTypes = {
  type: t.string.isRequired,
  image: t.object.isRequired,
  title: t.string.isRequired,
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
      tags: t.arrayOf(t.string)
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
