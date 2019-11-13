import React, { useEffect } from 'react'
import t from 'prop-types'
import { graphql, navigate } from 'gatsby'

import Seo from '../components/Seo'

const Result = ({
  data: { documentsYaml: { title, image: { src: { publicURL } }, result: { pre, items } } },
  pageContext: { type, r, slug }
}) => {
  useEffect(() => {
    navigate(slug)
  }, [])

  const og = {
    title: () => {
      if (type === 'quiz') {
        return `${pre} ${r} pergunta${r > 1 || r <= 0 ? 's' : ''}! ${title}`
      }

      if (type === 'test') {
        const item = items.find(item => item.id === r)
        return `${pre} ${item.title}! ${title}`
      }
    },
    image: publicURL
  }

  return (
    <Seo
      meta={[
        { property: 'og:title', content: og.title() },
        { property: 'og:image', content: og.image }
      ]}
    />
  )
}

Result.propTypes = {
  data: t.shape({
    documentsYaml: t.shape({
      title: t.string,
      image: t.shape({
        src: t.shape({
          publicURL: t.string
        })
      }),
      result: t.shape({
        pre: t.string,
        items: t.array
      })
    })
  }).isRequired,
  pageContext: t.shape({
    type: t.string,
    r: t.oneOfType([t.string, t.number]),
    slug: t.string
  }).isRequired
}

export default Result

export const resultQuery = graphql`
  query($slug: String!) {
    documentsYaml(fields: { slug: { eq: $slug } }) {
      title
      image {
        name 
        src {
          publicURL
        }
      }
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
