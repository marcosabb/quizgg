import React, { memo } from 'react'
import t from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Header from '../Header'
import Footer from '../Footer'

import Global from '../../styles/global'
import { Container, Wrapper } from './styles'

const Layout = memo(({ children }) => {
  const { site: { siteMetadata: { title, url, year } } } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            url
            year
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
      <Footer url={url} year={year} />
    </Container>
  )
})

Layout.propTypes = {
  children: t.node.isRequired
}

export default Layout
