import React, { memo, useState, useRef, useEffect } from 'react'
import t from 'prop-types'
import { Link } from 'gatsby'

import { Container, Wrapper, Title } from './styles'

const Header = memo(({ title }) => {
  const [fixed, setFixed] = useState(false)
  const containerRef = useRef(null)

  function handleScroll () {
    // const sticky = containerRef.current.offsetTop

    if (window.pageYOffset > 200) {
      setFixed(true)
    } else {
      setFixed(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', () => handleScroll)
    }
  }, [])

  return (
    <Container ref={containerRef} fixed={fixed}>
      <Wrapper>
        <Title>
          <Link to='/'>{title}</Link>
        </Title>
      </Wrapper>
    </Container>
  )
})

Header.propTypes = {
  title: t.string.isRequired
}

export default Header
