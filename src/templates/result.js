import React from 'react'
import t from 'prop-types'
import { graphql } from 'gatsby'

import Seo from '../components/Seo'

const Result = ({
  data: { documentsYaml: { title, result: { pre, items } } },
  pageContext: { type, r }
}) => {
  if (type === 'quiz') {
    const ogTitle = `${pre} ${r} perguntas! ${title}`

    return (
      <Seo
        title={ogTitle}
        meta={[
          { property: 'og:title', content: ogTitle }
        ]}
      />
    )
  }

  if (type === 'test') {
    console.log(r)
    console.log(items.find(item => item.id === r))
    const item = items.find(item => item.id === r)
    // Eu seria ${title}! Qual pro player de Fortnite você seria?
    // Eu acertei ${title} perguntas! Você realmente conhece as skins de Fortnite?
    const ogTitle = `${pre} ${item.title}! ${title}`

    console.log(ogTitle)

    return (
      <Seo
        title={ogTitle}
        meta={[
          { property: 'og:title', content: ogTitle }
        ]}
      />
    )
  }
}

Result.propTypes = {
  data: t.shape({
    documentsYaml: t.shape({
      title: t.string,
      result: t.shape({
        pre: t.string,
        items: t.array
      })
    })
  }).isRequired,
  pageContext: t.shape({
    type: t.string,
    r: t.oneOfType([t.string, t.number])
  }).isRequired
}

export default Result

export const resultQuery = graphql`
  query($slug: String!) {
    documentsYaml(fields: { slug: { eq: $slug } }) {
      title
      result {
        pre
        items {
          id
          title
        }
      }
    }
  }
`
