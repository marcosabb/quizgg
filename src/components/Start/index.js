import React, { memo } from 'react'
import t from 'prop-types'
import Img from 'gatsby-image'

import Button from '../../components/Button'

import { Container, Title, Image } from './styles'

const Start = memo(({
  type,
  title,
  image,
  handleStart
}) => {
  // const [name, setName] = useState('')

  // function handleChange (event) {
  //   const { target: { value } } = event

  //   setName(value)
  // }

  // function handleSubmit (event) {
  //   event.preventDefault()

  //   handleStart()

  // if (type === 'personalidade') {
  //   localStorage.setItem('user', name)
  // }
  // }

  function handleClick () {
    handleStart()
  }

  return (
    <Container>
      <Title>{title}</Title>
      <Image>
        <Img fluid={image.src.childImageSharp.fluid} />
      </Image>

      {/* <form onSubmit={handleSubmit}>
        {type === 'personalidade' && (
          <InputWrapper>
            <Label>Seu nome:</Label>
            <Input value={name} onChange={handleChange} />
          </InputWrapper>
        )} */}

      <Button
        // disabled={type === 'personalidade' && !name}
        onClick={handleClick}
        fluid
      >
        Iniciar
      </Button>
      {/* </form> */}
    </Container>
  )
})

Start.propTypes = {
  type: t.string.isRequired,
  title: t.string.isRequired,
  image: t.shape().isRequired,
  handleStart: t.func.isRequired
}

export default Start
