import React from 'react'
import t from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Header from '../Header'

import Global from '../../styles/global'
import { Container, Wrapper } from './styles'

const Layout = ({ children }) => {
  const { site: { siteMetadata: { title } } } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <Container>
      <Global />
      <Header title={title} />
      <Wrapper>
        {children}
      </Wrapper>
    </Container>
  )
}

Layout.propTypes = {
  children: t.node.isRequired
}

export default Layout
